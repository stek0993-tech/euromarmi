# Euromarmi

Standalone TanStack Start app (React 19 + Vite + Tailwind v4). No longer
connected to any external site builder — a plain Vite/Nitro project that
builds and runs on any Node-capable host.

- `npm run dev` — local dev server (http://localhost:8080)
- `npm run build` — production build (`nitro`'s `node-server` preset, output
  in `.output/`)
- `npm run start` — run the production build (`node .output/server/index.mjs`)
- `npm run preview` — Vite's own preview server for a quick local check of a
  build

See `README.md` for deployment options.
