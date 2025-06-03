import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ShoppingCart, Crown, Star, Lock, Check, Zap, Sparkles } from 'lucide-react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { useTreeContext } from '../../context/TreeContext';

const EcoPlayShop = () => {
  console.log("Rendering EcoPlayShop");
  const navigate = useNavigate();
  const { addTree } = useTreeContext();
  const [userPoints, setUserPoints] = useState(1247);
  const [ownedAvatars, setOwnedAvatars] = useState(new Set([1])); 
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [cart, setCart] = useState([]);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // Tree avatar data
  const treeAvatars = [
    {
      id: 1,
      name: "Baby Sprout",
      description: "Your first tiny green companion",
      price: 0,
      rarity: "common",
      level: 1,
      type: "sprout",
      owned: true,
      stats: { growth: 1, efficiency: 1, beauty: 1 }
    },
    {
      id: 2,
      name: "Mighty Oak",
      description: "Majestic oak with broad canopy and acorns",
      price: 500,
      rarity: "common",
      level: 2,
      type: "oak",
      stats: { growth: 2, efficiency: 3, beauty: 2 }
    },
    {
      id: 3,
      name: "Cherry Blossom",
      description: "Delicate pink flowers bloom in spring beauty",
      price: 750,
      rarity: "rare",
      level: 3,
      type: "cherry",
      stats: { growth: 2, efficiency: 2, beauty: 4 }
    },
    {
      id: 4,
      name: "Weeping Willow",
      description: "Graceful drooping branches dance in the breeze",
      price: 1000,
      rarity: "rare",
      level: 4,
      type: "willow",
      stats: { growth: 3, efficiency: 3, beauty: 3 }
    },
    {
      id: 5,
      name: "Autumn Maple",
      description: "Fiery red and orange leaves of fall",
      price: 1200,
      rarity: "rare",
      level: 5,
      type: "maple",
      stats: { growth: 3, efficiency: 2, beauty: 4 }
    },
    {
      id: 6,
      name: "Golden Pine",
      description: "Tall evergreen with golden needles and pine cones",
      price: 1500,
      rarity: "epic",
      level: 6,
      type: "pine",
      stats: { growth: 4, efficiency: 4, beauty: 3 }
    },
    {
      id: 7,
      name: "Rainbow Eucalyptus",
      description: "Mystical bark with rainbow colors",
      price: 2000,
      rarity: "epic",
      level: 7,
      type: "eucalyptus",
      stats: { growth: 4, efficiency: 3, beauty: 5 }
    },
    {
      id: 8,
      name: "Crystal Bonsai",
      description: "Miniature crystalline tree with glowing gems",
      price: 2500,
      rarity: "legendary",
      level: 8,
      type: "crystal",
      stats: { growth: 5, efficiency: 5, beauty: 5 }
    },
    {
      id: 9,
      name: "Phoenix Palm",
      description: "Legendary palm with fiery golden fronds",
      price: 3000,
      rarity: "legendary",
      level: 9,
      type: "phoenix",
      stats: { growth: 5, efficiency: 4, beauty: 5 }
    }
  ];

  const rarityColors = {
    common: 'from-gray-400 to-gray-600',
    rare: 'from-blue-400 to-blue-600',
    epic: 'from-purple-400 to-purple-600',
    legendary: 'from-yellow-400 to-orange-500'
  };

  const rarityBorders = {
    common: 'border-gray-300',
    rare: 'border-blue-300',
    epic: 'border-purple-300',
    legendary: 'border-yellow-300'
  };

  // Notification system
  const showNotification = (message, type = 'success') => {
    const id = Date.now();
    const notification = { id, message, type };
    setNotifications(prev => [...prev, notification]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  const purchaseAvatar = (avatar) => {
    if (userPoints >= avatar.price && !ownedAvatars.has(avatar.id)) {
      setUserPoints(prev => prev - avatar.price);
      setOwnedAvatars(prev => new Set([...prev, avatar.id]));
      addTree(avatar.id);
      showNotification(`🌳 ${avatar.name} purchased successfully! Welcome to your garden!`);
      setShowPurchaseModal(false);
    } else if (ownedAvatars.has(avatar.id)) {
      showNotification('You already own this tree avatar!', 'info');
    } else {
      showNotification('Not enough EcoPoints! Complete more eco-activities to earn points.', 'error');
    }
  };

  const openPurchaseModal = (avatar) => {
    setSelectedAvatar(avatar);
    setShowPurchaseModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/dashboard')}
                className="text-white hover:text-green-200 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-2">
                <ShoppingCart className="h-8 w-8 text-white" />
                <span className="text-2xl font-bold text-white">Tree Shop</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold flex items-center space-x-2">
                <Sparkles className="h-4 w-4" />
                <span>{userPoints.toLocaleString()} EcoPoints</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emerald-600 mb-4">
            🌳 Avatar Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and collect unique tree avatars to represent your eco journey. 
            Each tree has special abilities and grows stronger as you make a difference!
          </p>
        </div>

        {/* Stats Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-green-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">{ownedAvatars.size}</div>
              <div className="text-gray-600">Trees Owned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{treeAvatars.length - ownedAvatars.size}</div>
              <div className="text-gray-600">Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {treeAvatars.filter(t => t.rarity === 'epic' || t.rarity === 'legendary').filter(t => ownedAvatars.has(t.id)).length}
              </div>
              <div className="text-gray-600">Rare Trees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">{userPoints.toLocaleString()}</div>
              <div className="text-gray-600">EcoPoints</div>
            </div>
          </div>
        </div>

        {/* Tree Avatar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treeAvatars.map(avatar => (
            <TreeAvatarCard
              key={avatar.id}
              avatar={avatar}
              isOwned={ownedAvatars.has(avatar.id)}
              canPurchase={userPoints >= avatar.price}
              onPurchase={() => openPurchaseModal(avatar)}
              rarityColor={rarityColors[avatar.rarity]}
              rarityBorder={rarityBorders[avatar.rarity]}
            />
          ))}
        </div>
      </div>

      {/* Purchase Modal */}
      {showPurchaseModal && selectedAvatar && (
        <PurchaseModal
          avatar={selectedAvatar}
          userPoints={userPoints}
          isOwned={ownedAvatars.has(selectedAvatar.id)}
          onPurchase={() => purchaseAvatar(selectedAvatar)}
          onClose={() => setShowPurchaseModal(false)}
          rarityColor={rarityColors[selectedAvatar.rarity]}
        />
      )}

      {/* Notifications */}
      <div className="fixed top-20 right-4 z-50 space-y-2">
        {notifications.map(notification => (
          <Notification key={notification.id} message={notification.message} type={notification.type} />
        ))}
      </div>
    </div>
  );
};

// Tree Avatar Card Component
const TreeAvatarCard = ({ avatar, isOwned, canPurchase, onPurchase, rarityColor, rarityBorder }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create 3D Tree Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(200, 200);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create tree based on avatar type
    const createTree = () => {
      const group = new THREE.Group();
      
      switch(avatar.type) {
        case 'sprout':
          // Baby sprout - small stem with tiny leaves
          const stemGeometry = new THREE.CylinderGeometry(0.02, 0.03, 0.3, 6);
          const stemMaterial = new THREE.MeshLambertMaterial({ color: 0x90EE90 });
          const stem = new THREE.Mesh(stemGeometry, stemMaterial);
          stem.position.y = 0.15;
          group.add(stem);
          
          // Small leaves
          for (let i = 0; i < 3; i++) {
            const leafGeometry = new THREE.SphereGeometry(0.06, 6, 6);
            const leafMaterial = new THREE.MeshLambertMaterial({ color: 0x32CD32 });
            const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
            leaf.position.set(
              Math.cos(i * 2.1) * 0.1,
              0.25 + i * 0.05,
              Math.sin(i * 2.1) * 0.1
            );
            group.add(leaf);
          }
          break;

        case 'oak':
          // Oak trunk - thick and sturdy
          const oakTrunkGeometry = new THREE.CylinderGeometry(0.12, 0.18, 1.2, 8);
          const oakTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
          const oakTrunk = new THREE.Mesh(oakTrunkGeometry, oakTrunkMaterial);
          oakTrunk.position.y = 0.6;
          group.add(oakTrunk);
          
          // Oak canopy - broad and full
          const oakCanopyGeometry = new THREE.SphereGeometry(0.6, 12, 12);
          const oakCanopyMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
          const oakCanopy = new THREE.Mesh(oakCanopyGeometry, oakCanopyMaterial);
          oakCanopy.position.y = 1.4;
          oakCanopy.scale.set(1.2, 0.8, 1.2);
          group.add(oakCanopy);
          
          // Acorns
          for (let i = 0; i < 5; i++) {
            const acornGeometry = new THREE.SphereGeometry(0.03, 6, 6);
            const acornMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
            const acorn = new THREE.Mesh(acornGeometry, acornMaterial);
            acorn.position.set(
              (Math.random() - 0.5) * 1.0,
              1.2 + Math.random() * 0.4,
              (Math.random() - 0.5) * 1.0
            );
            group.add(acorn);
          }
          break;

        case 'cherry':
          // Cherry trunk - slender and elegant
          const cherryTrunkGeometry = new THREE.CylinderGeometry(0.08, 0.12, 1.0, 8);
          const cherryTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
          const cherryTrunk = new THREE.Mesh(cherryTrunkGeometry, cherryTrunkMaterial);
          cherryTrunk.position.y = 0.5;
          group.add(cherryTrunk);
          
          // Cherry blossom clusters
          const blossomColors = [0xFFB6C1, 0xFFC0CB, 0xFF69B4];
          for (let i = 0; i < 8; i++) {
            const blossomGeometry = new THREE.SphereGeometry(0.15, 8, 8);
            const blossomMaterial = new THREE.MeshLambertMaterial({ 
              color: blossomColors[Math.floor(Math.random() * 3)] 
            });
            const blossom = new THREE.Mesh(blossomGeometry, blossomMaterial);
            const angle = (i / 8) * Math.PI * 2;
            blossom.position.set(
              Math.cos(angle) * (0.3 + Math.random() * 0.2),
              1.0 + Math.random() * 0.3,
              Math.sin(angle) * (0.3 + Math.random() * 0.2)
            );
            group.add(blossom);
          }
          
          // Petals falling
          for (let i = 0; i < 12; i++) {
            const petalGeometry = new THREE.SphereGeometry(0.02, 4, 4);
            const petalMaterial = new THREE.MeshLambertMaterial({ color: 0xFFB6C1 });
            const petal = new THREE.Mesh(petalGeometry, petalMaterial);
            petal.position.set(
              (Math.random() - 0.5) * 2,
              Math.random() * 1.5,
              (Math.random() - 0.5) * 2
            );
            group.add(petal);
          }
          break;

        case 'willow':
          // Willow trunk
          const willowTrunkGeometry = new THREE.CylinderGeometry(0.1, 0.15, 1.0, 8);
          const willowTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B7355 });
          const willowTrunk = new THREE.Mesh(willowTrunkGeometry, willowTrunkMaterial);
          willowTrunk.position.y = 0.5;
          group.add(willowTrunk);
          
          // Drooping branches
          for (let i = 0; i < 12; i++) {
            const branchGeometry = new THREE.CylinderGeometry(0.01, 0.02, 0.8, 4);
            const branchMaterial = new THREE.MeshLambertMaterial({ color: 0x9ACD32 });
            const branch = new THREE.Mesh(branchGeometry, branchMaterial);
            const angle = (i / 12) * Math.PI * 2;
            branch.position.set(
              Math.cos(angle) * 0.3,
              0.8,
              Math.sin(angle) * 0.3
            );
            branch.rotation.z = Math.PI * 0.3;
            branch.rotation.y = angle;
            group.add(branch);
          }
          break;

        case 'maple':
          // Maple trunk
          const mapleTrunkGeometry = new THREE.CylinderGeometry(0.1, 0.14, 1.0, 8);
          const mapleTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
          const mapleTrunk = new THREE.Mesh(mapleTrunkGeometry, mapleTrunkMaterial);
          mapleTrunk.position.y = 0.5;
          group.add(mapleTrunk);
          
          // Autumn foliage - multiple colors
          const autumnColors = [0xFF4500, 0xFF6347, 0xFF8C00, 0xFFD700, 0xDC143C];
          for (let i = 0; i < 6; i++) {
            const foliageGeometry = new THREE.SphereGeometry(0.2, 8, 8);
            const foliageMaterial = new THREE.MeshLambertMaterial({ 
              color: autumnColors[Math.floor(Math.random() * 5)] 
            });
            const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
            const angle = (i / 6) * Math.PI * 2;
            foliage.position.set(
              Math.cos(angle) * 0.3,
              1.2 + Math.random() * 0.2,
              Math.sin(angle) * 0.3
            );
            group.add(foliage);
          }
          
          // Falling leaves
          for (let i = 0; i < 8; i++) {
            const leafGeometry = new THREE.SphereGeometry(0.02, 4, 4);
            const leafMaterial = new THREE.MeshLambertMaterial({ 
              color: autumnColors[Math.floor(Math.random() * 5)] 
            });
            const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
            leaf.position.set(
              (Math.random() - 0.5) * 1.5,
              Math.random() * 1.0,
              (Math.random() - 0.5) * 1.5
            );
            group.add(leaf);
          }
          break;

        case 'pine':
          // Pine trunk - tall and straight
          const pineTrunkGeometry = new THREE.CylinderGeometry(0.08, 0.12, 1.4, 8);
          const pineTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
          const pineTrunk = new THREE.Mesh(pineTrunkGeometry, pineTrunkMaterial);
          pineTrunk.position.y = 0.7;
          group.add(pineTrunk);
          
          // Pine needle layers
          for (let layer = 0; layer < 5; layer++) {
            const needleGeometry = new THREE.ConeGeometry(0.3 - layer * 0.04, 0.3, 8);
            const needleMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
            const needleLayer = new THREE.Mesh(needleGeometry, needleMaterial);
            needleLayer.position.y = 0.8 + layer * 0.2;
            group.add(needleLayer);
          }
          
          // Pine cones
          for (let i = 0; i < 4; i++) {
            const coneGeometry = new THREE.ConeGeometry(0.03, 0.08, 6);
            const coneMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
            const cone = new THREE.Mesh(coneGeometry, coneMaterial);
            cone.position.set(
              (Math.random() - 0.5) * 0.4,
              1.2 + Math.random() * 0.4,
              (Math.random() - 0.5) * 0.4
            );
            group.add(cone);
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
            group.add(sparkle);
          }
          break;

        case 'eucalyptus':
          // Eucalyptus trunk with rainbow bark
          const eucaTrunkGeometry = new THREE.CylinderGeometry(0.1, 0.13, 1.2, 8);
          const eucaTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0xFF69B4 });
          const eucaTrunk = new THREE.Mesh(eucaTrunkGeometry, eucaTrunkMaterial);
          eucaTrunk.position.y = 0.6;
          group.add(eucaTrunk);
          
          // Rainbow bark sections
          const rainbowColors = [0xFF0000, 0xFF7F00, 0xFFFF00, 0x00FF00, 0x0000FF, 0x8B00FF];
          for (let i = 0; i < 6; i++) {
            const barkGeometry = new THREE.CylinderGeometry(0.11, 0.14, 0.15, 8);
            const barkMaterial = new THREE.MeshLambertMaterial({ color: rainbowColors[i] });
            const bark = new THREE.Mesh(barkGeometry, barkMaterial);
            bark.position.y = 0.3 + i * 0.15;
            group.add(bark);
          }
          
          // Eucalyptus leaves
          for (let i = 0; i < 10; i++) {
            const leafGeometry = new THREE.SphereGeometry(0.08, 6, 6);
            const leafMaterial = new THREE.MeshLambertMaterial({ color: 0x7CFC00 });
            const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
            const angle = (i / 10) * Math.PI * 2;
            leaf.position.set(
              Math.cos(angle) * 0.4,
              1.3 + Math.random() * 0.2,
              Math.sin(angle) * 0.4
            );
            group.add(leaf);
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
            group.add(sparkle);
          }
          break;

        case 'crystal':
          // Crystal bonsai pot
          const potGeometry = new THREE.CylinderGeometry(0.2, 0.15, 0.1, 8);
          const potMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
          const pot = new THREE.Mesh(potGeometry, potMaterial);
          pot.position.y = 0.05;
          group.add(pot);
          
          // Crystal trunk
          const crystalTrunkGeometry = new THREE.CylinderGeometry(0.03, 0.05, 0.3, 6);
          const crystalTrunkMaterial = new THREE.MeshLambertMaterial({ 
            color: 0x87CEEB,
            transparent: true,
            opacity: 0.8
          });
          const crystalTrunk = new THREE.Mesh(crystalTrunkGeometry, crystalTrunkMaterial);
          crystalTrunk.position.y = 0.25;
          group.add(crystalTrunk);
          
          // Crystal gems as leaves
          const gemColors = [0xFF69B4, 0x00FFFF, 0xFF00FF, 0x00FF00, 0xFFFF00];
          for (let i = 0; i < 8; i++) {
            const gemGeometry = new THREE.OctahedronGeometry(0.04);
            const gemMaterial = new THREE.MeshLambertMaterial({ 
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
            group.add(gem);
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
            group.add(sparkle);
          }
          break;

        case 'phoenix':
          // Phoenix palm trunk
          const phoenixTrunkGeometry = new THREE.CylinderGeometry(0.08, 0.12, 1.5, 8);
          const phoenixTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
          const phoenixTrunk = new THREE.Mesh(phoenixTrunkGeometry, phoenixTrunkMaterial);
          phoenixTrunk.position.y = 0.75;
          group.add(phoenixTrunk);
          
          // Phoenix palm fronds
          for (let i = 0; i < 8; i++) {
            const frondGeometry = new THREE.CylinderGeometry(0.01, 0.02, 0.8, 4);
            const frondMaterial = new THREE.MeshLambertMaterial({ color: 0xFFD700 });
            const frond = new THREE.Mesh(frondGeometry, frondMaterial);
            const angle = (i / 8) * Math.PI * 2;
            frond.position.set(
              Math.cos(angle) * 0.1,
              1.5,
              Math.sin(angle) * 0.1
            );
            frond.rotation.z = Math.cos(angle) * 0.5;
            frond.rotation.x = Math.sin(angle) * 0.5;
            group.add(frond);
            
            // Frond leaves
            for (let j = 0; j < 6; j++) {
              const leafGeometry = new THREE.SphereGeometry(0.03, 4, 4);
              const leafMaterial = new THREE.MeshLambertMaterial({ 
                color: j % 2 === 0 ? 0xFF4500 : 0xFFD700 
              });
              const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
              leaf.position.set(
                Math.cos(angle) * (0.2 + j * 0.1),
                1.4 + j * 0.05,
                Math.sin(angle) * (0.2 + j * 0.1)
              );
              group.add(leaf);
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
            group.add(fire);
          }
          break;

        default:
          // Default simple tree
          const defaultTrunkGeometry = new THREE.CylinderGeometry(0.1, 0.15, 1, 8);
          const defaultTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
          const defaultTrunk = new THREE.Mesh(defaultTrunkGeometry, defaultTrunkMaterial);
          defaultTrunk.position.y = 0.5;
          group.add(defaultTrunk);
          
          const defaultFoliageGeometry = new THREE.SphereGeometry(0.4, 10, 10);
          const defaultFoliageMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
          const defaultFoliage = new THREE.Mesh(defaultFoliageGeometry, defaultFoliageMaterial);
          defaultFoliage.position.y = 1.2;
          group.add(defaultFoliage);
      }

      return group;
    };

    const tree = createTree();
    scene.add(tree);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 3;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      tree.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [avatar]);

  return (
    <div className={`bg-white rounded-2xl shadow-lg border-2 ${rarityBorder} overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}>
      {/* Rarity Banner */}
      <div className={`bg-gradient-to-r ${rarityColor} text-white px-4 py-2 text-center font-bold uppercase text-sm tracking-wide`}>
        {avatar.rarity}
        {avatar.rarity === 'legendary' && <Crown className="inline ml-2 h-4 w-4" />}
      </div>

      {/* 3D Tree Display */}
      <div className="flex justify-center py-4 bg-gradient-to-b from-sky-100 to-green-100">
        <div ref={mountRef} className="w-48 h-48" />
      </div>

      {/* Avatar Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">{avatar.name}</h3>
          <div className="text-sm text-gray-500">Lv.{avatar.level}</div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{avatar.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center">
            <div className="text-xs text-gray-500">Growth</div>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-3 w-3 ${i < avatar.stats.growth ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500">Efficiency</div>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-3 w-3 ${i < avatar.stats.efficiency ? 'text-green-400 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500">Beauty</div>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-3 w-3 ${i < avatar.stats.beauty ? 'text-pink-400 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Purchase Button */}
        {isOwned ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
            <Check className="h-5 w-5 text-green-500 mx-auto mb-1" />
            <span className="text-green-700 font-semibold">Owned</span>
          </div>
        ) : (
          <button
            onClick={onPurchase}
            className={`w-full py-3 px-4 rounded-lg font-bold transition-all ${
              canPurchase
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {avatar.price === 0 ? 'Free' : `${avatar.price.toLocaleString()} EcoPoints`}
          </button>
        )}
      </div>
    </div>
  );
};

