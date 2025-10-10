const STORAGE_KEY = 'ecoplay_user_data';
const MAX_DAYS_TO_KEEP = 365;

const getDefaultUserData = () => ({
  profile: {
    name: "",
    email: "",
    joinDate: null,
    isProfileComplete: false
  },
  settings: { units: 'metric' },
  stats: {
    totalEcoPoints: 0,
    level: 1,
    currentStreak: 0,
    longestStreak: 0,
    totalActivities: 0,
    lifetimeStats: {
      co2Saved: 0,
      waterSaved: 0,
      energySaved: 0
    }
  },
  dailyData: [],
  lastActivityDate: null,
  achievements: []
});

const migrateUserData = (data) => {
  const defaultData = getDefaultUserData();

  return {
    profile: {
      ...defaultData.profile,
      ...(data.profile || {})
    },
    settings: {
      ...defaultData.settings,
      ...(data.settings || {})
    },
    stats: {
      ...defaultData.stats,
      ...(data.stats || {}),
      lifetimeStats: {
        ...defaultData.stats.lifetimeStats,
        ...(data.stats?.lifetimeStats || {})
      }
    },
    dailyData: data.dailyData || [],
    lastActivityDate: data.lastActivityDate || null,
    achievements: data.achievements || [],
    shopOwnedAvatars: data.shopOwnedAvatars || [1]
  };
};

export const saveUserData = (userData) => {
  try {
    const trimmedData = {
      ...userData,
      dailyData: (userData.dailyData || [])
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
    if (!data) return null;

    const parsedData = JSON.parse(data);
    return migrateUserData(parsedData);
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
