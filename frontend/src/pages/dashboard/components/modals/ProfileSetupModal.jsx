import { useState } from 'react';
import { User } from 'lucide-react';

export const ProfileSetupModal = ({ onClose, onSubmit, userData }) => {
  const [formData, setFormData] = useState({
    name: userData?.profile?.name || '',
    email: userData?.profile?.email || ''
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
            {userData?.profile?.isProfileComplete && (
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
              {userData?.profile?.isProfileComplete ? 'Update Profile' : 'Start My Journey'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
