import type { ReactNode } from "react";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { Conteneur } from "./pole-ui";

export interface SectionOutilProps {
  /** Ancre (par défaut « ressource », celle que les pages et la barre collante connaissent). */
  id?: string;
  /** Petit badge au-dessus du titre, ex. « Diagnostic gratuit », « Outil gratuit ». */
  badge?: string;
  /** H2 de la section. */
  titre: string;
  accroche: string;
  /** Ce que la personne obtient, 3 ou 4 puces. */
  obtenez?: string[];
  /** « colonnes » : texte à gauche, outil à droite ; « large » : en-tête centré, outil pleine largeur (formulaires d'analyse). */
  disposition?: "colonnes" | "large";
  fond?: "blanc" | "gris";
  className?: string;
  /** L'outil lui-même : DiagnosticInteractif, un calculateur, un formulaire d'analyse existant. */
  children: ReactNode;
}

/**
 * Enveloppe d'un outil de lead magnet posé juste après le hero d'une page de
 * service : dit ce que l'outil fait et ce que l'on obtient, puis l'outil.
 * Composant serveur ; l'outil (enfant) est client.
 */
export default function SectionOutil({
  id = "ressource",
  badge = "Outil gratuit",
  titre,
  accroche,
  obtenez = [],
  disposition = "colonnes",
  fond = "blanc",
  className,
  children,
}: SectionOutilProps) {
  const entete = (
    <>
      <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-texte">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        {badge}
      </p>
      <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">{titre}</h2>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{accroche}</p>
      {obtenez.length > 0 && (
        <ul className={cn("mt-6 space-y-2", disposition === "large" && "mx-auto inline-flex flex-col text-left")}>
          {obtenez.map((o) => (
            <li key={o} className="flex items-start gap-3 text-foreground">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary-texte" aria-hidden="true">
                <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <span className="leading-relaxed">{o}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );

  return (
    <section id={id} className={cn("scroll-mt-24 py-14 sm:py-20", fond === "gris" ? "bg-muted/30" : "bg-background", className)}>
      <Conteneur>
        {disposition === "colonnes" ? (
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5 lg:sticky lg:top-28">{entete}</Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              {children}
            </Reveal>
          </div>
        ) : (
          <>
            <Reveal className="mx-auto max-w-3xl text-center">{entete}</Reveal>
            <Reveal delay={0.1} className="mt-10">
              {children}
            </Reveal>
          </>
        )}
      </Conteneur>
    </section>
  );
}
