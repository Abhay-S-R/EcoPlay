// Unified tree data for both shop and garden
export const treeData = [
  {
    id: 1,
    name: "Baby Sprout",
    description: "Your first tiny green companion",
    price: 0,
    rarity: "common",
    level: 1,
    type: "sprout",
    color: 0x32CD32, // Light green
    gardenColor: 0x2d5a27, // Dark green for garden
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
    color: 0x228B22, // Forest green
    gardenColor: 0x8B0000, // Dark red for garden
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
    color: 0xFFB6C1, // Light pink
    gardenColor: 0xFFB7C5, // Pink for garden
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
    color: 0x9ACD32, // Yellow green
    gardenColor: 0x004d00, // Deep green for garden
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
    color: 0xFF4500, // Orange red
    gardenColor: 0xFFD700, // Gold for garden
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
    color: 0x228B22, // Forest green
    gardenColor: 0x228B22, // Forest green for garden
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
    color: 0xFF69B4, // Hot pink
    gardenColor: 0xFF69B4, // Hot pink for garden
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
    color: 0x87CEEB, // Sky blue
    gardenColor: 0x87CEEB, // Sky blue for garden
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
    color: 0xFFD700, // Gold
    gardenColor: 0xFFD700, // Gold for garden
    stats: { growth: 5, efficiency: 4, beauty: 5 }
  }
];

export const rarityColors = {
  common: 'from-gray-400 to-gray-600',
  rare: 'from-blue-400 to-blue-600',
  epic: 'from-purple-400 to-purple-600',
  legendary: 'from-yellow-400 to-orange-500'
};

export const rarityBorders = {
  common: 'border-gray-300',
  rare: 'border-blue-300',
  epic: 'border-purple-300',
  legendary: 'border-yellow-300'
};

// Helper function to get tree by ID
export const getTreeById = (id) => {
  return treeData.find(tree => tree.id === id);
};

// Helper function to get all trees
export const getAllTrees = () => {
  return treeData;
}; 