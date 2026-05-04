# AENS Monorepo

AENS is a pnpm workspace containing:

- `artifacts/aens` - frontend (Vite + React + TypeScript)
- `artifacts/api-server` - backend API server (Express + TypeScript)

## Requirements

- Node.js 20+
- pnpm 9+

## Install

```bash
pnpm install
```

## Run Locally

### Frontend

```bash
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/aens run dev
```

Open: `http://localhost:3000`

### API

```bash
PORT=3001 pnpm --filter @workspace/api-server run dev
```

Health check: `http://localhost:3001/api/healthz`

## Build

### Frontend build

```bash
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/aens run build
```

### API build

```bash
PORT=3001 pnpm --filter @workspace/api-server run build
```

## Typecheck

```bash
pnpm --filter @workspace/aens run typecheck
pnpm --filter @workspace/api-server run typecheck
```

## Railway Deployment

Deploy frontend and API as separate Railway services.

### Frontend service (`artifacts/aens`)

- Build command:
  - `pnpm install --frozen-lockfile && PORT=3000 BASE_PATH=/ pnpm --filter @workspace/aens run build`
- Start command:
  - `PORT=$PORT BASE_PATH=/ pnpm --filter @workspace/aens run serve`
- Required env vars:
  - `PORT` (Railway sets this)
  - `BASE_PATH=/`

### API service (`artifacts/api-server`)

- Build command:
  - `pnpm install --frozen-lockfile && pnpm --filter @workspace/api-server run build`
- Start command:
  - `PORT=$PORT pnpm --filter @workspace/api-server run start`
- Required env vars:
  - `PORT` (Railway sets this)

## Notes

- Full workspace build may include extra artifacts that require additional env vars.
- For production deploys, prefer targeted package commands shown above.
