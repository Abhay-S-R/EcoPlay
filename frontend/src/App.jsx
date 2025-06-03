import React, { useState, useEffect } from 'react';
import {
  Plus,
  CheckCircle,
  Circle,
  Trophy,
  Leaf,
  Droplets,
  Zap,
  TrendingUp,
  User,
  Target,
  Globe,
  Users,
  TreePine,
  Badge,
  Moon,
  Sun,
  Settings
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getActivityDetails } from './utils/co2Calculator';
import { saveUserData, loadUserData, clearUserData } from './utils/storage';
import { TreeProvider } from './context/TreeContext';
import EcoGarden3D from './pages/base';
import EcoPlayShop from './pages/shop';
import StatsPage from './pages/stats';

// --------------------
// Component: Homepage
// --------------------
const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen dark-mode-transition ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100'}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
      >
        {darkMode ? <Sun className="w-6 h-6 text-yellow-300" /> : <Moon className="w-6 h-6 text-gray-700" />}
      </button>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 ${darkMode ? 'bg-emerald-900/20' : 'bg-gradient-to-br from-emerald-600/20 to-green-500/20'} z-0`} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <div className={`${darkMode ? 'bg-white/10' : 'bg-white/90'} backdrop-blur-sm p-3 rounded-full shadow-lg`}>
                <Leaf className={`h-12 w-12 ${darkMode ? 'text-emerald-400' : 'text-emerald-500'} animate-bounce`} />
              </div>
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Welcome to <span className="text-emerald-500">EcoPlay</span>
            </h1>
            <p className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Turn your everyday eco-friendly actions into a rewarding journey.
              Track, compete, and make a real impact on our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-8 py-4 rounded-full bg-emerald-500 text-white font-semibold text-lg shadow-lg hover:bg-emerald-600 transform hover:scale-105 transition-all duration-200"
              >
                Start Your Eco Journey →
              </Link>
              <a
                href="#learn-more"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-emerald-600 font-semibold text-lg shadow-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
              >
                Learn More ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div id="learn-more" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
              Why Choose EcoPlay?
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Gamified sustainability that makes a real difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards with updated styling */}
            <FeatureCard
              icon={<TreePine className="h-8 w-8" />}
              title="Virtual Garden"
              description="Watch your garden grow as you complete eco-friendly actions. Unlock new plants and customize your space."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8" />}
              title="Real Impact"
              description="Track your carbon footprint reduction and see the tangible impact of your daily choices."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Community"
              description="Join a community of eco-warriors, share achievements, and participate in group challenges."
            />
            <FeatureCard
              icon={<Badge className="h-8 w-8" />}
              title="Achievements"
              description="Earn badges and rewards for consistent eco-friendly actions and milestone accomplishments."
            />
            <FeatureCard
              icon={<CheckCircle className="h-8 w-8" />}
              title="Daily Tasks"
              description="Complete simple daily tasks that contribute to a healthier planet and earn points."
            />
            <FeatureCard
              icon={<Leaf className="h-8 w-8" />}
              title="Progress Tracking"
              description="Visualize your journey with detailed statistics and progress reports."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`${darkMode ? 'bg-gradient-to-br from-emerald-800 to-green-900' : 'bg-gradient-to-br from-emerald-600 to-green-500'} py-20`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-emerald-50 mb-12">
            Join thousands of eco-warriors who are already making our planet greener,
            one action at a time.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-emerald-600 font-semibold text-lg shadow-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-200"
          >
            Get Started Now →
          </Link>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, description }) => {
  const darkMode = document.documentElement.classList.contains('dark');
  return (
    <div className={`${
      darkMode 
        ? 'bg-gray-800/95 hover:bg-gray-700/95 border-gray-700' 
        : 'bg-white/95 hover:bg-gray-50/95 border-emerald-100'
    } backdrop-blur-sm rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-200 hover:shadow-xl border`}>
      <div className="text-emerald-500 mb-4">{icon}</div>
      <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-2`}>{title}</h3>
      <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{description}</p>
    </div>
  );
};

