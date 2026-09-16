"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion-safe";
import { cn } from "@/lib/utils";

/**
 * Compteur animé (150, 4,9, 2). Source : Magic UI `number-ticker`, adapté :
 * framer-motion, format fr-FR, valeur finale présente dans le HTML rendu
 * côté serveur (les robots lisent « 150 », pas « 0 »), rendu statique
 * avec prefers-reduced-motion.
 */
export interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number;
  startValue?: number;
  direction?: "up" | "down";
  /** Délai avant le départ, en secondes. */
  delay?: number;
  decimalPlaces?: number;
  /** Locale Intl (fr-FR par défaut : « 4,9 »). */
  locale?: string;
}

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  locale = "fr-FR",
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotionSafe();
  const cible = direction === "down" ? startValue : value;
  const depart = direction === "down" ? value : startValue;

  const motionValue = useMotionValue(depart);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const format = (n: number) =>
    Intl.NumberFormat(locale, {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(Number(n.toFixed(decimalPlaces)));

  // Au montage (sans reduced motion) : on part de la valeur de départ,
  // le HTML initial contenait déjà la valeur finale. Avec reduced motion, on
  // remet la valeur finale : à l'hydratation, `reduced` vaut d'abord false
  // (snapshot serveur), le texte est passé à la valeur de départ, puis le hook
  // bascule à true sans réanimer (les compteurs restaient à « 0 »).
  useEffect(() => {
    if (!ref.current) return;
    ref.current.textContent = format(reduced ? cible : depart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (isInView) {
      timer = setTimeout(() => motionValue.set(cible), delay * 1000);
    }
    return () => {
      if (timer !== null) clearTimeout(timer);
    };
  }, [motionValue, isInView, delay, cible, reduced]);

  useEffect(() => {
    if (reduced) return;
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = format(latest);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [springValue, decimalPlaces, locale, reduced]);

  return (
    <span ref={ref} className={cn("inline-block tabular-nums", className)} {...props}>
      {format(cible)}
    </span>
  );
}

export default NumberTicker;
