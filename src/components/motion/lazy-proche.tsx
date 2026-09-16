"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Ne monte ses enfants qu'à l'approche du viewport (IntersectionObserver,
 * `marge` avant l'entrée, une seule fois). En attendant, rend `fallback`
 * (à dimensionner comme le contenu pour éviter tout décalage). Sert à
 * différer les composants lourds placés bas dans la page (globe WebGL,
 * orbite d'outils) : leur chunk n'est demandé qu'au moment utile.
 * Sans IntersectionObserver, monte immédiatement.
 */
export interface LazyProcheProps {
  children: ReactNode;
  fallback?: ReactNode;
  /** rootMargin de l'observateur (600 px par défaut). */
  marge?: string;
  className?: string;
}

export function LazyProche({ children, fallback = null, marge = "600px 0px", className }: LazyProcheProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [proche, setProche] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setProche(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProche(true);
          observer.disconnect();
        }
      },
      { rootMargin: marge }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [marge]);

  return (
    <div ref={ref} className={className}>
      {proche ? children : fallback}
    </div>
  );
}

export default LazyProche;
