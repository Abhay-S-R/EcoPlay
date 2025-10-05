import React from 'react';
import { clearUserData } from '../../utils/storage';

export const SettingsModal = ({ onClose, userData, setUserData }) => {
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
