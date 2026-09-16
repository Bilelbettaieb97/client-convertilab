import { Check, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Conteneur, Paragraphes, Surtitre } from "./pole-ui";

export interface Engagement {
  /** Icône lucide facultative (coche par défaut). */
  icon?: LucideIcon;
  titre: string;
  /** Une ligne, concrète. Aucune garantie de remboursement. */
  texte: string;
}

export interface EngagementsProps {
  id?: string;
  surtitre?: string;
  /** H2, ex. « Zéro risque à nous tester ». Omis si `sansTitre`. */
  titre?: string;
  intro?: string | string[];
  /** Quatre à six engagements. */
  items: Engagement[];
  /** `clair` = section autonome fond blanc ; `sombre` = à placer dans `SectionSombre` (rend seulement la grille). */
  variante?: "clair" | "sombre";
  className?: string;
}

/**
 * Grille d'engagements (icône, titre, une ligne). En variante `sombre`, ne
 * rend que la grille : à placer comme enfant de `SectionSombre`, qui porte
 * le H2.
 */
export default function Engagements({
  id,
  surtitre,
  titre,
  intro,
  items,
  variante = "clair",
  className,
}: EngagementsProps) {
  const sombre = variante === "sombre";

  const grille = (
    <ul className={cn("grid gap-4 sm:grid-cols-2", items.length >= 6 ? "lg:grid-cols-3" : items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
      {items.map((item) => {
        const Icon = item.icon ?? Check;
        return (
          <li
            key={item.titre}
            className={cn(
              "flex gap-4 rounded-2xl border p-5",
              sombre ? "border-white/10 bg-white/[0.04]" : "border-border bg-card"
            )}
          >
            <span
              className={cn(
                "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                sombre ? "bg-purple-400/15 text-purple-200" : "bg-primary/10 text-primary"
              )}
              aria-hidden="true"
            >
              <Icon className="h-4 w-4" strokeWidth={2.25} />
            </span>
            <div>
              <h3 className={cn("font-semibold", sombre ? "text-white" : "text-foreground")}>{item.titre}</h3>
              <p className={cn("mt-1 text-sm leading-relaxed", sombre ? "text-slate-300" : "text-muted-foreground")}>
                {item.texte}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );

  if (sombre) return <div id={id} className={className}>{grille}</div>;

  return (
    <section id={id} className={cn("bg-background py-16 sm:py-20", className)}>
      <Conteneur>
        {(titre || surtitre || intro) && (
          <div className="mx-auto max-w-3xl text-center">
            {surtitre && <Surtitre>{surtitre}</Surtitre>}
            {titre && <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">{titre}</h2>}
            {intro && (
              <div className="mt-4 space-y-3 text-lg">
                <Paragraphes texte={intro} />
              </div>
            )}
          </div>
        )}
        <div className={cn(titre || surtitre || intro ? "mt-10" : "")}>{grille}</div>
      </Conteneur>
    </section>
  );
}