// Purchase Modal Component
const PurchaseModal = ({ avatar, userPoints, isOwned, onPurchase, onClose, rarityColor }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
        {/* Header */}
        <div className={`bg-gradient-to-r ${rarityColor} text-white p-6 rounded-t-2xl text-center`}>
          <h2 className="text-2xl font-bold">{avatar.name}</h2>
          <p className="opacity-90 capitalize">{avatar.rarity} Tree Avatar</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6">{avatar.description}</p>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Price:</span>
              <span className="font-bold text-emerald-600">
                {avatar.price === 0 ? 'Free' : `${avatar.price.toLocaleString()} EcoPoints`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Your Balance:</span>
              <span className={`font-bold ${userPoints >= avatar.price ? 'text-green-600' : 'text-red-600'}`}>
                {userPoints.toLocaleString()} EcoPoints
              </span>
            </div>
            {!isOwned && userPoints < avatar.price && (
              <div className="text-red-600 text-sm">
                Need {(avatar.price - userPoints).toLocaleString()} more EcoPoints
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onPurchase}
              disabled={isOwned || userPoints < avatar.price}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                isOwned 
                  ? 'bg-green-500 text-white cursor-default'
                  : userPoints >= avatar.price
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isOwned ? 'Owned' : 'Purchase'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Notification Component
const Notification = ({ message, type = 'success' }) => {
  const bgColor = {
    success: 'bg-emerald-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  };

  return (
    <div className={`${bgColor[type]} text-white px-4 py-3 rounded-lg shadow-lg max-w-sm animate-slide-in`}>
      <div className="font-medium">{message}</div>
    </div>
  );
};

export default EcoPlayShop;

