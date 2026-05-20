import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Alerts from "./pages/Alerts";
import Analytics from "./pages/Analytics";
import Cities from "./pages/Cities";
import Dashboard from "./pages/Dashboard";
import Records from "./pages/Records";
import Settings from "./pages/Settings";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="records" element={<Records />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="alerts" element={<Alerts />} />
      <Route path="cities" element={<Cities />} />
      <Route path="settings" element={<Settings />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);

export default App;
