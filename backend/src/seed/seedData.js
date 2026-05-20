const getAQIStatus = (aqi) => {
  if (aqi <= 50) return "Good";
  if (aqi <= 100) return "Moderate";
  if (aqi <= 150) return "Unhealthy for Sensitive Groups";
  if (aqi <= 200) return "Unhealthy";
  if (aqi <= 300) return "Very Unhealthy";
  return "Hazardous";
};

const baseRecords = [
  {
    city: "Lagos",
    country: "Nigeria",
    aqi: 165,
    pm25: 72,
    pm10: 110,
    co: 1.4,
    no2: 38,
    so2: 12,
    o3: 25
  },
  {
    city: "Abuja",
    country: "Nigeria",
    aqi: 92,
    pm25: 35,
    pm10: 60,
    co: 0.8,
    no2: 22,
    so2: 8,
    o3: 18
  },
  {
    city: "Accra",
    country: "Ghana",
    aqi: 110,
    pm25: 42,
    pm10: 70,
    co: 0.9,
    no2: 25,
    so2: 9,
    o3: 20
  },
  {
    city: "Nairobi",
    country: "Kenya",
    aqi: 78,
    pm25: 28,
    pm10: 55,
    co: 0.6,
    no2: 18,
    so2: 6,
    o3: 16
  },
  {
    city: "Cairo",
    country: "Egypt",
    aqi: 185,
    pm25: 80,
    pm10: 125,
    co: 1.7,
    no2: 45,
    so2: 15,
    o3: 28
  },
  {
    city: "Johannesburg",
    country: "South Africa",
    aqi: 130,
    pm25: 50,
    pm10: 85,
    co: 1.1,
    no2: 30,
    so2: 10,
    o3: 22
  },
  {
    city: "Addis Ababa",
    country: "Ethiopia",
    aqi: 95,
    pm25: 36,
    pm10: 62,
    co: 0.8,
    no2: 24,
    so2: 7,
    o3: 17
  },
  {
    city: "Dakar",
    country: "Senegal",
    aqi: 70,
    pm25: 25,
    pm10: 48,
    co: 0.5,
    no2: 17,
    so2: 5,
    o3: 15
  },
  {
    city: "Kigali",
    country: "Rwanda",
    aqi: 45,
    pm25: 15,
    pm10: 30,
    co: 0.3,
    no2: 10,
    so2: 4,
    o3: 12
  },
  {
    city: "Casablanca",
    country: "Morocco",
    aqi: 105,
    pm25: 40,
    pm10: 68,
    co: 0.9,
    no2: 26,
    so2: 8,
    o3: 19
  }
];

const getSeedData = () => {
  const now = Date.now();

  return baseRecords.map((record, index) => ({
    ...record,
    status: getAQIStatus(record.aqi),
    recordedAt: new Date(now - index * 10 * 60 * 1000)
  }));
};

module.exports = {
  getAQIStatus,
  getSeedData
};
