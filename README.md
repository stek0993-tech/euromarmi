# Euromarmi

Sito web Euromarmi - lavorazione marmi e gres porcellanato.

Tecnologie: TanStack Start, React 19, Tailwind CSS v4. Tutte le route sono
statiche (nessuna server function, nessun segmento dinamico), quindi il sito
viene interamente prerenderizzato in HTML/CSS/JS in fase di build: nessun
server Node.js richiesto in produzione, ospitabile su qualsiasi hosting
statico/PHP (anche via semplice FTP).

## Sviluppo locale

```bash
npm install
npm run dev        # http://localhost:8080
```

## Build di produzione

```bash
npm run build       # prerender statico, output in dist/client/
npm run preview     # anteprima locale della build (Vite preview)
```

## Deploy

`npm run build` genera in `dist/client/` un sito statico completo (una
cartella con `index.html` per ogni route, più gli asset in `dist/client/assets/`).
Basta caricare il contenuto di `dist/client/` sulla root del dominio
sull'hosting (es. via FTP), insieme a `contact.php` (il form di contatto in
`src/routes/index.tsx` invia i dati a `contact.php`, che va quindi copiato
accanto a `index.html`).
