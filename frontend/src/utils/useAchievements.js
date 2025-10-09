import { useEffect } from 'react';
import { checkAndClaimAchievements } from './achievements';
import { loadUserData, saveUserData } from './storage';

// Hook to auto-check and claim achievements
export const useAchievementCheck = () => {
  useEffect(() => {
    const checkAchievements = () => {
      try {
        const userData = loadUserData();
        if (!userData) return;

        const newAchievements = checkAndClaimAchievements(userData);
        
        if (newAchievements.length > 0) {
          // Add new achievements to user data
          const updatedUserData = {
            ...userData,
            achievements: [...(userData.achievements || []), ...newAchievements]
          };
          
          saveUserData(updatedUserData);
          
          // Dispatch event to notify other components
          window.dispatchEvent(new CustomEvent('achievementsEarned', { 
            detail: newAchievements 
          }));
          
          // Dispatch general data change event
          window.dispatchEvent(new Event('userDataChanged'));
        }
      } catch (error) {
        console.error('Error checking achievements:', error);
      }
    };

    // Check achievements when component mounts
    checkAchievements();

    // Check achievements whenever user data changes
    const handleDataChange = () => {
      setTimeout(checkAchievements, 100); // Small delay to ensure data is saved
    };

    window.addEventListener('userDataChanged', handleDataChange);
    window.addEventListener('storage', handleDataChange);

    return () => {
      window.removeEventListener('userDataChanged', handleDataChange);
      window.removeEventListener('storage', handleDataChange);
    };
  }, []);
};
