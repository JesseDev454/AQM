import React from "react";
import { AlertCircle, Gauge, ShieldAlert, Siren } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import AlertsPanel from "../components/AlertsPanel";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import LoadingState from "../components/LoadingState";
import { getAlerts } from "../services/api";

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadAlerts = async () => {
      try {
        setLoading(true);
        setError(false);
        setAlerts(await getAlerts());
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadAlerts();
  }, []);

  const summary = useMemo(() => ({
    total: alerts.length,
    unhealthy: alerts.filter((record) => record.status === "Unhealthy").length,
    sensitive: alerts.filter((record) => record.status === "Unhealthy for Sensitive Groups").length,
    hazardous: alerts.filter((record) => record.status === "Hazardous").length
  }), [alerts]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState />;

  const cards = [
    { label: "Total Alerts", value: summary.total, detail: "Active across network", icon: Gauge, className: "bg-surface-container-lowest text-on-surface" },
    { label: "Unhealthy", value: summary.unhealthy, detail: "AQI 151 - 200", icon: AlertCircle, className: "border-error/20 bg-error-container/40 text-on-error-container" },
    { label: "Sensitive Groups", value: summary.sensitive, detail: "AQI 101 - 150", icon: ShieldAlert, className: "bg-secondary-fixed/40 text-on-surface" },
    { label: "Hazardous", value: summary.hazardous, detail: "AQI > 300", icon: Siren, className: "border-dashed bg-surface-container-lowest text-on-surface-variant" }
  ];

  return (
    <div className="space-y-lg">
      <section className="grid grid-cols-1 gap-md md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.label} className={`card flex h-36 flex-col justify-between p-lg ${card.className}`}>
              <div className="flex items-start justify-between gap-4">
                <span className="text-label-md uppercase tracking-wider">{card.label}</span>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex items-end gap-3">
                <span className="text-headline-lg font-bold leading-none">{card.value}</span>
                <span className="mb-1 text-label-sm">{card.detail}</span>
              </div>
            </div>
          );
        })}
      </section>

      <section className="grid grid-cols-1 gap-lg xl:grid-cols-12">
        <div className="xl:col-span-8">
          <h3 className="mb-4 text-title-lg font-semibold text-on-surface">Active Incidents</h3>
          {alerts.length ? <AlertsPanel alerts={alerts} /> : <EmptyState message="No active alerts." />}
        </div>
        <aside className="space-y-lg xl:col-span-4">
          <div className="card p-lg">
            <h3 className="mb-4 text-title-lg font-semibold text-on-surface">AQI Alert Rule</h3>
            <p className="text-body-md text-on-surface-variant">
              Visual alerts are triggered whenever a MongoDB air quality record has an AQI reading above 100.
            </p>
            <div className="mt-6 rounded-lg border border-outline-variant bg-secondary-fixed p-4">
              <p className="text-label-md uppercase tracking-wider text-on-surface-variant">Current Threshold</p>
              <div className="mt-3 h-2 rounded-full bg-surface-container-high">
                <div className="h-full w-1/2 rounded-full bg-primary" />
              </div>
              <p className="mt-2 text-title-lg font-bold text-on-surface">100 AQI</p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Alerts;
