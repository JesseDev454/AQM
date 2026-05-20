const AirQuality = require("../models/AirQuality");
const { getSeedData } = require("../seed/seedData");

const sendSuccess = (res, data, statusCode = 200, extra = {}) => {
  res.status(statusCode).json({
    status: "success",
    ...extra,
    data
  });
};

const getAllRecords = async (req, res, next) => {
  try {
    const records = await AirQuality.find().sort({ recordedAt: -1 });
    sendSuccess(res, records, 200, { results: records.length });
  } catch (error) {
    next(error);
  }
};

const getRecordsByCity = async (req, res, next) => {
  try {
    const city = String(req.params.city || "").trim();

    if (!city) {
      return sendSuccess(res, [], 200, { results: 0 });
    }

    const records = await AirQuality.find({
      city: { $regex: `^${city.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, $options: "i" }
    }).sort({ recordedAt: -1 });

    sendSuccess(res, records, 200, { results: records.length });
  } catch (error) {
    next(error);
  }
};

const getSummary = async (req, res, next) => {
  try {
    const records = await AirQuality.find();

    if (records.length === 0) {
      return sendSuccess(res, {
        totalCities: 0,
        averageAQI: 0,
        highestAQICity: null,
        highestAQI: 0,
        activeAlerts: 0,
        goodCities: 0,
        moderateCities: 0,
        sensitiveCities: 0,
        unhealthyCities: 0
      });
    }

    const totalAQI = records.reduce((sum, record) => sum + record.aqi, 0);
    const highest = records.reduce((top, record) => (record.aqi > top.aqi ? record : top), records[0]);

    sendSuccess(res, {
      totalCities: new Set(records.map((record) => record.city)).size,
      averageAQI: Math.round(totalAQI / records.length),
      highestAQICity: highest.city,
      highestAQI: highest.aqi,
      activeAlerts: records.filter((record) => record.aqi > 100).length,
      goodCities: records.filter((record) => record.status === "Good").length,
      moderateCities: records.filter((record) => record.status === "Moderate").length,
      sensitiveCities: records.filter((record) => record.status === "Unhealthy for Sensitive Groups").length,
      unhealthyCities: records.filter((record) => record.status === "Unhealthy").length
    });
  } catch (error) {
    next(error);
  }
};

const getAlerts = async (req, res, next) => {
  try {
    const alerts = await AirQuality.find({ aqi: { $gt: 100 } }).sort({ aqi: -1, recordedAt: -1 });
    sendSuccess(res, alerts, 200, { results: alerts.length });
  } catch (error) {
    next(error);
  }
};

const seedRecords = async (req, res, next) => {
  try {
    await AirQuality.deleteMany({});
    const records = await AirQuality.insertMany(getSeedData());

    sendSuccess(
      res,
      records,
      201,
      {
        results: records.length,
        message: "Air quality sample records seeded successfully"
      }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllRecords,
  getRecordsByCity,
  getSummary,
  getAlerts,
  seedRecords
};
