# GlasKlart

A tool for glazier tradespeople to manage jobs, do glass calculations, track progress, and calculate costs.

## Project Structure

```
glasklart/
├── app/          # React Native mobile app (iOS + Android)
├── web/          # React admin website
├── backend/      # Node.js API server
└── shared/       # Shared TypeScript types/utils
```

## Tech Stack

| Layer     | Technology                              |
|-----------|-----------------------------------------|
| App       | React Native + TypeScript               |
| Web       | React + TypeScript + Vite               |
| Backend   | Node.js + Express + TypeScript          |
| Database  | PostgreSQL (hosted on Railway)          |
| Auth      | OAuth 2.0 — Google + Microsoft (via Passport.js or Auth.js) |
| ORM       | Prisma                                  |

## Authentication

- Users sign in via OAuth: Google or Microsoft
- JWT sessions after OAuth handshake
- Role system: `user` (app + web) and `admin` (web admin section only)
- Admin section is restricted to accounts marked `role: admin` in the database

## Database (Railway PostgreSQL)

Connection string stored in `backend/.env` as `DATABASE_URL`.

## App Features (planned — evolving)

- [ ] Job management (create, progress, complete jobs)
- [ ] Glass calculations (area, quantity, cutting lists)
- [ ] Cost estimation / quoting
- [ ] Material tracking
- [ ] Photo attachment per job
- [ ] Customer/site details

## Web Features (planned — evolving)

Everything in the app, plus:
- [ ] Admin dashboard
- [ ] User management
- [ ] Reporting / analytics
- [ ] Billing overview

## Running Locally

### Backend
```bash
cd backend
cp .env.example .env   # fill in DATABASE_URL, GOOGLE_CLIENT_ID, etc.
npm install
npm run dev
```

### Web
```bash
cd web
npm install
npm run dev
```

### App
```bash
cd app
npm install
npx expo start
```

## Environment Variables

### Backend `.env`
```
DATABASE_URL=postgresql://...
JWT_SECRET=...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
MICROSOFT_CLIENT_ID=...
MICROSOFT_CLIENT_SECRET=...
CLIENT_ORIGIN=http://localhost:5173
```

## Notes

- Feature scope is still being defined — update this file as features are confirmed
- Mobile app targets glazier field workers; web targets office/admin users
- Railway handles DB hosting; backend and web can also be deployed to Railway
