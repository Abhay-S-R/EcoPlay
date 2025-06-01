const STORAGE_KEY = 'ecoplay_user_data';
const MAX_DAYS_TO_KEEP = 365; // Keep 1 year of data

export const saveUserData = (userData) => {
  try {
    const trimmedData = {
      ...userData,
      dailyData: userData.dailyData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, MAX_DAYS_TO_KEEP)
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedData));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const loadUserData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return null;
  }
};

export const clearUserData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};
