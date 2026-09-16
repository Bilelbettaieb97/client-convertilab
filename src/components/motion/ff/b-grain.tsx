/**
 * Adapté de Frontend Forever :
 * https://frontendforever.com/frontendforever/animated-noise-and-gradient-mask-overlay-container,
 * licence MIT.
 *
 * Adaptation : du modèle on ne garde que l'idée du grain en fond tuilé. Le SVG
 * (160 × 160, `feTurbulence` + matrice de saturation à 0 pour un bruit sans
 * couleur, moins de 600 octets) est régénéré, aucune animation, aucun masque
 * dégradé, aucun `filter: url()` sur la section : le fond est rasterisé une
 * fois par le navigateur. Composant serveur, purement décoratif (`aria-hidden`).
 * Fusion `screen` et non `overlay` : mesuré sur slate-950, l'overlay ne bouge
 * les pixels que d'un niveau (invisible), le screen éclaircit de 3 à 6 niveaux
 * à 0,045 d'opacité, jamais plus sombre que le fond.
 *
 * Usage : premier enfant d'une section `relative isolate` (ex. `SectionSombre`),
 * le calque `-z-10` passe sous le contenu et au-dessus du fond. Un seul grain
 * par page.
 */
import { cn } from "@/lib/utils";

const GRAIN_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export interface GrainProps {
  /** Opacité du calque (0,045 par défaut : perceptible sans moiré en 390 px). */
  opacite?: number;
  className?: string;
}

export function Grain({ opacite = 0.045, className }: GrainProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10 mix-blend-screen", className)}
      style={{ opacity: opacite, backgroundImage: GRAIN_SVG, backgroundSize: "160px 160px" }}
    />
  );
}

export default Grain;
