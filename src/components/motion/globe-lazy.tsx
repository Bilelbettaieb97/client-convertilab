"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { LazyProche } from "./lazy-proche";
import type { GlobeProps } from "./globe";

/**
 * Chargement différé du globe (cobe, WebGL) sans rendu serveur, avec un
 * fallback de même taille (carré, max 600 px) : aucun décalage de mise en
 * page. `ssr: false` n'est autorisé que dans un composant client : c'est
 * pour cela que ce fichier existe. Utilisable directement depuis une page
 * serveur.
 *
 * Le chunk cobe n'est demandé et les shaders WebGL compilés qu'à l'approche
 * du viewport (`LazyProche`, 600 px avant) : un visiteur qui n'atteint pas
 * la section ne paie rien au chargement.
 */
export function GlobeFallback({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[600px]", className)} aria-hidden="true">
      <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_35%_30%,hsl(270_70%_60%_/_0.18),hsl(270_70%_60%_/_0.04)_55%,transparent_72%)]" />
    </div>
  );
}

const GlobeDynamic = dynamic(() => import("./globe").then((m) => m.Globe), {
  ssr: false,
  loading: () => <GlobeFallback />,
});

export function GlobeLazy(props: GlobeProps) {
  return (
    <LazyProche fallback={<GlobeFallback className={props.className} />}>
      <GlobeDynamic {...props} />
    </LazyProche>
  );
}

export default GlobeLazy;
