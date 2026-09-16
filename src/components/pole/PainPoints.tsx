import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Conteneur, Paragraphes, Surtitre } from "./pole-ui";

export interface PainPoint {
  icon: LucideIcon;
  titre: string;
  texte: string;
}

export interface PainPointsProps {
  id?: string;
  surtitre?: string;
  /** H2, ex. « Si vous reconnaissez l'une de ces situations... ». */
  titre: string;
  intro?: string | string[];
  /** Trois douleurs (jamais plus de quatre). */
  points: PainPoint[];
  /** Fond gris très clair (par défaut) ou blanc. */
  fond?: "gris" | "blanc";
  className?: string;
}

/**
 * « Le constat » : trois cartes de douleur avant les offres. Serveur, sans
 * texte en dur.
 */
export default function PainPoints({
  id,
  surtitre,
  titre,
  intro,
  points,
  fond = "gris",
  className,
}: PainPointsProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", fond === "gris" ? "bg-muted/30" : "bg-background", className)}>
      <Conteneur>
        <div className="mx-auto max-w-3xl text-center">
          {surtitre && <Surtitre>{surtitre}</Surtitre>}
          <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">{titre}</h2>
          {intro && (
            <div className="mt-4 space-y-3 text-lg">
              <Paragraphes texte={intro} />
            </div>
          )}
        </div>
        <ul className={cn("mt-10 grid gap-5", points.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3")}>
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <li
                key={point.titre}
                className="group rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(15,23,42,0.18)] motion-reduce:transition-none"
              >
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-600 ring-1 ring-pink-100"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{point.titre}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{point.texte}</p>
              </li>
            );
          })}
        </ul>
      </Conteneur>
    </section>
  );
}
