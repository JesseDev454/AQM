import React from "react";
import { Wind } from "lucide-react";
import { formatTimeAgo, getMainPollutant, getStatusStyles } from "../utils/airQuality";
import EmptyState from "./EmptyState";

const CityCards = ({ records = [] }) => {
  if (!records.length) {
    return <EmptyState message="No cities found." />;
  }

  return (
    <div className="grid grid-cols-1 gap-lg md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {records.map((record) => (
        <article key={record._id || record.city} className="card flex min-h-64 flex-col justify-between p-lg transition-shadow hover:shadow-[0_4px_12px_rgba(0,108,73,0.05)]">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="break-words text-title-lg font-semibold text-on-surface">{record.city}</h3>
              <p className="text-body-md text-on-surface-variant">{record.country}</p>
            </div>
            <span className={`shrink-0 rounded-full border px-2.5 py-1 text-label-sm ${getStatusStyles(record.status)}`}>
              {record.status === "Unhealthy for Sensitive Groups" ? "Sensitive" : record.status}
            </span>
          </div>
          <div className="mb-5 flex items-end gap-2">
            <span className="text-display-lg font-bold text-on-surface">{record.aqi}</span>
            <span className="mb-2 text-body-md text-on-surface-variant">AQI</span>
          </div>
          <div className="mt-auto flex items-center justify-between border-t border-surface-variant pt-4 text-label-sm text-tertiary">
            <div className="flex items-center gap-1">
              <Wind className="h-4 w-4" />
              <span>{getMainPollutant(record)}</span>
            </div>
            <span>{formatTimeAgo(record.recordedAt)}</span>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CityCards;
