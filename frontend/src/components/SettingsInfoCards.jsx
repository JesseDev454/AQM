import React from "react";
import { BellRing, Database, Info, Server, SlidersHorizontal, RefreshCcw } from "lucide-react";

const thresholds = [
  ["0 - 50", "Good", "Air quality is satisfactory.", "bg-primary-container"],
  ["51 - 100", "Moderate", "Acceptable quality.", "bg-yellow-400"],
  ["101 - 150", "Sensitive", "Unhealthy for sensitive groups.", "bg-orange-500"],
  ["151 - 200", "Unhealthy", "General public may experience health effects.", "bg-red-500"],
  ["201 - 300", "Very Unhealthy", "Everyone may experience more serious health effects.", "bg-purple-500"],
  ["301+", "Hazardous", "Health warnings of emergency conditions.", "bg-red-900"]
];

const SettingsInfoCards = ({ apiOnline = false, lastUpdated = "Not available" }) => (
  <div className="grid grid-cols-1 gap-lg xl:grid-cols-12">
    <section className="card p-lg xl:col-span-4">
      <div className="mb-6 flex items-center gap-3">
        <Server className="h-6 w-6 text-primary" />
        <h3 className="text-title-lg font-semibold text-on-surface">System Status</h3>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-surface-variant pb-3">
          <span className="text-on-surface-variant">Application Status</span>
          <span className="flex items-center gap-2 font-semibold text-primary"><span className="h-2 w-2 rounded-full bg-primary-container" />Online</span>
        </div>
        <div className="flex items-center justify-between border-b border-surface-variant pb-3">
          <span className="text-on-surface-variant">Database Status</span>
          <span className={`flex items-center gap-2 font-semibold ${apiOnline ? "text-primary" : "text-error"}`}>
            <span className={`h-2 w-2 rounded-full ${apiOnline ? "bg-primary-container" : "bg-error"}`} />
            {apiOnline ? "Connected" : "Offline"}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-surface-variant pb-3">
          <span className="text-on-surface-variant">Data Source</span>
          <span className="rounded-full bg-surface-container-high px-3 py-1 text-label-md text-on-surface">MongoDB Records</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-on-surface-variant">Environment</span>
          <span className="rounded-full bg-surface-container-high px-3 py-1 text-label-md text-on-surface">Production Ready</span>
        </div>
      </div>
    </section>

    <section className="card p-lg xl:col-span-8">
      <div className="mb-6 flex items-center gap-3">
        <SlidersHorizontal className="h-6 w-6 text-secondary" />
        <h3 className="text-title-lg font-semibold text-on-surface">AQI Alert Thresholds</h3>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {thresholds.map(([range, title, text, dotClass]) => (
          <div key={range} className="rounded-lg border border-outline-variant bg-surface p-4">
            <div className="mb-3 flex items-start justify-between gap-3">
              <span className="text-label-md text-on-surface-variant">{range}</span>
              <span className={`h-3 w-3 rounded-full ${dotClass}`} />
            </div>
            <h4 className="text-title-lg font-semibold text-on-surface">{title}</h4>
            <p className="mt-1 text-label-sm text-on-surface-variant">{text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="card p-lg xl:col-span-6">
      <div className="mb-4 flex items-center gap-3">
        <BellRing className="h-6 w-6 text-error" />
        <h3 className="text-title-lg font-semibold text-on-surface">AQI Alert Rule</h3>
      </div>
      <div className="flex min-h-52 items-center justify-center rounded-lg border border-error/20 bg-error-container/30 p-6 text-center">
        <div>
          <p className="text-body-lg text-on-surface">Visual alerts appear when AQI is above</p>
          <p className="mt-2 text-display-lg font-bold text-error">100</p>
        </div>
      </div>
    </section>

    <section className="grid grid-cols-1 gap-lg xl:col-span-6">
      <div className="card p-lg">
        <div className="mb-4 flex items-center gap-3">
          <RefreshCcw className="h-6 w-6 text-primary" />
          <h3 className="text-title-lg font-semibold text-on-surface">Refresh Type</h3>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-label-md text-on-surface-variant">Manual/API Fetch</p>
            <p className="text-title-lg font-semibold text-on-surface">Last Updated: {lastUpdated}</p>
          </div>
          <span className="rounded-lg bg-surface-container-high px-3 py-2 text-label-md text-on-surface-variant">Read-only system info</span>
        </div>
      </div>

      <div className="card p-lg">
        <div className="mb-4 flex items-center gap-3">
          <Info className="h-6 w-6 text-tertiary" />
          <h3 className="text-title-lg font-semibold text-on-surface">About This System</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {["MERN Stack", "React", "Express/Node", "MongoDB", "Recharts", "Tailwind CSS"].map((item) => (
            <span key={item} className="rounded-full border border-outline-variant bg-surface px-3 py-1 text-label-md text-on-surface-variant">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="card p-lg">
        <div className="mb-4 flex items-center gap-3">
          <Database className="h-6 w-6 text-secondary" />
          <h3 className="text-title-lg font-semibold text-on-surface">Database Integration</h3>
        </div>
        <p className="text-body-md text-on-surface-variant">Air quality records are fetched from MongoDB through the Express API.</p>
      </div>
    </section>
  </div>
);

export default SettingsInfoCards;
