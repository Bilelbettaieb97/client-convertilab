"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion-safe";
import { cn } from "@/lib/utils";

type MarginValue = `${number}${"px" | "%"}`;
type MarginType =
  | MarginValue
  | `${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`;

/**
 * Apparition au défilement : fondu + translation de 20 px vers le haut,
 * 0,5 s, une seule fois. Rendu statique avec prefers-reduced-motion.
 *
 * Le contenu est visible dans le HTML serveur (aucun `opacity:0` avant
 * l'hydratation ni sans JavaScript). Après le montage : un bloc déjà dans le
 * viewport reste visible tel quel ; un bloc plus bas est masqué puis animé
 * quand il entre dans le viewport (IntersectionObserver, une seule fois).
 *
 * Ne pas envelopper le H1 ni le texte du hero : ils doivent être visibles
 * immédiatement (LCP). Réserver aux sections sous la ligne de flottaison.
 */
export interface RevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  /** Délai en secondes (pour décaler des cartes voisines : 0, 0.08, 0.16...). */
  delay?: number;
  /** Translation initiale en px (20 par défaut). */
  y?: number;
  /** Durée en secondes (0,5 par défaut). */
  duration?: number;
  /** Marge du viewport (rootMargin) pour déclencher un peu avant l'entrée. */
  margin?: MarginType;
  className?: string;
}

type Etat = "initial" | "cache" | "visible";

export function Reveal({
  children,
  delay = 0,
  y = 20,
  duration = 0.5,
  margin = "0px 0px -10% 0px",
  className,
  ...props
}: RevealProps) {
  const reduced = useReducedMotionSafe();
  const ref = useRef<HTMLDivElement>(null);
  const [etat, setEtat] = useState<Etat>("initial");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    // Déjà à l'écran au montage : on ne cache rien, pas d'animation.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setEtat("visible");
      return;
    }
    setEtat("cache");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEtat("visible");
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  if (reduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={false}
      animate={etat === "cache" ? { opacity: 0, y } : { opacity: 1, y: 0 }}
      transition={etat === "visible" ? { duration, delay, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
