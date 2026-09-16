"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion-safe";
import { cn } from "@/lib/utils";

/**
 * Bordure lumineuse qui parcourt le contour d'une carte.
 * Source : Magic UI `border-beam`, adapté : couleurs de la charte par défaut
 * (violet → rose), rien n'est rendu avec prefers-reduced-motion.
 * Le parent doit être `relative` avec un `rounded-*` : la bordure hérite du rayon.
 *
 * L'animation d'`offset-distance` est en CSS (keyframes `motion-beam`,
 * globals.css) et non pilotée par framer-motion : cette propriété n'est pas
 * accélérée par WAAPI, framer la recalculait en JavaScript à chaque image
 * (12 à 17 points de thread principal au repos, mesurés sur l'accueil). Elle
 * est mise en pause quand la carte est hors écran (`useInView`, 200 px de
 * marge) et l'enveloppe est en `contain: paint` : le repaint reste dans la carte.
 */
export interface BorderBeamProps {
  /** Longueur du faisceau, en px. */
  size?: number;
  /** Durée d'un tour, en secondes. */
  duration?: number;
  /** Décalage de départ dans le cycle, en secondes. */
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
  style?: React.CSSProperties;
  reverse?: boolean;
  /** Position de départ (0 à 100). */
  initialOffset?: number;
  borderWidth?: number;
}

export function BorderBeam({
  className,
  size = 60,
  delay = 0,
  duration = 8,
  colorFrom = "hsl(270 70% 60%)",
  colorTo = "hsl(330 70% 60%)",
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1.5,
}: BorderBeamProps) {
  const reduced = useReducedMotionSafe();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "200px" });
  if (reduced) return null;

  const from = reverse ? `${100 - initialOffset}%` : `${initialOffset}%`;
  const to = reverse ? `${-initialOffset}%` : `${100 + initialOffset}%`;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      // overflow-hidden : le carré en mouvement dépasse la carte sur son trajet ; sans
      // rognage il crée un défilement horizontal en 390 px (le masque ne suffit pas).
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] border-(length:--border-beam-width) border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box] [contain:paint]"
      style={{ "--border-beam-width": `${borderWidth}px` } as React.CSSProperties}
    >
      <div
        className={cn(
          "absolute aspect-square animate-motion-beam",
          "bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent",
          className
        )}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            animationDelay: `${-delay}s`,
            animationPlayState: inView ? "running" : "paused",
            "--duration": `${duration}s`,
            "--beam-from": from,
            "--beam-to": to,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            ...style,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

export default BorderBeam;
