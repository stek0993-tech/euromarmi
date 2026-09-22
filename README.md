# Euromarmi

Sito web Euromarmi - lavorazione marmi e gres porcellanato.

Tecnologie: TanStack Start, React 19, Tailwind CSS v4. App standalone: nessuna
dipendenza da piattaforme esterne, buildabile e ospitabile ovunque giri Node.js.

## Sviluppo locale

```bash
npm install
npm run dev        # http://localhost:8080
```

## Build di produzione

```bash
npm run build       # output in .output/ (preset Nitro "node-server")
npm run start        # node .output/server/index.mjs
```

`npm run preview` avvia invece il server di anteprima nativo di Vite, utile
per un controllo rapido della build senza passare da Nitro.

## Deploy

La build produce un server Node.js portabile (`.output/server/index.mjs` +
gli asset statici in `.output/public/`), quindi funziona su qualsiasi host
che esegua Node — una VPS, un container Docker, Railway, Render, Fly.io, ecc.
Bastano `npm ci && npm run build` seguito da `npm run start` (esponendo la
porta scelta dall'host tramite la variabile d'ambiente `PORT`, che Nitro
legge automaticamente).

Per un hosting a edge/serverless specifico (Cloudflare Workers, Vercel,
Netlify, ...) basta cambiare il preset Nitro in `vite.config.ts`
(`nitro({ preset: "..." })`) — l'elenco dei preset disponibili è nella
[documentazione di Nitro](https://nitro.build/deploy).
