Here is the updated **Engineering Handbook** tailored to your constraints:

- Monorepo structure (single Git repository)
- **Frontend**: pure **HTML + CSS + Vanilla JavaScript** (no frameworks, no build tools beyond basic static serving)
- **Backend**: **Node.js** (Express recommended for structure)
- **Database**: PostgreSQL **or** MongoDB (I'll show PostgreSQL with `pg` as primary, MongoDB notes as alternative)
- No Docker, no heavy tooling (Turborepo/Nx/pnpm workspaces optional but kept minimal)

# AI Workflow Discovery Platform – Engineering Handbook  
**Vanilla Frontend + Node.js Backend Monorepo**

**Version**: 1.0 – MVP (guest-first)  
**Last updated**: February 2026  
**Structure**: Monorepo (everything in one repo)  
**Frontend tech**: HTML, CSS, Vanilla JS  
**Backend tech**: Node.js + Express  
**Database**: PostgreSQL (primary) / MongoDB (alternative)  
**Package manager**: npm (simple) or pnpm (faster, optional)

## 1. Why This Structure?

- Single repo → easy to clone, develop frontend + backend together, commit atomically
- Vanilla frontend → fast prototyping, no build step, direct file editing, low bundle size
- Node/Express backend → familiar, good structure for APIs
- Monorepo without heavy tools → avoids learning curve of Turborepo/Nx/yarn/pnpm workspaces for small/medium teams

## 2. Repository Layout

```
workflow-discovery/
├── server/                    # Node.js + Express API
│   ├── src/
│   │   ├── routes/
│   │   │   ├── professions.js
│   │   │   ├── stages.js
│   │   │   ├── tasks.js
│   │   │   ├── tools.js
│   │   │   └── admin.js
│   │   ├── db/
│   │   │   └── index.js          # connection pool (pg) or client (mongodb)
│   │   ├── middleware/
│   │   │   └── auth.js           # simple JWT check for admin
│   │   └── server.js             # entry point
│   ├── .env
│   ├── package.json
│   └── prisma/                   # only if using Prisma (optional)
│
├── client/                   # Static HTML + CSS + Vanilla JS
│   ├── index.html              # Landing
│   ├── onboarding.html
│   ├── dashboard.html
│   ├── tool.html               # /tools/:slug
│   ├── discover.html
│   ├── admin.html              # protected
│   │
│   ├── css/
│   │   └── main.css
│   │
│   ├── js/
│   │   ├── utils.js            # fetch helpers, localStorage, etc.
│   │   ├── onboarding.js
│   │   ├── dashboard.js
│   │   ├── tool.js
│   │   ├── discover.js
│   │   └── admin.js
│   │
│   └── assets/                 # icons, images
│
├── docs/
│   └── handbook.md             # this file
│
├── .gitignore
├── README.md
└── package.json                # optional: root-level scripts (dev, start)
```

**Root package.json** (optional but recommended for convenience scripts)

```json
{
  "name": "StackLayer",
  "private": true,
  "scripts": {
    "dev:backend": "cd backend && node src/server.js",
    "dev:frontend": "cd frontend && npx serve -p 3000",
    "dev": "concurrently \"npm run dev:backend\" \"npm run dev:frontend\"",
    "start": "cd backend && node src/server.js"
  },
  "devDependencies": {
    "concurrently": "^8.2.2",
    "serve": "^14.2.3"
  }
}
```

## 3. Development Workflow (No Docker)

### Prerequisites
- Node.js 20+
- PostgreSQL (local install: Postgres.app on macOS, official installer, or cloud free tier like Neon/Supabase)
- (Alternative) MongoDB

### One-time setup

```bash
# Root
npm install

# Backend
cd backend
npm init -y
npm install express dotenv jsonwebtoken pg   # or mongoose for MongoDB
npm install -D nodemon

# Optional: Prisma (cleaner queries, migrations)
npm install prisma --save-dev
npx prisma init
# edit .env → DATABASE_URL=postgresql://postgres:postgres@localhost:5432/workflow
npx prisma migrate dev --name init
```

**MongoDB alternative**:
```bash
npm install mongoose
# Use mongodb://localhost:27017/workflow in .env
```

### Run locally

```bash
# Terminal 1 – Backend (port 4000)
cd backend
npm run dev   # nodemon src/server.js

# Terminal 2 – Frontend (static server, port 3000)
cd frontend
npx serve -p 3000   # or use VS Code Live Server extension
```

Open http://localhost:3000

## 4. Frontend – Vanilla JS Patterns

**API base** (js/utils.js)

```js
const API_BASE = "http://localhost:4000/api";

async function apiGet(endpoint, params = {}) {
  const url = new URL(`${API_BASE}${endpoint}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, v));
  
  const res = await fetch(url);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

