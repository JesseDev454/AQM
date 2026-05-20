import React from "react";
import { AlertTriangle, Clock } from "lucide-react";
import { formatTimeAgo, getStatusStyles } from "../utils/airQuality";
import EmptyState from "./EmptyState";

const AlertsPanel = ({ alerts = [], preview = false }) => {
  const visibleAlerts = preview ? alerts.slice(0, 2) : alerts;

  if (!visibleAlerts.length) {
    return <EmptyState message="No active alerts." />;
  }

  return (
    <div className="space-y-4">
      {visibleAlerts.map((alert) => (
        <article key={alert._id || alert.city} className="card relative overflow-hidden border-error/30 p-lg transition-shadow hover:shadow-[0_8px_24px_rgba(186,26,26,0.08)]">
          <div className="absolute bottom-0 left-0 top-0 w-1 bg-error" />
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-error-container text-on-error-container">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h4 className="text-title-lg font-semibold text-on-surface">{alert.city}, {alert.country}</h4>
                <span className={`rounded-full border px-3 py-1 text-label-sm uppercase tracking-wider ${getStatusStyles(alert.status)}`}>
                  {alert.status === "Unhealthy for Sensitive Groups" ? "Sensitive Groups" : alert.status}
                </span>
              </div>
              <p className="text-body-md text-on-surface-variant">
                AQI is above the visual alert threshold of 100. Main pollutant levels should be monitored before outdoor activity.
              </p>
            </div>
            <div className="flex shrink-0 items-center justify-between gap-6 md:flex-col md:items-end md:border-l md:border-outline-variant md:pl-lg">
              <div className="text-right">
                <p className="text-label-sm text-on-surface-variant">Current AQI</p>
                <p className="text-headline-md font-bold text-error">{alert.aqi}</p>
              </div>
              <div className="flex items-center gap-1 text-label-sm text-on-surface-variant">
                <Clock className="h-4 w-4" />
                {formatTimeAgo(alert.recordedAt)}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default AlertsPanel;
