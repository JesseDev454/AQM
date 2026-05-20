# AQM Africa Backend

This is the API for the AQM Africa dashboard. It connects to MongoDB and returns air quality records to the React frontend.

## What It Does

- Connects to MongoDB with Mongoose
- Stores air quality records
- Returns all records
- Returns records by city
- Calculates dashboard summary data
- Returns visual alerts for AQI above `100`
- Seeds the database with sample African city records

## Setup

```powershell
npm install
Copy-Item .env.example .env
```

Update `.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## Run Locally

```powershell
npm run dev
```

The API runs on:

```text
http://localhost:5000
```

## Seed Data

Run this after the backend is connected to MongoDB:

```powershell
Invoke-RestMethod -Method Post http://localhost:5000/api/air-quality/seed
```

The seed route clears old records and inserts the sample records again.

## API Routes

```text
GET  /api/health
GET  /api/air-quality
GET  /api/air-quality/city/:city
GET  /api/air-quality/summary
GET  /api/air-quality/alerts
POST /api/air-quality/seed
```

## Production Environment

Use these on Render:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
NODE_ENV=production
FRONTEND_URL=https://aqm-sigma.vercel.app
```

If the frontend shows a CORS error, check that `FRONTEND_URL` exactly matches the Vercel frontend URL.