function savePrefs(profession, skill) {
  localStorage.setItem("workflow-prefs", JSON.stringify({ profession, skill }));
}

function getPrefs() {
  return JSON.parse(localStorage.getItem("workflow-prefs"));
}
```

**Onboarding guard** (add to every page <script> or separate file loaded everywhere)

```js
if (!localStorage.getItem("workflow-prefs") && !window.location.pathname.includes("onboarding")) {
  window.location.href = "/onboarding.html";
}
```

**Dynamic dashboard loading** (dashboard.js)

```js
const prefs = getPrefs();
if (!prefs) return;

const stage = new URLSearchParams(window.location.search).get("stage") || "ideation";

// Fetch tools for stage + profession
apiGet("/tools", { profession: prefs.profession, stage })
  .then(data => {
    const grid = document.getElementById("tool-grid");
    grid.innerHTML = "";
    data.forEach(tool => {
      const card = document.createElement("div");
      card.className = "tool-card";
      card.innerHTML = `
        <h3>${tool.name}</h3>
        <p>${tool.description || ""}</p>
        <a href="/tool.html?slug=${tool.slug}">View Details</a>
      `;
      grid.appendChild(card);
    });
  })
  .catch(err => console.error(err));
```

Use URLSearchParams for stage/task filters → update on change → history.pushState to keep back button working.

## 5. Backend – Express Setup (src/server.js)

```js
require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");           // or mongoose for MongoDB
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Public routes
app.get("/api/professions", async (req, res) => { /* query */ });
app.get("/api/tools", async (req, res) => {
  const { profession, stage, task, pricing } = req.query;
  // Build dynamic SQL WHERE clause
  // ...
});

// Admin protection middleware
function adminAuth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token" });
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (e) {
    res.status(401).json({ error: "Invalid token" });
  }
}

app.use("/api/admin", adminAuth);
// Admin CRUD routes...

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
```

**MongoDB variant** — replace pg with mongoose models and queries.

## 6. Database Choice Quick Comparison (MVP)

| Aspect               | PostgreSQL (pg / Prisma)          | MongoDB (mongoose)              |
|----------------------|------------------------------------|---------------------------------|
| Relations            | Excellent (stages → tasks → tools) | Possible but more manual        |
| Many-to-many         | Clean with junction tables         | Arrays or separate collection   |
| Query flexibility    | Strong SQL                         | Good for nested docs            |
| MVP recommendation   | Preferred (structured data)        | Fine if you prefer documents    |

Start with PostgreSQL unless your team strongly prefers Mongo.

## 7. Deployment Notes

- **Frontend**: Static hosting — Vercel,
- **Backend**: Render

## 8. Next Steps (Build Order Reminder)

1. Backend skeleton + DB connection + /api/professions
2. Seed realistic data (50–100 tools)
3. Frontend landing + onboarding + localStorage
4. Dashboard + task/stage filters via URL params
5. Tool detail page
6. Discover + filters
7. Admin login + CRUD

This keeps the stack intentionally simple, fast to iterate on, and true to vanilla + Node roots.

Questions? Update this file via PR.

Happy coding team mates.

![alt text](image.png)