# AQM Africa Frontend

This is the React dashboard for the AQM Africa air quality app. It gets data from the backend API and displays it in pages, cards, charts, tables, and alert panels.

## What It Shows

- Dashboard overview
- Air quality records
- Analytics charts
- Active alerts
- Monitored cities
- System information

## Setup

```powershell
npm install
Copy-Item .env.example .env
```

Update `.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## Run Locally

```powershell
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Pages

```text
/          Dashboard overview
/records   Air quality records and filters
/analytics AQI charts and pollutant breakdown
/alerts    Active AQI alerts
/cities    Monitored city cards
/settings  Basic system information
```

## Production Environment

Use this on Vercel:

```env
VITE_API_BASE_URL=https://aqm-q6f5.onrender.com/api
```

## Build

```powershell
npm run build
```

The production build is created in the `dist` folder.
