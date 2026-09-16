import { cn } from "@/lib/utils";

/**
 * Adapté de Frontend Forever : https://frontendforever.com/frontendforever/grid-background-with-radial-fade-mask, licence MIT.
 * Adaptation : composant serveur, fond CSS pur (aucune image, aucune animation,
 * rien à prévoir pour prefers-reduced-motion), traits en violet de la charte
 * à 6 ou 7 % au lieu du gris ardoise, points d'intersection et variante sombre
 * retirés. Le masque elliptique est centré sur la colonne du H1 : en mobile
 * (une colonne) il est centré en haut, en `lg` il glisse vers la gauche.
 *
 * Emplacement : hero de l'accueil, entre <HeroMesh /> et <Spotlight /> dans
 * une section `relative isolate overflow-hidden` (les traits passent
 * au-dessus du voile coloré, sous le projecteur).
 */
export interface GrilleHeroProps {
  className?: string;
}

export function GrilleHero({ className }: GrilleHeroProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 bg-[size:32px_32px]",
        // Mobile : traits à 6 %, masque centré sous le H1 (une colonne).
        "bg-[linear-gradient(to_right,hsl(270_70%_60%_/_0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(270_70%_60%_/_0.06)_1px,transparent_1px)]",
        "[mask-image:radial-gradient(ellipse_120%_60%_at_50%_25%,#000_35%,transparent_100%)]",
        "[-webkit-mask-image:radial-gradient(ellipse_120%_60%_at_50%_25%,#000_35%,transparent_100%)]",
        // lg : traits à 7 %, masque recentré sur la colonne gauche (H1).
        "lg:bg-[linear-gradient(to_right,hsl(270_70%_60%_/_0.07)_1px,transparent_1px),linear-gradient(to_bottom,hsl(270_70%_60%_/_0.07)_1px,transparent_1px)]",
        // Rayons 55 % × 60 % : la grille s'éteint avant la colonne du formulaire (avec 80 % elle passait sous lui et jusqu'au bord droit).
        "lg:[mask-image:radial-gradient(ellipse_55%_60%_at_30%_35%,#000_30%,transparent_100%)]",
        "lg:[-webkit-mask-image:radial-gradient(ellipse_55%_60%_at_30%_35%,#000_30%,transparent_100%)]",
        className
      )}
    />
  );
}

export default GrilleHero;
