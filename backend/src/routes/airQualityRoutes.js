const express = require("express");
const {
  getAllRecords,
  getRecordsByCity,
  getSummary,
  getAlerts,
  seedRecords
} = require("../controllers/airQualityController");

const router = express.Router();

router.get("/", getAllRecords);
router.get("/summary", getSummary);
router.get("/alerts", getAlerts);
router.get("/city/:city", getRecordsByCity);
router.post("/seed", seedRecords);

module.exports = router;
