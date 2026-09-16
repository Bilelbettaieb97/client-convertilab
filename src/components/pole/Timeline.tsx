import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TimelineEtape {
  /** Repère temporel : « Jour 1 », « Semaine 1 », « Semaine 2 », « Chaque mois ». */
  repere: string;
  titre: string;
  texte: string;
  icon?: LucideIcon;
}

export interface TimelineProps {
  etapes: TimelineEtape[];
  /** À placer dans `SectionSombre` : couleurs claires. */
  sombre?: boolean;
  className?: string;
}

/**
 * Étapes avec repère temporel : ligne verticale en mobile, horizontale en
 * desktop (à partir de `lg` pour 4 étapes, `md` pour 3). Grille sans titre :
 * la placer comme enfant d'un `PoleSection` ou d'un `SectionSombre`.
 */
export default function Timeline({ etapes, sombre = false, className }: TimelineProps) {
  const colonnes =
    etapes.length <= 3 ? "md:grid-cols-3" : etapes.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3 lg:grid-cols-5";
  const horizontalDes = etapes.length <= 3 ? "md" : "lg";

  return (
    <ol className={cn("relative grid gap-8", colonnes, className)}>
      {/* Ligne horizontale (desktop) qui traverse les pastilles. */}
      <div
        className={cn(
          "pointer-events-none absolute left-0 right-0 top-5 hidden h-px",
          horizontalDes === "md" ? "md:block" : "lg:block",
          sombre ? "bg-white/15" : "bg-border"
        )}
        aria-hidden="true"
      />
      {etapes.map((etape, i) => {
        const Icon = etape.icon;
        const derniere = i === etapes.length - 1;
        return (
          <li key={etape.titre} className="relative flex gap-4 md:block">
            {/* Ligne verticale (mobile) entre les pastilles. */}
            {!derniere && (
              <div
                className={cn(
                  "absolute left-5 top-10 bottom-[-2rem] w-px",
                  horizontalDes === "md" ? "md:hidden" : "lg:hidden",
                  sombre ? "bg-white/15" : "bg-border"
                )}
                aria-hidden="true"
              />
            )}
            <span
              className={cn(
                "relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-4",
                sombre
                  ? "bg-purple-500 text-white ring-slate-950"
                  : "bg-gradient-to-r from-purple-600 to-pink-600 text-white ring-background"
              )}
              aria-hidden="true"
            >
              {Icon ? <Icon className="h-4 w-4" strokeWidth={2.25} /> : String(i + 1).padStart(2, "0")}
            </span>
            <div className="pb-2 md:mt-5">
              <p className={cn("text-xs font-semibold uppercase tracking-wide", sombre ? "text-purple-300" : "text-purple-700")}>
                {etape.repere}
              </p>
              <h3 className={cn("mt-1 text-lg font-semibold", sombre ? "text-white" : "text-foreground")}>
                <span className="sr-only">Étape {i + 1} : </span>
                {etape.titre}
              </h3>
              <p className={cn("mt-2 text-sm leading-relaxed", sombre ? "text-slate-300" : "text-muted-foreground")}>
                {etape.texte}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
