import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AQIComparisonChart from "../components/AQIComparisonChart";
import AQITrendChart from "../components/AQITrendChart";
import AlertsPanel from "../components/AlertsPanel";
import CityFilter from "../components/CityFilter";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import LoadingState from "../components/LoadingState";
import PollutantBreakdown from "../components/PollutantBreakdown";
import RecordsTable from "../components/RecordsTable";
import SummaryCards from "../components/SummaryCards";
import { getAirQualityRecords, getAlerts, getSummary } from "../services/api";

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const [summary, setSummary] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);
        setError(false);
        const [summaryData, recordsData, alertsData] = await Promise.all([
          getSummary(),
          getAirQualityRecords(),
          getAlerts()
        ]);

        setSummary(summaryData);
        setRecords(recordsData);
        setAlerts(alertsData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  const filteredRecords = useMemo(
    () => (city ? records.filter((record) => record.city === city) : records),
    [city, records]
  );
  const filteredAlerts = useMemo(
    () => (city ? alerts.filter((alert) => alert.city === city) : alerts),
    [alerts, city]
  );
  const recentRecords = filteredRecords.slice(0, 4);
  const pollutantRecord = filteredRecords[0] || records[0];

  if (loading) return <LoadingState />;
  if (error) return <ErrorState />;
  if (!records.length) return <EmptyState />;

  return (
    <div className="space-y-gutter">
      <SummaryCards summary={summary} />

      <section className="grid grid-cols-1 gap-lg xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="mb-4 flex justify-end">
            <CityFilter records={records} value={city} onChange={setCity} label="Dashboard City Filter" />
          </div>
          <AQIComparisonChart records={filteredRecords} />
        </div>
        <AQITrendChart title="Regional Trend (7 Days)" />
      </section>

      <section className="grid grid-cols-1 gap-lg xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-title-lg font-semibold text-on-surface">Active Alerts</h3>
            <Link to="/alerts" className="text-label-md font-semibold text-primary hover:underline">View All</Link>
          </div>
          <AlertsPanel alerts={filteredAlerts} preview />
        </div>
        <PollutantBreakdown record={pollutantRecord} title="Pollutant Breakdown Preview" />
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between gap-4">
          <h3 className="text-title-lg font-semibold text-on-surface">Recent Records</h3>
          <Link to="/records" className="text-label-md font-semibold text-primary hover:underline">View Database</Link>
        </div>
        <RecordsTable records={recentRecords} compact />
      </section>
    </div>
  );
};

export default Dashboard;
