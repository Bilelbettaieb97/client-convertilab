"use client";

import { useSyncExternalStore } from "react";

const REQUETE = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return () => {};
  const mq = window.matchMedia(REQUETE);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia(REQUETE).matches
    : false;
}

function getServerSnapshot() {
  return false;
}

/**
 * `prefers-reduced-motion` sans erreur d'hydratation.
 *
 * `useReducedMotion` de framer-motion lit la media query de façon synchrone
 * au premier rendu client : avec la préférence activée, le premier rendu
 * diffère du HTML serveur (rendu avec `null`) et React jette tout le HTML
 * (erreur #418). Ici le snapshot serveur vaut `false` : le premier rendu
 * client est identique au HTML, puis React bascule vers la vraie valeur
 * juste après l'hydratation. Réagit aussi aux changements de préférence.
 */
export function useReducedMotionSafe(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useReducedMotionSafe;
