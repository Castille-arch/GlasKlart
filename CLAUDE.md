# GlasKlart

A tool for glazier tradespeople to manage jobs, track progress, and calculate glass costs. Built mobile-first — field workers are the primary users, not office/admin.

**GitHub:** https://github.com/Castille-arch/GlasKlart  
**Live (web PWA):** deployed on Railway — set root directory to `web/` in Railway settings

---

## Project Structure

```
glasklart/
├── app/              # React Native + Expo mobile app
├── web/              # React PWA (primary focus right now)
├── backend/          # Node.js API — NOT YET BUILT
├── brand-kit.html    # Full brand reference (colours, fonts, logo, UI kit)
└── splash-animation.html  # Splash screen animation reference
```

---

## Tech Stack

| Layer    | Technology                                        | Status      |
|----------|---------------------------------------------------|-------------|
| Web      | React + Vite 5 + TypeScript, CSS Modules          | Built       |
| App      | React Native + Expo + expo-router + TypeScript    | Scaffolded  |
| Backend  | Node.js + Express + TypeScript + Prisma           | Not started |
| Database | PostgreSQL on Railway                             | Not started |
| Auth     | OAuth 2.0 — Google + Microsoft                   | UI only     |

---

## Brand

See `brand-kit.html` and `splash-animation.html` for full reference.

| Token        | Value     | Use                              |
|--------------|-----------|----------------------------------|
| Pane (teal)  | `#1F8A9E` | Primary — buttons, links, active |
| Slate        | `#142430` | Text, headings                   |
| Copper       | `#C5793E` | Accents, warnings, badges        |
| Frost        | `#BFDCE3` | Tints, dividers                  |
| Ice          | `#F4F9FB` | App background                   |
| Mist         | `#6F8893` | Secondary text, captions         |

**Fonts:** Space Grotesk (headings/wordmark) · Inter (body) · JetBrains Mono (IDs, specs, prices)

Logo mark: four-facet diamond (teal top, frost right, slate bottom, copper left).  
Wordmark: **Glas** (slate, 600) + **Klart** (teal, 700).

---

## Web App (`web/`)

### Running locally
```bash
cd web
npm install
npm run dev        # http://localhost:5173
npm run build      # production build
```

### Deployment (Railway)
- Root directory: `web/`
- Node version: 22 (set via `.node-version`)
- Build: `npm run build`
- Start: `npm start` → `serve dist -l $PORT`

### Pages built
| Route         | Page              | Notes                                 |
|---------------|-------------------|---------------------------------------|
| `/login`      | Login             | Google + Microsoft OAuth buttons (UI only, no backend yet) |
| `/dashboard`  | Översikt          | Today's schedule, quick actions, my jobs |
| `/jobs`       | Jobb              | Card list, search, status filters     |
| `/calculate`  | Kalkyl            | Glass area + cost calculator          |
| `/profile`    | Profil            | User info, logout                     |

### Layout
- **Mobile:** bottom tab bar (Översikt · Jobb · Kalkyl · Profil)
- **Desktop (768px+):** sidebar navigation
- All pages are mobile-first with card-based layouts — no tables

### PWA
- `public/manifest.json` — name, icons, theme colour
- `public/sw.js` — service worker for offline caching
- `public/icon-192.png` + `public/icon-512.png` — brand mark on slate background
- Users install by visiting the Railway URL → "Add to Home Screen"

---

## Native App (`app/`)

Expo + React Native + expo-router. Shares the same brand tokens and design as the web app.

### Running locally
```bash
cd app
npx expo start          # scan QR in Expo Go on phone
npx expo start --tunnel # if on different network
```

### Screens built
- Splash animation (facets fly in, copper progress bar)
- Login (Google + Microsoft)
- Tab navigation: Översikt · Jobb · Kalkyl · Profil
- All screens implemented with brand design

### Distribution
- **Dev/testing:** Expo Go app — scan QR code
- **Android production:** EAS Build → APK ($25 one-time Google Play fee, or direct APK)
- **iPhone production:** $99/yr Apple Developer account required
- **PWA alternative:** deploy web version, users add to home screen — free, works on both platforms

---

## Backend (`backend/`) — NOT YET BUILT

Planned: Node.js + Express + Prisma + PostgreSQL on Railway.

### What it needs to do (when we build it)
- OAuth flow: Google + Microsoft → JWT sessions
- User roles: `worker` and `admin`
- Jobs CRUD (create, read, update, complete)
- Glass calculations storage
- Photo attachments per job

### Environment variables (future)
```
DATABASE_URL=postgresql://...
JWT_SECRET=...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
MICROSOFT_CLIENT_ID=...
MICROSOFT_CLIENT_SECRET=...
CLIENT_ORIGIN=https://your-railway-domain
```

---

## Running Costs (current)

| Service            | Cost           |
|--------------------|----------------|
| Railway (web)      | ~$5/month      |
| Railway (database) | ~$5/month (when built) |
| Domain (optional)  | ~$10/year      |

No App Store fees while using PWA distribution.

---

## Design Decisions

- **Field workers are the primary users** — dashboard shows today's schedule, own jobs, quick actions. No revenue/management stats.
- **PWA first** — no App Store fees, users install from a link. Native app exists but is secondary until there's budget for App Store.
- **Swedish throughout** — all UI text in Swedish.
- **Mobile-first** — designed for phones, scales to desktop.
- **AI voice/text input** — discussed for future: worker speaks measurements in Swedish → AI fills in calculator. Would use Claude API via backend. Not started.
