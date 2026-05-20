# AQM Africa Air Quality Dashboard

AQM Africa is a MERN stack dashboard for checking air quality records across African cities. It shows city AQI data, charts, records, alerts, and basic system information.

The app was built from the approved Stitch dashboard design in `stitch_ecoair_africa_dashboard`.

## How The App Works

The app has two parts:

- `backend` - the Express API that connects to MongoDB and sends air quality data.
- `frontend` - the React dashboard that displays the data from the API.

MongoDB stores the air quality records. The backend reads those records and returns them through API endpoints. The frontend uses Axios to call those endpoints and show the dashboard, charts, tables, city cards, and alerts.

Visual alerts appear when a city has an AQI above `100`.

## Main Features

- Dashboard overview
- Air quality records table
- Analytics charts
- Active AQI alerts
- Monitored city cards
- Basic system information page
- City filter
- Status filter
- Search
- Loading, empty, and error states
- Responsive layout for desktop and mobile

## Tech Stack

Frontend:

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- Recharts
- Lucide React

Backend:

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

Deployment:

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Project Structure

```text
AQM/
  backend/
    src/
      config/
      controllers/
      models/
      routes/
      seed/
      server.js
    .env.example
    package.json
    README.md

  frontend/
    src/
      components/
      pages/
      services/
      utils/
      App.jsx
      main.jsx
      index.css
    .env.example
    package.json
    README.md

  stitch_ecoair_africa_dashboard/
  README.md
```

## Backend Setup

Go to the backend folder:

```powershell
cd backend
npm install
Copy-Item .env.example .env
```

Add your MongoDB connection string to `backend/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

Start the backend:

```powershell
npm run dev
```

The backend should run on:

```text
http://localhost:5000
```

## Frontend Setup

Go to the frontend folder:

```powershell
cd frontend
npm install
Copy-Item .env.example .env
```

Set the API URL in `frontend/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Start the frontend:

```powershell
npm run dev
```

The frontend should run on:

```text
http://localhost:5173
```

## Seed The Database

After the backend is connected to MongoDB, run this once:

```powershell
Invoke-RestMethod -Method Post http://localhost:5000/api/air-quality/seed
```

This adds the sample African city air quality records to MongoDB. It clears old records first, so it will not duplicate records.

## API Endpoints

```text
GET  /api/health
GET  /api/air-quality
GET  /api/air-quality/city/:city
GET  /api/air-quality/summary
GET  /api/air-quality/alerts
POST /api/air-quality/seed
```

## Deployment Setup

Backend on Render:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
NODE_ENV=production
FRONTEND_URL=https://aqm-sigma.vercel.app
```

Frontend on Vercel:

```env
VITE_API_BASE_URL=https://aqm-q6f5.onrender.com/api
```

Important: `FRONTEND_URL` on Render must match the Vercel frontend URL exactly. This is needed so CORS allows the frontend to call the backend.

## Live App

Frontend:

```text
https://aqm-sigma.vercel.app
```

Backend:

```text
https://aqm-q6f5.onrender.com
```

## Build Commands

Frontend build:

```powershell
cd frontend
npm run build
```

Backend start:

```powershell
cd backend
npm start
```
