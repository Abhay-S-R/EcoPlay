import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useTreeContext } from '../../context/TreeContext';
import TreeSelector from '../../components/TreeSelector';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ArrowLeft, Home, Sparkles, Crown, TreePine, Plus, Trash2, Eye, RotateCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getTreeById } from '../../utils/treeData';

const EcoGarden3D = () => {
  const navigate = useNavigate();
  const mountRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const animationFrameRef = useRef(null);
  
  const [selectedTool, setSelectedTool] = useState('plant');
  const [selectedTreeType, setSelectedTreeType] = useState(null);
  const [showTreeSelector, setShowTreeSelector] = useState(false);
  const [placedTrees, setPlacedTrees] = useState([]);
  const [treeCount, setTreeCount] = useState(0);
  const [selectedTreeForDeletion, setSelectedTreeForDeletion] = useState(null);

  // Get the TreeContext to refresh owned trees
  const { refreshOwnedTrees } = useTreeContext();

  // Refresh owned trees when component mounts
  useEffect(() => {
    refreshOwnedTrees();
  }, [refreshOwnedTrees]);

  const createTreeMesh = (treeType) => {
    const treeGroup = new THREE.Group();

    // Create detailed tree based on tree type
    switch(treeType.type) {
      case 'sprout':
        // Baby sprout - small stem with tiny leaves
        const stemGeometry = new THREE.CylinderGeometry(0.02, 0.03, 0.3, 6);
        const stemMaterial = new THREE.MeshPhongMaterial({ color: 0x90EE90 });
        const stem = new THREE.Mesh(stemGeometry, stemMaterial);
        stem.position.y = 0.15;
        treeGroup.add(stem);
        
        // Small leaves
        for (let i = 0; i < 3; i++) {
          const leafGeometry = new THREE.SphereGeometry(0.06, 6, 6);
          const leafMaterial = new THREE.MeshPhongMaterial({ color: 0x32CD32 });
          const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
          leaf.position.set(
            Math.cos(i * 2.1) * 0.1,
            0.25 + i * 0.05,
            Math.sin(i * 2.1) * 0.1
          );
          treeGroup.add(leaf);
        }
        break;

      case 'oak':
        // Oak trunk - thick and sturdy
        const oakTrunkGeometry = new THREE.CylinderGeometry(0.12, 0.18, 1.2, 8);
        const oakTrunkMaterial = new THREE.MeshPhongMaterial({ color: 0x654321 });
        const oakTrunk = new THREE.Mesh(oakTrunkGeometry, oakTrunkMaterial);
        oakTrunk.position.y = 0.6;
        treeGroup.add(oakTrunk);
        
        // Oak canopy - broad and full
        const oakCanopyGeometry = new THREE.SphereGeometry(0.6, 12, 12);
        const oakCanopyMaterial = new THREE.MeshPhongMaterial({ color: 0x228B22 });
        const oakCanopy = new THREE.Mesh(oakCanopyGeometry, oakCanopyMaterial);
        oakCanopy.position.y = 1.4;
        oakCanopy.scale.set(1.2, 0.8, 1.2);
        treeGroup.add(oakCanopy);
        
        // Acorns
        for (let i = 0; i < 5; i++) {
          const acornGeometry = new THREE.SphereGeometry(0.03, 6, 6);
          const acornMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
          const acorn = new THREE.Mesh(acornGeometry, acornMaterial);
          acorn.position.set(
            (Math.random() - 0.5) * 1.0,
            1.2 + Math.random() * 0.4,
            (Math.random() - 0.5) * 1.0
          );
          treeGroup.add(acorn);
        }
        break;

      case 'cherry':
        // Cherry trunk - slender and elegant
        const cherryTrunkGeometry = new THREE.CylinderGeometry(0.08, 0.12, 1.0, 8);
        const cherryTrunkMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
        const cherryTrunk = new THREE.Mesh(cherryTrunkGeometry, cherryTrunkMaterial);
        cherryTrunk.position.y = 0.5;
        treeGroup.add(cherryTrunk);
        
        // Cherry blossom clusters
        const blossomColors = [0xFFB6C1, 0xFFC0CB, 0xFF69B4];
        for (let i = 0; i < 8; i++) {
          const blossomGeometry = new THREE.SphereGeometry(0.15, 8, 8);
          const blossomMaterial = new THREE.MeshPhongMaterial({ 
            color: blossomColors[Math.floor(Math.random() * 3)] 
          });
          const blossom = new THREE.Mesh(blossomGeometry, blossomMaterial);
          const angle = (i / 8) * Math.PI * 2;
          blossom.position.set(
            Math.cos(angle) * (0.3 + Math.random() * 0.2),
            1.0 + Math.random() * 0.3,
            Math.sin(angle) * (0.3 + Math.random() * 0.2)
          );
          treeGroup.add(blossom);
        }
        
        // Petals falling
        for (let i = 0; i < 12; i++) {
          const petalGeometry = new THREE.SphereGeometry(0.02, 4, 4);
          const petalMaterial = new THREE.MeshPhongMaterial({ color: 0xFFB6C1 });
          const petal = new THREE.Mesh(petalGeometry, petalMaterial);
          petal.position.set(
            (Math.random() - 0.5) * 2,
            Math.random() * 1.5,
            (Math.random() - 0.5) * 2
          );
          treeGroup.add(petal);
        }
        break;

      case 'willow':
        // Willow trunk
        const willowTrunkGeometry = new THREE.CylinderGeometry(0.1, 0.15, 1.0, 8);
        const willowTrunkMaterial = new THREE.MeshPhongMaterial({ color: 0x8B7355 });
        const willowTrunk = new THREE.Mesh(willowTrunkGeometry, willowTrunkMaterial);
        willowTrunk.position.y = 0.5;
        treeGroup.add(willowTrunk);
        
        // Drooping branches
        for (let i = 0; i < 12; i++) {
          const branchGeometry = new THREE.CylinderGeometry(0.01, 0.02, 0.8, 4);
          const branchMaterial = new THREE.MeshPhongMaterial({ color: 0x9ACD32 });
          const branch = new THREE.Mesh(branchGeometry, branchMaterial);
          const angle = (i / 12) * Math.PI * 2;
          branch.position.set(
            Math.cos(angle) * 0.3,
            0.8,
            Math.sin(angle) * 0.3
          );
          branch.rotation.z = Math.PI * 0.3;
          branch.rotation.y = angle;
          treeGroup.add(branch);
        }
        break;

      case 'maple':
        // Maple trunk
        const mapleTrunkGeometry = new THREE.CylinderGeometry(0.1, 0.14, 1.0, 8);
        const mapleTrunkMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
        const mapleTrunk = new THREE.Mesh(mapleTrunkGeometry, mapleTrunkMaterial);
        mapleTrunk.position.y = 0.5;
        treeGroup.add(mapleTrunk);
        
        // Autumn foliage - multiple colors
        const autumnColors = [0xFF4500, 0xFF6347, 0xFF8C00, 0xFFD700, 0xDC143C];
        for (let i = 0; i < 6; i++) {
          const foliageGeometry = new THREE.SphereGeometry(0.2, 8, 8);
          const foliageMaterial = new THREE.MeshPhongMaterial({ 
            color: autumnColors[Math.floor(Math.random() * 5)] 
          });
          const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
          const angle = (i / 6) * Math.PI * 2;
          foliage.position.set(
            Math.cos(angle) * 0.3,
            1.2 + Math.random() * 0.2,
            Math.sin(angle) * 0.3
          );
          treeGroup.add(foliage);
        }
        
        // Falling leaves
        for (let i = 0; i < 8; i++) {
          const leafGeometry = new THREE.SphereGeometry(0.02, 4, 4);
          const leafMaterial = new THREE.MeshPhongMaterial({ 
            color: autumnColors[Math.floor(Math.random() * 5)] 
          });
          const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
          leaf.position.set(
            (Math.random() - 0.5) * 1.5,
            Math.random() * 1.0,
            (Math.random() - 0.5) * 1.5
          );
          treeGroup.add(leaf);
        }
        break;

      case 'pine':
        // Pine trunk - tall and straight
        const pineTrunkGeometry = new THREE.CylinderGeometry(0.08, 0.12, 1.4, 8);
        const pineTrunkMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
        const pineTrunk = new THREE.Mesh(pineTrunkGeometry, pineTrunkMaterial);
        pineTrunk.position.y = 0.7;
        treeGroup.add(pineTrunk);
        
        // Pine needle layers
        for (let layer = 0; layer < 5; layer++) {
          const needleGeometry = new THREE.ConeGeometry(0.3 - layer * 0.04, 0.3, 8);
          const needleMaterial = new THREE.MeshPhongMaterial({ color: 0x228B22 });
          const needleLayer = new THREE.Mesh(needleGeometry, needleMaterial);
          needleLayer.position.y = 0.8 + layer * 0.2;
          treeGroup.add(needleLayer);
        }
        
        // Pine cones
        for (let i = 0; i < 4; i++) {
          const coneGeometry = new THREE.ConeGeometry(0.03, 0.08, 6);
          const coneMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
          const cone = new THREE.Mesh(coneGeometry, coneMaterial);
          cone.position.set(
            (Math.random() - 0.5) * 0.4,
            1.2 + Math.random() * 0.4,
            (Math.random() - 0.5) * 0.4
          );
          treeGroup.add(cone);
        }
        
        // Golden sparkles for epic pine
        for (let i = 0; i < 15; i++) {
          const sparkleGeometry = new THREE.SphereGeometry(0.015, 4, 4);
          const sparkleMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
          const sparkle = new THREE.Mesh(sparkleGeometry, sparkleMaterial);
          sparkle.position.set(
            (Math.random() - 0.5) * 1.0,
            0.8 + Math.random() * 1.0,
            (Math.random() - 0.5) * 1.0
          );
          treeGroup.add(sparkle);
        }
        break;

      case 'eucalyptus':
        // Eucalyptus trunk with rainbow bark
        const eucaTrunkGeometry = new THREE.CylinderGeometry(0.1, 0.13, 1.2, 8);
        const eucaTrunkMaterial = new THREE.MeshPhongMaterial({ color: 0xFF69B4 });
        const eucaTrunk = new THREE.Mesh(eucaTrunkGeometry, eucaTrunkMaterial);
        eucaTrunk.position.y = 0.6;
        treeGroup.add(eucaTrunk);
        
        // Rainbow bark sections
        const rainbowColors = [0xFF0000, 0xFF7F00, 0xFFFF00, 0x00FF00, 0x0000FF, 0x8B00FF];
        for (let i = 0; i < 6; i++) {
          const barkGeometry = new THREE.CylinderGeometry(0.11, 0.14, 0.15, 8);
          const barkMaterial = new THREE.MeshPhongMaterial({ color: rainbowColors[i] });
          const bark = new THREE.Mesh(barkGeometry, barkMaterial);
          bark.position.y = 0.3 + i * 0.15;
          treeGroup.add(bark);
        }
        
        // Eucalyptus leaves
        for (let i = 0; i < 10; i++) {
          const leafGeometry = new THREE.SphereGeometry(0.08, 6, 6);
          const leafMaterial = new THREE.MeshPhongMaterial({ color: 0x7CFC00 });
          const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
          const angle = (i / 10) * Math.PI * 2;
          leaf.position.set(
            Math.cos(angle) * 0.4,
            1.3 + Math.random() * 0.2,
            Math.sin(angle) * 0.4
          );
          treeGroup.add(leaf);
        }
        
        // Rainbow sparkles
        for (let i = 0; i < 20; i++) {
          const sparkleGeometry = new THREE.SphereGeometry(0.015, 4, 4);
          const sparkleMaterial = new THREE.MeshBasicMaterial({ 
            color: rainbowColors[Math.floor(Math.random() * 6)] 
          });
          const sparkle = new THREE.Mesh(sparkleGeometry, sparkleMaterial);
          sparkle.position.set(
            (Math.random() - 0.5) * 1.2,
            0.5 + Math.random() * 1.0,
            (Math.random() - 0.5) * 1.2
          );
          treeGroup.add(sparkle);
        }
        break;

      case 'crystal':
        // Crystal bonsai pot
        const potGeometry = new THREE.CylinderGeometry(0.2, 0.15, 0.1, 8);
        const potMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
        const pot = new THREE.Mesh(potGeometry, potMaterial);
        pot.position.y = 0.05;
        treeGroup.add(pot);
        
        // Crystal trunk
        const crystalTrunkGeometry = new THREE.CylinderGeometry(0.03, 0.05, 0.3, 6);
        const crystalTrunkMaterial = new THREE.MeshPhongMaterial({ 
          color: 0x87CEEB,
          transparent: true,
          opacity: 0.8
        });
        const crystalTrunk = new THREE.Mesh(crystalTrunkGeometry, crystalTrunkMaterial);
        crystalTrunk.position.y = 0.25;
        treeGroup.add(crystalTrunk);
        
        // Crystal gems as leaves
        const gemColors = [0xFF69B4, 0x00FFFF, 0xFF00FF, 0x00FF00, 0xFFFF00];
        for (let i = 0; i < 8; i++) {
          const gemGeometry = new THREE.OctahedronGeometry(0.04);
          const gemMaterial = new THREE.MeshPhongMaterial({ 
            color: gemColors[Math.floor(Math.random() * 5)],
            transparent: true,
            opacity: 0.9
          });
          const gem = new THREE.Mesh(gemGeometry, gemMaterial);
          const angle = (i / 8) * Math.PI * 2;
          gem.position.set(
            Math.cos(angle) * 0.15,
            0.35 + Math.random() * 0.1,
            Math.sin(angle) * 0.15
          );
          treeGroup.add(gem);
        }
        
        // Glowing sparkles
        for (let i = 0; i < 25; i++) {
          const sparkleGeometry = new THREE.SphereGeometry(0.01, 4, 4);
          const sparkleMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xFFFFFF,
            transparent: true,
            opacity: 0.8
          });
          const sparkle = new THREE.Mesh(sparkleGeometry, sparkleMaterial);
          sparkle.position.set(
            (Math.random() - 0.5) * 0.8,
            0.2 + Math.random() * 0.4,
            (Math.random() - 0.5) * 0.8
          );
          treeGroup.add(sparkle);
        }
        break;

      case 'phoenix':
        // Phoenix palm trunk
        const phoenixTrunkGeometry = new THREE.CylinderGeometry(0.08, 0.12, 1.5, 8);
        const phoenixTrunkMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
        const phoenixTrunk = new THREE.Mesh(phoenixTrunkGeometry, phoenixTrunkMaterial);
        phoenixTrunk.position.y = 0.75;
        treeGroup.add(phoenixTrunk);
        
        // Phoenix palm fronds
        for (let i = 0; i < 8; i++) {
          const frondGeometry = new THREE.CylinderGeometry(0.01, 0.02, 0.8, 4);
          const frondMaterial = new THREE.MeshPhongMaterial({ color: 0xFFD700 });
          const frond = new THREE.Mesh(frondGeometry, frondMaterial);
          const angle = (i / 8) * Math.PI * 2;
          frond.position.set(
            Math.cos(angle) * 0.1,
            1.5,
            Math.sin(angle) * 0.1
          );
          frond.rotation.z = Math.cos(angle) * 0.5;
          frond.rotation.x = Math.sin(angle) * 0.5;
          treeGroup.add(frond);
          
          // Frond leaves
          for (let j = 0; j < 6; j++) {
            const leafGeometry = new THREE.SphereGeometry(0.03, 4, 4);
            const leafMaterial = new THREE.MeshPhongMaterial({ 
              color: j % 2 === 0 ? 0xFF4500 : 0xFFD700 
            });
            const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
            leaf.position.set(
              Math.cos(angle) * (0.2 + j * 0.1),
              1.4 + j * 0.05,
              Math.sin(angle) * (0.2 + j * 0.1)
            );
            treeGroup.add(leaf);
          }
        }
        
        // Phoenix fire effects
        for (let i = 0; i < 30; i++) {
          const fireGeometry = new THREE.SphereGeometry(0.02, 4, 4);
          const fireMaterial = new THREE.MeshBasicMaterial({ 
            color: i % 3 === 0 ? 0xFF4500 : i % 3 === 1 ? 0xFF8C00 : 0xFFD700 
          });
          const fire = new THREE.Mesh(fireGeometry, fireMaterial);
          fire.position.set(
            (Math.random() - 0.5) * 1.5,
            1.0 + Math.random() * 1.0,
            (Math.random() - 0.5) * 1.5
          );
          treeGroup.add(fire);
        }
        break;

      default:
        // Fallback to simple tree if type not recognized
        const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 8);
        const trunkMaterial = new THREE.MeshPhongMaterial({ color: 0x4a2f00 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.y = 0.5;
        treeGroup.add(trunk);

        const topGeometry = new THREE.ConeGeometry(1, 2, 8);
        const topMaterial = new THREE.MeshPhongMaterial({ 
          color: treeType.gardenColor || 0x2d5a27
        });
        const top = new THREE.Mesh(topGeometry, topMaterial);
        top.position.y = 2;
        treeGroup.add(top);
    }

    return treeGroup;
  };

  const getTreeColor = (treeId) => {
    const treeData = getTreeById(treeId);
    return treeData ? treeData.gardenColor : 0x2d5a27; // fallback to dark green
  };

  const handleDeleteTree = (treeId) => {
    const treeToDelete = placedTrees.find(tree => tree.id === treeId);
    if (treeToDelete) {
      // Remove from scene
      sceneRef.current.remove(treeToDelete.mesh);
      // Dispose of geometries and materials
      treeToDelete.mesh.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });
      // Update state
      setPlacedTrees(prev => prev.filter(tree => tree.id !== treeId));
      setTreeCount(prev => Math.max(prev - 1, 0)); // Prevent negative count
    }
  };

  // Initialize scene
  useEffect(() => {
    if (!mountRef.current) return;

    // Camera setup
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current.position.set(5, 5, 5);
    cameraRef.current.lookAt(0, 0, 0);

    // Renderer setup
    rendererRef.current = new THREE.WebGLRenderer({ 
      antialias: true,
      powerPreference: "high-performance"
    });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current.shadowMap.enabled = true;
    mountRef.current.appendChild(rendererRef.current.domElement);

    // Controls
    controlsRef.current = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
    controlsRef.current.enableDamping = true;
    controlsRef.current.dampingFactor = 0.05;
    controlsRef.current.maxPolarAngle = Math.PI / 2;

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(20, 20, 40, 40);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x7cfc8a, // Restore to a less bright green (previously 0x90EE90)
      side: THREE.DoubleSide 
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    ground.name = 'ground';
    sceneRef.current.add(ground);

    // Grid helper
    const gridHelper = new THREE.GridHelper(20, 20);
    sceneRef.current.add(gridHelper);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    sceneRef.current.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    sceneRef.current.add(directionalLight);

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      if (controlsRef.current) controlsRef.current.update();
      if (rendererRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current.forceContextLoss();
        mountRef.current?.removeChild(rendererRef.current.domElement);
      }
      // Clear scene
      sceneRef.current.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });
    };
  }, []);

  const handlePlantTree = (event) => {
    if (selectedTool !== 'plant' || !selectedTreeType) return;

    const rect = rendererRef.current.domElement.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, cameraRef.current);

    const ground = sceneRef.current.getObjectByName('ground');
    const intersects = raycaster.intersectObject(ground);

    if (intersects.length > 0) {
      const point = intersects[0].point;
      
      // Check if there's already a tree at this position
      const treeRadius = 1;
      const isOccupied = placedTrees.some(tree => {
        const distance = new THREE.Vector2(tree.position.x, tree.position.z)
          .distanceTo(new THREE.Vector2(point.x, point.z));
        return distance < treeRadius;
      });

      if (!isOccupied) {
        const treeMesh = createTreeMesh(selectedTreeType);
        treeMesh.position.set(point.x, 0, point.z);
        treeMesh.castShadow = true;
        treeMesh.receiveShadow = true;
        treeMesh.userData = { 
          isTree: true, 
          treeId: Date.now(),
          treeType: selectedTreeType.id 
        };
        
        sceneRef.current.add(treeMesh);

        const newTree = {
          id: treeMesh.userData.treeId,
          type: selectedTreeType,
          position: point,
          mesh: treeMesh
        };

        setPlacedTrees(prev => [...prev, newTree]);
        setTreeCount(prev => prev + 1);
      }
    }
  };

  const handleTreeSelection = (event) => {
    if (selectedTool !== 'delete') return;

    const rect = rendererRef.current.domElement.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, cameraRef.current);

    const treeObjects = placedTrees.map(tree => tree.mesh);
    const intersects = raycaster.intersectObjects(treeObjects, true);

    if (intersects.length > 0) {
      // Find the parent group (tree mesh) if the intersected object is a child
      const intersectedMesh = intersects[0].object;
      const parentTree = placedTrees.find(tree => {
        // Check if the intersected object is the tree mesh or a child of it
        return tree.mesh === intersectedMesh || tree.mesh.children.includes(intersectedMesh);
      });
      if (parentTree) {
        handleDeleteTree(parentTree.id);
      }
    }
  };

  // Save garden to localStorage (called automatically)
  const saveGarden = (trees) => {
    const gardenData = trees.map(tree => ({
      typeId: tree.type.id,
      position: { x: tree.position.x, y: tree.position.y, z: tree.position.z }
    }));
    localStorage.setItem('ecoplay_garden', JSON.stringify(gardenData));
  };

  // Load garden from localStorage
  const loadGarden = () => {
    const data = localStorage.getItem('ecoplay_garden');
    if (!data) return;
    try {
      const gardenData = JSON.parse(data);
      // Remove existing trees from scene
      placedTrees.forEach(tree => {
        sceneRef.current.remove(tree.mesh);
        tree.mesh.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            object.material.dispose();
          }
        });
      });
      // Add loaded trees
      const loadedTrees = [];
      gardenData.forEach(item => {
        // Get the full tree data from the unified tree data system
        const fullTreeData = getTreeById(item.typeId);
        if (fullTreeData) {
          const mesh = createTreeMesh(fullTreeData);
          mesh.position.set(item.position.x, item.position.y, item.position.z);
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          mesh.userData = { isTree: true, treeId: Date.now() + Math.random(), treeType: item.typeId };
          sceneRef.current.add(mesh);
          loadedTrees.push({
            id: mesh.userData.treeId,
            type: fullTreeData,
            position: { ...item.position },
            mesh
          });
        }
      });
      setPlacedTrees(loadedTrees);
      setTreeCount(loadedTrees.length);
    } catch (e) {
      console.error('Error loading garden:', e);
    }
  };

  // Load garden on mount and whenever the component is shown (handle SPA navigation)
  useEffect(() => {
    loadGarden();
    // Listen for visibility change (tab focus) to reload garden if needed
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        loadGarden();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    };
    // eslint-disable-next-line
  }, []);

  // Autosave garden whenever placedTrees changes
  useEffect(() => {
    saveGarden(placedTrees);
  }, [placedTrees]);

  useEffect(() => {
    const canvas = rendererRef.current?.domElement;
    if (!canvas) return;

    const handleClick = (event) => {
      if (selectedTool === 'plant') {
        handlePlantTree(event);
      } else if (selectedTool === 'delete') {
        handleTreeSelection(event);
      }
    };

    canvas.addEventListener('click', handleClick);
    return () => canvas.removeEventListener('click', handleClick);
  }, [selectedTool, selectedTreeType]);

  return (
    <div className="relative h-screen">
      <div ref={mountRef} className="w-full h-full" />

      {/* Back to Menu Button */}
      <button
        onClick={() => navigate('/dashboard')}
        className="absolute top-4 left-4 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
      >
        <ArrowLeft size={20} />
        Back to Menu
      </button>

      {/* Tree Counter */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4">
        <h3 className="font-semibold text-gray-800">Trees Planted</h3>
        <p className="text-2xl font-bold text-green-600">{treeCount}</p>
      </div>

      {/* Garden Tools */}
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

          {/* Delete Tool Button */}
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
        </div>
      </div>

      {showTreeSelector && (
        <TreeSelector
          onSelect={(tree) => {
            setSelectedTreeType(tree);
            setSelectedTool('plant');
            setShowTreeSelector(false);
          }}
          onClose={() => setShowTreeSelector(false)}
        />
      )}
    </div>
  );
};

export default EcoGarden3D;
