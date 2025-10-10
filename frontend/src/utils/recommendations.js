// Import tasks from the shared location
import { DAILY_TASKS } from '../pages/dashboard/index';

// A comprehensive list of all possible recommendations
const allRecommendations = [
  {
    id: 'start_streak',
    icon: '🔥',
    title: 'Start a New Streak!',
    description: () => 'Log an eco-activity today to begin a new streak and earn bonus points.',
    condition: (userData) => userData.stats.currentStreak === 0,
  },
  {
    id: 'log_transport',
    icon: '🚗',
    title: 'Log Your Commute',
    description: () => 'Have you walked, biked, or used public transport recently? Log it to see your CO2 savings!',
    condition: (userData) => !hasRecentActivity(userData, 'transport', 3),
  },
  {
    id: 'log_waste',
    icon: '♻️',
    title: 'Recycle and Earn',
    description: () => 'Recycling plastic, paper, or glass can save a surprising amount of CO2. Log your efforts!',
    condition: (userData) => !hasRecentActivity(userData, 'waste', 3),
  },
  {
    id: 'plant_based_meal',
    icon: '🥗',
    title: 'Try a Plant-Based Meal',
    description: () => 'Skipping meat for just one meal can have a big impact. Log it by completing the daily task!',
    condition: (userData) => !hasRecentActivity(userData, 'food', 2),
  },
  {
    id: 'save_energy',
    icon: '💡',
    title: 'Unplug Devices',
    description: () => 'Unplugging electronics when not in use saves energy. Try completing the "Turn off lights" daily task!',
    condition: (userData) => !hasRecentActivity(userData, 'energy', 2),
  },
  {
    id: 'visit_shop',
    icon: '🛍️',
    title: 'Explore the Tree Shop',
    description: (userData) => `You have ${userData.stats.totalEcoPoints.toLocaleString()} EcoPoints! Visit the shop to unlock new trees for your garden.`,
    condition: (userData) => userData.stats.totalEcoPoints >= 500,
  },
  {
    id: 'complete_tasks',
    icon: '✅',
    title: 'Complete Your Daily Tasks',
    description: () => 'Don\'t forget to complete your daily eco-tasks to maximize your points for the day!',
    condition: (userData) => {
      const today = new Date().toISOString().split('T')[0];
      const todayData = userData.dailyData.find(day => day.date === today);
      return !todayData || (todayData.tasksCompleted?.length || 0) < DAILY_TASKS.length;
    }
  }
];

// ✅ FIXED: Helper function to check for recent activity (checks both activities AND tasks)
const hasRecentActivity = (userData, category, days) => {
  const threshold = new Date();
  threshold.setDate(threshold.getDate() - days);

  return userData.dailyData.some(day => {
    const dayDate = new Date(day.date);
    if (dayDate < threshold) return false;

    // Check logged activities
    const hasActivity = (day.activities || []).some(activity => activity.activityType === category);
    if (hasActivity) return true;
    
    // Check completed daily tasks
    const hasTask = (day.tasksCompleted || []).some(taskId => {
        const task = DAILY_TASKS.find(t => t.id === taskId);
        return task && task.category === category;
    });
    if (hasTask) return true;

    return false;
  });
};

/**
 * Gets a list of personalized recommendations for the user.
 * @param {object} userData - The user's data.
 * @param {number} count - The number of recommendations to return (default: 3).
 * @returns {Array<object>} A list of recommendation objects with dynamic descriptions.
 */
export const getPersonalizedRecommendations = (userData, count = 3) => {
  // ✅ FIXED: Better validation
  if (!userData || !userData.stats || !userData.dailyData || !Array.isArray(userData.dailyData)) {
    console.warn('Invalid userData structure for recommendations:', userData);
    return [];
  }
  
  // ✅ FIXED: Filter recommendations and generate dynamic descriptions
  const relevantRecommendations = allRecommendations
    .filter(rec => {
      try {
        return rec.condition(userData);
      } catch (error) {
        console.error(`Error evaluating condition for ${rec.id}:`, error);
        return false;
      }
    })
    .map(rec => ({
      // Spread the original recommendation
      ...rec,
      // ✅ CRITICAL: Convert description function to string
      description: typeof rec.description === 'function' 
        ? rec.description(userData) 
        : rec.description
    }));
  
  // ✅ FIXED: Shuffle the relevant recommendations and pick the top 'count'
  const shuffled = relevantRecommendations
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
  
  return shuffled;
};