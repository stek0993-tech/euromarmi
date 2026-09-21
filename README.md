<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Euromarmi

Sito web Euromarmi — lavorazione marmi e gres porcellanato.

Tecnologie: TanStack Start, React 19, Tailwind CSS v4.

## Avvio in locale

```bash
bun install      # oppure: npm install
bun run dev      # oppure: npm run dev
```

Il sito parte su `http://localhost:8080`. Se l'ambiente non supporta IPv6 il
server non si avvia: in quel caso forza IPv4 con
`npx vite dev --host 127.0.0.1 --port 5173`.

Altri comandi:

| Comando         | Cosa fa                                    |
| --------------- | ------------------------------------------ |
| `bun run build` | Build di produzione in `.output/`          |
| `bun run preview` | Anteprima della build                    |
| `bun run lint`  | ESLint                                     |
| `bun run format`| Prettier su tutto il progetto              |

## Dove mettere le mani per ridisegnare

**Colori, font e raggi** — `src/styles.css`.
I token vivono in `:root` (tutti i colori in formato `oklch`) e vengono mappati
sulle utility Tailwind dal blocco `@theme inline`. I più usati dal sito:

- `--background` / `--foreground` — base chiara e testo
- `--accent` — il bronzo delle etichette e degli hover dei bottoni
- `--muted-foreground` — testo secondario
- `--border` — le righe sottili che separano le sezioni
- `--font-display` (Inter) per titoli ed etichette, `--font-body` (Lora) per
  i testi in corsivo. I font si caricano da Google Fonts in `src/routes/__root.tsx`.

**Contenuti e struttura della home** — `src/routes/index.tsx`.
In cima al file ci sono gli array che alimentano le sezioni, modificabili senza
toccare il JSX: `services`, `gallery`, `partners`, `materials`, più
`WHATSAPP_NUMBER` per il bottone flottante. Sotto, una sezione JSX per ciascun
blocco: hero, partner, lavorazioni, materiali, galleria, chi siamo, contatti,
footer.

**Pagine servizio** — `src/components/ServicePage.tsx` è il layout condiviso;
le quattro pagine (`piani-cucina-bagno`, `rivestimenti`, `scale-complementi`,
`arte-funeraria`) in `src/routes/` gli passano solo testi e immagini. Per
aggiungere una lavorazione: crea un file in `src/routes/`, riusa `ServicePage`
e aggiungi la voce all'array `services` della home.

**Immagini** — `src/assets/`. Si importano direttamente nei componenti
(`import foo from "@/assets/foo.jpg"`) e Vite le ottimizza in build.

**Logo** — `src/components/Logo.tsx`. Il PNG originale è ospitato da Lovable, e
fuori da Lovable quell'URL non risponde: in quel caso il componente ripiega su
un logotipo testuale. Per usare un file tuo, metti `logo.svg` in `src/assets/`
e importalo dentro `Logo.tsx`.

**Head, meta tag e SEO** — `src/routes/__root.tsx` per i default globali,
il blocco `head()` di ogni rotta per titolo e description della singola pagina.

**Componenti UI** — `src/components/ui/` contiene shadcn/ui completo. La home
non lo usa (è tutta markup su misura), ma è disponibile per form, dialog,
carousel ecc.

## Form contatti

Il form in fondo alla home invia tramite [FormSubmit](https://formsubmit.co)
a `info@euromarmisantori.it`. Al primo invio FormSubmit manda una mail di
conferma all'indirizzo destinatario: finché non viene confermata, i messaggi
non arrivano.
