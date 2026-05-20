import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { getAlerts, getHealth } from "../services/api";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [apiOnline, setApiOnline] = useState(false);
  const [alertCount, setAlertCount] = useState(0);

  useEffect(() => {
    const loadShellState = async () => {
      try {
        await getHealth();
        setApiOnline(true);
      } catch {
        setApiOnline(false);
      }

      try {
        const alerts = await getAlerts();
        setAlertCount(Array.isArray(alerts) ? alerts.length : 0);
      } catch {
        setAlertCount(0);
      }
    };

    loadShellState();
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="min-h-screen lg:ml-64">
        <Header onOpenSidebar={() => setSidebarOpen(true)} apiOnline={apiOnline} alertCount={alertCount} />
        <main className="mx-auto w-full max-w-max_width px-md py-lg md:px-gutter">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
