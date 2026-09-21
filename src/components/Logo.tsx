import { useState } from "react";
import logoAsset from "@/assets/euromarmi-logo.png.asset.json";

/**
 * Marchio Euromarmi.
 *
 * Il file PNG originale è ospitato da Lovable (`/__l5e/assets-v1/...`): esiste
 * solo dentro l'editor e sul sito pubblicato da Lovable. In locale, o su
 * qualsiasi altro hosting, quell'URL risponde 404 — perciò se l'immagine non
 * carica ripieghiamo su un logotipo testuale che usa `currentColor` e quindi
 * si adatta sia alla nav chiara sia a quella scura.
 *
 * Per sostituire il logo con un file tuo: metti `logo.svg` in `src/assets/`,
 * importalo qui e usalo al posto di `logoAsset.url`.
 */
export function Logo({
  className = "",
  /** Rende il PNG bianco, per la nav sovrapposta all'hero. */
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`inline-flex items-center font-display font-bold uppercase leading-none tracking-[0.18em] text-base md:text-lg ${className}`}
      >
        Euromarmi
      </span>
    );
  }

  return (
    <img
      src={logoAsset.url}
      alt="Euromarmi"
      className={`w-auto ${invert ? "brightness-0 invert" : ""} ${className}`}
      loading="eager"
      // L'immagine viene richiesta dall'HTML server-rendered, quindi può fallire
      // prima che React abbia idratato e agganciato onError. La ref, che scatta
      // all'idratazione, intercetta quel caso: un'immagine finita di caricare
      // ma senza dimensioni intrinseche è un errore già avvenuto.
      ref={(el) => {
        if (el?.complete && el.naturalWidth === 0) setFailed(true);
      }}
      onError={() => setFailed(true)}
    />
  );
}
