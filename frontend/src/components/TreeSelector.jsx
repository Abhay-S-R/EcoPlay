import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadUserData, saveUserData } from '../utils/storage';

// Define initial context value
const initialContextValue = {
  ownedTrees: [1], // Default to sapling (ID 1)
  addTree: () => {},
  refreshOwnedTrees: () => {}
};

const TreeContext = createContext(initialContextValue);

export const TreeProvider = ({ children }) => {
  const [ownedTrees, setOwnedTrees] = useState(() => {
    try {
      const userData = loadUserData();
      
      if (userData && Array.isArray(userData.shopOwnedAvatars)) {
        // Ensure sapling (ID 1) is always included
        const treesWithSapling = new Set([1, ...userData.shopOwnedAvatars]);
        return treesWithSapling;
      }
      
      // If no shop data exists, initialize with sapling (ID 1) but don't overwrite existing data
      const initialTrees = [1];
      
      // Only create new userData if it doesn't exist
      if (!userData) {
        const newUserData = { shopOwnedAvatars: initialTrees };
        saveUserData(newUserData);
      }
      
      return new Set(initialTrees);
    } catch (error) {
      return new Set([1]);
    }
  });

  const addTree = (treeId) => {
    if (!treeId) return;
    setOwnedTrees(prev => {
      const newSet = new Set(prev);
      newSet.add(treeId);
      return newSet;
    });
  };

  // Function to get current owned trees directly from shop data
  const getCurrentOwnedTrees = () => {
    try {
      const userData = loadUserData();
      if (userData && Array.isArray(userData.shopOwnedAvatars)) {
        // Ensure sapling (ID 1) is always included
        return new Set([1, ...userData.shopOwnedAvatars]);
      }
      return new Set([1]);
    } catch (error) {
      return new Set([1]);
    }
  };

  // Function to refresh owned trees from userData
  const refreshOwnedTrees = () => {
    const currentTrees = getCurrentOwnedTrees();
    setOwnedTrees(currentTrees);
  };

  // Force refresh every time the component mounts or when window gains focus
  useEffect(() => {
    refreshOwnedTrees();
    
    const handleFocus = () => {
      refreshOwnedTrees();
    };
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        refreshOwnedTrees();
      }
    };
    
    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Listen for custom events
  useEffect(() => {
    const handleUserDataChange = () => {
      refreshOwnedTrees();
    };

    window.addEventListener('userDataChanged', handleUserDataChange);
    return () => window.removeEventListener('userDataChanged', handleUserDataChange);
  }, []);

  // Save to localStorage for backward compatibility (but don't overwrite shop data)
  useEffect(() => {
    try {
      const treesArray = Array.from(ownedTrees);
      localStorage.setItem('ownedTrees', JSON.stringify(treesArray));
    } catch (error) {
      // Silent error handling
    }
  }, [ownedTrees]);

  const value = {
    ownedTrees: Array.from(ownedTrees),
    addTree,
    refreshOwnedTrees
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
