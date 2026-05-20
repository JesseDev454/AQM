# AQM Africa Backend

Express, Node.js, and MongoDB API for the Air Quality Manufacturing Dashboard.

## Install

```powershell
npm install
Copy-Item .env.example .env
```

Set `MONGO_URI` in `.env` to a local MongoDB or MongoDB Atlas connection string.

## Run

```powershell
npm run dev
```

Production-style start:

```powershell
npm start
```

## Environment Variables

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## Endpoints

- `GET /api/health`
- `GET /api/air-quality`
- `GET /api/air-quality/city/:city`
- `GET /api/air-quality/summary`
- `GET /api/air-quality/alerts`
- `POST /api/air-quality/seed`

The seed endpoint clears existing records before inserting the approved African city sample records.
