"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { HAUTEUR_SCHEMA } from "./hauteur-schema";

/**
 * Chargement différé du schéma « vos outils reliés par Claude » sans rendu
 * serveur (AnimatedBeam mesure le DOM), avec un fallback de même hauteur :
 * aucun décalage de mise en page. `ssr: false` n'est autorisé que dans un
 * composant client : c'est pour cela que ce fichier existe.
 */
export function OutilsReliesFallback({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-md px-2 py-4", HAUTEUR_SCHEMA, className)} aria-hidden="true">
      <div className="absolute inset-x-[30%] inset-y-[35%] rounded-full bg-[radial-gradient(circle,hsl(270_70%_60%_/_0.16),transparent_65%)] blur-2xl" />
    </div>
  );
}

const OutilsReliesDynamic = dynamic(() => import("./OutilsRelies"), {
  ssr: false,
  loading: () => <OutilsReliesFallback />,
});

export default function OutilsReliesLazy({ className }: { className?: string }) {
  return <OutilsReliesDynamic className={className} />;
}
