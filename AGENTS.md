# Euromarmi

Standalone TanStack Start app (React 19 + Vite + Tailwind v4). No longer
connected to any external site builder. All routes are static, so the build
fully prerenders to plain HTML/CSS/JS — no Node.js server needed at runtime.

- `npm run dev` — local dev server (http://localhost:8080)
- `npm run build` — production build (prerendered static output in
  `dist/client/`)
- `npm run preview` — Vite's own preview server for a quick local check of a
  build

See `README.md` for deployment options.
