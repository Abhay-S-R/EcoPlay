// CO2 emission factors (in kg CO2 per unit)
const EMISSION_FACTORS = {
  transport: {
    car: 0.17, // kg CO2 per km
    bus: 0.089, // kg CO2 per km per person
    train: 0.041, // kg CO2 per km per person
    walk: 0,
    bike: 0
  },
  energy: {
    // kg CO2 per kWh based on average grid mix
    electricity: 0.385,
    naturalGas: 0.203
  },
  waste: {
    plastic: 6, // kg CO2 per kg plastic recycled
    paper: 0.95, // kg CO2 per kg paper recycled
    glass: 0.28 // kg CO2 per kg glass recycled
  },
  food: {
    meatMeal: 3.6, // kg CO2 per meal replaced
    dairyMeal: 1.9 // kg CO2 per meal replaced
  }
};

export const calculateTransportSavings = (mode, distance, baselineMode = 'car') => {
  const baselineEmissions = EMISSION_FACTORS.transport[baselineMode] * distance;
  const actualEmissions = EMISSION_FACTORS.transport[mode] * distance;
  return Math.max(0, baselineEmissions - actualEmissions);
};

export const calculateEnergySavings = (type, amount) => {
  return EMISSION_FACTORS.energy[type] * amount;
};

export const calculateWasteSavings = (type, amount) => {
  return EMISSION_FACTORS.waste[type] * amount;
};

export const calculateFoodSavings = (type) => {
  return EMISSION_FACTORS.food[type];
};

export const getActivityDetails = (type, subtype, value) => {
  let co2Saved = 0;
  let energySaved = 0;

  switch (type) {
    case 'transport':
      co2Saved = calculateTransportSavings(subtype, value);
      break;
    case 'energy':
      energySaved = value;
      co2Saved = calculateEnergySavings('electricity', value);
      break;
    case 'waste':
      co2Saved = calculateWasteSavings(subtype, value);
      break;
    case 'food':
      co2Saved = calculateFoodSavings(subtype);
      break;
  }

  return {
    co2Saved: Number(co2Saved.toFixed(2)),
    energySaved: Number(energySaved.toFixed(2))
  };
};
