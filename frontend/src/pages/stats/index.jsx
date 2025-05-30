import React, { useState, useEffect } from 'react';
import { Leaf, TrendingUp, Calendar, CheckCircle, Target, Award, BarChart3, Clock, Flame, Star, ArrowLeft } from 'lucide-react';

const StatsPage = () => {
  const [userData, setUserData] = useState({
    name: "EcoWarrior",
    streakDays: 12,
    longestStreak: 25,
    ecoPoints: 1247,
    level: 5,
    totalTasksCompleted: 87,
    weeklyTasksCompleted: 15,
    monthlyTasksCompleted: 52,
    consistencyScore: 78,
    weeklyConsistency: [85, 92, 76, 88, 90, 82, 78],
    monthlyStats: {
      co2Saved: 45.6,
      waterSaved: 890,
      energySaved: 32.4,
      treesEquivalent: 2.1
    },
    categoryStats: {
      transport: { completed: 25, points: 1875 },
      energy: { completed: 18, points: 900 },
      water: { completed: 22, points: 1320 },
      food: { completed: 15, points: 1125 },
      waste: { completed: 7, points: 525 }
    },
    achievements: [
      { name: "First Week", date: "2024-11-15", points: 100 },
      { name: "Eco Commuter", date: "2024-11-20", points: 200 },
      { name: "Water Saver", date: "2024-11-25", points: 150 },
      { name: "Green Guardian", date: "2024-12-01", points: 300 }
    ]
  });

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-green-200">
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
                Tasks Completed
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
                <div className="flex justify-between items-end h-20 bg-gray-50 rounded-lg p-3">
                  {userData.weeklyConsistency.map((value, index) => (
                    <div key={index} className="flex flex-col items-center space-y-1">
                      <div 
                        className="bg-emerald-500 rounded-t w-6 transition-all duration-500"
                        style={{ height: `${(value / 100) * 60}px` }}
                      ></div>
                      <div className="text-xs text-gray-600">{weekDays[index]}</div>
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
  const percentage = (completed / total) * 100;
  const categoryIcons = {
    transport: '🚗',
    energy: '⚡',
    water: '💧',
    food: '🥗',
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
      <div className="flex items-center space-x-2">
        <div className="w-16 bg-gray-200 rounded-full h-2">
          <div 
            className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="text-sm font-semibold text-gray-700">{Math.round(percentage)}%</span>
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