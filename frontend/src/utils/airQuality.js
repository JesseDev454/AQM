export const statusOrder = [
  "Good",
  "Moderate",
  "Unhealthy for Sensitive Groups",
  "Unhealthy",
  "Very Unhealthy",
  "Hazardous"
];

export const getStatus = (aqi) => {
  if (aqi <= 50) return "Good";
  if (aqi <= 100) return "Moderate";
  if (aqi <= 150) return "Unhealthy for Sensitive Groups";
  if (aqi <= 200) return "Unhealthy";
  if (aqi <= 300) return "Very Unhealthy";
  return "Hazardous";
};

export const getStatusStyles = (status) => {
  const styles = {
    Good: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Moderate: "bg-yellow-100 text-yellow-700 border-yellow-200",
    "Unhealthy for Sensitive Groups": "bg-orange-100 text-orange-700 border-orange-200",
    Unhealthy: "bg-red-100 text-red-700 border-red-200",
    "Very Unhealthy": "bg-rose-100 text-rose-700 border-rose-200",
    Hazardous: "bg-purple-100 text-purple-800 border-purple-200"
  };

  return styles[status] || "bg-surface-container text-on-surface-variant border-outline-variant";
};

export const getAQIColor = (status) => {
  const colors = {
    Good: "#10b981",
    Moderate: "#fbbf24",
    "Unhealthy for Sensitive Groups": "#f97316",
    Unhealthy: "#ef4444",
    "Very Unhealthy": "#e11d48",
    Hazardous: "#7f1d1d"
  };

  return colors[status] || "#006c49";
};

export const formatDateTime = (value) => {
  if (!value) return "Not available";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
};

export const formatTimeAgo = (value) => {
  if (!value) return "Not available";

  const diff = Date.now() - new Date(value).getTime();
  const minutes = Math.max(0, Math.round(diff / 60000));

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} min ago`;

  const hours = Math.round(minutes / 60);
  return `${hours} hr${hours > 1 ? "s" : ""} ago`;
};

export const getMainPollutant = (record) => {
  const pollutants = [
    { label: "PM2.5", value: record.pm25 },
    { label: "PM10", value: record.pm10 },
    { label: "CO", value: record.co * 40 },
    { label: "NO2", value: record.no2 },
    { label: "SO2", value: record.so2 },
    { label: "O3", value: record.o3 }
  ];

  return pollutants.sort((a, b) => b.value - a.value)[0]?.label || "PM2.5";
};

export const weeklyTrendData = [
  { day: "Mon", aqi: 60 },
  { day: "Tue", aqi: 92 },
  { day: "Wed", aqi: 42 },
  { day: "Thu", aqi: 108 },
  { day: "Fri", aqi: 86 },
  { day: "Sat", aqi: 74 },
  { day: "Sun", aqi: 122 }
];
