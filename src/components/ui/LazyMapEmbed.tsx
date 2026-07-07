"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

interface LazyMapEmbedProps {
  src: string;
  title: string;
  /** Texte affiché sur la façade avant chargement (ex: "Rueil-Malmaison") */
  label?: string;
  className?: string;
  heightClass?: string;
}

/**
 * Carte Google Maps en "façade" : affiche un aperçu léger (aucun JS Maps
 * chargé) et ne charge l'iframe interactive (~400KB de JS) qu'au clic.
 * Économise ~400KB de JavaScript sur le chargement initial des pages qui
 * l'utilisent (pages villes, contact), ce qui améliore le LCP mobile.
 */
export default function LazyMapEmbed({
  src,
  title,
  label,
  className = "",
  heightClass = "min-h-[220px] h-full",
}: LazyMapEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={title}
        src={src}
        className={`w-full ${heightClass} ${className}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Charger la carte : ${title}`}
      className={`group relative w-full ${heightClass} ${className} flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-purple-50 via-slate-50 to-pink-50 dark:from-slate-900 dark:to-slate-950 cursor-pointer overflow-hidden`}
    >
      {/* Motif carte discret */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <span className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-slate-800 shadow-lg group-hover:scale-110 transition-transform">
        <MapPin className="w-7 h-7 text-purple-600" />
      </span>
      <span className="relative z-10 text-sm font-semibold text-slate-700 dark:text-slate-200">
        {label ? `Voir ${label} sur la carte` : "Voir sur la carte"}
      </span>
      <span className="relative z-10 text-xs text-slate-500 dark:text-slate-400">
        Cliquez pour charger la carte interactive
      </span>
    </button>
  );
}
