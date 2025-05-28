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
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --------------------
// Component: Homepage
// --------------------
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-green-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-10 space-y-6">
        <h1 className="text-4xl font-bold text-emerald-700 text-center">
          Welcome to <span className="text-green-600">EcoPlay</span>
        </h1>
        <p className="text-gray-700 leading-relaxed">
          EcoPlay is your personal eco-dashboard designed to help you track, gamify, and improve your daily environmental impact. By logging simple activities like saving water, reducing energy use, or choosing sustainable transportation, you'll earn EcoPoints, build streaks, and visualize your cumulative impact over time.
        </p>
        <div className="flex items-center space-x-4">
          <Leaf className="h-10 w-10 text-green-500" />
          <h2 className="text-2xl font-semibold text-gray-800">Why Track Your Carbon Footprint?</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Awareness:</strong> Understand how daily choices affect CO₂ emissions.</li>
          <li><strong>Motivation:</strong> Earn points, level up, and compete with friends.</li>
          <li><strong>Consistency:</strong> Build healthy eco-habits via streaks and reminders.</li>
          <li><strong>Impact:</strong> See your lifetime savings in CO₂, water, and energy.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          By turning sustainable actions into a fun, interactive game, EcoPlay empowers you to make greener choices every day. Together, small changes add up to a big impact.
        </p>
        <div className="text-center">
          <Link
            to="/dashboard"
            className="inline-block bg-emerald-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-emerald-600 transition-colors"
          >
            Go to Dashboard ➔
          </Link>
        </div>
        <nav className="mt-8 border-t pt-6 flex justify-center space-x-8 text-gray-600">
          <Link to="/activities" className="hover:text-green-800">Activities</Link>
          <Link to="/challenges" className="hover:text-green-800">Challenges</Link>
          <Link to="/community" className="hover:text-green-800">Community</Link>
        </nav>
      </div>
    </div>
  );
};

// --------------------
// Component: Dashboard
// --------------------
const EcoPlayApp = () => {
  // Initialize fresh user profile
  const [userData, setUserData] = useState({
    profile: {
      name: "",
      email: "",
      joinDate: null,
      isProfileComplete: false
    },
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
    dailyData: [], // Array of daily records
    lastActivityDate: null
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

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
    const points = Math.round(activityData.impact * 20);

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

      // Add timestamp to make each activity unique
      const newActivity = {
        ...activityData,
        id: Date.now(), // Add unique ID
        timestamp: new Date().toISOString(),
        points
      };

      // Ensure no duplicate activities
      if (!todayRecord.activities.some(activity => 
        activity.description === newActivity.description && 
        activity.timestamp === newActivity.timestamp
      )) {
        todayRecord.activities.push(newActivity);
        todayRecord.co2Saved += activityData.impact;
        todayRecord.pointsEarned += points;

        if (activityData.activityType === 'water') {
          todayRecord.waterSaved += activityData.waterAmount || 0;
        }
        if (activityData.activityType === 'energy') {
          todayRecord.energySaved += activityData.energyAmount || 0;
        }
      }

      if (todayIndex >= 0) {
        updatedDailyData[todayIndex] = todayRecord;
      } else {
        updatedDailyData.push(todayRecord);
      }

      const newTotalPoints = updatedDailyData.reduce((sum, day) => sum + day.pointsEarned, 0);
      const newStreak = calculateStreak(updatedDailyData);
      const newTotalActivities = updatedDailyData.reduce((sum, day) => sum + day.activities.length, 0);

      showNotification(`Great job! You saved ${activityData.impact}kg CO₂ and earned ${points} EcoPoints! 🌱`);

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
          lifetimeStats: prev.stats.lifetimeStats
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
              <Link to="/activities" className="text-white hover:text-green-200 font-medium">Activities</Link>
              <Link to="/challenges" className="text-white hover:text-green-200 font-medium">Challenges</Link>
              <Link to="/community" className="text-white hover:text-green-200 font-medium">Community</Link>
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
                        : "Ready to start your eco journey? Log your first activity!"
                      }
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
                  />
                  <StatsCard
                    icon={<Droplets className="h-8 w-8 text-blue-500" />}
                    value={`${todayData.waterSaved}L`}
                    label="Water Conserved Today"
                    color="blue"
                  />
                  <StatsCard
                    icon={<Zap className="h-8 w-8 text-yellow-500" />}
                    value={`${todayData.energySaved}kWh`}
                    label="Energy Saved Today"
                    color="yellow"
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
                      {userData.stats.lifetimeStats.co2Saved.toFixed(1)}kg
                    </div>
                    <div className="text-sm text-gray-600">Total CO₂ Saved</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {userData.stats.lifetimeStats.waterSaved}L
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
                            {activity.activityType} • {activity.impact}kg CO₂ saved
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
    description: '',
    impact: '',
    waterAmount: '',
    energyAmount: ''
  });

  const handleSubmit = () => {
    if (formData.activityType && formData.description && formData.impact) {
      onSubmit({
        ...formData,
        impact: parseFloat(formData.impact),
        waterAmount: parseFloat(formData.waterAmount) || 0,
        energyAmount: parseFloat(formData.energyAmount) || 0
      });
      setFormData({ activityType: '', description: '', impact: '', waterAmount: '', energyAmount: '' });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl max-h-96 overflow-y-auto">
        <h2 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center">
          <Leaf className="mr-2" />
          Log Your Eco Activity
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Activity Type
            </label>
            <select
              value={formData.activityType}
              onChange={(e) => setFormData({ ...formData, activityType: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="">Select an activity...</option>
              <option value="transport">🚗 Transportation</option>
              <option value="energy">⚡ Energy Usage</option>
              <option value="water">💧 Water Usage</option>
              <option value="food">🥗 Food & Diet</option>
              <option value="waste">🗑️ Waste Management</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="e.g., Walked to work instead of driving"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Estimated CO₂ Impact (kg)
            </label>
            <input
              type="number"
              step="0.1"
              value={formData.impact}
              onChange={(e) => setFormData({ ...formData, impact: e.target.value })}
              placeholder="0.0"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {formData.activityType === 'water' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Water Saved (Liters)
              </label>
              <input
                type="number"
                step="0.1"
                value={formData.waterAmount}
                onChange={(e) => setFormData({ ...formData, waterAmount: e.target.value })}
                placeholder="0.0"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          )}

          {formData.activityType === 'energy' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Energy Saved (kWh)
              </label>
              <input
                type="number"
                step="0.1"
                value={formData.energyAmount}
                onChange={(e) => setFormData({ ...formData, energyAmount: e.target.value })}
                placeholder="0.0"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!formData.activityType || !formData.description || !formData.impact}
              className="flex-1 py-3 px-4 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Log Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stats Card
const StatsCard = ({ icon, value, label, color }) => {
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
