import React from "react";
import { RotateCcw, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import CityFilter from "../components/CityFilter";
import ErrorState from "../components/ErrorState";
import LoadingState from "../components/LoadingState";
import RecordsTable from "../components/RecordsTable";
import { getAirQualityRecords } from "../services/api";
import { statusOrder } from "../utils/airQuality";

const Records = () => {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadRecords = async () => {
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

    loadRecords();
  }, []);

  const filteredRecords = useMemo(() => {
    const needle = search.trim().toLowerCase();

    return records.filter((record) => {
      const matchesCity = city ? record.city === city : true;
      const matchesStatus = status ? record.status === status : true;
      const matchesSearch = needle
        ? [record.city, record.country, record.status].some((value) => value.toLowerCase().includes(needle))
        : true;

      return matchesCity && matchesStatus && matchesSearch;
    });
  }, [city, records, search, status]);

  const resetFilters = () => {
    setSearch("");
    setCity("");
    setStatus("");
  };

  if (loading) return <LoadingState />;
  if (error) return <ErrorState />;

  return (
    <div className="space-y-lg">
      <section className="card p-lg">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-end">
          <div className="min-w-0 flex-1">
            <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">Search Records</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-on-surface-variant" />
              <input
                className="input-field w-full pl-10"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by city, country, or status..."
              />
            </div>
          </div>

          <CityFilter records={records} value={city} onChange={setCity} />

          <div className="w-full md:w-64 xl:w-56">
            <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">Status</label>
            <select className="input-field w-full" value={status} onChange={(event) => setStatus(event.target.value)}>
              <option value="">All Statuses</option>
              {statusOrder.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-outline-variant bg-surface-container-lowest px-6 py-2.5 text-label-md text-on-surface transition hover:bg-surface" onClick={resetFilters}>
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>
      </section>

      <RecordsTable records={filteredRecords} />
    </div>
  );
};

export default Records;
