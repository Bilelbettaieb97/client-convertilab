"use client";

import { Briefcase, Clapperboard, Megaphone, Pin, Search, Users, type LucideIcon } from "lucide-react";
import { OrbitingCircles } from "@/components/motion";
import { cn } from "@/lib/utils";

/**
 * Les cinq plateformes publicitaires en orbite autour de votre compte
 * (page Publicité). CSS pur (OrbitingCircles, icônes lucide) : importé en
 * statique et rendu côté serveur, DOM identique côté client ; positions
 * figées avec prefers-reduced-motion (règle CSS de globals.css). Aucune
 * icône de marque : un pictogramme générique et le NOM de la plateforme en
 * étiquette visible sous chaque pastille (modèle de SeoOrbite), pour qu'on
 * sache quelle pastille représente quoi.
 */

/** Carré de l'orbite : 360 px pour équilibrer la colonne face aux quatre cartes. */
const ORBITE_TAILLE_CLASSES = "h-[360px] w-full max-w-[360px]";

interface Plateforme {
  nom: string;
  /** Étiquette courte affichée sous la pastille. */
  court: string;
  icon: LucideIcon;
  /** Teinte de la pastille : une seule couleur forte par écran, le reste en gris doux. */
  accent?: boolean;
}

/** Une seule orbite : les cinq plateformes à 72° l'une de l'autre, les étiquettes ne se chevauchent jamais. */
const PLATEFORMES: Plateforme[] = [
  { nom: "Google Ads", court: "Google Ads", icon: Search, accent: true },
  { nom: "TikTok Ads", court: "TikTok Ads", icon: Clapperboard },
  { nom: "Meta Ads (Facebook et Instagram)", court: "Meta Ads", icon: Users, accent: true },
  { nom: "Pinterest Ads", court: "Pinterest Ads", icon: Pin },
  { nom: "LinkedIn Ads", court: "LinkedIn Ads", icon: Briefcase },
];

function Pastille({ nom, court, icon: Icon, accent }: Plateforme) {
  return (
    <span className="relative inline-flex size-full items-center justify-center" title={nom}>
      <span
        className={cn(
          "inline-flex size-full items-center justify-center rounded-full border shadow-[0_8px_20px_-12px_rgba(15,23,42,0.35)]",
          accent
            ? "border-primary/30 bg-gradient-to-br from-purple-50 to-pink-50 text-purple-700"
            : "border-border bg-card text-slate-600"
        )}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      {/* Étiquette visible : nom de la plateforme sous la pastille (le sr-only porte le nom complet). */}
      <span
        className="absolute top-full left-1/2 mt-1 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-white/90 px-2 py-0.5 text-xs font-semibold text-foreground shadow-sm"
        aria-hidden="true"
      >
        {court}
      </span>
      <span className="sr-only">{nom}</span>
    </span>
  );
}

export default function PlateformesOrbite({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto flex items-center justify-center overflow-hidden",
        ORBITE_TAILLE_CLASSES,
        className
      )}
    >
      {/* Centre : votre compte publicitaire. */}
      <span
        className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg ring-8 ring-white"
        aria-hidden="true"
      >
        <Megaphone className="h-7 w-7" strokeWidth={1.75} />
      </span>
      <OrbitingCircles radius={128} duration={44} iconSize={44}>
        {PLATEFORMES.map((p) => (
          <Pastille key={p.nom} {...p} />
        ))}
      </OrbitingCircles>
    </div>
  );
}
