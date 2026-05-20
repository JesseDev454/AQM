import React from "react";
import { AlertTriangle, Building2, Megaphone, TrendingUp, Wind } from "lucide-react";
import { getStatus, getStatusStyles } from "../utils/airQuality";

const SummaryCards = ({ summary }) => {
  const averageStatus = getStatus(summary?.averageAQI || 0);
  const highestStatus = getStatus(summary?.highestAQI || 0);
  const cards = [
    {
      label: "Total Cities Monitored",
      value: summary?.totalCities ?? 0,
      icon: Building2,
      iconClass: "text-primary bg-surface-container-low"
    },
    {
      label: "Average AQI",
      value: summary?.averageAQI ?? 0,
      icon: Wind,
      iconClass: "text-secondary bg-surface-container-low",
      badge: averageStatus
    },
    {
      label: `Highest AQI${summary?.highestAQICity ? ` (${summary.highestAQICity})` : ""}`,
      value: summary?.highestAQI ?? 0,
      icon: TrendingUp,
      iconClass: "text-on-error-container bg-error-container",
      badge: highestStatus
    },
    {
      label: "Active Alerts",
      value: summary?.activeAlerts ?? 0,
      icon: Megaphone,
      iconClass: "text-error bg-surface-container-low"
    }
  ];

  return (
    <section className="grid grid-cols-1 gap-lg md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div key={card.label} className="card p-lg transition-shadow hover:shadow-[0_4px_12px_rgba(0,108,73,0.05)]">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className={`rounded-lg p-3 ${card.iconClass}`}>
                <Icon className="h-5 w-5" />
              </div>
              {card.badge && (
                <span className={`rounded-full border px-2.5 py-1 text-label-sm ${getStatusStyles(card.badge)}`}>
                  {card.badge === "Unhealthy for Sensitive Groups" ? "Sensitive" : card.badge}
                </span>
              )}
            </div>
            <p className="mb-1 text-body-md text-on-surface-variant">{card.label}</p>
            <h3 className="text-headline-lg font-bold text-on-surface">{card.value}</h3>
          </div>
        );
      })}
    </section>
  );
};

export default SummaryCards;
