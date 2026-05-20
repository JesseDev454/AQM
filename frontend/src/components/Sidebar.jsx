import React from "react";
import { NavLink } from "react-router-dom";
import { Activity, AlertTriangle, BarChart3, Building2, Database, LayoutDashboard, Settings, Wind, X } from "lucide-react";

const navItems = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard },
  { label: "Records", to: "/records", icon: Database },
  { label: "Analytics", to: "/analytics", icon: BarChart3 },
  { label: "Alerts", to: "/alerts", icon: AlertTriangle },
  { label: "Cities", to: "/cities", icon: Building2 },
  { label: "Settings", to: "/settings", icon: Settings }
];

const Sidebar = ({ isOpen = false, onClose = () => {} }) => {
  const content = (
    <aside className="flex h-full w-64 flex-col border-r border-outline-variant bg-surface px-sm py-md">
      <div className="mb-8 flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container text-on-primary-container">
            <Wind className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-title-lg font-bold text-primary">AQM Africa</h1>
            <p className="text-label-sm uppercase tracking-widest text-on-surface-variant">Monitoring Suite</p>
          </div>
        </div>
        <button className="rounded-lg p-2 text-on-surface-variant hover:bg-surface-container-high lg:hidden" onClick={onClose} aria-label="Close navigation">
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 text-body-md transition-all ${
                  isActive
                    ? "scale-[0.98] bg-primary-container font-bold text-on-primary-container"
                    : "text-on-surface-variant hover:bg-surface-container-high hover:text-primary"
                }`
              }
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-outline-variant px-4 py-4 text-label-sm text-on-surface-variant">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" />
          Basic Package Build
        </div>
      </div>
    </aside>
  );

  return (
    <>
      <div className="fixed left-0 top-0 z-40 hidden h-screen lg:block">{content}</div>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button className="absolute inset-0 bg-on-surface/30" onClick={onClose} aria-label="Close navigation overlay" />
          <div className="relative h-full w-64 shadow-xl">{content}</div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
