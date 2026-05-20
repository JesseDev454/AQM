import React from "react";
import { Leaf, TrendingUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import AQIComparisonChart from "../components/AQIComparisonChart";
import AQITrendChart from "../components/AQITrendChart";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import LoadingState from "../components/LoadingState";
import PollutantBreakdown from "../components/PollutantBreakdown";
import { getAirQualityRecords } from "../services/api";

const Analytics = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadAnalytics = async () => {
      try {
        setLoading(true);
        setError(false);
        setRecords(await getAirQualityRecords());
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadAnalytics();
  }, []);

  const insights = useMemo(() => {
    if (!records.length) return null;

    const highest = records.reduce((top, record) => (record.aqi > top.aqi ? record : top), records[0]);
    const cleanest = records.reduce((best, record) => (record.aqi < best.aqi ? record : best), records[0]);
    const statusCounts = records.reduce((counts, record) => {
      counts[record.status] = (counts[record.status] || 0) + 1;
      return counts;
    }, {});
    const mostCommon = Object.entries(statusCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "Moderate";

    return { highest, cleanest, mostCommon };
  }, [records]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState />;
  if (!records.length) return <EmptyState />;

  return (
    <div className="grid grid-cols-1 gap-lg xl:grid-cols-12">
      <div className="xl:col-span-8">
        <AQIComparisonChart records={records} title="AQI Comparison Across Cities" />
      </div>

      <aside className="card p-lg xl:col-span-4">
        <h3 className="mb-6 text-title-lg font-semibold text-on-surface">Key Insights</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 rounded-lg border border-error-container bg-error-container/25 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-error/10 text-error">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <p className="text-label-md uppercase tracking-wider text-on-surface-variant">Highest Pollution</p>
              <p className="text-title-lg font-bold text-on-surface">{insights.highest.city} <span className="ml-2 text-body-md font-normal text-error">{insights.highest.aqi} AQI</span></p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg border border-primary-container/20 bg-primary-container/10 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container/20 text-primary">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <p className="text-label-md uppercase tracking-wider text-on-surface-variant">Cleanest City</p>
              <p className="text-title-lg font-bold text-on-surface">{insights.cleanest.city} <span className="ml-2 text-body-md font-normal text-primary">{insights.cleanest.aqi} AQI</span></p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-surface-container p-4">
              <p className="mb-1 text-label-md text-on-surface-variant">Most Common</p>
              <p className="text-title-lg font-bold text-on-surface">{insights.mostCommon === "Unhealthy for Sensitive Groups" ? "Sensitive" : insights.mostCommon}</p>
            </div>
            <div className="rounded-lg bg-surface-container p-4">
              <p className="mb-1 text-label-md text-on-surface-variant">Alert Threshold</p>
              <p className="text-title-lg font-bold text-on-surface">100 AQI</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="xl:col-span-7">
        <AQITrendChart />
      </div>
      <div className="xl:col-span-5">
        <PollutantBreakdown record={insights.highest} />
      </div>
    </div>
  );
};

export default Analytics;
