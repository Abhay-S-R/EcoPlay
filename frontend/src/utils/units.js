// Unit conversion utilities

export const convertUnit = (value, type, units) => {
  if (units === "imperial") {
    switch (type) {
      case "co2":
        return `${(parseFloat(value) * 2.20462).toFixed(1)}lbs`;
      case "distance":
        return `${(parseFloat(value) * 0.621371).toFixed(1)}mi`;
      case "water":
        return `${(parseFloat(value) * 0.264172).toFixed(1)}gal`;
      default:
        return value;
    }
  }
  return type === "co2"
    ? `${value}kg`
    : type === "water"
    ? `${value}L`
    : type === "distance"
    ? `${value}km`
    : value;
};
