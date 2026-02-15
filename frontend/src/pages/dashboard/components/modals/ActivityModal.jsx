import React, { useState } from 'react';
import { getActivityDetails } from '../../../../utils/co2Calculator';

const activitySubTypes = {
  water: [
    { value: 'shortShower', label: '🚿 Short Shower (5 mins)' },
    { value: 'bucketWash', label: '🪣 Bucket vs Hose' },
    { value: 'rainwater', label: '☔ Rainwater Collection' }
  ],
  transport: [
    { value: 'walk', label: '🚶 Walking' },
    { value: 'bike', label: '🚲 Cycling' },
    { value: 'bus', label: '🚌 Bus' },
    { value: 'train', label: '🚂 Train' }
  ],
  energy: [
    { value: 'electricity', label: '💡 Electricity' },
    { value: 'naturalGas', label: '🔥 Natural Gas' }
  ],
  waste: [
    { value: 'plastic', label: '♻️ Plastic Recycling' },
    { value: 'paper', label: '📄 Paper Recycling' },
    { value: 'glass', label: '🍶 Glass Recycling' }
  ]
};

const activityLabels = {
  transport: 'Distance (km)',
  energy: 'Energy Saved (kWh)',
  waste: 'Amount (kg)',
  water: 'Amount (L)'
};

export const ActivityModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    activityType: '',
    subType: '',
    value: '',
    description: '',
    impact: 0,
    waterAmount: 0,
    energyAmount: 0
  });

  const getSubTypes = (activityType) => activitySubTypes[activityType] || [];
  const getValueLabel = (activityType) => activityLabels[activityType] || 'Value';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };

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
