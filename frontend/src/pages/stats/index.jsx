import React, { useState, useEffect } from 'react';
import { Leaf, TrendingUp, Calendar, CheckCircle, Target, Award, BarChart3, Clock, Flame, Star, ArrowLeft } from 'lucide-react';
import { loadUserData } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';

const StatsPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(() => {
    const savedData = loadUserData() || {
      stats: {
        currentStreak: 0,
        longestStreak: 0,
        totalEcoPoints: 0,
        level: 1
      },
      dailyData: []
    };

    // Get today's tasks
    const today = new Date().toISOString().split('T')[0];
    const todayData = savedData.dailyData.find(day => day.date === today) || { tasksCompleted: [] };
    
    // Calculate tasks stats
    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - 7);
    const monthStart = new Date();
    monthStart.setDate(monthStart.getDate() - 30);

    const weeklyTasks = savedData.dailyData
      .filter(day => new Date(day.date) >= weekStart)
      .reduce((sum, day) => sum + (day.tasksCompleted?.length || 0), 0);

    const monthlyTasks = savedData.dailyData
      .filter(day => new Date(day.date) >= monthStart)
      .reduce((sum, day) => sum + (day.tasksCompleted?.length || 0), 0);

    const totalTasks = savedData.dailyData
      .reduce((sum, day) => sum + (day.tasksCompleted?.length || 0), 0);

    // Calculate category statistics from activities
    const categoryStats = {
      transport: { completed: 0, points: 0 },
      energy: { completed: 0, points: 0 },
      water: { completed: 0, points: 0 },
      waste: { completed: 0, points: 0 }
    };

    savedData.dailyData.forEach(day => {
      day.activities?.forEach(activity => {
        if (categoryStats[activity.activityType]) {
          categoryStats[activity.activityType].completed++;
          categoryStats[activity.activityType].points += (activity.points || 0);
        }
      });
    });

    // Calculate monthly environmental impact
    const monthlyStats = savedData.dailyData
      .filter(day => new Date(day.date) >= monthStart)
      .reduce((stats, day) => ({
        co2Saved: stats.co2Saved + (day.co2Saved || 0),
        waterSaved: stats.waterSaved + (day.waterSaved || 0),
        energySaved: stats.energySaved + (day.energySaved || 0),
        treesEquivalent: (stats.co2Saved + (day.co2Saved || 0)) / 21.7 // Average tree absorbs 21.7kg CO2 per month
      }), {
        co2Saved: 0,
        waterSaved: 0,
        energySaved: 0,
        treesEquivalent: 0
      });

    // Calculate consistency score - percentage of days with activity in the last 30 days
    const last30DaysData = savedData.dailyData
      .filter(day => new Date(day.date) >= monthStart);

    const daysWithActivity = last30DaysData.filter(day =>
      (day.activities?.length > 0 || day.tasksCompleted?.length > 0)
    ).length;

    const totalDaysInPeriod = Math.min(30, Math.max(1, last30DaysData.length));
    const consistencyScore = Math.round((daysWithActivity / totalDaysInPeriod) * 100);

    // Calculate weekly consistency - last 7 days
    const weeklyConsistency = [];
    for (let i = 6; i >= 0; i--) {
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() - i);
      const dateString = targetDate.toISOString().split('T')[0];

      const dayData = savedData.dailyData.find(day => day.date === dateString);
      const hasActivity = dayData && (dayData.activities?.length > 0 || dayData.tasksCompleted?.length > 0);
      const activitiesCount = dayData ? (dayData.activities?.length || 0) + (dayData.tasksCompleted?.length || 0) : 0;

      // Scale: 0 activities = 0%, 1-2 = 40%, 3-4 = 70%, 5+ = 100%
      let dayScore = 0;
      if (activitiesCount === 0) dayScore = 0;
      else if (activitiesCount <= 2) dayScore = 40;
      else if (activitiesCount <= 4) dayScore = 70;
      else dayScore = 100;

      weeklyConsistency.push(dayScore);
    }

    return {
      name: "EcoWarrior",
      streakDays: savedData.stats.currentStreak,
      longestStreak: savedData.stats.longestStreak,
      ecoPoints: savedData.stats.totalEcoPoints,
      level: savedData.stats.level,
      categoryStats: categoryStats,
      totalTasksCompleted: Object.values(categoryStats).reduce((sum, cat) => sum + cat.completed, 0),
      weeklyTasksCompleted: weeklyTasks,
      monthlyTasksCompleted: monthlyTasks,
      consistencyScore: consistencyScore,
      weeklyConsistency: weeklyConsistency,
      monthlyStats: {
        co2Saved: Number(monthlyStats.co2Saved.toFixed(1)),
        waterSaved: Math.round(monthlyStats.waterSaved),
        energySaved: Number(monthlyStats.energySaved.toFixed(1)),
        treesEquivalent: Number(monthlyStats.treesEquivalent.toFixed(1))
      },
      achievements: [
        { name: "First Week", date: "2024-11-15", points: 100 },
        { name: "Eco Commuter", date: "2024-11-20", points: 200 },
        { name: "Water Saver", date: "2024-11-25", points: 150 },
        { name: "Green Guardian", date: "2024-12-01", points: 300 }
      ]
    };
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const savedData = loadUserData();
      if (savedData) {
        const categoryStats = {
          transport: { completed: 0, points: 0 },
          energy: { completed: 0, points: 0 },
          water: { completed: 0, points: 0 },
          waste: { completed: 0, points: 0 }
        };

        savedData.dailyData.forEach(day => {
          day.activities?.forEach(activity => {
            if (categoryStats[activity.activityType]) {
              categoryStats[activity.activityType].completed++;
              categoryStats[activity.activityType].points += (activity.points || 0);
            }
          });
        });

        // Calculate monthly environmental impact
        const monthStart = new Date();
        monthStart.setDate(monthStart.getDate() - 30);

        const monthlyStats = savedData.dailyData
          .filter(day => new Date(day.date) >= monthStart)
          .reduce((stats, day) => ({
            co2Saved: stats.co2Saved + (day.co2Saved || 0),
            waterSaved: stats.waterSaved + (day.waterSaved || 0),
            energySaved: stats.energySaved + (day.energySaved || 0),
            treesEquivalent: (stats.co2Saved + (day.co2Saved || 0)) / 21.7
          }), {
            co2Saved: 0,
            waterSaved: 0,
            energySaved: 0,
            treesEquivalent: 0
          });

        // Recalculate consistency score
        const last30DaysData = savedData.dailyData
          .filter(day => new Date(day.date) >= monthStart);

        const daysWithActivity = last30DaysData.filter(day =>
          (day.activities?.length > 0 || day.tasksCompleted?.length > 0)
        ).length;

        const totalDaysInPeriod = Math.min(30, Math.max(1, last30DaysData.length));
        const consistencyScore = Math.round((daysWithActivity / totalDaysInPeriod) * 100);

        // Recalculate weekly consistency
        const weeklyConsistency = [];
        for (let i = 6; i >= 0; i--) {
          const targetDate = new Date();
          targetDate.setDate(targetDate.getDate() - i);
          const dateString = targetDate.toISOString().split('T')[0];

          const dayData = savedData.dailyData.find(day => day.date === dateString);
          const activitiesCount = dayData ? (dayData.activities?.length || 0) + (dayData.tasksCompleted?.length || 0) : 0;

          let dayScore = 0;
          if (activitiesCount === 0) dayScore = 0;
          else if (activitiesCount <= 2) dayScore = 40;
          else if (activitiesCount <= 4) dayScore = 70;
          else dayScore = 100;

          weeklyConsistency.push(dayScore);
        }

        setUserData(prev => ({
          ...prev,
          categoryStats: categoryStats,
          totalTasksCompleted: Object.values(categoryStats).reduce((sum, cat) => sum + cat.completed, 0),
          consistencyScore: consistencyScore,
          weeklyConsistency: weeklyConsistency,
          monthlyStats: {
            co2Saved: Number(monthlyStats.co2Saved.toFixed(1)),
            waterSaved: Math.round(monthlyStats.waterSaved),
            energySaved: Number(monthlyStats.energySaved.toFixed(1)),
            treesEquivalent: Number(monthlyStats.treesEquivalent.toFixed(1))
          }
        }));
      }
    };

    // Listen for storage changes
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/dashboard')}
                className="text-white hover:text-green-200"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-white" />
                <span className="text-2xl font-bold text-white">EcoPlay Stats</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                Level {userData.level}
              </div>
              <div className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full font-semibold">
                💎 {userData.ecoPoints.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Stats */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Streak Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
              <h2 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center">
                <Flame className="mr-3 h-6 w-6" />
                Your Eco Streak 🔥
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-6 rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold mb-2">{userData.streakDays}</div>
                    <div className="text-lg">Current Streak</div>
                    <div className="text-sm opacity-90">Keep it going! 🚀</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold mb-2">{userData.longestStreak}</div>
                    <div className="text-lg">Longest Streak</div>
                    <div className="text-sm opacity-90">Personal Best! 🏆</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tasks Completed Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
              <h2 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center">
                <CheckCircle className="mr-3 h-6 w-6" />
                EcoTasks Completed
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <StatsCard
                  value={userData.weeklyTasksCompleted}
                  label="This Week"
                  color="green"
                  icon="📅"
                />
                <StatsCard
                  value={userData.monthlyTasksCompleted}
                  label="This Month"
                  color="blue"
                  icon="📊"
                />
                <StatsCard
                  value={userData.totalTasksCompleted}
                  label="All Time"
                  color="purple"
                  icon="🏆"
                />
              </div>

              {/* Category Breakdown */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Tasks by Category</h3>
                {Object.entries(userData.categoryStats).map(([category, stats]) => (
                  <CategoryStatsBar 
                    key={category}
                    category={category}
                    completed={stats.completed}
                    points={stats.points}
                    total={userData.totalTasksCompleted}
                  />
                ))}
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
              <h2 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center">
                <Leaf className="mr-3 h-6 w-6" />
                Your Environmental Impact This Month
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ImpactCard
                  value={`${userData.monthlyStats.co2Saved}kg`}
                  label="CO₂ Saved"
                  icon="🌱"
                  color="green"
                />
                <ImpactCard
                  value={`${userData.monthlyStats.waterSaved}L`}
                  label="Water Saved"
                  icon="💧"
                  color="blue"
                />
                <ImpactCard
                  value={`${userData.monthlyStats.energySaved}kWh`}
                  label="Energy Saved"
                  icon="⚡"
                  color="yellow"
                />
                <ImpactCard
                  value={`${userData.monthlyStats.treesEquivalent}`}
                  label="Trees Equivalent"
                  icon="🌳"
                  color="green"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Consistency & Achievements */}
          <div className="space-y-8">
            
            {/* Consistency Score */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
              <h2 className="text-xl font-bold text-emerald-600 mb-6 flex items-center">
                <Target className="mr-2 h-5 w-5" />
                Consistency Score
              </h2>
              
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#10b981"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - userData.consistencyScore / 100)}`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{userData.consistencyScore}%</div>
                      <div className="text-sm text-gray-600">Consistent</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly Consistency Chart */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-700">Weekly Consistency</h3>
                <div className="flex justify-between items-end h-24 bg-gray-50 rounded-lg p-3 gap-1">
                  {userData.weeklyConsistency.map((value, index) => (
                    <div key={index} className="flex flex-col items-center justify-end flex-1 space-y-1 h-full">
                      <div className="w-full flex flex-col justify-end items-center flex-1">
                        <div
                          className="bg-emerald-500 rounded-t w-full max-w-[24px] transition-all duration-500"
                          style={{ height: `${Math.min(value, 100)}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-600 whitespace-nowrap">{weekDays[index]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
              <h2 className="text-xl font-bold text-emerald-600 mb-6 flex items-center">
                <Award className="mr-2 h-5 w-5" />
                Recent Achievements
              </h2>
              
              <div className="space-y-3">
                {userData.achievements.map((achievement, index) => (
                  <AchievementItem key={index} achievement={achievement} />
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
              <h2 className="text-xl font-bold text-emerald-600 mb-6 flex items-center">
                <BarChart3 className="mr-2 h-5 w-5" />
                Quick Stats
              </h2>
              
              <div className="space-y-4">
                <QuickStatItem
                  icon="📈"
                  label="Average Daily Points"
                  value={Math.round(userData.ecoPoints / userData.streakDays)}
                />
                <QuickStatItem
                  icon="🎯"
                  label="Task Completion Rate"
                  value={`${Math.round((userData.weeklyTasksCompleted / 21) * 100)}%`}
                />
                <QuickStatItem
                  icon="⭐"
                  label="Weekly Goal Progress"
                  value={`${userData.weeklyTasksCompleted}/21`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stats Card Component
const StatsCard = ({ value, label, color, icon }) => {
  const colorClasses = {
    green: 'from-emerald-500 to-green-600',
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    yellow: 'from-yellow-500 to-orange-500'
  };

  return (
    <div className={`bg-gradient-to-r ${colorClasses[color]} text-white p-4 rounded-xl text-center shadow-lg transform hover:scale-105 transition-all duration-200`}>
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );
};

// Category Stats Bar Component
const CategoryStatsBar = ({ category, completed, points, total }) => {
  const categoryIcons = {
    transport: '🚗',
    energy: '⚡',
    water: '💧',
    waste: '🗑️'
  };

  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-3">
        <span className="text-xl">{categoryIcons[category]}</span>
        <div>
          <div className="font-semibold text-gray-800 capitalize">{category}</div>
          <div className="text-sm text-gray-600">{completed} tasks • {points} points</div>
        </div>
      </div>
    </div>
  );
};

// Impact Card Component
const ImpactCard = ({ value, label, icon, color }) => {
  const colorClasses = {
    green: 'border-green-200 hover:border-green-300',
    blue: 'border-blue-200 hover:border-blue-300',
    yellow: 'border-yellow-200 hover:border-yellow-300'
  };

  return (
    <div className={`bg-gray-50 p-4 rounded-xl text-center border-2 ${colorClasses[color]} hover:shadow-md transition-all duration-200 transform hover:-translate-y-1`}>
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-xl font-bold text-gray-800">{value}</div>
      <div className="text-xs text-gray-600">{label}</div>
    </div>
  );
};

// Achievement Item Component
const AchievementItem = ({ achievement }) => (
  <div className="flex items-center justify-between p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
    <div className="flex items-center space-x-3">
      <Star className="h-5 w-5 text-yellow-500" />
      <div>
        <div className="font-semibold text-gray-800">{achievement.name}</div>
        <div className="text-sm text-gray-600">{achievement.date}</div>
      </div>
    </div>
    <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-lg text-xs font-semibold">
      +{achievement.points}
    </div>
  </div>
);

const QuickStatItem = ({ icon, label, value }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <span className="text-lg">{icon}</span>
      <span className="text-gray-700">{label}</span>
    </div>
    <span className="font-bold text-emerald-600">{value}</span>
  </div>
);

export default StatsPage;
