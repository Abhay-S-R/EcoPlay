import React, { useRef, useEffect } from 'react';
import { useTreeContext } from '../context/TreeContext';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const TreeSelector = ({ onSelect, onClose }) => {
  const { ownedTrees } = useTreeContext();
  const previewRefs = useRef([]);
  const scenesRef = useRef([]); // Store scene references

  const treeTypes = [
    { 
      id: 1, 
      name: 'Basic Tree', 
      color: 0x2d5a27, // Dark green
      description: 'A simple but effective carbon reducer',
      cost: 0
    },
    { 
      id: 2, 
      name: 'Maple Tree', 
      color: 0x8B0000, // Dark red
      description: 'Beautiful red leaves, medium CO2 absorption',
      cost: 100
    },
    { 
      id: 3, 
      name: 'Giant Sequoia', 
      color: 0x004d00, // Deep green
      description: 'Massive tree with high CO2 absorption',
      cost: 250
    },
    { 
      id: 4, 
      name: 'Cherry Blossom', 
      color: 0xFFB7C5, // Pink
      description: 'Beautiful pink blossoms with decent CO2 absorption',
      cost: 400
    },
    { 
      id: 5, 
      name: 'Golden Tree', 
      color: 0xFFD700, // Gold
      description: 'Rare golden leaves, very high CO2 absorption',
      cost: 1000
    }
  ];

  const createTreeMesh = (color) => {
    // Create tree trunk
    const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 8);
    const trunkMaterial = new THREE.MeshPhongMaterial({ color: 0x4a2f00 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 0.5;

    // Create tree top (cone)
    const topGeometry = new THREE.ConeGeometry(1, 2, 8);
    const topMaterial = new THREE.MeshPhongMaterial({ color: color });
    const top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.y = 2;

    // Group the trunk and top
    const treeGroup = new THREE.Group();
    treeGroup.add(trunk);
    treeGroup.add(top);

    return treeGroup;
  };

  useEffect(() => {
    // Cleanup function to clear previous scenes
    const cleanup = () => {
      scenesRef.current.forEach(sceneData => {
        if (sceneData) {
          const { renderer, controls, animationId } = sceneData;
          cancelAnimationFrame(animationId);
          controls?.dispose();
          renderer?.dispose();
        }
      });
      scenesRef.current = [];
    };

    // Clear any existing content
    previewRefs.current.forEach(container => {
      if (container) {
        container.innerHTML = '';
      }
    });

    treeTypes.forEach((tree, index) => {
      const container = previewRefs.current[index];
      if (!container) return;

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000); // Reduced FOV from 75 to 45
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true 
      });
      
      renderer.setSize(200, 200);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // Camera setup - Moved further back and up for better view
      camera.position.set(3, 3, 4);
      camera.lookAt(0, 1, 0); // Look at the center of the tree

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Increased ambient light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(ambientLight, directionalLight);

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 3;
      controls.target.set(0, 1, 0); // Set orbit center to middle of tree
      controls.update();

      // Add single tree mesh
      const treeMesh = createTreeMesh(tree.color);
      treeMesh.scale.set(0.8, 0.8, 0.8); // Scale down the tree slightly
      treeMesh.position.y = -0.5; // Move down slightly to center in view
      scene.add(treeMesh);

      // Animation
      let animationId;
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // Store scene data for cleanup
      scenesRef.current[index] = { renderer, controls, animationId };
    });

    // Cleanup on unmount
    return cleanup;
  }, []); // Empty dependency array to run only once

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[900px] max-h-[80vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Select a Tree to Plant</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ×
          </button>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {treeTypes.map((tree, index) => (
            <button
              key={tree.id}
              onClick={() => {
                onSelect(tree);
                onClose();
              }}
              className={`
                flex flex-col items-center p-6 border rounded-lg transition-colors
                ${ownedTrees.includes(tree.id)
                  ? 'hover:bg-green-50'
                  : 'opacity-50 cursor-not-allowed'
                }
              `}
              disabled={!ownedTrees.includes(tree.id)}
            >
              <div 
                ref={el => previewRefs.current[index] = el}
                className="w-[200px] h-[200px] mb-4"
              />
              <div className="text-center w-full mt-4">
                <div className="font-medium text-lg mb-2">{tree.name}</div>
                <div className="text-sm text-gray-500">{tree.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreeSelector;