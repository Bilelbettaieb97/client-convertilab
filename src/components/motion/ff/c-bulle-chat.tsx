/**
 * Adapté de Frontend Forever :
 * https://frontendforever.com/frontendforever/sliding-gradient-chat-button-with-tooltip-animation,
 * licence MIT.
 *
 * Adaptation : le modèle fait glisser un dégradé jaune-rouge (fond à 300 %)
 * sous un bouton rond et fait apparaître une étiquette orange au-dessus. Ici,
 * le fond est violet uni au repos (les deux premiers tiers du dégradé sont
 * violets) et le rose de la charte ne glisse qu'au survol ou au focus clavier
 * (500 ms ease-out, `background-position` seul), pour ne pas ajouter d'aplat
 * fort permanent à l'écran. L'étiquette « Une question ? » est posée à gauche
 * de la bulle (elle est collée au bord droit), sombre, et n'existe que sur les
 * écrans à survol (`hover: hover`) : rien ne se déclenche au toucher. Ombre
 * violette douce au lieu de l'ombre noire, aucune animation permanente (le
 * `ping` de l'ancienne bulle est retiré). Le bouton est en CSS pur dans
 * `ChatWidget` (échange d'icônes par tw-animate-css, appui par active:scale) :
 * ce module fournit ses classes et l'étiquette.
 */
import { cn } from "@/lib/utils";

/** Bulle ronde : violet uni au repos, le rose glisse au survol. À poser avec `group` et `pointer-events-auto`. */
export const BULLE_CHAT =
  "group relative flex h-12 w-12 items-center justify-center rounded-full text-white sm:h-[52px] sm:w-[52px] bg-[linear-gradient(135deg,hsl(270_70%_60%)_0%,hsl(270_70%_60%)_50%,hsl(330_70%_60%)_100%)] bg-[length:300%_100%] bg-left hover:bg-right focus-visible:bg-right transition-[background-position] duration-500 ease-out motion-reduce:transition-none shadow-lg shadow-purple-900/25";

/** Étiquette à gauche de la bulle, visible au survol ou au focus clavier du `group`, écrans à survol seulement. */
export function EtiquetteBulle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-[opacity,translate] duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 motion-reduce:transition-none [@media(hover:hover)]:block",
        className
      )}
    >
      {children}
    </span>
  );
}
