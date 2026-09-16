/**
 * Adapté de Frontend Forever :
 * https://frontendforever.com/frontendforever/smooth-hover-pill-button-with-rotating-arrow-and-color-swap,
 * licence MIT.
 *
 * Adaptation : au survol et au focus clavier, un fond teinté s'étire depuis
 * le disque jusqu'à remplir la pilule (450 ms, courbe du modèle) ; le disque
 * à gauche reste plein et la flèche glisse de 2 px (et tourne de -45° pour un
 * lien externe : flèche sortante). Le libellé ne change jamais de couleur :
 * le fond qui s'étire est translucide (violet à 12 % sur clair, blanc à 12 %
 * sur sombre), donc le texte reste lisible à chaque instant de l'animation
 * (l'ancienne version passait le texte en blanc avant que le disque ne l'ait
 * rejoint : texte invisible pendant le survol dans certains navigateurs).
 * Retirés : les ombres internes noires, le vert, le changement de padding.
 * Hauteur 44 px (cible tactile). Reduced-motion : bordure et fond seulement.
 * Mêmes règles de lien que `BoutonLien`. Réservé aux liens d'exploration ;
 * les boutons de conversion gardent `BoutonLien`.
 */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BoutonCercleProps {
  href: string;
  label: string;
  /** Lien externe : nouvel onglet, rel sécurisé, mention lecteur d'écran, flèche sortante. */
  external?: boolean;
  tonalite?: "clair" | "sombre";
  className?: string;
}

const LIEN_BASE =
  "group/cercle relative isolate inline-flex min-h-11 items-center overflow-hidden rounded-full border pl-12 pr-5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none";

/** Fond translucide qui s'étire depuis le disque jusqu'au bout de la pilule. */
const FOND_BASE =
  "absolute left-1 top-1/2 -z-10 h-9 w-9 -translate-y-1/2 rounded-full transition-[width] duration-[450ms] ease-[cubic-bezier(.51,.026,.368,1.016)] group-hover/cercle:w-[calc(100%-0.5rem)] group-focus-visible/cercle:w-[calc(100%-0.5rem)] motion-reduce:transition-none motion-reduce:group-hover/cercle:w-9 motion-reduce:group-focus-visible/cercle:w-9";

/** Disque plein avec la flèche : fixe, toujours au-dessus du fond. */
const DISQUE_BASE = "absolute left-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full";

const TONALITES = {
  clair: {
    lien: "border-border bg-card text-foreground hover:border-primary/40 focus-visible:ring-ring focus-visible:ring-offset-background",
    fond: "bg-primary/12",
    disque: "bg-primary text-white",
  },
  sombre: {
    lien: "border-white/15 bg-white/[0.06] text-white hover:border-white/40 focus-visible:ring-purple-300 focus-visible:ring-offset-slate-950",
    fond: "bg-white/12",
    disque: "bg-white text-slate-950",
  },
} as const;

export function BoutonCercle({ href, label, external = false, tonalite = "clair", className }: BoutonCercleProps) {
  const t = TONALITES[tonalite];
  const classes = cn(LIEN_BASE, t.lien, className);

  const contenu = (
    <>
      <span aria-hidden="true" className={cn(FOND_BASE, t.fond)} />
      <span aria-hidden="true" className={cn(DISQUE_BASE, t.disque)}>
        <ArrowRight
          className={cn(
            "h-4 w-4 transition-transform duration-300 group-hover/cercle:translate-x-0.5 motion-reduce:transition-none",
            external && "group-hover/cercle:-rotate-45"
          )}
        />
      </span>
      {label}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {contenu}
        <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
      </a>
    );
  }

  // Ancre interne : un <a> simple (pas de prefetch RSC inutile), comme BoutonLien.
  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {contenu}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {contenu}
    </Link>
  );
}

export default BoutonCercle;
