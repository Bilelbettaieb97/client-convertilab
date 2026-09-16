"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions, type Marker } from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion-safe";
import { cn } from "@/lib/utils";

/**
 * Globe WebGL (cobe 2.x) centré sur la France, marqueur sur Rueil-Malmaison.
 * Source : Magic UI `globe`, adapté : framer-motion, cobe 2, prop `focus`
 * (lat, lon) pour cadrer un pays, rotation automatique désactivée par défaut
 * et toujours désactivée avec prefers-reduced-motion, échec WebGL silencieux
 * (le canvas reste invisible, le parent garde sa taille).
 *
 * À charger UNIQUEMENT via `GlobeLazy` (next/dynamic ssr:false + fallback de
 * même taille) : cobe ne s'exécute pas côté serveur.
 */

const MOVEMENT_DAMPING = 1400;

/** Rueil-Malmaison (92). */
export const RUEIL_MALMAISON: [number, number] = [48.877, 2.18];

/** Convertit (lat, lon) en angles cobe (phi, theta) pour cadrer ce point. */
export function locationToAngles(lat: number, lon: number): [number, number] {
  return [Math.PI - ((lon * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];
}

const DEFAUT: Omit<COBEOptions, "width" | "height" | "onRender"> = {
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.6,
  mapSamples: 12000,
  mapBrightness: 3,
  baseColor: [0.94, 0.93, 0.98],
  // hsl(270 70% 60%) : violet de la charte.
  markerColor: [0.6, 0.32, 0.88],
  glowColor: [0.97, 0.95, 1],
  markers: [{ location: RUEIL_MALMAISON, size: 0.04 }],
};

export interface GlobeProps {
  className?: string;
  /** Point à cadrer au centre (lat, lon). France par défaut. */
  focus?: [number, number];
  /** Inclinaison forcée (radians). Par défaut, déduite de `focus`. */
  theta?: number;
  markers?: Marker[];
  /** Rotation lente continue (désactivée avec prefers-reduced-motion). */
  autoRotate?: boolean;
  rotationSpeed?: number;
  /** Options cobe supplémentaires (couleurs, échantillonnage...). */
  config?: Partial<Omit<COBEOptions, "width" | "height" | "onRender">>;
}

export function Globe({
  className,
  focus = [46.6, 2.35],
  theta,
  markers,
  autoRotate = false,
  rotationSpeed = 0.003,
  config,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const reduced = useReducedMotionSafe();

  const r = useMotionValue(0);
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 });

  // Les objets passés en props (focus, markers, config) sont comparés par
  // valeur : un objet recréé à chaque rendu ne relance pas le globe.
  const cle = JSON.stringify({ focus, theta, markers, config });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => {
      widthRef.current = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const [phiFocus, thetaFocus] = locationToAngles(focus[0], focus[1]);
    phiRef.current = phiFocus;
    const tourne = autoRotate && !reduced;
    // DPR plafonné à 1,5 sur petit écran : premier rendu WebGL plus léger.
    const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1.5 : 2);

    // cobe 2 n'a plus de boucle interne (`onRender`) : on pilote la boucle
    // requestAnimationFrame nous-mêmes, uniquement quand le globe est visible
    // et quand quelque chose a changé (rotation, glissement, redimensionnement).
    let globe: ReturnType<typeof createGlobe> | null = null;
    try {
      globe = createGlobe(canvas, {
        ...DEFAUT,
        ...config,
        devicePixelRatio: dpr,
        phi: phiRef.current,
        theta: theta ?? thetaFocus,
        markers: markers ?? config?.markers ?? DEFAUT.markers,
        width: widthRef.current * 2,
        height: widthRef.current * 2,
      });
    } catch {
      // WebGL indisponible : le canvas reste transparent, le parent garde sa taille.
      window.removeEventListener("resize", onResize);
      return;
    }

    let raf = 0;
    let visible = true;
    let dernierPhi = Number.NaN;
    let derniereLargeur = -1;
    // Les premières frames sont toujours rendues, même si phi ne bouge pas :
    // sans rotation (reduced motion, autoRotate faux), un seul `update`
    // avant la première frame de cobe laissait un disque vide.
    let framesForcees = 6;

    const frame = () => {
      if (tourne && pointerInteracting.current === null) phiRef.current += rotationSpeed;
      const phi = phiRef.current + (reduced ? r.get() : rs.get());
      const largeur = widthRef.current * 2;
      if (framesForcees > 0 || phi !== dernierPhi || largeur !== derniereLargeur) {
        framesForcees -= 1;
        globe?.update({ phi, width: largeur, height: largeur });
        dernierPhi = phi;
        derniereLargeur = largeur;
      }
      if (visible) raf = requestAnimationFrame(frame);
    };

    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(([entry]) => {
            const avant = visible;
            visible = entry.isIntersecting;
            if (visible && !avant) raf = requestAnimationFrame(frame);
          })
        : null;
    observer?.observe(canvas);

    raf = requestAnimationFrame(frame);
    const t = setTimeout(() => {
      canvas.style.opacity = "1";
    }, 0);

    return () => {
      clearTimeout(t);
      visible = false;
      cancelAnimationFrame(raf);
      observer?.disconnect();
      globe?.destroy();
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [r, rs, cle, autoRotate, rotationSpeed, reduced]);

  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[600px]", className)}>
      <canvas
        className="size-full opacity-0 transition-opacity duration-500 motion-reduce:transition-none contain-[layout_paint_size]"
        ref={canvasRef}
        aria-hidden="true"
        onPointerDown={(e) => updatePointerInteraction(e.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
}

export default Globe;
