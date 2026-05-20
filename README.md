# Air Quality Manufacturing Dashboard for African Cities with Alerts

A Basic Package MERN stack dashboard for monitoring air quality records across African cities. The frontend preserves the approved Stitch design direction: light environmental SaaS styling, fixed sidebar navigation, rounded cards, data tables, charts, city cards, and visual AQI alerts.

## Features

- Dashboard overview with summary cards, AQI charts, alerts, and recent records
- Database-backed air quality records
- Records search, city filter, status filter, and reset
- Analytics page with Recharts visualizations
- Alerts page for records where AQI is above 100
- Monitored cities page with searchable city cards
- Read-only system information page
- Loading, empty, and friendly error states
- Responsive layout for desktop, tablet, and mobile
- Deployment-ready frontend and backend environment configuration

## Tech Stack

- Frontend: React, Vite, JavaScript, Tailwind CSS, React Router DOM, Axios, Recharts, Lucide React
- Backend: Node.js, Express.js, MongoDB, Mongoose, CORS, dotenv, Nodemon
- Deployment targets: Vercel frontend, Render backend, MongoDB Atlas database

## Folder Structure

```text
AQM/
├── backend/
│   ├── src/
│   │   ├── config/db.js
│   │   ├── controllers/airQualityController.js
│   │   ├── models/AirQuality.js
│   │   ├── routes/airQualityRoutes.js
│   │   ├── seed/seedData.js
│   │   └── server.js
│   ├── .env.example
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env.example
│   ├── package.json
│   └── README.md
├── stitch_ecoair_africa_dashboard/
├── .gitignore
└── README.md
```

## Backend Setup

```powershell
cd C:\Users\goodl\Documents\AQM\backend
npm install
Copy-Item .env.example .env
npm run dev
```

Set `MONGO_URI` in `backend/.env` before running the API.

## Frontend Setup

```powershell
cd C:\Users\goodl\Documents\AQM\frontend
npm install
Copy-Item .env.example .env
npm run dev
```

## Environment Variables

Backend:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

Frontend:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## API Endpoints

- `GET /api/health`
- `GET /api/air-quality`
- `GET /api/air-quality/city/:city`
- `GET /api/air-quality/summary`
- `GET /api/air-quality/alerts`
- `POST /api/air-quality/seed`

## Seed Data

After the backend is running and connected to MongoDB:

```powershell
Invoke-RestMethod -Method Post http://localhost:5000/api/air-quality/seed
```

The seed endpoint clears old records before inserting the approved African city sample records.

## Build Checks

Frontend:

```powershell
cd C:\Users\goodl\Documents\AQM\frontend
npm run build
```

Backend:

```powershell
cd C:\Users\goodl\Documents\AQM\backend
npm start
```

## Deployment

Render backend environment variables:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
NODE_ENV=production
FRONTEND_URL=https://your-vercel-frontend-url.vercel.app
```

Vercel frontend environment variable:

```env
VITE_API_BASE_URL=https://your-render-backend-url.onrender.com/api
```

## Screenshots

Add screenshots after deployment or local QA.

## Live URLs

- Live frontend URL: `https://your-vercel-frontend-url.vercel.app`
- Live backend URL: `https://your-render-backend-url.onrender.com`
