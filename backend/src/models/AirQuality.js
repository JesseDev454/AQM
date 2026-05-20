const mongoose = require("mongoose");

const airQualitySchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
      trim: true
    },
    country: {
      type: String,
      required: true,
      trim: true
    },
    aqi: {
      type: Number,
      required: true,
      min: 0
    },
    pm25: {
      type: Number,
      required: true,
      min: 0
    },
    pm10: {
      type: Number,
      required: true,
      min: 0
    },
    co: {
      type: Number,
      required: true,
      min: 0
    },
    no2: {
      type: Number,
      required: true,
      min: 0
    },
    so2: {
      type: Number,
      required: true,
      min: 0
    },
    o3: {
      type: Number,
      required: true,
      min: 0
    },
    status: {
      type: String,
      required: true,
      enum: [
        "Good",
        "Moderate",
        "Unhealthy for Sensitive Groups",
        "Unhealthy",
        "Very Unhealthy",
        "Hazardous"
      ]
    },
    recordedAt: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("AirQuality", airQualitySchema);
