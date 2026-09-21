import { createFileRoute } from "@tanstack/react-router";
import matVerde from "@/assets/mat-verde.jpg";
import workDetail from "@/assets/work-detail.jpg";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/scale-complementi")({
  head: () => ({
    meta: [
      { title: "Scale e Complementi — Euromarmi" },
      { name: "description", content: "Scale, soglie, davanzali, tavoli e complementi d'arredo in marmo, granito e pietre pregiate. Lavorazione artigianale." },
      { property: "og:title", content: "Scale e Complementi — Euromarmi" },
      { property: "og:description", content: "Scale interne, soglie, davanzali e arredi su misura in pietra naturale." },
    ],
  }),
  component: () => (
    <ServicePage
      n="03"
      eyebrow="Pietra"
      title="Scale"
      titleItalic="e Complementi"
      intro="Scale interne, soglie, davanzali e complementi d'arredo lavorati pezzo per pezzo. Realizziamo gradini massicci, alzate sagomate, tavoli monolitici e piani di servizio in marmo, granito e pietre pregiate selezionate in cava."
      image={matVerde}
      detail={workDetail}
      features={[
        { t: "Scale Interne", d: "Gradini a sbalzo, scale a giorno con ringhiere su misura, alzate cieche o forate. Antiscivolo integrato a richiesta." },
        { t: "Soglie e Davanzali", d: "Sezioni gocciolatoio, bordi toro o bisellati, finiture lucide o anticate. Tagliate al millimetro." },
        { t: "Tavoli Monolitici", d: "Tavoli da pranzo e consolle ricavati da una sola lastra, con basamenti in pietra o metallo verniciato." },
        { t: "Piani Vasca e Bagno", d: "Top per mobili bagno, mensole, piani vasca e nicchie doccia rifinite a mano." },
      ]}
    />
  ),
});