import React, { useState, useEffect } from 'react';
import { Plus, CheckCircle, Circle, Trophy, Leaf, Droplets, Zap, Star, Target, Award, Users, TrendingUp } from 'lucide-react';

const EcoPlayApp = () => {
  // Initial user data state
  const [userData, setUserData] = useState({
    name: "EcoWarrior",
    streakDays: 12,
    ecoPoints: 1247,
    level: 5,
    dailyStats: {
      co2Saved: 2.3,
      waterSaved: 45,
      energySaved: 1.8
    },
    progress: {
      carbon: 65,
      water: 40,
      energy: 80
    },
    completedTasks: new Set(),
    activities: []
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // Daily tasks data
  const dailyTasks = [
    { id: 1, title: "Use reusable water bottle", description: "Replace single-use plastic", reward: 50, icon: "💧" },
    { id: 2, title: "Take public transport", description: "Reduce carbon emissions", reward: 75, icon: "🚌" },
    { id: 3, title: "Turn off lights when leaving", description: "Save energy", reward: 25, icon: "💡" },
    { id: 4, title: "Eat a plant-based meal", description: "Reduce food carbon footprint", reward: 60, icon: "🥗" }
  ];

  // Achievements data
  const achievements = [
    { id: 1, name: "First Week", icon: "🌟", unlocked: true },
    { id: 2, name: "Eco Commuter", icon: "🚲", unlocked: true },
    { id: 3, name: "Green Guardian", icon: "🌱", unlocked: false },
    { id: 4, name: "Diamond Tier", icon: "💎", unlocked: false }
  ];

  // Recommendations data
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

  // Notification system
  const showNotification = (message) => {
    const id = Date.now();
    const notification = { id, message };
    setNotifications(prev => [...prev, notification]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  // Task toggle function
  const toggleTask = (taskId) => {
    const isCompleted = userData.completedTasks.has(taskId);
    const task = dailyTasks.find(t => t.id === taskId);
    
    setUserData(prev => {
      const newCompletedTasks = new Set(prev.completedTasks);
      let newEcoPoints = prev.ecoPoints;
      
      if (isCompleted) {
        newCompletedTasks.delete(taskId);
        newEcoPoints -= task.reward;
      } else {
        newCompletedTasks.add(taskId);
        newEcoPoints += task.reward;
        showNotification(`Task completed! +${task.reward} EcoPoints 🏆`);
      }
      
      return {
        ...prev,
        completedTasks: newCompletedTasks,
        ecoPoints: newEcoPoints
      };
    });
  };

  // Activity submission
  const submitActivity = (activityData) => {
    const points = Math.round(activityData.impact * 20);
    
    setUserData(prev => ({
      ...prev,
      activities: [...prev.activities, {
        ...activityData,
        date: new Date().toISOString(),
        points
      }],
      dailyStats: {
        ...prev.dailyStats,
        co2Saved: prev.dailyStats.co2Saved + activityData.impact
      },
      ecoPoints: prev.ecoPoints + points
    }));
    
    showNotification(`Great job! You saved ${activityData.impact}kg CO₂ and earned ${points} EcoPoints! 🌱`);
    setIsModalOpen(false);
  };

  // Welcome notification on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      showNotification('Welcome back! Ready to make a difference today? 🌱');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">EcoPlay</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#dashboard" className="text-white hover:text-green-200 font-medium">Dashboard</a>
              <a href="#activities" className="text-white hover:text-green-200 font-medium">Activities</a>
              <a href="#challenges" className="text-white hover:text-green-200 font-medium">Challenges</a>
              <a href="#community" className="text-white hover:text-green-200 font-medium">Community</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                Level {userData.level}
              </div>
              <div className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full font-semibold">
                💎 {userData.ecoPoints.toLocaleString()}
              </div>
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                👤
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-emerald-600 mb-2">
                    Welcome back, {userData.name}! 🌍
                  </h1>
                  <p className="text-gray-600">You're making a difference, one action at a time.</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-4 rounded-xl text-center shadow-lg">
                  <div className="text-2xl font-bold">{userData.streakDays}</div>
                  <div className="text-sm">Day Streak</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatsCard
                  icon={<Leaf className="h-8 w-8 text-green-500" />}
                  value={`${userData.dailyStats.co2Saved}kg`}
                  label="CO₂ Saved Today"
                  color="green"
                />
                <StatsCard
                  icon={<Droplets className="h-8 w-8 text-blue-500" />}
                  value={`${userData.dailyStats.waterSaved}L`}
                  label="Water Conserved"
                  color="blue"
                />
                <StatsCard
                  icon={<Zap className="h-8 w-8 text-yellow-500" />}
                  value={`${userData.dailyStats.energySaved}kWh`}
                  label="Energy Saved"
                  color="yellow"
                />
              </div>
            </div>

            {/* Progress Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Your Environmental Impact
              </h2>
              
              <div className="space-y-6">
                <ProgressBar label="Carbon Reduction Goal" value={userData.progress.carbon} color="green" />
                <ProgressBar label="Water Conservation" value={userData.progress.water} color="blue" />
                <ProgressBar label="Energy Efficiency" value={userData.progress.energy} color="yellow" />
              </div>
            </div>

            {/* Recommendations */}
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
                    isCompleted={userData.completedTasks.has(task.id)}
                    onToggle={() => toggleTask(task.id)}
                  />
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Trophy className="mr-2 h-5 w-5" />
                Achievements
              </h2>
              
              <div className="grid grid-cols-2 gap-3">
                {achievements.map(achievement => (
                  <AchievementItem key={achievement.id} achievement={achievement} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 z-30"
      >
        <Plus className="h-6 w-6" />
      </button>

      {/* Activity Modal */}
      {isModalOpen && (
        <ActivityModal 
          onClose={() => setIsModalOpen(false)}
          onSubmit={submitActivity}
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

// Component: Stats Card
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

// Component: Progress Bar
const ProgressBar = ({ label, value, color }) => {
  const colorClasses = {
    green: 'from-emerald-500 to-green-600',
    blue: 'from-blue-500 to-blue-600',
    yellow: 'from-yellow-500 to-orange-500'
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-700">{label}</span>
        <span className="font-bold text-gray-800">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${colorClasses[color]} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: `${value}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

// Component: Task Item
const TaskItem = ({ task, isCompleted, onToggle }) => (
  <div 
    onClick={onToggle}
    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
      isCompleted 
        ? 'bg-green-50 border-2 border-green-200' 
        : 'bg-gray-50 border-2 border-transparent hover:border-green-200'
    }`}
  >
    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
      isCompleted 
        ? 'bg-green-500 border-green-500 text-white' 
        : 'border-gray-300'
    }`}>
      {isCompleted && <CheckCircle className="h-3 w-3" />}
    </div>
    
    <div className="flex-grow">
      <div className="font-medium text-gray-800">{task.title}</div>
      <div className="text-sm text-gray-600">{task.description}</div>
    </div>
    
    <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-lg text-xs font-semibold">
      +{task.reward} 🏆
    </div>
  </div>
);

// Component: Achievement Item
const AchievementItem = ({ achievement }) => (
  <div className={`p-3 rounded-lg text-center transition-all duration-200 ${
    achievement.unlocked 
      ? 'bg-green-50 border-2 border-green-200' 
      : 'bg-gray-50 border-2 border-gray-200'
  }`}>
    <div className="text-2xl mb-1">{achievement.icon}</div>
    <div className="text-xs font-medium text-gray-700">{achievement.name}</div>
  </div>
);

// Component: Recommendation Card
const RecommendationCard = ({ icon, title, description }) => (
  <div className="flex items-start gap-3 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
    <div className="text-xl">{icon}</div>
    <div>
      <div className="font-semibold text-gray-800">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{description}</div>
    </div>
  </div>
);

// Component: Activity Modal
const ActivityModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    activityType: '',
    description: '',
    impact: ''
  });

  const handleSubmit = () => {
    if (formData.activityType && formData.description && formData.impact) {
      onSubmit({
        ...formData,
        impact: parseFloat(formData.impact)
      });
      setFormData({ activityType: '', description: '', impact: '' });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
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
              onChange={(e) => setFormData({...formData, activityType: e.target.value})}
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
              onChange={(e) => setFormData({...formData, description: e.target.value})}
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
              onChange={(e) => setFormData({...formData, impact: e.target.value})}
              placeholder="0.0"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

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
              className="flex-1 py-3 px-4 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors"
            >
              Log Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component: Notification
const Notification = ({ message }) => (
  <div className="bg-emerald-500 text-white px-4 py-3 rounded-lg shadow-lg max-w-sm animate-slide-in">
    <div className="font-medium">{message}</div>
  </div>
);

export default EcoPlayApp;
