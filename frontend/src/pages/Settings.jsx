import React, { useEffect, useState } from "react";
import ErrorState from "../components/ErrorState";
import LoadingState from "../components/LoadingState";
import SettingsInfoCards from "../components/SettingsInfoCards";
import { getAirQualityRecords, getHealth } from "../services/api";
import { formatDateTime } from "../utils/airQuality";

const Settings = () => {
  const [apiOnline, setApiOnline] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("Not available");
  const [loading, setLoading] = useState(true);
  const [hardError, setHardError] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        setLoading(true);

        try {
          await getHealth();
          setApiOnline(true);
        } catch {
          setApiOnline(false);
        }

        try {
          const records = await getAirQualityRecords();
          if (records.length) {
            setLastUpdated(formatDateTime(records[0].recordedAt));
          }
        } catch {
          setHardError(false);
        }
      } catch {
        setHardError(true);
      } finally {
        setLoading(false);
      }
    };

    loadSettings();
  }, []);

  if (loading) return <LoadingState />;
  if (hardError) return <ErrorState />;

  return <SettingsInfoCards apiOnline={apiOnline} lastUpdated={lastUpdated} />;
};

export default Settings;
