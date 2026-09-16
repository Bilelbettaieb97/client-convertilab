import { cn } from "@/lib/utils";

export interface PoleEtape {
  titre: string;
  texte: string;
  /** Durée ou repère facultatif (« Jour 1 », « Semaine 1 »). */
  repere?: string;
}

export interface PoleEtapesProps {
  etapes: PoleEtape[];
}

/**
 * Quatre étapes en cartes reliées par un trait sur grand écran : le numéro
 * se colore au survol, le repère temporel est en contour (pas de dégradé,
 * la couleur reste portée par le numéro). Une seule ombre de survol sur tout
 * le site (règle du directeur artistique).
 */
export default function PoleEtapes({ etapes }: PoleEtapesProps) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {etapes.map((etape, i) => (
        <li
          key={etape.titre}
          className={cn(
            "group relative rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
            "transition-[translate,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-24px_hsl(270_70%_45%_/_0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0",
            // Trait vers l'étape suivante, à hauteur du numéro, dans la gouttière de 24 px (lg seulement).
            "lg:before:absolute lg:before:-right-6 lg:before:top-[2.75rem] lg:before:h-px lg:before:w-6 lg:before:bg-border lg:last:before:hidden"
          )}
        >
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-base font-bold text-primary-texte tabular-nums transition-colors duration-300 group-hover:bg-primary group-hover:text-white motion-reduce:transition-none"
            aria-hidden="true"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          {etape.repere && (
            <p className="mt-4 inline-flex items-center rounded-full border border-primary/25 bg-primary/5 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary-texte">
              {etape.repere}
            </p>
          )}
          <h3 className={cn("text-lg font-semibold text-foreground", etape.repere ? "mt-2" : "mt-4")}>
            <span className="sr-only">Étape {i + 1} : </span>
            {etape.titre}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{etape.texte}</p>
        </li>
      ))}
    </ol>
  );
}
