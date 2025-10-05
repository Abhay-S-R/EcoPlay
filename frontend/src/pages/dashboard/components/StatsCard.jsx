import React from 'react';
import { convertUnit } from '../../../utils/units';

const StatsCard = ({ icon, value, label, color, units }) => {
  const matches = value.match(/^([\d.]+)(.+)$/);
  if (matches) {
    const [, num, unit] = matches;
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

export default StatsCard;


