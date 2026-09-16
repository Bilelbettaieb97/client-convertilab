"use client";

import { cn } from "@/lib/utils";

/**
 * Fond de hero : dégradé « mesh » violet très clair, trois halos flous qui
 * dérivent lentement en CSS pur (keyframes `motion-mesh`, globals.css).
 * Sans WebGL, sans JS d'animation. Figé avec prefers-reduced-motion et sous
 * `lg` (règles CSS de globals.css, DOM identique serveur / client) : en
 * mobile, trois surfaces floutées de 60 vw animées en boucle coûtent cher au
 * GPU pour un effet imperceptible à cette taille. Seul le premier halo garde
 * `blur-3xl` ; les deux autres sont en `blur-2xl`, moins coûteux à composer.
 *
 * Le parent doit être `relative isolate overflow-hidden` : `isolate` crée le
 * contexte d'empilement qui garde le mesh (`-z-10`) au-dessus du fond de page
 * mais sous le contenu. Il ne capte aucun clic.
 */
export interface HeroMeshProps {
  className?: string;
  /** Intensité des halos (0,1 à 1). 1 = charte « très clair » par défaut. */
  intensite?: number;
}

export function HeroMesh({ className, intensite = 1 }: HeroMeshProps) {
  const anim = "animate-motion-mesh";
  const opacite = Math.max(0.1, Math.min(1, intensite));

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
      aria-hidden="true"
      style={{ opacity: opacite }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(270_70%_60%_/_0.06),transparent_60%)]" />
      <div
        className={cn(
          "absolute -top-[20%] -left-[10%] h-[60vh] w-[60vw] max-w-[720px] rounded-full bg-[radial-gradient(circle,hsl(270_70%_60%_/_0.22),transparent_65%)] blur-3xl will-change-transform",
          anim
        )}
        style={{ "--duration": "22s", "--mesh-x": "6%", "--mesh-y": "-4%" } as React.CSSProperties}
      />
      <div
        className={cn(
          "absolute top-[10%] -right-[15%] h-[55vh] w-[55vw] max-w-[640px] rounded-full bg-[radial-gradient(circle,hsl(330_70%_60%_/_0.16),transparent_65%)] blur-2xl will-change-transform",
          anim
        )}
        style={{ "--duration": "26s", "--mesh-x": "-5%", "--mesh-y": "5%" } as React.CSSProperties}
      />
      <div
        className={cn(
          "absolute -bottom-[25%] left-[30%] h-[50vh] w-[50vw] max-w-[560px] rounded-full bg-[radial-gradient(circle,hsl(270_70%_60%_/_0.12),transparent_65%)] blur-2xl will-change-transform",
          anim
        )}
        style={{ "--duration": "30s", "--mesh-x": "-4%", "--mesh-y": "-6%" } as React.CSSProperties}
      />
    </div>
  );
}

export default HeroMesh;
