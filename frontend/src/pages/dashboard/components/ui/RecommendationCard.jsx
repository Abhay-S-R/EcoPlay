export const RecommendationCard = ({ icon, title, description }) => (
  <div className="flex items-start gap-3 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
    <div className="text-xl">{icon}</div>
    <div>
      <div className="font-semibold text-gray-800">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{description}</div>
    </div>
  </div>
);
