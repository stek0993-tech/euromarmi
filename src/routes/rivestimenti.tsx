import { createFileRoute } from "@tanstack/react-router";
import matTravertino from "@/assets/mat-travertino.jpg";
import matCarrara from "@/assets/mat-carrara.jpg";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/rivestimenti")({
  head: () => ({
    meta: [
      { title: "Rivestimenti Su Misura — Euromarmi" },
      { name: "description", content: "Rivestimenti per pareti, pavimenti, docce e camini in marmo, gres porcellanato grande formato e pietra naturale." },
      { property: "og:title", content: "Rivestimenti Su Misura — Euromarmi" },
      { property: "og:description", content: "Pareti, pavimenti e docce rivestiti in lastra unica. Posa artigianale a Roma." },
    ],
  }),
  component: () => (
    <ServicePage
      n="02"
      eyebrow="Architettura"
      title="Rivestimenti"
      titleItalic="Su Misura"
      intro="Rivestimenti per pareti, pavimenti, docce e camini realizzati in lastra unica o a corsi continui. Calibriamo ogni elemento sulla geometria dello spazio, valorizzando le venature del materiale con sequenze grafiche coordinate."
      image={matTravertino}
      detail={matCarrara}
      features={[
        { t: "Book Match e Vein Match", d: "Disposizione speculare delle lastre per ottenere disegni continui e simmetrici sulle pareti." },
        { t: "Grandi Formati", d: "Lastre in gres porcellanato fino a 160x320 cm per rivestimenti senza fughe visibili." },
        { t: "Docce a Filo Pavimento", d: "Piatti doccia ricavati dalla stessa lastra del rivestimento, con pendenze integrate e griglie su misura." },
        { t: "Camini e Boiserie", d: "Rivestimenti per camini, nicchie e boiserie su disegno dell'architetto o del committente." },
      ]}
    />
  ),
});