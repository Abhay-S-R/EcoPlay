import React from 'react';
import { useTreeContext } from '../context/TreeContext';

const TreeSelector = ({ onSelect, onClose }) => {
  const { ownedTrees } = useTreeContext();
  
  const treeTypes = [
    { id: 1, name: 'Oak Tree', icon: '🌳', cost: 100 },
    { id: 2, name: 'Pine Tree', icon: '🌲', cost: 150 },
    { id: 3, name: 'Cherry Tree', icon: '🌸', cost: 200 },
    // Add more tree types as needed
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Select a Tree to Plant</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ×
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {treeTypes.map((tree) => (
            <button
              key={tree.id}
              onClick={() => {
                onSelect(tree);
                onClose();
              }}
              className="p-4 border rounded-lg hover:bg-green-50 transition-colors"
              disabled={!ownedTrees.includes(tree.id)}
            >
              <div className="text-3xl mb-2">{tree.icon}</div>
              <div className="font-medium">{tree.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreeSelector;