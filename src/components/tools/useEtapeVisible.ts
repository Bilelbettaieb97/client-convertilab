"use client";

import { useEffect, useRef } from "react";

/**
 * Ramène le formulaire sous les yeux à chaque changement d'étape.
 *
 * Sur téléphone, les étapes n'ont pas la même hauteur : après avoir rempli
 * l'étape 2, le visiteur se retrouvait au milieu de l'étape 3, ou au-dessus
 * d'elle s'il avait défilé, et devait chercher où était passé le bouton. La
 * carte est recentrée à chaque passage, sans animation quand la personne a
 * demandé moins de mouvement.
 *
 * Le premier affichage est ignoré volontairement : arriver sur la page ne doit
 * pas voler le défilement à quelqu'un qui vient de cliquer sur un lien ancré.
 */
export function useEtapeVisible<T extends HTMLElement = HTMLDivElement>(etape: number) {
  const ancre = useRef<T>(null);
  const premier = useRef(true);

  /*
   * Arriver en haut de la page, quoi qu'il arrive.
   *
   * Signalé le 23/09/2026 : en cliquant sur la publicité depuis le téléphone,
   * la page s'ouvrait au niveau du pied de page, et il fallait remonter pour
   * voir le formulaire. Non reproduit en navigateur propre, ni au premier
   * chargement ni au retour sur la page : la cause la plus probable est le
   * navigateur intégré de Facebook, qui restitue la position d'une visite
   * précédente. Une personne qui paie pour ce clic ne doit pas avoir à
   * remonter, donc on force la position au montage.
   *
   * L'ancre d'URL est respectée : un lien vers « /seo-check#faq » doit
   * continuer d'ouvrir la FAQ.
   */
  useEffect(() => {
    if (window.location.hash) return;
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (window.scrollY > 0) window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (premier.current) {
      premier.current = false;
      return;
    }
    const el = ancre.current;
    if (!el) return;
    // Sur grand écran tout tient déjà à l'écran : on ne bouge rien.
    if (window.matchMedia("(min-width: 768px)").matches) return;

    const doux = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Laisse le temps à la nouvelle étape d'être posée avant de mesurer.
    const t = window.setTimeout(() => {
      const haut = el.getBoundingClientRect().height;
      el.scrollIntoView({
        // Une étape plus haute que l'écran se lit depuis son début ;
        // une étape courte est centrée, c'est plus agréable à l'œil.
        block: haut > window.innerHeight - 80 ? "start" : "center",
        behavior: doux ? "smooth" : "auto",
      });
    }, 60);
    return () => window.clearTimeout(t);
  }, [etape]);

  return ancre;
}
