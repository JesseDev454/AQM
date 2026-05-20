import React from "react";
import { formatDateTime, getStatusStyles } from "../utils/airQuality";
import EmptyState from "./EmptyState";

const RecordsTable = ({ records = [], compact = false }) => {
  if (!records.length) {
    return <EmptyState />;
  }

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead>
            <tr className="border-b border-surface-variant bg-surface text-label-md uppercase tracking-wider text-on-surface-variant">
              <th className="p-4 font-medium">City</th>
              {!compact && <th className="p-4 font-medium">Country</th>}
              <th className="p-4 font-medium">AQI</th>
              {!compact && <th className="p-4 font-medium">PM2.5</th>}
              {!compact && <th className="p-4 font-medium">PM10</th>}
              {!compact && <th className="p-4 font-medium">CO</th>}
              {!compact && <th className="p-4 font-medium">NO2</th>}
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Recorded At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-variant bg-surface-container-lowest text-body-md">
            {records.map((record) => (
              <tr key={record._id || `${record.city}-${record.recordedAt}`} className="h-12 hover:bg-surface">
                <td className="p-4 font-medium text-on-surface">{record.city}</td>
                {!compact && <td className="p-4 text-on-surface-variant">{record.country}</td>}
                <td className="p-4 font-semibold text-on-surface">{record.aqi}</td>
                {!compact && <td className="p-4 text-on-surface-variant">{record.pm25}</td>}
                {!compact && <td className="p-4 text-on-surface-variant">{record.pm10}</td>}
                {!compact && <td className="p-4 text-on-surface-variant">{record.co}</td>}
                {!compact && <td className="p-4 text-on-surface-variant">{record.no2}</td>}
                <td className="p-4">
                  <span className={`inline-flex rounded-full border px-2.5 py-1 text-label-sm ${getStatusStyles(record.status)}`}>
                    {record.status === "Unhealthy for Sensitive Groups" ? "Sensitive" : record.status}
                  </span>
                </td>
                <td className="p-4 text-on-surface-variant">{formatDateTime(record.recordedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordsTable;
