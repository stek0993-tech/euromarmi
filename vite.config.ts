import { fileURLToPath } from "node:url";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Plain Vite config — no platform-specific wrapper. The app builds and runs
// with `nitro`'s "node-server" preset, a portable Node.js server that works
// on any host (a VPS, Docker, Render, Railway, Fly.io, ...): `npm run build`
// then `node .output/server/index.mjs`.
export default defineConfig(async ({ command }) => ({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  server: {
    host: true,
    port: 8080,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
      // src/server.ts wraps the SSR handler to turn any swallowed 500 into a
      // rendered error page instead of a bare JSON body.
      server: { entry: "server" },
    }),
    // Nitro only needs to run at build time; the dev server uses Vite's own
    // middleware for SSR.
    ...(command === "build" ? [(await import("nitro/vite")).nitro({ preset: "node-server" })] : []),
    viteReact(),
  ],
}));
