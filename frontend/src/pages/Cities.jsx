import React from "react";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import CityCards from "../components/CityCards";
import ErrorState from "../components/ErrorState";
import LoadingState from "../components/LoadingState";
import { getAirQualityRecords } from "../services/api";

const Cities = () => {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadCities = async () => {
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

    loadCities();
  }, []);

  const filteredRecords = useMemo(() => {
    const needle = search.trim().toLowerCase();

    if (!needle) return records;

    return records.filter((record) =>
      [record.city, record.country, record.status].some((value) => value.toLowerCase().includes(needle))
    );
  }, [records, search]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState />;

  return (
    <div className="space-y-lg">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-on-surface-variant" />
          <input
            className="input-field w-full pl-10"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search cities..."
          />
        </div>
      </div>

      <CityCards records={filteredRecords} />
    </div>
  );
};

export default Cities;
