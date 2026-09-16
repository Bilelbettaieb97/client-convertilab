/**
 * Adapté de Frontend Forever :
 * https://frontendforever.com/frontendforever/hamburger-to-x-menu-with-css-transform-animation,
 * licence MIT.
 *
 * Adaptation : le modèle repose sur une case à cocher cachée et le sélecteur
 * `peer-checked`, avec trois barres pivotées à 90° et décalées à la main. On
 * n'en garde que le principe (trois barres qui deviennent une croix par
 * `transform` seul, 300 ms ease-out) : l'état vient de React (`ouvert`), la
 * barre du haut descend et pivote de 45°, celle du milieu s'efface (échelle
 * horizontale 0 et opacité 0, 200 ms), celle du bas monte et pivote de -45°.
 * Couleur `currentColor` du bouton parent, 18 × 16 px, `aria-hidden` : le
 * bouton qui l'entoure porte `aria-label`, `aria-expanded` et `aria-controls`.
 * Sous `prefers-reduced-motion`, l'état final s'affiche sans transition.
 */
import { cn } from "@/lib/utils";

const BARRE =
  "absolute left-0 h-0.5 w-full rounded-full bg-current ease-out motion-reduce:transition-none";

export function Hamburger({ ouvert, className }: { ouvert: boolean; className?: string }) {
  return (
    <span className={cn("relative block h-4 w-[18px]", className)} aria-hidden="true">
      <span
        className={cn(BARRE, "top-0 transition-transform duration-300", ouvert && "translate-y-[7px] rotate-45")}
      />
      <span
        className={cn(BARRE, "top-[7px] transition-[scale,opacity] duration-200", ouvert && "scale-x-0 opacity-0")}
      />
      <span
        className={cn(BARRE, "top-[14px] transition-transform duration-300", ouvert && "-translate-y-[7px] -rotate-45")}
      />
    </span>
  );
}
