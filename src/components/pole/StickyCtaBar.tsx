"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion-safe";
import { FLECHE_GLISSE, REFLET_BOUTON } from "@/components/motion/ff/c-bouton-reflet";
import { ArrowRight, Phone, X } from "lucide-react";
import { SITE } from "@/lib/constants";
import { getStoredConsent } from "@/lib/cookies/consent";
import { cn } from "@/lib/utils";

export interface StickyCtaBarProps {
  /** Libellé du bouton principal, ex. « Ma maquette gratuite en 48h ». */
  label: string;
  /** Destination : ancre (`#formulaire`), page ou URL externe. */
  href: string;
  external?: boolean;
  /** Mentions courtes affichées sous les boutons, ex. ["Gratuit", "Sans engagement", "Réponse sous 24 h"]. */
  mentions: string[];
  /** Id de l'élément (formulaire final) dont la visibilité cache la barre. */
  formulaireId?: string;
  /** Nombre de hauteurs d'écran à défiler avant d'apparaître (1 = une fois le hero passé). */
  seuil?: number;
  /** Libellé lecteur d'écran du bouton téléphone. */
  telephoneLabel?: string;
  className?: string;
}

/**
 * Barre d'appel à l'action collante en bas d'écran (mobile et desktop).
 * Apparaît une fois le hero passé (`seuil` hauteurs d'écran, 1 par défaut :
 * le bouton principal du hero a été vu avant qu'elle n'arrive), se cache
 * quand `#formulaireId` est visible ou dépassé (tant que l'on n'est pas
 * remonté au-dessus), quand le pied de page est visible, tant que le bandeau
 * cookies attend une réponse, ou après la croix. Pose `--barre-cta` (sa
 * hauteur) sur <html> quand elle est visible : `ChatWidget` remonte sa bulle
 * d'autant. z-40 : sous la bulle de chat (z-50) et sous le bandeau cookies (z-90).
 */
export default function StickyCtaBar({
  label,
  href,
  external = false,
  mentions,
  formulaireId = "formulaire",
  seuil = 1,
  telephoneLabel = "Appeler l'agence",
  className,
}: StickyCtaBarProps) {
  const [defile, setDefile] = useState(false);
  const [formulaireVisible, setFormulaireVisible] = useState(false);
  const [piedVisible, setPiedVisible] = useState(false);
  const [cookiesRepondus, setCookiesRepondus] = useState(false);
  const [ferme, setFerme] = useState(false);
  const barreRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionSafe();

  const visible = defile && !formulaireVisible && !piedVisible && cookiesRepondus && !ferme;

  // Défilement (un seul écouteur passif) : la barre apparaît une fois le hero
  // passé (`seuil` hauteurs d'écran) et repasse à faux si l'on remonte, pour ne
  // jamais recouvrir le bouton principal du hero. Le formulaire final et le
  // pied de page sont mesurés au même moment (getBoundingClientRect) plutôt
  // qu'avec IntersectionObserver : un saut direct en bas de page (lien d'ancre,
  // touche Fin) ne franchit aucun seuil d'intersection et laissait la barre
  // affichée sur le dernier appel et le footer.
  useEffect(() => {
    const formulaire = document.getElementById(formulaireId);
    const pied = document.getElementById("pied-de-page") ?? document.querySelector("body > footer");
    const onScroll = () => {
      const h = window.innerHeight;
      setDefile(window.scrollY > h * seuil);
      // Visible ou dépassé : son haut est au-dessus de 85 % de l'écran.
      setFormulaireVisible(formulaire ? formulaire.getBoundingClientRect().top < h * 0.85 : false);
      setPiedVisible(pied ? pied.getBoundingClientRect().top < h : false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [seuil, formulaireId]);

  // Bandeau cookies : la barre attend une réponse (« Refuser » ou « Tout
  // accepter ») pour ne pas empiler trois couches fixes en bas d'écran.
  useEffect(() => {
    setCookiesRepondus(Boolean(getStoredConsent()));
    const onConsent = () => setCookiesRepondus(true);
    window.addEventListener("consent-updated", onConsent);
    return () => window.removeEventListener("consent-updated", onConsent);
  }, []);

  // Hauteur de la barre exposée en variable CSS pour la bulle de chat.
  useEffect(() => {
    const racine = document.documentElement;
    if (!visible) {
      racine.style.removeProperty("--barre-cta");
      return;
    }
    const el = barreRef.current;
    if (!el) return;
    const poser = () => racine.style.setProperty("--barre-cta", `${el.offsetHeight}px`);
    poser();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(poser) : null;
    ro?.observe(el);
    return () => {
      ro?.disconnect();
      racine.style.removeProperty("--barre-cta");
    };
  }, [visible]);

  // Même motif que BoutonLien primaire (pole-ui) : dégradé de la charte, reflet
  // en biais au survol / focus (un passage), flèche qui glisse de 2 px.
  const classesBouton = cn(
    "group inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-semibold leading-tight text-white shadow-md transition-[color,background-color,box-shadow,scale] hover:from-purple-700 hover:to-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none sm:flex-none sm:gap-2 sm:px-6",
    REFLET_BOUTON
  );
  const classesFleche = cn("h-4 w-4 shrink-0", FLECHE_GLISSE);

  const bouton = external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classesBouton}>
      {label}
      <ArrowRight className={classesFleche} aria-hidden="true" />
      <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
    </a>
  ) : href.startsWith("#") ? (
    // Ancre interne : <a> simple, pas de prefetch RSC de la route courante.
    <a href={href} className={classesBouton}>
      {label}
      <ArrowRight className={classesFleche} aria-hidden="true" />
    </a>
  ) : (
    <Link href={href} className={classesBouton}>
      {label}
      <ArrowRight className={classesFleche} aria-hidden="true" />
    </Link>
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={barreRef}
          role="region"
          aria-label={label}
          initial={reduced ? false : { y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduced ? undefined : { y: "100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 shadow-[0_-8px_30px_-12px_rgba(15,23,42,0.18)]",
            "pb-[env(safe-area-inset-bottom)]",
            className
          )}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 py-2.5 sm:justify-center sm:gap-4 sm:py-3">
              {/* Mentions : à gauche en desktop, sous les boutons en mobile. */}
              <p className="hidden text-sm text-muted-foreground sm:block">
                {mentions.map((m, i) => (
                  <span key={m}>
                    {i > 0 && <span aria-hidden="true"> · </span>}
                    {m}
                  </span>
                ))}
              </p>

              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-border bg-background px-3 text-sm font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-4"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="sr-only sm:not-sr-only">{SITE.phoneDisplay}</span>
                <span className="sr-only">{telephoneLabel}</span>
              </a>

              {bouton}

              <button
                type="button"
                onClick={() => setFerme(true)}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Fermer la barre"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <p className="pb-2 text-center text-xs text-muted-foreground sm:hidden">
              {mentions.map((m, i) => (
                <span key={m}>
                  {i > 0 && <span aria-hidden="true"> · </span>}
                  {m}
                </span>
              ))}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
