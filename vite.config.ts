import { fileURLToPath } from "node:url";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Plain Vite config. All routes are static (no server functions, no dynamic
// segments), so the app is fully prerendered to plain HTML/CSS/JS at build
// time — output in dist/client/, deployable to any static/PHP host (e.g.
// over FTP, alongside contact.php).
export default defineConfig(() => ({
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
      // Crawled from "/" and written to dist/client alongside the client
      // assets.
      prerender: { enabled: true, crawlLinks: true },
    }),
    viteReact(),
  ],
}));
