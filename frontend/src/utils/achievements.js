// Achievement definitions with unlock criteria
export const ACHIEVEMENT_DEFINITIONS = [
    {
      id: 'first_step',
      name: 'First Step',
      description: 'Complete your first eco-task',
      points: 50,
      category: 'milestone',
      criteria: (userData) => {
        const totalTasks = (userData.dailyData || []).reduce(
          (sum, day) => sum + (day.tasksCompleted?.length || 0) + (day.activities?.length || 0), 
          0
        );
        return totalTasks >= 1;
      }
    },
    {
      id: 'getting_started',
      name: 'Getting Started',
      description: 'Earn your first 100 eco-points',
      points: 100,
      category: 'milestone',
      criteria: (userData) => (userData.stats?.totalEcoPoints || 0) >= 100
    },
    {
      id: 'week_warrior',
      name: 'Week Warrior',
      description: 'Maintain a 7-day streak',
      points: 200,
      category: 'streak',
      criteria: (userData) => (userData.stats?.currentStreak || 0) >= 7
    },
    {
      id: 'dedicated',
      name: 'Dedicated',
      description: 'Maintain a 30-day streak',
      points: 500,
      category: 'streak',
      criteria: (userData) => (userData.stats?.currentStreak || 0) >= 30
    },
    {
      id: 'unstoppable',
      name: 'Unstoppable',
      description: 'Maintain a 100-day streak',
      points: 1000,
      category: 'streak',
      criteria: (userData) => (userData.stats?.currentStreak || 0) >= 100
    },
    {
      id: 'eco_commuter',
      name: 'Eco Commuter',
      description: 'Complete 10 transport-related tasks',
      points: 150,
      category: 'activity',
      criteria: (userData) => {
        const transportCount = (userData.dailyData || []).reduce((sum, day) => {
          const transportActivities = (day.activities || []).filter(a => a.activityType === 'transport').length;
          const transportTasks = (day.tasksCompleted || []).filter(t => t.category === 'transport').length;
          return sum + transportActivities + transportTasks;
        }, 0);
        return transportCount >= 10;
      }
    },
    {
      id: 'water_saver',
      name: 'Water Saver',
      description: 'Complete 10 water conservation tasks',
      points: 150,
      category: 'activity',
      criteria: (userData) => {
        const waterCount = (userData.dailyData || []).reduce((sum, day) => {
          const waterActivities = (day.activities || []).filter(a => a.activityType === 'water').length;
          const waterTasks = (day.tasksCompleted || []).filter(t => t.category === 'water').length;
          return sum + waterActivities + waterTasks;
        }, 0);
        return waterCount >= 10;
      }
    },
    {
      id: 'energy_champion',
      name: 'Energy Champion',
      description: 'Complete 10 energy-saving tasks',
      points: 150,
      category: 'activity',
      criteria: (userData) => {
        const energyCount = (userData.dailyData || []).reduce((sum, day) => {
          const energyActivities = (day.activities || []).filter(a => a.activityType === 'energy').length;
          const energyTasks = (day.tasksCompleted || []).filter(t => t.category === 'energy').length;
          return sum + energyActivities + energyTasks;
        }, 0);
        return energyCount >= 10;
      }
    },
    {
      id: 'waste_warrior',
      name: 'Waste Warrior',
      description: 'Complete 10 waste reduction tasks',
      points: 150,
      category: 'activity',
      criteria: (userData) => {
        const wasteCount = (userData.dailyData || []).reduce((sum, day) => {
          const wasteActivities = (day.activities || []).filter(a => a.activityType === 'waste').length;
          const wasteTasks = (day.tasksCompleted || []).filter(t => t.category === 'waste').length;
          return sum + wasteActivities + wasteTasks;
        }, 0);
        return wasteCount >= 10;
      }
    },
    {
      id: 'co2_reducer',
      name: 'CO₂ Reducer',
      description: 'Save 50kg of CO₂',
      points: 250,
      category: 'impact',
      criteria: (userData) => {
        const totalCO2 = (userData.dailyData || []).reduce(
          (sum, day) => sum + (day.co2Saved || 0), 
          0
        );
        return totalCO2 >= 50;
      }
    },
    {
      id: 'green_guardian',
      name: 'Green Guardian',
      description: 'Complete 50 eco-tasks total',
      points: 300,
      category: 'milestone',
      criteria: (userData) => {
        const totalTasks = (userData.dailyData || []).reduce(
          (sum, day) => sum + (day.tasksCompleted?.length || 0) + (day.activities?.length || 0), 
          0
        );
        return totalTasks >= 50;
      }
    },
    {
      id: 'eco_expert',
      name: 'Eco Expert',
      description: 'Complete 100 eco-tasks total',
      points: 500,
      category: 'milestone',
      criteria: (userData) => {
        const totalTasks = (userData.dailyData || []).reduce(
          (sum, day) => sum + (day.tasksCompleted?.length || 0) + (day.activities?.length || 0), 
          0
        );
        return totalTasks >= 100;
      }
    },
    {
      id: 'level_5',
      name: 'Rising Star',
      description: 'Reach level 5',
      points: 200,
      category: 'level',
      criteria: (userData) => (userData.stats?.level || 1) >= 5
    },
    {
      id: 'level_10',
      name: 'Eco Master',
      description: 'Reach level 10',
      points: 400,
      category: 'level',
      criteria: (userData) => (userData.stats?.level || 1) >= 10
    },
    {
      id: 'point_collector',
      name: 'Point Collector',
      description: 'Earn 1000 eco-points',
      points: 300,
      category: 'milestone',
      criteria: (userData) => (userData.stats?.totalEcoPoints || 0) >= 1000
    },
    {
      id: 'eco_legend',
      name: 'Eco Legend',
      description: 'Earn 5000 eco-points',
      points: 750,
      category: 'milestone',
      criteria: (userData) => (userData.stats?.totalEcoPoints || 0) >= 5000
    }
  ];
  
  // Check and auto-claim new achievements
  export const checkAndClaimAchievements = (userData) => {
    const earnedAchievements = userData.achievements || [];
    const earnedIds = new Set(earnedAchievements.map(a => a.id));
    const newlyEarned = [];
  
    // Check each achievement definition
    ACHIEVEMENT_DEFINITIONS.forEach(achievement => {
      // Skip if already earned
      if (earnedIds.has(achievement.id)) return;
  
      // Check if criteria is met
      try {
        if (achievement.criteria(userData)) {
          const earnedAchievement = {
            id: achievement.id,
            name: achievement.name,
            description: achievement.description,
            dateEarned: new Date().toISOString().split('T')[0],
            points: achievement.points,
            category: achievement.category
          };
          newlyEarned.push(earnedAchievement);
        }
      } catch (error) {
        console.error(`Error checking achievement ${achievement.id}:`, error);
      }
    });
  
    return newlyEarned;
  };
  
  // Get recent achievements (last 5)
  export const getRecentAchievements = (userData) => {
    const achievements = userData.achievements || [];
    return achievements
      .sort((a, b) => new Date(b.dateEarned) - new Date(a.dateEarned))
      .slice(0, 5);
  };
  
  // Get achievement stats
  export const getAchievementStats = (userData) => {
    const earned = (userData.achievements || []).length;
    const total = ACHIEVEMENT_DEFINITIONS.length;
    const totalPoints = (userData.achievements || []).reduce((sum, a) => sum + (a.points || 0), 0);
    
    return {
      earned,
      total,
      percentage: total > 0 ? Math.round((earned / total) * 100) : 0,
      totalPoints
    };
  };
  