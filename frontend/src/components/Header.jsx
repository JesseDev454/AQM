import React from "react";
import { Bell, CheckCircle2, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

const pageMeta = {
  "/": {
    title: "Air Quality Dashboard",
    subtitle: "Monitoring air quality across African cities"
  },
  "/records": {
    title: "Air Quality Records",
    subtitle: "View and filter air quality readings stored in the database."
  },
  "/analytics": {
    title: "Air Quality Analytics",
    subtitle: "Visual insights into AQI levels and pollutant trends across African cities."
  },
  "/alerts": {
    title: "Active Air Quality Alerts",
    subtitle: "Cities with unhealthy or risky air quality levels requiring immediate attention."
  },
  "/cities": {
    title: "Monitored Cities",
    subtitle: "Overview of African cities currently tracked by the system."
  },
  "/settings": {
    title: "System Settings",
    subtitle: "Basic system information and AQI monitoring configuration."
  }
};

const Header = ({ onOpenSidebar, apiOnline, alertCount }) => {
  const location = useLocation();
  const meta = pageMeta[location.pathname] || pageMeta["/"];

  return (
    <header className="sticky top-0 z-30 border-b border-outline-variant/40 bg-background/95 px-md py-4 backdrop-blur md:px-gutter">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-start gap-3">
          <button className="mt-1 rounded-lg border border-outline-variant bg-surface-container-lowest p-2 text-on-surface-variant hover:bg-surface-container-high lg:hidden" onClick={onOpenSidebar} aria-label="Open navigation">
            <Menu className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <h2 className="break-words text-headline-md font-bold text-on-surface md:text-headline-lg">{meta.title}</h2>
            <p className="mt-1 text-body-md text-on-surface-variant">{meta.subtitle}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 md:justify-end">
          <div className="flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-low px-3 py-1 text-label-md">
            <span className={`h-2 w-2 rounded-full ${apiOnline ? "bg-primary-container" : "bg-error"}`} />
            <span className="text-on-surface-variant">{apiOnline ? "Live database connected" : "Database offline"}</span>
          </div>
          <div className="hidden items-center gap-2 text-label-md text-on-surface-variant md:flex">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Updated: Today
          </div>
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-primary">
            <Bell className="h-5 w-5" />
            {alertCount > 0 && <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-background bg-error" />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
