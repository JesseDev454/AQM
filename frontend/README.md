# AQM Africa Frontend

React, Vite, Tailwind CSS, Recharts, Axios, React Router, and Lucide React frontend for the Basic Package air quality dashboard.

## Install

```powershell
npm install
Copy-Item .env.example .env
```

## Run

```powershell
npm run dev
```

## Build

```powershell
npm run build
```

## Environment Variables

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

For Vercel production:

```env
VITE_API_BASE_URL=https://your-render-backend-url.onrender.com/api
```

## Pages And Routes

- `/` - Dashboard overview
- `/records` - Air quality records table with search and filters
- `/analytics` - AQI charts, trend, pollutant breakdown, and insights
- `/alerts` - Active visual alerts for AQI above 100
- `/cities` - Monitored African city cards
- `/settings` - Read-only system information

The visual design is based on the approved Stitch export in `stitch_ecoair_africa_dashboard`.
