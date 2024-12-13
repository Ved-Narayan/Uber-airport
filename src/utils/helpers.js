export const generateUniqueId = () => 
    Math.random().toString(36).substr(2, 9);
  
  export const calculateFare = () => ({
    baseFare: 12.50,
    airportFee: 5.00,
    peakHourSurcharge: new Date().getHours() >= 16 ? 2.50 : 0,
    totalFare: 20.00
  });