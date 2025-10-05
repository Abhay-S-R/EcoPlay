import React from 'react';
import { CheckCircle } from 'lucide-react';

export const Notification = ({ message }) => {
  return (
    <div className="bg-white border border-emerald-200 shadow-lg rounded-lg p-4 max-w-sm animate-slide-in">
      <div className="flex items-center space-x-2">
        <CheckCircle className="h-5 w-5 text-emerald-500" />
        <span className="text-sm font-medium text-gray-800">{message}</span>
      </div>
    </div>
  );
};
