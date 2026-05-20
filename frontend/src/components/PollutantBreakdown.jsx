import React from "react";

const pollutantLabels = [
  ["pm25", "PM2.5", 100],
  ["pm10", "PM10", 150],
  ["co", "CO", 3],
  ["no2", "NO2", 70],
  ["so2", "SO2", 30],
  ["o3", "O3", 40]
];

const getLevel = (ratio) => {
  if (ratio >= 0.7) return { label: "High", bar: "bg-error", badge: "bg-red-100 text-red-700" };
  if (ratio >= 0.4) return { label: "Moderate", bar: "bg-yellow-500", badge: "bg-yellow-100 text-yellow-700" };
  return { label: "Normal", bar: "bg-primary-container", badge: "bg-emerald-100 text-emerald-700" };
};

const PollutantBreakdown = ({ record, title = "Pollutant Breakdown" }) => {
  const fallback = { pm25: 0, pm10: 0, co: 0, no2: 0, so2: 0, o3: 0 };
  const source = record || fallback;

  return (
    <div className="card p-lg">
      <h3 className="mb-6 text-title-lg font-semibold text-on-surface">{title}</h3>
      <div className="space-y-5">
        {pollutantLabels.map(([key, label, max]) => {
          const value = Number(source[key] || 0);
          const ratio = Math.min(value / max, 1);
          const level = getLevel(ratio);

          return (
            <div key={key}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="font-medium text-on-surface">{label}</span>
                <span className={`rounded-full px-2.5 py-1 text-label-sm ${level.badge}`}>{level.label}</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-secondary-fixed">
                <div className={`h-full rounded-full ${level.bar}`} style={{ width: `${Math.max(ratio * 100, 6)}%` }} />
              </div>
              <p className="mt-1 text-label-sm text-on-surface-variant">{value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PollutantBreakdown;
