import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

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

export default TaskItem;


