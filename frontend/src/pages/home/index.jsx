import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, TreePine, Globe, Users, Badge, CheckCircle, Moon, Sun } from 'lucide-react';

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

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

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
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
      >
        {darkMode ? <Sun className="w-6 h-6 text-yellow-300" /> : <Moon className="w-6 h-6 text-gray-700" />}
      </button>

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

export default HomePage;


