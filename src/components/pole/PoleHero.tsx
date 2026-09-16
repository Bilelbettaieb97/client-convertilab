import { HeroMesh } from "@/components/motion/hero-mesh";
import { Spotlight } from "@/components/motion/spotlight";
import { GrilleHero } from "@/components/motion/ff/a-grille-hero";
import { MotsClesVague } from "@/components/motion/mots-cles-vague";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BoutonLien, Conteneur, Paragraphes, Surtitre, type PoleLienProps } from "./pole-ui";

export interface PoleChiffre {
  valeur: string;
  libelle: string;
}

export interface PoleHeroProps {
  /** Ex. « Rueil-Malmaison · Paris · Île-de-France ». */
  surtitre: string;
  /** H1 de la page, fixe, avec le mot-clé principal. */
  titre: string;
  /**
   * Mots du H1 colorés avec le dégradé de la marque qui défile (même effet
   * que l'accueil), ex. ["site", "publicité", "SEO", "IA"]. Le texte du H1
   * reste strictement `titre`.
   */
  motsCles?: string[];
  texte: string | string[];
  boutonPrimaire: PoleLienProps;
  boutonSecondaire: PoleLienProps;
  /** Trois chiffres, jamais plus (150+ clients accompagnés, 4,9/5 sur 15 avis, livré en 2 semaines). */
  chiffres: PoleChiffre[];
  /** Visuel facultatif à droite du texte à partir de lg (masqué en dessous), ex. carte des quatre pôles. */
  aside?: ReactNode;
}

/**
 * Hero des pages pôles et du hub /services : même fond que l'accueil (mesh
 * violet très clair, grille fine masquée autour du titre, projecteur, tout
 * en CSS et en -z-10), H1 avec mots clés en dégradé défilant, deux boutons,
 * trois chiffres en cartes. Composant serveur : le H1 est dans le HTML.
 */
export default function PoleHero({
  surtitre,
  titre,
  motsCles,
  texte,
  boutonPrimaire,
  boutonSecondaire,
  chiffres,
  aside,
}: PoleHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-background py-14 sm:py-20">
      <HeroMesh />
      <GrilleHero />
      <Spotlight />
      <Conteneur className={cn(aside && "lg:grid lg:grid-cols-12 lg:items-center lg:gap-12")}>
        <div className={cn(aside && "lg:col-span-7")}>
        <div className="max-w-3xl">
          <Surtitre>{surtitre}</Surtitre>
          <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {motsCles && motsCles.length > 0 ? <MotsClesVague texte={titre} mots={motsCles} /> : titre}
          </h1>
          <div className="mt-6 space-y-3 text-lg">
            {/* text-slate-600 : contraste AA sur le mesh purple-50 / pink-50. */}
            <Paragraphes texte={texte} className="leading-relaxed text-slate-600" />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BoutonLien {...boutonPrimaire} variante="primaire" />
            <BoutonLien {...boutonSecondaire} variante="secondaire" />
          </div>
        </div>
        {chiffres.length > 0 && (
          /* Sous sm : une ligne compacte par chiffre, les cartes bordées à partir de sm (même
             dessin que l'accueil). Fond blanc à 85 % sans backdrop-blur : un filtre posé sur le
             mesh animé se recalculerait à chaque image. */
          <dl className="mt-10 flex max-w-3xl flex-wrap gap-x-6 gap-y-2 sm:grid sm:grid-cols-3 sm:gap-4">
            {chiffres.map((c) => (
              <div
                key={c.libelle}
                className="flex flex-row items-baseline gap-2 sm:flex-col sm:gap-0 sm:rounded-2xl sm:border sm:border-border/80 sm:bg-white/85 sm:px-5 sm:py-5"
              >
                <dt className="order-2 text-sm leading-snug text-muted-foreground sm:mt-1">{c.libelle}</dt>
                <dd className="text-xl font-bold leading-none tracking-tight text-foreground tabular-nums sm:text-3xl">
                  {c.valeur}
                </dd>
              </div>
            ))}
          </dl>
        )}
        </div>
        {aside && <div className="hidden lg:col-span-5 lg:block">{aside}</div>}
      </Conteneur>
    </section>
  );
}
