# Covington Casket Company

Static marketing-site homepage for Covington Casket Company. Built with **Vite 6**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

The site is purely client-side — there is no backend, no API keys, and no environment variables are required to run or deploy it.

## Run locally

**Prerequisites:** Node.js 22.x (see the `engines` field in `package.json`).

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the dev server:
   ```sh
   npm run dev
   ```
   Serves on http://localhost:3000 (bound to `0.0.0.0`, so it's reachable on your LAN).

## Build

```sh
npm run build      # vite build -> emits a static bundle to dist/
npm run preview    # serve the production build locally
```

All images are bundled and content-hashed by Vite. Files placed in `public/` (e.g. `favicon.svg` and the casket PNGs) are copied to the site root as-is.

## Deploy to Vercel

This deploys as a **static site** — no server component, no environment variables.

The included `vercel.json` pins the Vite preset, but the values match Vercel's auto-detected defaults:

| Setting          | Value           |
| ---------------- | --------------- |
| Framework Preset | Vite            |
| Build Command    | `npm run build` |
| Output Directory | `dist`          |
| Install Command  | `npm install`   |

Push the repo (or import it) into Vercel and deploy — no further configuration is needed.
