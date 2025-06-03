import React, { createContext, useContext, useState, useEffect } from 'react';

// Define initial context value
const initialContextValue = {
  ownedTrees: [1],
  addTree: () => {}
};

const TreeContext = createContext(initialContextValue);

export const TreeProvider = ({ children }) => {
  const [ownedTrees, setOwnedTrees] = useState(() => {
    try {
      const saved = localStorage.getItem('ownedTrees');
      console.log('Loading trees from storage:', saved);
      return saved ? new Set(JSON.parse(saved)) : new Set([1]);
    } catch (error) {
      console.error('Error loading owned trees:', error);
      return new Set([1]);
    }
  });

  const addTree = (treeId) => {
    if (!treeId) return;
    console.log('Adding tree:', treeId);
    setOwnedTrees(prev => {
      const newSet = new Set(prev);
      newSet.add(treeId);
      return newSet;
    });
  };

  // Save to localStorage whenever ownedTrees changes
  useEffect(() => {
    try {
      const treesArray = Array.from(ownedTrees);
      console.log('Saving trees to storage:', treesArray);
      localStorage.setItem('ownedTrees', JSON.stringify(treesArray));
    } catch (error) {
      console.error('Error saving trees:', error);
    }
  }, [ownedTrees]);

  const value = {
    ownedTrees: Array.from(ownedTrees),
    addTree
  };

  return (
    <TreeContext.Provider value={value}>
      {children}
    </TreeContext.Provider>
  );
};

export const useTreeContext = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error('useTreeContext must be used within TreeProvider');
  }
  return context;
};