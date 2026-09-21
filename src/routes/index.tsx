import { createFileRoute, Link } from "@tanstack/react-router";
import { MaterialsHall } from "@/components/MaterialsHall";
import heroMarble from "@/assets/hero-marble.jpg";
import workKitchen from "@/assets/work-kitchen.jpg";
import workDetail from "@/assets/work-detail.jpg";
import logoEuromarmi from "@/assets/euromarmi-logo.svg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import matCarrara from "@/assets/mat-carrara.jpg";
import matGres from "@/assets/mat-gres.jpg";
import matTravertino from "@/assets/mat-travertino.jpg";
import matVerde from "@/assets/mat-verde.jpg";
import matGresStatuario from "@/assets/mat-gres-statuario.jpg";
import matGresCemento from "@/assets/mat-gres-cemento.jpg";
import matGresLegno from "@/assets/mat-gres-legno.jpg";
import matGresSahara from "@/assets/mat-gres-sahara.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Euromarmi — Lavorazione Marmi e Gres Porcellanato" },
      {
        name: "description",
        content:
          "Lavorazione artigianale di marmi, graniti e gres porcellanato per piani cucina, bagni e rivestimenti su misura. Vendita lastre e materiali pregiati.",
      },
      { property: "og:title", content: "Euromarmi — Marmi e Gres Porcellanato" },
      {
        property: "og:description",
        content:
          "Superfici sartoriali in marmo, granito e gres porcellanato per architettura d'interni d'eccellenza.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "390451234567";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Buongiorno, vorrei richiedere informazioni sui vostri materiali e lavorazioni.",
)}`;

const services = [
  { n: "01", title: "Piani Cucina & Bagno", to: "/piani-cucina-bagno" as const },
  { n: "02", title: "Rivestimenti Su Misura", to: "/rivestimenti" as const },
  { n: "03", title: "Scale e Complementi", to: "/scale-complementi" as const },
  { n: "04", title: "Arte Funeraria", to: "/arte-funeraria" as const },
];

const gallery = [
  { img: gallery1, cat: "Cucina", name: "Isola in marmo Calacatta" },
  { img: gallery2, cat: "Bagno", name: "Vanity in marmo bianco" },
  { img: gallery3, cat: "Scale", name: "Scala scenografica" },
  { img: gallery4, cat: "Arte Funeraria", name: "Monumento in marmo" },
  { img: workKitchen, cat: "Cucina", name: "Piano in pietra scura" },
  { img: workDetail, cat: "Dettaglio", name: "Giunzione millimetrica" },
];

const partners = [
  "Studio Rossi Architetti",
  "Marmi Carrara S.p.A.",
  "Interior Design Roma",
  "Costruzioni Bianchi",
  "Cave del Verde Alpi",
  "Atelier Milano",
  "Impresa Edile Lazio",
  "Gres Italia",
];

const materials = [
  { cat: "Marmo", name: "Bianco Carrara", img: matCarrara },
  { cat: "Gres", name: "Ardesia Nera", img: matGres },
  { cat: "Gres", name: "Statuario", img: matGresStatuario },
  { cat: "Gres", name: "Sahara Noir", img: matGresSahara },
  { cat: "Gres", name: "Cemento", img: matGresCemento },
  { cat: "Gres", name: "Rovere Naturale", img: matGresLegno },
  { cat: "Travertino", name: "Navona", img: matTravertino },
  { cat: "Pregiati", name: "Verde Alpi", img: matVerde },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.882 11.882 0 0 0 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-accent/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 lg:px-12 py-8 flex justify-between items-end text-white">
        <Link to="/" aria-label="Euromarmi — home" className="flex items-center">
          <img
            src={logoEuromarmi}
            alt="Euromarmi"
            className="h-6 md:h-7 w-auto brightness-0 invert"
            loading="eager"
          />
        </Link>
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-display font-medium">
          <a href="#lavorazioni" className="hover:opacity-60 transition-opacity">
            Lavorazioni
          </a>
          <a href="#materiali" className="hover:opacity-60 transition-opacity">
            Materiali
          </a>
          <a href="#galleria" className="hover:opacity-60 transition-opacity">
            Galleria
          </a>
          <a href="#partner" className="hover:opacity-60 transition-opacity">
            Partner
          </a>
          <a href="#chi-siamo" className="hover:opacity-60 transition-opacity">
            Chi Siamo
          </a>
          <a href="#contatti" className="hover:opacity-60 transition-opacity">
            Contatti
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="relative h-screen flex flex-col justify-center items-center px-6 pt-24 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroMarble}
            alt="Lastra di marmo Calacatta in laboratorio"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
            MATERIA
            <br />
            <span className="italic font-body font-normal">Senza Tempo</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto font-body italic">
            Lavorazione artigianale di marmi, graniti e gres porcellanato per l'architettura
            d'interni d'eccellenza.
          </p>
        </div>
      </section>

      {/* Partners */}
      <section id="partner" className="py-24 md:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-display font-bold">
              Con Noi
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter uppercase mt-4">
              Partner
              <span className="italic font-body font-normal normal-case tracking-normal">
                {" "}
                & clienti
              </span>
            </h2>
            <p className="text-muted-foreground mt-6">
              Architetti, studi di interior design e imprese che scelgono la nostra manifattura.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {partners.map((p) => (
              <div
                key={p}
                className="bg-background aspect-[3/2] flex items-center justify-center px-6 text-center hover:bg-muted/40 transition-colors"
              >
                <span className="font-display text-xs md:text-sm uppercase tracking-[0.15em] text-muted-foreground">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="lavorazioni" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="md:sticky md:top-32">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-6">
              L'Arte della
              <br />
              Trasformazione
            </h2>
            <p className="text-muted-foreground max-w-md mb-12">
              Dalla lastra grezza al dettaglio millimetrico. Realizziamo superfici che definiscono
              lo spazio domestico con la forza della pietra naturale e l'innovazione del gres
              porcellanato.
            </p>
            <div className="space-y-4">
              {services.map((s) => (
                <Link to={s.to} key={s.n} className="group block border-b border-border pb-4">
                  <span className="text-xs text-accent font-display font-bold uppercase tracking-[0.2em]">
                    {s.n}
                  </span>
                  <h3 className="text-2xl mt-2 group-hover:translate-x-2 transition-transform duration-500 italic">
                    {s.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-8">
            <img
              src={workKitchen}
              alt="Isola cucina in pietra scura"
              width={800}
              height={1024}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
            <img
              src={workDetail}
              alt="Dettaglio di giunzione marmo"
              width={800}
              height={608}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Materials */}
      <section id="materiali" className="bg-[#1a1a1a] text-white py-24 md:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-between items-end mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter uppercase">
              Selezione Materiali
            </h2>
            <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">
              Campionario 2026
            </span>
          </div>
          <MaterialsHall items={materials} kicker="Campionario 2026 · 8 materiali" />
        </div>
      </section>

      {/* Gallery */}
      <section id="galleria" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 justify-between items-end mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-display font-bold">
              Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter uppercase mt-4">
              Galleria
              <br />
              <span className="italic font-body font-normal normal-case tracking-normal">
                dei lavori
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Una selezione di realizzazioni firmate Euromarmi: cucine, bagni, scale e opere d'arte
            funeraria.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((g, i) => (
            <figure
              key={g.name}
              className={`group relative overflow-hidden ${i % 5 === 0 ? "md:col-span-2 aspect-[16/10]" : "aspect-[4/5]"}`}
            >
              <img
                src={g.img}
                alt={g.name}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <figcaption className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent text-white">
                <span className="font-display font-bold uppercase text-[10px] tracking-[0.2em] opacity-80">
                  {g.cat}
                </span>
                <span className="text-xl italic">{g.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Chi Siamo */}
      <section
        id="chi-siamo"
        className="border-t border-border py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-display font-bold">
              Chi Siamo
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter uppercase mt-4">
              Trent'anni
              <br />
              di{" "}
              <span className="italic font-body font-normal normal-case tracking-normal">
                passione per la pietra
              </span>
              .
            </h2>
          </div>
          <p className="md:col-span-5 text-muted-foreground leading-relaxed">
            Tutto è iniziato quasi trent'anni fa dalla passione di un giovane ragazzo per la
            lavorazione del marmo. Da allora, ogni lastra viene selezionata personalmente nelle cave
            e nei centri di produzione del gres in Italia, e ogni progetto viene seguito con la
            stessa cura del primo giorno: qualità impeccabile, precisione millimetrica e posa in
            opera curata fin nel minimo dettaglio.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contatti"
        className="py-24 md:py-32 px-6 lg:px-12 bg-background border-t border-border"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-8">
              Richiedi una
              <br />
              Consulenza
            </h2>
            <div className="space-y-8 font-display text-sm tracking-wide text-muted-foreground uppercase">
              <div>
                <p className="text-foreground font-bold mb-1">Laboratorio</p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Euromarmi+Santori+Via+Anguillarese+Roma&travelmode=driving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors underline underline-offset-4 decoration-border"
                >
                  Via Anguillarese km 1.200, 00123 Roma (RM)
                </a>
              </div>
              <div>
                <p className="text-foreground font-bold mb-1">Contatti</p>
                <p>+39 06 304 6839</p>
                <a
                  href="mailto:info@euromarmisantori.it"
                  className="normal-case tracking-normal hover:text-foreground transition-colors"
                >
                  info@euromarmisantori.it
                </a>
              </div>
              <div>
                <p className="text-foreground font-bold mb-1">Orari</p>
                <p>Lun — Ven · 08:00 — 13:00 / 14:00 — 17:00</p>
                <p>Sab · su appuntamento</p>
              </div>
            </div>
          </div>

          <form
            action="https://formsubmit.co/info@euromarmisantori.it"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="Nuova richiesta dal sito Euromarmi" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="text"
              name="_honey"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                required
                className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <input
              type="tel"
              name="telefono"
              placeholder="Telefono"
              className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors"
            />
            <textarea
              name="progetto"
              placeholder="Il tuo progetto"
              rows={4}
              required
              className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors resize-none"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-foreground text-background font-display text-[10px] uppercase tracking-[0.2em] hover:bg-accent transition-colors"
            >
              Invia Messaggio
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display font-bold text-sm tracking-tighter uppercase">
            © 2026 Euromarmi · P.IVA 05568741002
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-display text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookie
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <span className="absolute right-full mr-4 bg-white text-foreground text-[10px] font-display font-bold uppercase tracking-[0.2em] px-4 py-2 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          Scrivici su WhatsApp
        </span>
        <WhatsAppIcon className="size-6" />
      </a>
    </div>
  );
}
