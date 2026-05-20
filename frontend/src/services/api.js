import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000
});

const readData = (response) => response.data?.data ?? response.data;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    const canRetry = config && config.method === "get" && !config._retry;

    if (!canRetry) {
      return Promise.reject(error);
    }

    config._retry = true;
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return api(config);
  }
);

export const getHealth = async () => readData(await api.get("/health"));
export const getAirQualityRecords = async () => readData(await api.get("/air-quality"));
export const getAirQualityByCity = async (city) => readData(await api.get(`/air-quality/city/${encodeURIComponent(city)}`));
export const getSummary = async () => readData(await api.get("/air-quality/summary"));
export const getAlerts = async () => readData(await api.get("/air-quality/alerts"));
export const seedAirQualityData = async () => readData(await api.post("/air-quality/seed"));

export default api;
