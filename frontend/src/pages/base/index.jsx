import React, { useRef, useState, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { useTreeContext } from '../../context/TreeContext';
import { ArrowLeft, TreePine, Plus, Home, Crown, Trash2,Sparkles, Eye, RotateCw} from 'lucide-react';
import TreeSelector from '../../components/TreeSelector';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const EcoGarden3D = () => 
{
  const navigate = useNavigate(); // Initialize the navigate function
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTool, setSelectedTool] = useState('plant');
  const [selectedTreeType, setSelectedTreeType] = useState(null);
  const [placedTrees, setPlacedTrees] = useState([]);
  const [hoveredCell, setHoveredCell] = useState(null);
  const [showTreeSelector, setShowTreeSelector] = useState(false);
  const [cameraMode, setCameraMode] = useState('free');
  const [notifications, setNotifications] = useState([]);

  const { ownedTrees } = useTreeContext();

  const [userStats] = useState({
    ownedAvatars: new Set(ownedTrees),
    ecoPoints: 1247,
    gardenLevel: 3,
    maxTrees: 20
  });

  // Tree avatar data (subset from shop)
  const treeAvatars = [
    {
      id: 1, name: "Baby Sprout", type: "sprout", rarity: "common",
      description: "Your first tiny green companion",
      stats: { growth: 1, efficiency: 1, beauty: 1 }
    },
    {
      id: 2, name: "Mighty Oak", type: "oak", rarity: "common",
      description: "Majestic oak with broad canopy",
      stats: { growth: 2, efficiency: 3, beauty: 2 }
    },
    {
      id: 3, name: "Cherry Blossom", type: "cherry", rarity: "rare",
      description: "Delicate pink flowers bloom in spring",
      stats: { growth: 2, efficiency: 2, beauty: 4 }
    },
    {
      id: 4, name: "Weeping Willow", type: "willow", rarity: "rare",
      description: "Graceful drooping branches",
      stats: { growth: 3, efficiency: 3, beauty: 3 }
    },
    {
      id: 5, name: "Autumn Maple", type: "maple", rarity: "rare",
      description: "Fiery red and orange leaves",
      stats: { growth: 3, efficiency: 2, beauty: 4 }
    },
    {
      id: 6, name: "Golden Pine", type: "pine", rarity: "epic",
      description: "Tall evergreen with golden needles",
      stats: { growth: 4, efficiency: 4, beauty: 3 }
    },
    {
      id: 7, name: "Rainbow Eucalyptus", type: "eucalyptus", rarity: "epic",
      description: "Mystical bark with rainbow colors",
      stats: { growth: 4, efficiency: 3, beauty: 5 }
    },
    {
      id: 8, name: "Crystal Bonsai", type: "crystal", rarity: "legendary",
      description: "Miniature crystalline tree with glowing gems",
      stats: { growth: 5, efficiency: 5, beauty: 5 }
    },
    {
      id: 9, name: "Phoenix Palm", type: "phoenix", rarity: "legendary",
      description: "Legendary palm with fiery golden fronds",
      stats: { growth: 5, efficiency: 4, beauty: 5 }
    }
  ];

  const rarityColors = {
    common: 'border-gray-300 bg-gray-50',
    rare: 'border-blue-300 bg-blue-50',
    epic: 'border-purple-300 bg-purple-50',
    legendary: 'border-yellow-300 bg-yellow-50'
  };

  // Grid system
  const GRID_SIZE = 12;
  const CELL_SIZE = 2;

  // Notification system
  const showNotification = (message, type = 'success') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  // Create grass texture
  const createGrassTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    // Base grass color
    ctx.fillStyle = '#4a7c59';
    ctx.fillRect(0, 0, 128, 128);
    
    // Add grass texture
    for (let i = 0; i < 1000; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#5a8c69' : '#3a6c49';
      ctx.fillRect(Math.random() * 128, Math.random() * 128, 2, 2);
    }
    
    return canvas;
  };

  // Create environment decorations
  const createEnvironmentDecorations = (scene) => {
    // Add some rocks
    for (let i = 0; i < 8; i++) {
      const rockGeometry = new THREE.SphereGeometry(0.3 + Math.random() * 0.2, 8, 6);
      const rockMaterial = new THREE.MeshLambertMaterial({ color: 0x666666 });
      const rock = new THREE.Mesh(rockGeometry, rockMaterial);
      rock.position.set(
        (Math.random() - 0.5) * GRID_SIZE * CELL_SIZE * 0.8,
        0.1,
        (Math.random() - 0.5) * GRID_SIZE * CELL_SIZE * 0.8
      );
      rock.scale.y = 0.5;
      rock.castShadow = true;
      scene.add(rock);
    }

    // Add some flowers
    for (let i = 0; i < 15; i++) {
      const flowerGeometry = new THREE.SphereGeometry(0.05, 6, 6);
      const flowerColors = [0xFF69B4, 0xFFD700, 0x9370DB, 0xFF4500];
      const flowerMaterial = new THREE.MeshLambertMaterial({ 
        color: flowerColors[Math.floor(Math.random() * flowerColors.length)] 
      });
      const flower = new THREE.Mesh(flowerGeometry, flowerMaterial);
      flower.position.set(
        (Math.random() - 0.5) * GRID_SIZE * CELL_SIZE * 0.9,
        0.05,
        (Math.random() - 0.5) * GRID_SIZE * CELL_SIZE * 0.9
      );
      scene.add(flower);
    }
  };

  // Create 3D tree based on type
  const createTree = useCallback((type, scale = 1) => {
    const group = new THREE.Group();
    
    switch(type) {
      case 'sprout':
        const stemGeometry = new THREE.CylinderGeometry(0.02 * scale, 0.03 * scale, 0.3 * scale, 6);
        const stemMaterial = new THREE.MeshLambertMaterial({ color: 0x90EE90 });
        const stem = new THREE.Mesh(stemGeometry, stemMaterial);
        stem.position.y = 0.15 * scale;
        group.add(stem);
        
        for (let i = 0; i < 3; i++) {
          const leafGeometry = new THREE.SphereGeometry(0.06 * scale, 6, 6);
          const leafMaterial = new THREE.MeshLambertMaterial({ color: 0x32CD32 });
          const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
          leaf.position.set(
            Math.cos(i * 2.1) * 0.1 * scale,
            0.25 * scale + i * 0.05 * scale,
            Math.sin(i * 2.1) * 0.1 * scale
          );
          group.add(leaf);
        }
        break;

      case 'oak':
        const oakTrunkGeometry = new THREE.CylinderGeometry(0.12 * scale, 0.18 * scale, 1.2 * scale, 8);
        const oakTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
        const oakTrunk = new THREE.Mesh(oakTrunkGeometry, oakTrunkMaterial);
        oakTrunk.position.y = 0.6 * scale;
        group.add(oakTrunk);
        
        const oakCanopyGeometry = new THREE.SphereGeometry(0.6 * scale, 12, 12);
        const oakCanopyMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
        const oakCanopy = new THREE.Mesh(oakCanopyGeometry, oakCanopyMaterial);
        oakCanopy.position.y = 1.4 * scale;
        oakCanopy.scale.set(1.2, 0.8, 1.2);
        group.add(oakCanopy);
        break;

      case 'cherry':
        const cherryTrunkGeometry = new THREE.CylinderGeometry(0.08 * scale, 0.12 * scale, 1.0 * scale, 8);
        const cherryTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
        const cherryTrunk = new THREE.Mesh(cherryTrunkGeometry, cherryTrunkMaterial);
        cherryTrunk.position.y = 0.5 * scale;
        group.add(cherryTrunk);
        
        const blossomColors = [0xFFB6C1, 0xFFC0CB, 0xFF69B4];
        for (let i = 0; i < 8; i++) {
          const blossomGeometry = new THREE.SphereGeometry(0.15 * scale, 8, 8);
          const blossomMaterial = new THREE.MeshLambertMaterial({ 
            color: blossomColors[Math.floor(Math.random() * 3)] 
          });
          const blossom = new THREE.Mesh(blossomGeometry, blossomMaterial);
          const angle = (i / 8) * Math.PI * 2;
          blossom.position.set(
            Math.cos(angle) * (0.3 + Math.random() * 0.2) * scale,
            (1.0 + Math.random() * 0.3) * scale,
            Math.sin(angle) * (0.3 + Math.random() * 0.2) * scale
          );
          group.add(blossom);
        }
        break;

      case 'willow':
        const willowTrunkGeometry = new THREE.CylinderGeometry(0.1 * scale, 0.15 * scale, 1.0 * scale, 8);
        const willowTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B7355 });
        const willowTrunk = new THREE.Mesh(willowTrunkGeometry, willowTrunkMaterial);
        willowTrunk.position.y = 0.5 * scale;
        group.add(willowTrunk);
        
        for (let i = 0; i < 12; i++) {
          const branchGeometry = new THREE.CylinderGeometry(0.01 * scale, 0.02 * scale, 0.8 * scale, 4);
          const branchMaterial = new THREE.MeshLambertMaterial({ color: 0x9ACD32 });
          const branch = new THREE.Mesh(branchGeometry, branchMaterial);
          const angle = (i / 12) * Math.PI * 2;
          branch.position.set(
            Math.cos(angle) * 0.3 * scale,
            0.8 * scale,
            Math.sin(angle) * 0.3 * scale
          );
          branch.rotation.z = Math.PI * 0.3;
          branch.rotation.y = angle;
          group.add(branch);
        }
        break;

      case 'maple':
        const mapleTrunkGeometry = new THREE.CylinderGeometry(0.1 * scale, 0.14 * scale, 1.0 * scale, 8);
        const mapleTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
        const mapleTrunk = new THREE.Mesh(mapleTrunkGeometry, mapleTrunkMaterial);
        mapleTrunk.position.y = 0.5 * scale;
        group.add(mapleTrunk);
        
        const autumnColors = [0xFF4500, 0xFF6347, 0xFF8C00, 0xFFD700, 0xDC143C];
        for (let i = 0; i < 6; i++) {
          const foliageGeometry = new THREE.SphereGeometry(0.2 * scale, 8, 8);
          const foliageMaterial = new THREE.MeshLambertMaterial({ 
            color: autumnColors[Math.floor(Math.random() * 5)] 
          });
          const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
          const angle = (i / 6) * Math.PI * 2;
          foliage.position.set(
            Math.cos(angle) * 0.3 * scale,
            (1.2 + Math.random() * 0.2) * scale,
            Math.sin(angle) * 0.3 * scale
          );
          group.add(foliage);
        }
        break;

      case 'pine':
        const pineTrunkGeometry = new THREE.CylinderGeometry(0.08 * scale, 0.12 * scale, 1.4 * scale, 8);
        const pineTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
        const pineTrunk = new THREE.Mesh(pineTrunkGeometry, pineTrunkMaterial);
        pineTrunk.position.y = 0.7 * scale;
        group.add(pineTrunk);
        
        for (let layer = 0; layer < 5; layer++) {
          const needleGeometry = new THREE.ConeGeometry((0.3 - layer * 0.04) * scale, 0.3 * scale, 8);
          const needleMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
          const needleLayer = new THREE.Mesh(needleGeometry, needleMaterial);
          needleLayer.position.y = (0.8 + layer * 0.2) * scale;
          group.add(needleLayer);
        }
        
        // Golden sparkles for epic pine
        for (let i = 0; i < 10; i++) {
          const sparkleGeometry = new THREE.SphereGeometry(0.015 * scale, 4, 4);
          const sparkleMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
          const sparkle = new THREE.Mesh(sparkleGeometry, sparkleMaterial);
          sparkle.position.set(
            (Math.random() - 0.5) * 1.0 * scale,
            (0.8 + Math.random() * 1.0) * scale,
            (Math.random() - 0.5) * 1.0 * scale
          );
          group.add(sparkle);
        }
        break;

      case 'eucalyptus':
        const eucaTrunkGeometry = new THREE.CylinderGeometry(0.1 * scale, 0.13 * scale, 1.2 * scale, 8);
        const eucaTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0xFF69B4 });
        const eucaTrunk = new THREE.Mesh(eucaTrunkGeometry, eucaTrunkMaterial);
        eucaTrunk.position.y = 0.6 * scale;
        group.add(eucaTrunk);
        
        const rainbowColors = [0xFF0000, 0xFF7F00, 0xFFFF00, 0x00FF00, 0x0000FF, 0x8B00FF];
        for (let i = 0; i < 6; i++) {
          const barkGeometry = new THREE.CylinderGeometry(0.11 * scale, 0.14 * scale, 0.15 * scale, 8);
          const barkMaterial = new THREE.MeshLambertMaterial({ color: rainbowColors[i] });
          const bark = new THREE.Mesh(barkGeometry, barkMaterial);
          bark.position.y = (0.3 + i * 0.15) * scale;
          group.add(bark);
        }
        break;

      case 'crystal':
        const potGeometry = new THREE.CylinderGeometry(0.2 * scale, 0.15 * scale, 0.1 * scale, 8);
        const potMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
        const pot = new THREE.Mesh(potGeometry, potMaterial);
        pot.position.y = 0.05 * scale;
        group.add(pot);
        
        const crystalTrunkGeometry = new THREE.CylinderGeometry(0.03 * scale, 0.05 * scale, 0.3 * scale, 6);
        const crystalTrunkMaterial = new THREE.MeshLambertMaterial({ 
          color: 0x87CEEB,
          transparent: true,
          opacity: 0.8
        });
        const crystalTrunk = new THREE.Mesh(crystalTrunkGeometry, crystalTrunkMaterial);
        crystalTrunk.position.y = 0.25 * scale;
        group.add(crystalTrunk);
        
        const gemColors = [0xFF69B4, 0x00FFFF, 0xFF00FF, 0x00FF00, 0xFFFF00];
        for (let i = 0; i < 8; i++) {
          const gemGeometry = new THREE.OctahedronGeometry(0.04 * scale);
          const gemMaterial = new THREE.MeshLambertMaterial({ 
            color: gemColors[Math.floor(Math.random() * 5)],
            transparent: true,
            opacity: 0.9
          });
          const gem = new THREE.Mesh(gemGeometry, gemMaterial);
          const angle = (i / 8) * Math.PI * 2;
          gem.position.set(
            Math.cos(angle) * 0.15 * scale,
            (0.35 + Math.random() * 0.1) * scale,
            Math.sin(angle) * 0.15 * scale
          );
          group.add(gem);
        }
        break;

      case 'phoenix':
        const phoenixTrunkGeometry = new THREE.CylinderGeometry(0.08 * scale, 0.12 * scale, 1.5 * scale, 8);
        const phoenixTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
        const phoenixTrunk = new THREE.Mesh(phoenixTrunkGeometry, phoenixTrunkMaterial);
        phoenixTrunk.position.y = 0.75 * scale;
        group.add(phoenixTrunk);
        
        for (let i = 0; i < 8; i++) {
          const frondGeometry = new THREE.CylinderGeometry(0.01 * scale, 0.02 * scale, 0.8 * scale, 4);
          const frondMaterial = new THREE.MeshLambertMaterial({ color: 0xFFD700 });
          const frond = new THREE.Mesh(frondGeometry, frondMaterial);
          const angle = (i / 8) * Math.PI * 2;
          frond.position.set(
            Math.cos(angle) * 0.1 * scale,
            1.5 * scale,
            Math.sin(angle) * 0.1 * scale
          );
          frond.rotation.z = Math.cos(angle) * 0.5;
          frond.rotation.x = Math.sin(angle) * 0.5;
          group.add(frond);
        }
        break;

      default:
        const defaultTrunkGeometry = new THREE.CylinderGeometry(0.1 * scale, 0.15 * scale, 1 * scale, 8);
        const defaultTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
        const defaultTrunk = new THREE.Mesh(defaultTrunkGeometry, defaultTrunkMaterial);
        defaultTrunk.position.y = 0.5 * scale;
        group.add(defaultTrunk);
        
        const defaultFoliageGeometry = new THREE.SphereGeometry(0.4 * scale, 10, 10);
        const defaultFoliageMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
        const defaultFoliage = new THREE.Mesh(defaultFoliageGeometry, defaultFoliageMaterial);
        defaultFoliage.position.y = 1.2 * scale;
        group.add(defaultFoliage);
    }

    return group;
  }, []);

  // Add tree to scene function
  const addTreeToScene = (tree) => {
    // Create a simple tree mesh (you can replace this with your tree models)
    const geometry = new THREE.ConeGeometry(0.5, 2, 8);
    const material = new THREE.MeshStandardMaterial({ color: 0x2d5a27 });
    const mesh = new THREE.Mesh(geometry, material);
    
    mesh.position.copy(tree.position);
    sceneRef.current.add(mesh);
  };

  // Plant tree function
  const plantTree = (gridX, gridZ) => {
    if (!selectedTreeType || placedTrees.length >= userStats.maxTrees) {
      showNotification('Garden is full! Upgrade to plant more trees.', 'error');
      return;
    }

    const isOccupied = placedTrees.some(tree => tree.gridX === gridX && tree.gridZ === gridZ);
    if (isOccupied) {
      showNotification('This spot is already occupied!', 'error');
      return;
    }

    const treeData = treeAvatars.find(t => t.id === selectedTreeType);
    if (!treeData) {
      console.error('Invalid tree type selected');
      return;
    }

    const tree = createTree(treeData.type, 0.8);
    tree.position.set(
      (gridX - GRID_SIZE / 2) * CELL_SIZE + CELL_SIZE / 2,
      0,
      (gridZ - GRID_SIZE / 2) * CELL_SIZE + CELL_SIZE / 2
    );
    tree.castShadow = true;
    tree.userData = { isTree: true, treeId: Date.now() };
    sceneRef.current.add(tree);

    const newTree = {
      id: Date.now(),
      treeType: selectedTreeType,
      treeData, // Ensure treeData is assigned here
      gridX,
      gridZ,
      plantedAt: new Date(),
      level: 1,
      mesh: tree
    };

    setPlacedTrees(prev => [...prev, newTree]);
    showNotification(`Planted ${treeData.name}!`, 'success');
  };

  // Remove tree function
  const removeTree = (treeId) => {
    const tree = placedTrees.find(t => t.id === treeId);
    if (tree && tree.mesh) {
      sceneRef.current.remove(tree.mesh);
      setPlacedTrees(prev => prev.filter(t => t.id !== treeId));
      showNotification('Tree removed!', 'success');
    }
  };

  // Initialize 3D scene
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB); // Sky blue
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(10, 15, 10);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(20, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    scene.add(directionalLight);

    // Create terrain
    const groundGeometry = new THREE.PlaneGeometry(GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE);
    const groundTexture = new THREE.CanvasTexture(createGrassTexture());
    groundTexture.wrapS = THREE.RepeatWrapping;
    groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set(8, 8);
    const groundMaterial = new THREE.MeshLambertMaterial({ map: groundTexture });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    ground.name = 'ground'; // Add a name to the ground object
    scene.add(ground);

    // Create grid lines
    const gridHelper = new THREE.GridHelper(GRID_SIZE * CELL_SIZE, GRID_SIZE, 0x888888, 0xaaaaaa);
    gridHelper.position.y = 0.01;
    scene.add(gridHelper);

    // Create decorative elements
    createEnvironmentDecorations(scene);

    // Mouse controls
    let mouseDown = false;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseDown = (event) => {
      mouseDown = true;
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseMove = (event) => {
      if (!mouseDown || cameraMode === 'locked') return;

      const deltaX = event.clientX - mouseX;
      const deltaY = event.clientY - mouseY;

      camera.position.x += deltaX * 0.01;
      camera.position.z += deltaY * 0.01;

      camera.lookAt(0, 0, 0);

      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseUp = () => {
      mouseDown = false;
    };

    const handleWheel = (event) => {
      const zoom = event.deltaY * 0.01;
      camera.position.multiplyScalar(1 + zoom);
      camera.lookAt(0, 0, 0);
    };

    const handleClick = (event) => {
      if (selectedTool === 'plant' && selectedTreeType) {
        const rect = rendererRef.current.domElement.getBoundingClientRect();
        const mouse = new THREE.Vector2();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, cameraRef.current);

        const intersects = raycaster.intersectObject(sceneRef.current.getObjectByName('ground'));
        if (intersects.length > 0) {
          const point = intersects[0].point;
          const gridX = Math.floor((point.x + GRID_SIZE * CELL_SIZE / 2) / CELL_SIZE);
          const gridZ = Math.floor((point.z + GRID_SIZE * CELL_SIZE / 2) / CELL_SIZE);

          if (gridX >= 0 && gridX < GRID_SIZE && gridZ >= 0 && gridZ < GRID_SIZE) {
            plantTree(gridX, gridZ);
          } else {
            console.warn('Click outside of grid bounds');
          }
        } else {
          console.warn('No intersection with ground');
        }
      }
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('wheel', handleWheel);
    renderer.domElement.addEventListener('click', handleClick);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      // Animate trees
      scene.traverse((child) => {
        if (child.userData.isTree) {
          child.rotation.y += 0.005;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    setIsLoaded(true);

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('mouseup', handleMouseUp);
      renderer.domElement.removeEventListener('wheel', handleWheel);
      renderer.domElement.removeEventListener('click', handleClick);
    };

    }, [createTree, selectedTool, selectedTreeType, placedTrees, cameraMode]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (mountRef.current && cameraRef.current && rendererRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get owned tree types for selector
  const ownedTreeAvatars = treeAvatars.filter(tree => userStats.ownedAvatars.has(tree.id));

  const handleTreeSelect = (tree) => {
    setSelectedTreeType(tree);
    setSelectedTool('plant');
  };

  const handlePlantTree = (event) => {
    if (selectedTool !== 'plant' || !selectedTreeType) return;

    // Get mouse position relative to the canvas
    const rect = mountRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Create a raycaster to find the intersection point
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(x, y);
    raycaster.setFromCamera(mouse, cameraRef.current);

    // Find intersection with the ground plane
    const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const intersection = new THREE.Vector3();
    raycaster.ray.intersectPlane(groundPlane, intersection);

    // Add new tree to the scene
    const newTree = {
      id: Date.now(),
      type: selectedTreeType,
      position: intersection
    };

    setPlacedTrees(prev => [...prev, newTree]);
    addTreeToScene(newTree); // You'll need to implement this function
  };

  // Add click event listener to the canvas
  useEffect(() => {
    const canvas = mountRef.current;
    if (!canvas) return;

    canvas.addEventListener('click', handlePlantTree);
    return () => canvas.removeEventListener('click', handlePlantTree);
  }, [selectedTool, selectedTreeType]);

  return (
    <div className="w-full h-screen bg-gradient-to-b from-sky-200 to-green-200 relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-white/90 backdrop-blur-sm shadow-lg">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <ArrowLeft size={20} />
              Back to Menu
            </button>
            <div className="flex items-center gap-2">
              <Home className="text-green-600" size={20} />
              <h1 className="text-xl font-bold text-green-800">My Eco Garden</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-yellow-100 rounded-full">
              <Sparkles className="text-yellow-600" size={16} />
              <span className="font-semibold text-yellow-800">{userStats.ecoPoints}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full">
              <Crown className="text-green-600" size={16} />
              <span className="font-semibold text-green-800">Level {userStats.gardenLevel}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full">
              <TreePine className="text-blue-600" size={16} />
              <span className="font-semibold text-blue-800">{placedTrees.length}/{userStats.maxTrees}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Panel */}
      <div className="absolute top-20 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3">Garden Tools</h3>
        
        <div className="flex flex-col gap-2">
          <button
            onClick={() => {
              setSelectedTool('plant');
              setShowTreeSelector(true);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              selectedTool === 'plant' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <Plus size={18} />
            Plant Tree
          </button>

          <button
            onClick={() => setSelectedTool('delete')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              selectedTool === 'delete' 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <Trash2 size={18} />
            Remove Tree
          </button>

          <button
            onClick={() => setCameraMode(cameraMode === 'free' ? 'locked' : 'free')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              cameraMode === 'locked' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <Eye size={18} />
            {cameraMode === 'free' ? 'Lock Camera' : 'Free Camera'}
          </button>

          <button
            onClick={() => {
              if (cameraRef.current) {
                cameraRef.current.position.set(10, 15, 10);
                cameraRef.current.lookAt(0, 0, 0);
              }
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
          >
            <RotateCw size={18} />
            Reset View
          </button>
        </div>
      </div>

      {/* Tree Selector Modal */}
      {showTreeSelector && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" style={{ pointerEvents: 'auto' }}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Select Tree Avatar</h2>
                <button
                  onClick={() => setShowTreeSelector(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ownedTreeAvatars.map((tree) => (
                  <div
                    key={tree.id}
                    onClick={() => {
                      setSelectedTreeType(tree.id);
                      setShowTreeSelector(false);
                    }}
                    className={`${rarityColors[tree.rarity]} border-2 rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all ${
                      selectedTreeType === tree.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{tree.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tree.rarity === 'common' ? 'bg-gray-200 text-gray-700' :
                        tree.rarity === 'rare' ? 'bg-blue-200 text-blue-700' :
                        tree.rarity === 'epic' ? 'bg-purple-200 text-purple-700' :
                        'bg-yellow-200 text-yellow-700'
                      }`}>
                        {tree.rarity}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{tree.description}</p>
                    
                    <div className="flex justify-between text-xs">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Growth: {tree.stats.growth}
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Efficiency: {tree.stats.efficiency}
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        Beauty: {tree.stats.beauty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Garden Stats Panel */}
      <div className="absolute top-20 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 min-w-[200px]">
        <h3 className="font-semibold text-gray-800 mb-3">Garden Statistics</h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Trees Planted:</span>
            <span className="font-semibold">{placedTrees.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Garden Level:</span>
            <span className="font-semibold">{userStats.gardenLevel}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Eco Points:</span>
            <span className="font-semibold text-green-600">{userStats.ecoPoints}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Capacity:</span>
            <span className="font-semibold">{placedTrees.length}/{userStats.maxTrees}</span>
          </div>
        </div>

        {placedTrees.length > 0 && (
          <>
            <hr className="my-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Recent Plants</h4>
            <div className="space-y-1 text-xs max-h-32 overflow-y-auto">
              {placedTrees.slice(-5).reverse().map((tree) => (
                <div key={tree.id} className="flex justify-between items-center">
                  <span className="truncate">{tree.treeData?.name || 'Unknown Tree'}</span>
                  {selectedTool === 'delete' && (
                    <button
                      onClick={() => removeTree(tree.id)}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-md">
        <h3 className="font-semibold text-gray-800 mb-2">How to Play</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p>• Select "Plant Tree" and choose an avatar to place trees</p>
          <p>• Click on the grid to plant your selected tree</p>
          <p>• Use "Remove Tree" mode to delete unwanted trees</p>
          <p>• Drag to rotate camera view (when unlocked)</p>
          <p>• Scroll to zoom in/out</p>
        </div>
      </div>

      {/* Notifications */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30 space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`px-4 py-2 rounded-lg shadow-lg animate-pulse ${
              notification.type === 'success' 
                ? 'bg-green-500 text-white' 
                : 'bg-red-500 text-white'
            }`}
          >
            {notification.message}
          </div>
        ))}
      </div>

      {/* 3D Scene Container */}      <div 
        ref={mountRef} 
        className="fixed inset-0 z-10"
        style={{ 
          cursor: selectedTool === 'plant' && selectedTreeType ? 'crosshair' : 'grab',
          pointerEvents: 'auto'
        }}
      />

      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-40 bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mb-4"></div>
            <p className="text-gray-600">Loading your garden...</p>
          </div>
        </div>
      )}

      {/* Tree Selector */}
      {showTreeSelector && (
        <TreeSelector
          onSelect={handleTreeSelect}
          onClose={() => setShowTreeSelector(false)}
        />
      )}

      {/* Back Arrow Button */}
      <button
        onClick={() => navigate('/dashboard')} // Navigate to the previous page
        className="absolute top-4 left-4 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow-md"
        aria-label="Go Back"
      >
        <ArrowLeft size={24} />
      </button>
    </div>
  );
};

export default EcoGarden3D;