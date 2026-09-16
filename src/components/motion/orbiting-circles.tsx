"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Éléments en orbite autour du centre du parent (plateformes publicitaires,
 * outils reliés). Source : Magic UI `orbiting-circles`, adapté : "use client",
 * keyframes `motion-orbit` (globals.css). Avec prefers-reduced-motion, la
 * règle CSS coupe l'animation et le `transform` inline (toujours posé, mais
 * écrasé par les keyframes quand elles tournent) fige chaque élément sur sa
 * position : DOM identique serveur / client, pas de branche JS. Le parent doit être `relative` avec une hauteur
 * fixe (ex. `h-[360px]`) et `flex items-center justify-center`.
 */
export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  /** Durée d'un tour, en secondes. */
  duration?: number;
  /** Rayon de l'orbite, en px. */
  radius?: number;
  /** Affiche le cercle de l'orbite. */
  path?: boolean;
  /** Taille de chaque élément, en px. */
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 40,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  const count = React.Children.count(children);

  return (
    <>
      {path && (
        <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute inset-0 size-full" aria-hidden="true">
          <circle className="stroke-border stroke-1" cx="50%" cy="50%" r={radius} fill="none" />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / count) * index;
        const style: React.CSSProperties & Record<`--${string}`, string | number> = {
          "--duration": calculatedDuration,
          "--radius": radius,
          "--angle": angle,
          "--icon-size": `${iconSize}px`,
        };
        style.transform = `rotate(${angle}deg) translateY(${radius}px) rotate(${-angle}deg)`;
        return (
          <div
            style={style}
            className={cn(
              "absolute flex size-(--icon-size) transform-gpu items-center justify-center rounded-full animate-motion-orbit",
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

export default OrbitingCircles;
