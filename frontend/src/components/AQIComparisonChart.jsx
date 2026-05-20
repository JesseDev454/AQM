import React from "react";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getAQIColor } from "../utils/airQuality";

const AQIComparisonChart = ({ records = [], title = "City AQI Comparison" }) => {
  const data = records.map((record) => ({
    city: record.city,
    aqi: record.aqi,
    status: record.status
  }));

  return (
    <div className="card p-lg">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-title-lg font-semibold text-on-surface">{title}</h3>
        <span className="rounded-lg border border-outline-variant bg-surface px-3 py-2 text-body-md text-on-surface-variant">This Week</span>
      </div>
      <div className="h-72 min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 32 }}>
            <CartesianGrid stroke="#dce2f3" vertical={false} />
            <YAxis domain={[0, 220]} tickLine={false} axisLine={false} />
            <XAxis dataKey="city" tickLine={false} axisLine={false} interval={0} angle={-35} textAnchor="end" height={56} />
            <Tooltip cursor={{ fill: "#f0f3ff" }} />
            <Bar dataKey="aqi" radius={[6, 6, 0, 0]}>
              {data.map((entry) => (
                <Cell key={entry.city} fill={getAQIColor(entry.status)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AQIComparisonChart;
