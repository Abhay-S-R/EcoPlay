import React, { useRef, useEffect, useState } from 'react';
import { useTreeContext } from '../context/TreeContext';
import { getAllTrees, getTreeById } from '../utils/treeData';
import { loadUserData } from '../utils/storage';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const TreeSelector = ({ onSelect, onClose }) => {
  const { refreshOwnedTrees } = useTreeContext();
  const previewRefs = useRef([]);
  const scenesRef = useRef([]); // Store scene references

  // Read owned trees directly from shop data
  const [ownedTrees, setOwnedTrees] = useState(() => {
    try {
      const userData = loadUserData();
      if (userData && Array.isArray(userData.shopOwnedAvatars)) {
        return userData.shopOwnedAvatars;
      }
      return [1]; // Default to sapling
    } catch (error) {
      return [1];
    }
  });

  // Get all available trees and filter by owned ones
  const allTrees = getAllTrees();
  const availableTrees = allTrees.filter(tree => ownedTrees.includes(tree.id));
  const [isInitialized, setIsInitialized] = useState(false);

  // Refresh owned trees when component mounts
  useEffect(() => {
    const userData = loadUserData();
    if (userData && Array.isArray(userData.shopOwnedAvatars)) {
      setOwnedTrees(userData.shopOwnedAvatars);
    }
    
    // Also refresh after a short delay to ensure data is loaded
    const timer = setTimeout(() => {
      const userData = loadUserData();
      if (userData && Array.isArray(userData.shopOwnedAvatars)) {
        setOwnedTrees(userData.shopOwnedAvatars);
      }
      setIsInitialized(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const createTreeMesh = (treeData) => {
    const treeGroup = new THREE.Group();

    // Create detailed tree based on tree type
    switch(treeData.type) {
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
          color: treeData.gardenColor || 0x2d5a27
        });
        const top = new THREE.Mesh(topGeometry, topMaterial);
        top.position.y = 2;
        treeGroup.add(top);
    }

    return treeGroup;
  };

  useEffect(() => {
    // Don't initialize scenes until data is loaded
    if (!isInitialized || availableTrees.length === 0) return;

    // Cleanup function to clear previous scenes
    const cleanup = () => {
      scenesRef.current.forEach(sceneData => {
        if (sceneData) {
          const { renderer, controls, animationId } = sceneData;
          if (animationId) {
            cancelAnimationFrame(animationId);
          }
          controls?.dispose();
          if (renderer) {
            renderer.dispose();
            renderer.forceContextLoss();
            const canvas = renderer.domElement;
            if (canvas && canvas.parentNode) {
              canvas.parentNode.removeChild(canvas);
            }
          }
        }
      });
      scenesRef.current = [];
    };

    // Clear any existing scenes first
    cleanup();

    // Clear any existing content
    previewRefs.current.forEach(container => {
      if (container) {
        container.innerHTML = '';
      }
    });

    availableTrees.forEach((tree, index) => {
      const container = previewRefs.current[index];
      if (!container) return;

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000); // Reduced FOV from 75 to 45
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        preserveDrawingBuffer: false,
        powerPreference: "high-performance"
      });
      
      renderer.setSize(200, 200);
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
      const treeMesh = createTreeMesh(tree);
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
  }, [isInitialized, availableTrees.length]); // Only depend on length to avoid unnecessary re-renders

  if (availableTrees.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl w-[400px] p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">No Trees Available</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ×
            </button>
          </div>
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">
              You don't have any trees to plant yet!
            </p>
            <p className="text-sm text-gray-500">
              Visit the shop to purchase trees with your EcoPoints.
            </p>
          </div>
        </div>
      </div>
    );
  }

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
          {availableTrees.map((tree, index) => (
            <button
              key={tree.id}
              onClick={() => {
                onSelect(tree);
                onClose();
              }}
              className="flex flex-col items-center p-6 border rounded-lg transition-colors hover:bg-green-50"
            >
              <div 
                ref={el => previewRefs.current[index] = el}
                className="w-[200px] h-[200px] mb-4"
              />
              <div className="text-center w-full mt-4">
                <div className="font-medium text-lg mb-2">{tree.name}</div>
                <div className="text-sm text-gray-500">{tree.description}</div>
                <div className="text-xs text-emerald-600 mt-2">
                  {tree.rarity.charAt(0).toUpperCase() + tree.rarity.slice(1)} • Level {tree.level}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreeSelector;
