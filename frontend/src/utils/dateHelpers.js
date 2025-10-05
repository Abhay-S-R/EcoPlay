export const getTodayString = () => new Date().toISOString().split('T')[0];

export const getTodayData = (dailyData) => {
  const today = getTodayString();
  const existing = dailyData.find(day => day.date === today);
  if (existing) return existing;
  return {
    date: today,
    co2Saved: 0,
    waterSaved: 0,
    energySaved: 0,
    activities: [],
    tasksCompleted: [],
    pointsEarned: 0
  };
};

export const calculateStreak = (dailyData) => {
  if (dailyData.length === 0) return 0;
  const sortedDays = [...dailyData].sort((a, b) => new Date(b.date) - new Date(a.date));
  let streak = 0;
  const today = new Date(getTodayString());
  for (let i = 0; i < sortedDays.length; i++) {
    const dayDate = new Date(sortedDays[i].date);
    const expectedDate = new Date(today);
    expectedDate.setDate(expectedDate.getDate() - i);
    if (dayDate.toDateString() === expectedDate.toDateString() && sortedDays[i].activities.length > 0) {
      streak++;
    } else break;
  }
  return streak;
};

export const calculateLevel = (totalPoints) => Math.floor(totalPoints / 500) + 1;
