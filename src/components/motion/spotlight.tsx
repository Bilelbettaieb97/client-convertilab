"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion-safe";
import { cn } from "@/lib/utils";

/**
 * Projecteur léger : un halo radial qui apparaît en fondu depuis le haut à
 * gauche du hero (une seule fois, 1,2 s). Aucun SVG lourd, aucun filtre.
 * Statique avec prefers-reduced-motion. Le parent doit être `relative isolate
 * overflow-hidden` (le halo est en `-z-10`, sous le contenu).
 */
export interface SpotlightProps {
  className?: string;
  /** Couleur du halo (par défaut violet de la charte, très transparent). */
  color?: string;
  /** Diamètre du halo (valeur CSS). */
  size?: string;
  /** Délai d'apparition en secondes. */
  delay?: number;
}

export function Spotlight({ className, color = "hsl(270 70% 60% / 0.16)", size = "70vw", delay = 0.2 }: SpotlightProps) {
  const reduced = useReducedMotionSafe();

  const style: React.CSSProperties = {
    width: size,
    height: size,
    background: `radial-gradient(circle at center, ${color}, transparent 60%)`,
  };

  const base = cn("pointer-events-none absolute -top-[30%] -left-[15%] -z-10 rounded-full blur-2xl", className);

  if (reduced) {
    return <div className={base} style={style} aria-hidden="true" />;
  }

  return (
    <motion.div
      className={base}
      style={style}
      aria-hidden="true"
      initial={{ opacity: 0, x: -60, y: -40, scale: 0.85 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

export default Spotlight;
