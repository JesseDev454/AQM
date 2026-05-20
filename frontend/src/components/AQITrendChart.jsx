import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { weeklyTrendData } from "../utils/airQuality";

const AQITrendChart = ({ title = "AQI Trend This Week" }) => (
  <div className="card p-lg">
    <h3 className="mb-6 text-title-lg font-semibold text-on-surface">{title}</h3>
    <div className="h-72 min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={weeklyTrendData} margin={{ top: 8, right: 8, left: -18, bottom: 8 }}>
          <CartesianGrid stroke="#dce2f3" vertical={false} />
          <YAxis tickLine={false} axisLine={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <Tooltip />
          <Area type="monotone" dataKey="aqi" stroke="#2170e4" strokeWidth={4} fill="#d8e2ff" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default AQITrendChart;
