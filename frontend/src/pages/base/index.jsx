import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useTreeContext } from '../../context/TreeContext';
import TreeSelector from '../../components/TreeSelector';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ArrowLeft, Home, Sparkles, Crown, TreePine, Plus, Trash2, Eye, RotateCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

  const createTreeMesh = (treeType) => {
    const treeGroup = new THREE.Group();

    // Create trunk
    const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 8);
    const trunkMaterial = new THREE.MeshPhongMaterial({ color: 0x4a2f00 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 0.5;
    treeGroup.add(trunk);

    // Create foliage
    const topGeometry = new THREE.ConeGeometry(1, 2, 8);
    const topMaterial = new THREE.MeshPhongMaterial({ 
      color: getTreeColor(treeType.id) 
    });
    const top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.y = 2;
    treeGroup.add(top);

    return treeGroup;
  };

  const getTreeColor = (treeId) => {
    const colors = {
      1: 0x2d5a27, // Basic Tree
      2: 0x8B0000, // Maple Tree
      3: 0x004d00, // Sequoia
      4: 0xFFB7C5, // Cherry Blossom
      5: 0xFFD700  // Golden Tree
    };
    return colors[treeId] || 0x2d5a27;
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
      setTreeCount(prev => prev - 1);
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
      color: 0x90EE90,
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
    const intersects = raycaster.intersectObjects(treeObjects);

    if (intersects.length > 0) {
      const selectedTree = placedTrees.find(
        tree => tree.mesh === intersects[0].object.parent
      );
      if (selectedTree) {
        handleDeleteTree(selectedTree.id);
      }
    }
  };

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
        onClick={() => navigate('/')}
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