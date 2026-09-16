import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BoutonLien, Conteneur, Paragraphes, type PoleLienProps } from "./pole-ui";

export interface CtaIntermediaireProps {
  id?: string;
  /** Titre du bandeau (h2 par défaut, ou p si `niveau="p"` quand la section parente porte déjà le H2). */
  titre: string;
  texte?: string | string[];
  bouton: PoleLienProps;
  /** Libellé devant le numéro, ex. « ou appelez-nous au ». Omis = pas de téléphone. */
  alternativeLabel?: string;
  niveau?: "h2" | "p";
  className?: string;
}

/**
 * Bandeau à mi-page : titre, texte, bouton principal, alternative téléphone
 * (`tel:` SITE.phone). Fond blanc, carte dégradée légère : le seul accent
 * fort de l'écran est le bouton.
 */
export default function CtaIntermediaire({
  id,
  titre,
  texte,
  bouton,
  alternativeLabel,
  niveau = "h2",
  className,
}: CtaIntermediaireProps) {
  const Titre = niveau;
  return (
    <section id={id} className={cn("bg-background py-10 sm:py-14", className)}>
      <Conteneur>
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-purple-50 via-white to-pink-50 px-6 py-10 text-center sm:px-10">
          <div
            className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,hsl(270_70%_60%_/_0.14),transparent_65%)] blur-2xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <Titre className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">{titre}</Titre>
            {texte && (
              <div className="mt-3 space-y-2 text-lg">
                <Paragraphes texte={texte} className="text-slate-600" />
              </div>
            )}
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
              <BoutonLien {...bouton} variante="primaire" />
              {alternativeLabel && (
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  {alternativeLabel} {SITE.phoneDisplay}
                </a>
              )}
            </div>
          </div>
        </div>
      </Conteneur>
    </section>
  );
}
