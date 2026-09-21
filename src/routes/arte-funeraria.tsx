import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/work-funeraria.jpg";
import detail from "@/assets/work-funeraria-detail.jpg";

export const Route = createFileRoute("/arte-funeraria")({
  head: () => ({
    meta: [
      { title: "Arte Funeraria — Lapidi e Tombe in Marmo · Euromarmi" },
      { name: "description", content: "Realizzazione artigianale di lapidi, tombe, cappelle e monumenti funerari in marmo e granito. Incisioni personalizzate e finiture di pregio." },
      { property: "og:title", content: "Arte Funeraria · Euromarmi" },
      { property: "og:description", content: "Lapidi, tombe e monumenti funerari in marmo lavorati a mano con cura ed eleganza." },
    ],
  }),
  component: () => (
    <ServicePage
      n="04"
      eyebrow="Arte Funeraria"
      title="Memoria"
      titleItalic="che dura nel tempo"
      intro="Lapidi, tombe, cappelle e monumenti funerari realizzati a mano nel rispetto della tradizione. Selezioniamo marmi e graniti pregiati per creare opere che custodiscono la memoria con dignità ed eleganza."
      image={img}
      detail={detail}
      features={[
        { t: "Lapidi Personalizzate", d: "Progettazione e realizzazione di lapidi su misura in marmo, granito e pietre pregiate, con forme classiche o contemporanee." },
        { t: "Tombe e Cappelle", d: "Costruzione completa di tombe di famiglia e cappelle funerarie, dalla progettazione architettonica alla posa in opera." },
        { t: "Incisioni e Sculture", d: "Incisioni di nomi, dediche e ornamenti a mano o con tecnologie di precisione, sculture, croci ed elementi decorativi." },
        { t: "Restauro e Manutenzione", d: "Interventi di pulizia, lucidatura e restauro di monumenti esistenti per riportarli alla bellezza originale." },
      ]}
    />
  ),
});