// --------------------
// Component: Dashboard
// --------------------
const EcoPlayApp = () => {
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

  // Save data whenever it changes
  useEffect(() => {
    if (userData.profile.isProfileComplete) {
      saveUserData(userData);
    }
  }, [userData]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const navigate = useNavigate();

  // Daily tasks data
  const dailyTasks = [
    { id: 1, title: "Use reusable water bottle", description: "Replace single-use plastic", reward: 50, category: "waste" },
    { id: 2, title: "Take public transport", description: "Reduce carbon emissions", reward: 75, category: "transport" },
    { id: 3, title: "Turn off lights when leaving", description: "Save energy", reward: 25, category: "energy" },
    { id: 4, title: "Eat a plant-based meal", description: "Reduce food carbon footprint", reward: 60, category: "food" }
  ];

  // Add recommendations data
  const recommendations = [
    {
      icon: "🚗",
      title: "Try carpooling twice this week",
      description: "Based on your commute data, this could save 12kg CO₂"
    },
    {
      icon: "🥗",
      title: "Add 2 plant-based meals",
      description: "Your meat consumption is above average. Try our recipe suggestions!"
    },
    {
      icon: "💡",
      title: "Unplug devices when not in use",
      description: "Phantom energy use could be costing you 0.5kWh daily"
    }
  ];

  // Helper: today's date string
  const getTodayString = () => new Date().toISOString().split('T')[0];

  // Helper: retrieve or create today record
  const getTodayData = () => {
    const today = getTodayString();
    const existing = userData.dailyData.find(day => day.date === today);
    if (existing) return existing;
    return {
      date: today,
      co2Saved: 0,
      waterSaved: 0,
      energySaved: 0,
      activities: [],
      tasksCompleted: [],
      pointsEarned: 0
    };
  };

  // Calculate streak
  const calculateStreak = (dailyData) => {
    if (dailyData.length === 0) return 0;
    const sortedDays = [...dailyData].sort((a, b) => new Date(b.date) - new Date(a.date));
    let streak = 0;
    const today = new Date(getTodayString());
    for (let i = 0; i < sortedDays.length; i++) {
      const dayDate = new Date(sortedDays[i].date);
      const expectedDate = new Date(today);
      expectedDate.setDate(expectedDate.getDate() - i);
      if (dayDate.toDateString() === expectedDate.toDateString() && sortedDays[i].activities.length > 0) {
        streak++;
      } else break;
    }
    return streak;
  };

  // Calculate level
  const calculateLevel = (totalPoints) => Math.floor(totalPoints / 500) + 1;

  // Notifications (deduplicated)
  const showNotification = (message) => {
    setNotifications(prev => {
      // prevent duplicate messages in short time
      if (prev.some(n => n.message === message)) return prev;
      const id = Date.now();
      return [...prev, { id, message }];
    });
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.message !== message));
    }, 3000);
  };

  // Profile setup
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

  // Toggle daily task
  const toggleTask = (taskId) => {
    const today = getTodayString();
    const task = dailyTasks.find(t => t.id === taskId);

    setUserData(prev => {
      const updatedDailyData = [...prev.dailyData];
      const todayIndex = updatedDailyData.findIndex(day => day.date === today);
      let todayRecord = todayIndex >= 0
        ? { ...updatedDailyData[todayIndex] }
        : {
            date: today,
            co2Saved: 0,
            waterSaved: 0,
            energySaved: 0,
            activities: [],
            tasksCompleted: [],
            pointsEarned: 0
          };

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

      // Calculate new stats
      const newTotalPoints = updatedDailyData.reduce((sum, day) => sum + day.pointsEarned, 0);
      const newStreak = calculateStreak(updatedDailyData);

      // Show notification only when completing a task
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

  // Submit custom activity
  const submitActivity = (activityData) => {
    const today = getTodayString();
    // Calculate points: 20 points per liter of water saved
    const points = activityData.activityType === 'water' 
      ? Math.round(parseFloat(activityData.value) * 20) 
      : Math.round(activityData.impact * 20);

    setUserData(prev => {
      const updatedDailyData = [...prev.dailyData];
      const todayIndex = updatedDailyData.findIndex(day => day.date === today);
      let todayRecord = todayIndex >= 0
        ? { ...updatedDailyData[todayIndex] }
        : {
            date: today,
            co2Saved: 0,
            waterSaved: 0,
            energySaved: 0,
            activities: [],
            tasksCompleted: [],
            pointsEarned: 0
          };

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

        // Update impact metrics based on activity type
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

      // Calculate lifetime stats
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
          lifetimeStats // Update lifetime stats directly
        }
      };
    });

    setIsModalOpen(false);
  };

  // Show profile setup on mount
  useEffect(() => {
    if (!userData.profile.isProfileComplete) {
      const timer = setTimeout(() => {
        setIsProfileModalOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [userData.profile.isProfileComplete]);

  const todayData = getTodayData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">EcoPlay</span>
            </Link>
            {/* Navigation Links */}
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {userData.profile.isProfileComplete ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Welcome Card */}
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

                {/* Today's Stats Grid */}
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

              {/* Lifetime Stats */}
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

              {/* Recommendations Section */}
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

              {/* Recent Activities */}
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

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Daily Tasks */}
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

              {/* Streak Info */}
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

      {/* Floating Action Button */}
      {userData.profile.isProfileComplete && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 z-30"
        >
          <Plus className="h-6 w-6" />
        </button>
      )}

      {/* Profile Setup Modal */}
      {isProfileModalOpen && (
        <ProfileSetupModal
          onClose={() => setIsProfileModalOpen(false)}
          onSubmit={setupProfile}
          userData={userData}
        />
      )}

      {/* Activity Modal */}
      {isModalOpen && <ActivityModal onClose={() => setIsModalOpen(false)} onSubmit={submitActivity} />}

      {/* Settings Modal */}
      {isSettingsModalOpen && (
        <SettingsModal
          onClose={() => setIsSettingsModalOpen(false)}
          userData={userData}
          setUserData={setUserData}
        />
      )}

      {/* Notifications */}
      <div className="fixed top-20 right-4 z-50 space-y-2">
        {notifications.map(notification => (
          <Notification key={notification.id} message={notification.message} />
        ))}
      </div>
    </div>
  );
};


// --------------------
// Subcomponents
// --------------------

// Profile Setup Modal
const ProfileSetupModal = ({ onClose, onSubmit, userData }) => {
  const [formData, setFormData] = useState({
    name: userData.profile.name || '',
    email: userData.profile.email || ''
  });

  const handleSubmit = () => {
    if (formData.name.trim()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
        <h2 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center">
          <User className="mr-2" />
          Set Up Your EcoPlay Profile
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email (Optional)
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-emerald-700 mb-2">🌱 Your Eco Journey Starts Here!</h3>
            <ul className="text-sm text-emerald-600 space-y-1">
              <li>• Track your daily eco-activities</li>
              <li>• Build streaks by consistent actions</li>
              <li>• Earn points and level up</li>
              <li>• Monitor your environmental impact</li>
            </ul>
          </div>

          <div className="flex gap-3 pt-4">
            {userData.profile.isProfileComplete && (
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            )}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!formData.name.trim()}
              className="flex-1 py-3 px-4 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {userData.profile.isProfileComplete ? 'Update Profile' : 'Start My Journey'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Activity Modal
const ActivityModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    activityType: '',
    subType: '',
    value: '',
    description: '',
    impact: 0,
    waterAmount: 0,
    energyAmount: 0
  });

  const getSubTypes = (activityType) => {
    switch (activityType) {
      case 'water':
        return [
          { value: 'shortShower', label: '🚿 Short Shower (5 mins)' },
          { value: 'bucketWash', label: '🪣 Bucket vs Hose' },
          { value: 'rainwater', label: '☔ Rainwater Collection' }
        ];
      case 'transport':
        return [
          { value: 'walk', label: '🚶 Walking' },
          { value: 'bike', label: '🚲 Cycling' },
          { value: 'bus', label: '🚌 Bus' },
          { value: 'train', label: '🚂 Train' }
        ];
      case 'energy':
        return [
          { value: 'electricity', label: '💡 Electricity' },
          { value: 'naturalGas', label: '🔥 Natural Gas' }
        ];
      case 'waste':
        return [
          { value: 'plastic', label: '♻️ Plastic Recycling' },
          { value: 'paper', label: '📄 Paper Recycling' },
          { value: 'glass', label: '🍶 Glass Recycling' }
        ];
      default:
        return [];
    }
  };

  const getValueLabel = (activityType) => {
    switch (activityType) {
      case 'transport': return 'Distance (km)';
      case 'energy': return 'Energy Saved (kWh)';
      case 'waste': return 'Amount (kg)';
      case 'water': return 'Amount (L)';
      default: return 'Value';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      
      // Calculate impact when all required fields are filled
      if (newData.activityType && newData.subType && newData.value) {
        const details = getActivityDetails(
          newData.activityType,
          newData.subType,
          parseFloat(newData.value)
        );
        newData.impact = details.co2Saved;
        newData.energyAmount = details.energySaved;
      }
      
      return newData;
    });
  };

  const handleSubmit = () => {
    if (formData.activityType && formData.subType && formData.value) {
      const description = `${formData.value} ${formData.activityType === 'transport' ? 'km' : 
        formData.activityType === 'energy' ? 'kWh' : 
        formData.activityType === 'waste' ? 'kg' : 'L'} - ${
        getSubTypes(formData.activityType).find(st => st.value === formData.subType)?.label
      }`;
      
      onSubmit({
        ...formData,
        description: formData.description || description
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
        <h2 className="text-2xl font-bold text-emerald-600 mb-6">Log Your Eco Activity</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Activity Type
            </label>
            <select
              name="activityType"
              value={formData.activityType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="">Select type...</option>
              <option value="transport">🚗 Transportation</option>
              <option value="energy">⚡ Energy Usage</option>
              <option value="water">💧 Water Conservation</option>
              <option value="waste">♻️ Waste Management</option>
            </select>
          </div>

          {formData.activityType && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Activity Details
              </label>
              <select
                name="subType"
                value={formData.subType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select specific activity...</option>
                {getSubTypes(formData.activityType).map(st => (
                  <option key={st.value} value={st.value}>{st.label}</option>
                ))}
              </select>
            </div>
          )}

          {formData.subType && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {getValueLabel(formData.activityType)}
              </label>
              <input
                type="number"
                name="value"
                value={formData.value}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                min="0"
                step="0.1"
              />
            </div>
          )}

          {formData.impact > 0 && (
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-700">Estimated Impact:</p>
              <p className="font-bold text-green-800">{formData.impact.toFixed(2)} kg CO₂ saved</p>
              {formData.energyAmount > 0 && (
                <p className="font-bold text-green-800">{formData.energyAmount.toFixed(2)} kWh saved</p>
              )}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!formData.activityType || !formData.subType || !formData.value}
              className="flex-1 py-3 px-4 bg-emerald-500 text-white rounded-lg disabled:bg-gray-300"
            >
              Log Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Settings Modal
const SettingsModal = ({ onClose, userData, setUserData }) => {
  const handleUnitChange = (e) => {
    const newUnits = e.target.value;
    setUserData(prev => ({
      ...prev,
      settings: { ...prev.settings, units: newUnits }
    }));
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This cannot be undone.')) {
      clearUserData();
      window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-emerald-600">Settings</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        <div className="space-y-8">
          {/* Units Selection */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Measurement Units</h3>
            <select
              value={userData.settings.units}
              onChange={handleUnitChange}
              className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="metric">Metric (kg, km)</option>
              <option value="imperial">Imperial (lbs, miles)</option>
            </select>
          </div>

          {/* Account Deletion */}
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Danger Zone</h3>
            <button 
              onClick={handleDeleteAccount}
              className="w-full py-3 px-4 bg-red-50 text-red-600 rounded-lg border border-red-200 hover:bg-red-100 transition-colors duration-200"
            >
              Delete Account
            </button>
            <p className="mt-2 text-sm text-gray-500">
              This action cannot be undone. All your data will be permanently deleted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this helper function near the top with other utility functions
const convertUnit = (value, type, units) => {
  if (units === 'imperial') {
    switch (type) {
      case 'co2':
        return `${(parseFloat(value) * 2.20462).toFixed(1)}lbs`; // kg to lbs
      case 'distance':
        return `${(parseFloat(value) * 0.621371).toFixed(1)}mi`; // km to miles
      case 'water':
        return `${(parseFloat(value) * 0.264172).toFixed(1)}gal`; // L to gal
      default:
        return value;
    }
  }
  // Metric values
  return type === 'co2' ? `${value}kg` : 
         type === 'water' ? `${value}L` : 
         type === 'distance' ? `${value}km` : value;
};

// Update StatsCard to handle unit conversion
const StatsCard = ({ icon, value, label, color, units }) => {
  // Extract numeric value and unit
  const matches = value.match(/^([\d.]+)(.+)$/);
  if (matches) {
    const [_, num, unit] = matches;
    if (unit === 'kg') {
      value = convertUnit(num, 'co2', units);
    } else if (unit === 'km') {
      value = convertUnit(num, 'distance', units);
    } else if (unit === 'L') {
      value = convertUnit(num, 'water', units);
    }
  }

  const colorClasses = {
    green: 'border-green-200 hover:border-green-300',
    blue: 'border-blue-200 hover:border-blue-300',
    yellow: 'border-yellow-200 hover:border-yellow-300'
  };

  return (
    <div className={`bg-gray-50 p-4 rounded-xl text-center border-2 ${colorClasses[color]} hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-1`}>
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

// Recommendation Card
const RecommendationCard = ({ icon, title, description }) => (
  <div className="flex items-start gap-3 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
    <div className="text-xl">{icon}</div>
    <div>
      <div className="font-semibold text-gray-800">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{description}</div>
    </div>
  </div>
);

// Task Item
const TaskItem = ({ task, isCompleted, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`p-3 rounded-lg border cursor-pointer transition-all ${
        isCompleted
          ? 'bg-emerald-50 border-emerald-200'
          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {isCompleted ? (
            <CheckCircle className="h-5 w-5 text-emerald-500" />
          ) : (
            <Circle className="h-5 w-5 text-gray-400" />
          )}
          <div>
            <div className={`font-medium ${isCompleted ? 'text-emerald-700' : 'text-gray-800'}`}>
              {task.title}
            </div>
            <div className="text-sm text-gray-600">{task.description}</div>
          </div>
        </div>
        <div className={`px-2 py-1 rounded text-xs font-semibold ${
          isCompleted
            ? 'bg-emerald-100 text-emerald-700'
            : 'bg-yellow-100 text-yellow-700'
        }`}>
          {isCompleted ? '✓' : '+'}{task.reward} pts
        </div>
      </div>
    </div>
  );
};

// Notification
const Notification = ({ message }) => {
  return (
    <div className="bg-white border border-emerald-200 shadow-lg rounded-lg p-4 max-w-sm animate-slide-in">
      <div className="flex items-center space-x-2">
        <CheckCircle className="h-5 w-5 text-emerald-500" />
        <span className="text-sm font-medium text-gray-800">{message}</span>
      </div>
    </div>
  );
};

// Export both components
export { HomePage, EcoPlayApp };

function App() {
  return (
    <TreeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Define the home route */}
            <Route path="/garden" element={<EcoGarden3D />} />
            <Route path="/shop" element={<EcoPlayShop />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
        </div>
      </Router>
    </TreeProvider>
  );
}

export default App;
