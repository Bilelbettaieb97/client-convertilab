"use client";

import { useRef, type ComponentPropsWithoutRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Défilement continu (logos, noms de sites clients).
 * Source : Magic UI `marquee`, adapté : "use client", keyframes namespacés
 * `motion-marquee` (globals.css). Avec prefers-reduced-motion, la règle CSS de
 * globals.css coupe l'animation : le DOM reste identique serveur / client
 * (pas de branche JS, donc pas d'erreur d'hydratation). Les copies (i > 0)
 * sont `inert` + `aria-hidden` : ni focus, ni lecteur d'écran. Le défilement
 * se met en pause au survol, quand un lien de la première copie a le focus, et
 * quand la rangée est hors écran (`useInView`, 200 px de marge : la boucle ne
 * tourne pas sous les sections plus bas) ; `contain: paint` borne le repaint.
 */
export interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  /** Inverse le sens de défilement. */
  reverse?: boolean;
  /** Met en pause au survol. */
  pauseOnHover?: boolean;
  children: React.ReactNode;
  /** Défilement vertical. */
  vertical?: boolean;
  /** Nombre de répétitions du contenu (assez pour couvrir la largeur). */
  repeat?: number;
  /** Durée d'un tour, en secondes. */
  duration?: number;
  /** Espace entre les éléments (valeur CSS). */
  gap?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = 40,
  gap = "1.5rem",
  ...props
}: MarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "200px" });
  return (
    <div
      {...props}
      ref={ref}
      style={{ "--duration": `${duration}s`, "--gap": gap, ...props.style } as React.CSSProperties}
      className={cn(
        "group motion-marquee-conteneur flex gap-(--gap) overflow-hidden p-2 [contain:paint]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            aria-hidden={i > 0 ? true : undefined}
            inert={i > 0 || undefined}
            className={cn("flex shrink-0 justify-around gap-(--gap)", {
              "animate-motion-marquee flex-row": !vertical,
              "animate-motion-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
              "[animation-play-state:paused]": !inView,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

export default Marquee;
