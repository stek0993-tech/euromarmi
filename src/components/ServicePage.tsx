import { Link } from "@tanstack/react-router";
import logoEuromarmi from "@/assets/euromarmi-logo.svg";

export function ServicePage({
  n,
  eyebrow,
  title,
  titleItalic,
  intro,
  image,
  detail,
  features,
}: {
  n: string;
  eyebrow: string;
  title: string;
  titleItalic: string;
  intro: string;
  image: string;
  detail?: string;
  features: { t: string; d: string }[];
}) {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <nav className="fixed top-0 w-full z-50 px-6 lg:px-12 py-8 flex justify-between items-end bg-background/80 backdrop-blur-sm border-b border-border">
        <Link to="/" aria-label="Euromarmi — home" className="flex items-center">
          <img src={logoEuromarmi} alt="Euromarmi" className="h-6 md:h-7 w-auto" loading="eager" />
        </Link>
        <Link
          to="/"
          className="text-[10px] uppercase tracking-[0.2em] font-display font-medium hover:opacity-60 transition-opacity"
        >
          ← Indietro
        </Link>
      </nav>

      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <span className="text-xs text-accent font-display font-bold uppercase tracking-[0.2em]">
          {n} · {eyebrow}
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase mt-6 leading-[0.9]">
          {title}
          <br />
          <span className="italic font-body font-normal normal-case tracking-normal">
            {titleItalic}
          </span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mt-10 text-lg leading-relaxed">{intro}</p>
      </section>

      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-16 md:pb-24">
        <img
          src={image}
          alt={`${title} ${titleItalic}`}
          loading="lazy"
          width={1600}
          height={900}
          className="w-full aspect-[16/9] object-cover"
        />
      </section>

      <section className="py-16 md:py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((f, i) => (
            <div key={f.t} className="border-t border-border pt-6">
              <span className="text-[10px] text-accent font-display font-bold uppercase tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl tracking-tighter uppercase mt-3 mb-3">{f.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {detail && (
        <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
          <img
            src={detail}
            alt="Dettaglio lavorazione"
            loading="lazy"
            width={1600}
            height={1200}
            className="w-full aspect-[4/3] object-cover"
          />
        </section>
      )}

      <section className="border-t border-border py-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-6">
            Hai un progetto in mente?
          </h2>
          <p className="text-muted-foreground mb-10">
            Scrivici per una consulenza dedicata. Ti risponderemo con un preventivo personalizzato.
          </p>
          <Link
            to="/"
            hash="contatti"
            className="inline-block px-8 py-4 bg-foreground text-background font-display text-[10px] uppercase tracking-[0.2em] hover:bg-accent transition-colors"
          >
            Richiedi Preventivo
          </Link>
        </div>
      </section>
    </div>
  );
}
