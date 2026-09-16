import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { BoutonLien, Conteneur, Paragraphes } from "./pole-ui";

export interface PoleCTAProps {
  id?: string;
  /** H2 du dernier appel. */
  titre: string;
  texte?: string | string[];
  /** Libellé du bouton Calendly (ex. « Réserver 30 min avec le fondateur »). */
  calendlyLabel: string;
  /** Libellé du bouton contact (ex. « Écrire à l'agence »). */
  contactLabel: string;
  contactHref?: string;
  /** Affiche le téléphone SITE.phoneDisplay sous les boutons. */
  afficherTelephone?: boolean;
}

export default function PoleCTA({
  id,
  titre,
  texte,
  calendlyLabel,
  contactLabel,
  contactHref = "/contact",
  afficherTelephone = false,
}: PoleCTAProps) {
  return (
    <section id={id} className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 sm:py-20">
      <Conteneur>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">{titre}</h2>
          {texte && (
            <div className="mt-4 space-y-3 text-lg">
              <Paragraphes texte={texte} />
            </div>
          )}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <BoutonLien href={SITE.calendly} label={calendlyLabel} external variante="primaire" />
            <BoutonLien href={contactHref} label={contactLabel} variante="secondaire" />
          </div>
          {afficherTelephone && (
            <p className="mt-6 text-sm text-muted-foreground">
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {SITE.phoneDisplay}
              </a>
            </p>
          )}
        </div>
      </Conteneur>
    </section>
  );
}
