"use client";

import { FileText, Globe, MapPin, Star } from "lucide-react";
import { OrbitingCircles } from "@/components/motion";

/**
 * Schéma « votre site, cité par Google et par les IA » de la section
 * Visibilité IA : au centre le site, en orbite les moteurs et assistants
 * (noms seulement, aucun logo tiers), en orbite intérieure trois signaux
 * (fiche Google, avis, llms.txt). Purement décoratif (aria-hidden) : le texte
 * de la section porte l'information. CSS pur (OrbitingCircles) : importé en
 * statique, rendu serveur, aucun chunk supplémentaire (règle 3 du README motion).
 * Positions figées avec prefers-reduced-motion (géré par OrbitingCircles).
 */

/** Hauteur fixe (h-[360px]) : le conteneur réserve sa place, aucun décalage de mise en page. */
const ORBITE_HAUTEUR = "h-[360px]";

const MOTEURS = ["Google", "ChatGPT", "Perplexity", "AI Overviews", "Claude"];

const SIGNAUX = [
  { icon: MapPin, label: "Fiche Google" },
  { icon: Star, label: "Avis clients" },
  { icon: FileText, label: "llms.txt" },
];

export default function SeoOrbite() {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden ${ORBITE_HAUTEUR}`}
      aria-hidden="true"
    >
      {/* Centre : le site du client. */}
      <div className="relative z-10 flex h-[76px] w-[76px] flex-col items-center justify-center gap-0.5 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-[0_0_0_8px_hsl(270_70%_60%_/_0.15),0_20px_40px_-16px_hsl(270_70%_60%_/_0.6)]">
        <Globe className="h-6 w-6" strokeWidth={1.75} />
        <span className="text-xs font-semibold leading-none">Votre site</span>
      </div>

      {/* Orbite extérieure : les moteurs et assistants qui citent des sources. */}
      <OrbitingCircles radius={120} duration={32} iconSize={44} className="[&>*]:shrink-0">
        {MOTEURS.map((nom) => (
          <span
            key={nom}
            className="whitespace-nowrap rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-xs font-semibold text-white shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] backdrop-blur-sm"
          >
            {nom}
          </span>
        ))}
      </OrbitingCircles>

      {/* Orbite intérieure, sens inverse : trois signaux que nous travaillons. */}
      <OrbitingCircles radius={68} duration={22} iconSize={36} reverse>
        {SIGNAUX.map(({ icon: Icon, label }) => (
          <span
            key={label}
            title={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-300/30 bg-slate-900 text-purple-200"
          >
            <Icon className="h-4 w-4" strokeWidth={1.75} />
          </span>
        ))}
      </OrbitingCircles>
    </div>
  );
}
