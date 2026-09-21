import { createFileRoute } from "@tanstack/react-router";
import workKitchen from "@/assets/work-kitchen.jpg";
import workDetail from "@/assets/work-detail.jpg";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/piani-cucina-bagno")({
  head: () => ({
    meta: [
      { title: "Piani Cucina & Bagno — Euromarmi" },
      { name: "description", content: "Piani cucina, top bagno e lavabi su misura in marmo, granito e gres porcellanato. Lavorazione artigianale e posa in opera." },
      { property: "og:title", content: "Piani Cucina & Bagno — Euromarmi" },
      { property: "og:description", content: "Top cucina e bagno su misura realizzati nel nostro laboratorio di Roma." },
    ],
  }),
  component: PianiCucinaBagno,
});

function PianiCucinaBagno() {
  return <ServicePage
    n="01"
    eyebrow="Lavorazione"
    title="Piani Cucina"
    titleItalic="& Bagno"
    intro="Top cucina e piani bagno su misura realizzati nel nostro laboratorio. Lavoriamo lastre di marmo, granito, quarzo e gres porcellanato di grande formato per ottenere superfici senza giunzioni visibili, con bordi sagomati e finiture personalizzate."
    image={workKitchen}
    detail={workDetail}
    features={[
      { t: "Misure e Rilievo Laser", d: "Sopralluogo tecnico in cantiere con strumentazione laser per garantire la perfetta aderenza ai vani esistenti." },
      { t: "Bordi e Finiture", d: "Bordo dritto lucido, bisellato, toro, mezzo toro o fresato. Finiture lucide, levigate, anticate o spazzolate." },
      { t: "Vasche e Lavabi Integrati", d: "Lavabi ricavati dal pieno della lastra per un effetto monolitico, oppure vasche sottopiano in ceramica e acciaio." },
      { t: "Posa Chiavi in Mano", d: "Trasporto, installazione e sigillatura. Lasciamo il cantiere pulito e il piano pronto all'uso." },
    ]}
  />;
}