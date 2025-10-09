import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, CircleCheck as CheckCircle, Trophy, Leaf, Droplets, Zap, TrendingUp, User, Target, Settings } from 'lucide-react';
import { getActivityDetails } from '../utils/co2Calculator';
import { saveUserData, loadUserData } from '../utils/storage';
import { checkAndClaimAchievements } from '../utils/achievements';
import { ProfileSetupModal } from './modals/ProfileSetupModal';
import { ActivityModal } from './modals/ActivityModal';
import { SettingsModal } from './modals/SettingsModal';
import { Notification } from './ui/Notification';
import { StatsCard } from './ui/StatsCard';
import { RecommendationCard } from './ui/RecommendationCard';
import { TaskItem } from './ui/TaskItem';
import { convertUnit } from '../utils/unitConverter';
import {
  getTodayString,
  getTodayData,
  calculateStreak,
  calculateLevel
} from '../utils/dateHelpers';
import { dailyTasks, recommendations } from '../data/constants';

const Dashboard = () => {
  const [userData, setUserData] = useState(() => {
    const savedData = loadUserData();
    if (savedData) {
      return {
        ...savedData,
        settings: savedData.settings || { units: 'metric' }
      };
    }
    return {
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
      lastActivityDate: null
    };
  });

  useEffect(() => {
    if (userData.profile.isProfileComplete) {
      // Check for new achievements BEFORE saving
      const newAchievements = checkAndClaimAchievements(userData);
      
      if (newAchievements.length > 0) {
        // Update state with new achievements
        setUserData(prev => ({
          ...prev,
          achievements: [...(prev.achievements || []), ...newAchievements]
        }));
        
        // Show notifications for each new achievement
        newAchievements.forEach(achievement => {
          showNotification(`🏆 Achievement Unlocked: ${achievement.name}! +${achievement.points} points`);
        });
        
        // Dispatch event for other components
        window.dispatchEvent(new Event('userDataChanged'));
      } else {
        // Only save if no new achievements (to avoid duplicate saves)
        saveUserData(userData);
      }
    }
  }, [userData]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const showNotification = (message) => {
    setNotifications(prev => {
      if (prev.some(n => n.message === message)) return prev;
      const id = Date.now();
      return [...prev, { id, message }];
    });
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.message !== message));
    }, 3000);
  };

  const setupProfile = (profileData) => {
    setUserData(prev => ({
      ...prev,
      profile: {
        ...profileData,
        joinDate: new Date().toISOString(),
        isProfileComplete: true
      }
    }));
    setIsProfileModalOpen(false);
    showNotification('Welcome to EcoPlay! Start logging your eco-activities! 🌱');
  };

  const toggleTask = (taskId) => {
    const today = getTodayString();
    const task = dailyTasks.find(t => t.id === taskId);

    setUserData(prev => {
      const updatedDailyData = [...prev.dailyData];
      const todayIndex = updatedDailyData.findIndex(day => day.date === today);
      let todayRecord = todayIndex >= 0
        ? { ...updatedDailyData[todayIndex] }
        : getTodayData(prev.dailyData);

      const isCompleted = todayRecord.tasksCompleted.includes(taskId);
      const pointDelta = isCompleted ? -task.reward : task.reward;

      todayRecord.tasksCompleted = isCompleted
        ? todayRecord.tasksCompleted.filter(id => id !== taskId)
        : [...todayRecord.tasksCompleted, taskId];

      todayRecord.pointsEarned += pointDelta;

      if (todayIndex >= 0) {
        updatedDailyData[todayIndex] = todayRecord;
      } else {
        updatedDailyData.push(todayRecord);
      }

      const newTotalPoints = updatedDailyData.reduce((sum, day) => sum + day.pointsEarned, 0);
      const newStreak = calculateStreak(updatedDailyData);

      if (!isCompleted) {
        showNotification(`Task completed! +${task.reward} EcoPoints 🏆`);
      }

      return {
        ...prev,
        dailyData: updatedDailyData,
        stats: {
          ...prev.stats,
          totalEcoPoints: newTotalPoints,
          level: calculateLevel(newTotalPoints),
          currentStreak: newStreak,
          longestStreak: Math.max(prev.stats.longestStreak, newStreak),
          lifetimeStats: prev.stats.lifetimeStats
        }
      };
    });
  };

  const submitActivity = (activityData) => {
    const today = getTodayString();
    const points = activityData.activityType === 'water'
      ? Math.round(parseFloat(activityData.value) * 20)
      : Math.round(activityData.impact * 20);

    setUserData(prev => {
      const updatedDailyData = [...prev.dailyData];
      const todayIndex = updatedDailyData.findIndex(day => day.date === today);
      let todayRecord = todayIndex >= 0
        ? { ...updatedDailyData[todayIndex] }
        : getTodayData(prev.dailyData);

      const newActivity = {
        ...activityData,
        id: Date.now(),
        timestamp: new Date().toISOString(),
        points
      };

      if (!todayRecord.activities.some(activity =>
        activity.description === newActivity.description &&
        activity.timestamp === newActivity.timestamp
      )) {
        todayRecord.activities.push(newActivity);
        todayRecord.pointsEarned += points;

        if (activityData.activityType === 'water') {
          const waterAmount = parseFloat(activityData.value) || 0;
          todayRecord.waterSaved += waterAmount;
          showNotification(`💧 You saved ${waterAmount}L of water and earned ${points} EcoPoints! Every drop counts!`);
        } else {
          todayRecord.co2Saved += activityData.impact;
          if (activityData.activityType === 'energy') {
            todayRecord.energySaved += activityData.energyAmount || 0;
          }
          showNotification(`Great job! You saved ${activityData.impact}kg CO₂ and earned ${points} EcoPoints! 🌱`);
        }
      }

      if (todayIndex >= 0) {
        updatedDailyData[todayIndex] = todayRecord;
      } else {
        updatedDailyData.push(todayRecord);
      }

      const lifetimeStats = updatedDailyData.reduce((total, day) => ({
        co2Saved: total.co2Saved + (day.co2Saved || 0),
        waterSaved: total.waterSaved + (day.waterSaved || 0),
        energySaved: total.energySaved + (day.energySaved || 0)
      }), {
        co2Saved: 0,
        waterSaved: 0,
        energySaved: 0
      });

      const newTotalPoints = updatedDailyData.reduce((sum, day) => sum + day.pointsEarned, 0);
      const newStreak = calculateStreak(updatedDailyData);
      const newTotalActivities = updatedDailyData.reduce((sum, day) => sum + day.activities.length, 0);

      return {
        ...prev,
        dailyData: updatedDailyData,
        lastActivityDate: today,
        stats: {
          ...prev.stats,
          totalEcoPoints: newTotalPoints,
          level: calculateLevel(newTotalPoints),
          currentStreak: newStreak,
          longestStreak: Math.max(prev.stats.longestStreak, newStreak),
          totalActivities: newTotalActivities,
          lifetimeStats
        }
      };
    });

    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!userData.profile.isProfileComplete) {
      const timer = setTimeout(() => {
        setIsProfileModalOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [userData.profile.isProfileComplete]);

  const todayData = getTodayData(userData.dailyData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <nav className="bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">EcoPlay</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/stats" className="text-white hover:text-green-200 font-medium">Stats</Link>
              <Link to="/shop" className="text-white hover:text-green-200 font-medium">Shop</Link>
              <Link to="/garden" className="text-white hover:text-green-200 font-medium">Garden</Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                Level {userData.stats.level}
              </div>
              <div className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full font-semibold">
                💎 {userData.stats.totalEcoPoints.toLocaleString()}
              </div>
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
              >
                <User className="h-4 w-4 text-white" />
              </button>
              <button
                onClick={() => setIsSettingsModalOpen(true)}
                className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
              >
                <Settings className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {userData.profile.isProfileComplete ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-emerald-600 mb-2">
                      Welcome back, {userData.profile.name}! 🌍
                    </h1>
                    <p className="text-gray-600">
                      {userData.stats.currentStreak > 0
                        ? `You're on a ${userData.stats.currentStreak} day streak! Keep it up!`
                        : "Ready to start your eco journey? Log your first activity!"}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-4 rounded-xl text-center shadow-lg">
                    <div className="text-2xl font-bold">{userData.stats.currentStreak}</div>
                    <div className="text-sm">Day Streak</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <StatsCard
                    icon={<Leaf className="h-8 w-8 text-green-500" />}
                    value={`${todayData.co2Saved.toFixed(1)}kg`}
                    label="CO₂ Saved Today"
                    color="green"
                    units={userData.settings.units}
                  />
                  <StatsCard
                    icon={<Droplets className="h-8 w-8 text-blue-500" />}
                    value={`${todayData.waterSaved}L`}
                    label="Water Conserved Today"
                    color="blue"
                    units={userData.settings.units}
                  />
                  <StatsCard
                    icon={<Zap className="h-8 w-8 text-yellow-500" />}
                    value={`${todayData.energySaved}kWh`}
                    label="Energy Saved Today"
                    color="yellow"
                    units={userData.settings.units}
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Your Lifetime Environmental Impact
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {convertUnit(userData.stats.lifetimeStats.co2Saved.toFixed(1), 'co2', userData.settings.units)}
                    </div>
                    <div className="text-sm text-gray-600">Total CO₂ Saved</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {convertUnit(userData.stats.lifetimeStats.waterSaved, 'water', userData.settings.units)}
                    </div>
                    <div className="text-sm text-gray-600">Total Water Saved</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">
                      {userData.stats.lifetimeStats.energySaved}kWh
                    </div>
                    <div className="text-sm text-gray-600">Total Energy Saved</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {userData.stats.totalActivities}
                    </div>
                    <div className="text-sm text-gray-600">Activities Logged</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Personalized Recommendations
                </h2>

                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <RecommendationCard key={index} {...rec} />
                  ))}
                </div>
              </div>

              {todayData.activities.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">Today's Activities</h2>
                  <div className="space-y-3">
                    {todayData.activities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-green-50 rounded-lg"
                      >
                        <div>
                          <div className="font-medium text-gray-800">{activity.description}</div>
                          <div className="text-sm text-gray-600">
                            {activity.activityType === 'water'
                              ? `💧 ${convertUnit(activity.value, 'water', userData.settings.units)} saved`
                              : `${activity.activityType} • ${convertUnit(activity.impact, 'co2', userData.settings.units)} saved`}
                          </div>
                        </div>
                        <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                          +{activity.points} pts
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Daily Eco-Tasks
                </h2>
                <div className="space-y-3">
                  {dailyTasks.map(task => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      isCompleted={todayData.tasksCompleted.includes(task.id)}
                      onToggle={() => toggleTask(task.id)}
                    />
                  ))}
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg text-center">
                  <div className="text-sm text-gray-600">Today's Task Points</div>
                  <div className="text-lg font-bold text-emerald-600">
                    {dailyTasks
                      .filter(task => todayData.tasksCompleted.includes(task.id))
                      .reduce((sum, t) => sum + t.reward, 0)} pts
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <Trophy className="mr-2 h-5 w-5" />
                  Streak Stats
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Current Streak</span>
                    <span className="text-xl font-bold text-orange-500">
                      {userData.stats.currentStreak} days
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Longest Streak</span>
                    <span className="text-xl font-bold text-emerald-500">
                      {userData.stats.longestStreak} days
                    </span>
                  </div>
                  {userData.stats.currentStreak === 0 && (
                    <div className="text-sm text-gray-500 text-center mt-4 p-3 bg-yellow-50 rounded-lg">
                      💡 Log an eco-activity today to start your streak!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <Leaf className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to EcoPlay!</h2>
              <p className="text-gray-600 mb-4">Let's set up your profile to start tracking your eco journey</p>
            </div>
          </div>
        )}
      </div>

      {userData.profile.isProfileComplete && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 z-30"
        >
          <Plus className="h-6 w-6" />
        </button>
      )}

      {isProfileModalOpen && (
        <ProfileSetupModal
          onClose={() => setIsProfileModalOpen(false)}
          onSubmit={setupProfile}
          userData={userData}
        />
      )}

      {isModalOpen && <ActivityModal onClose={() => setIsModalOpen(false)} onSubmit={submitActivity} />}

      {isSettingsModalOpen && (
        <SettingsModal
          onClose={() => setIsSettingsModalOpen(false)}
          userData={userData}
          setUserData={setUserData}
        />
      )}

      <div className="fixed top-20 right-4 z-50 space-y-2">
        {notifications.map(notification => (
          <Notification key={notification.id} message={notification.message} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
