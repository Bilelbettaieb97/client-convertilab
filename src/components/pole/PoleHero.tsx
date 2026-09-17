import { Check } from "lucide-react";
import { HeroMesh } from "@/components/motion/hero-mesh";
import { Spotlight } from "@/components/motion/spotlight";
import { CardBody, CardContainer, CardItem } from "@/components/motion/3d-card";
import { GrilleHero } from "@/components/motion/ff/a-grille-hero";
import { MotsClesVague } from "@/components/motion/mots-cles-vague";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BoutonLien, Conteneur, Surtitre, type PoleLienProps } from "./pole-ui";

export interface PoleChiffre {
  valeur: string;
  libelle: string;
}

export interface PoleHeroProps {
  /** Ex. « Rueil-Malmaison · Paris · Île-de-France ». */
  surtitre: string;
  /** H1 de la page, fixe, avec le mot-clé principal. Texte brut : aucun balisage. */
  titre: string;
  /**
   * Mots du H1 colorés avec le dégradé de la marque qui défile (même effet
   * que l'accueil), ex. ["site", "publicité", "SEO", "CRM"]. Un à trois
   * mots ou groupes de mots, présents tels quels dans `titre`. Le texte du
   * H1 reste strictement `titre`.
   */
  motsCles?: string[];
  /** Un ou deux paragraphes. À partir du deuxième : masqués sous sm, pour que le bouton principal reste visible sans défilement en 390 px. */
  texte: string | string[];
  boutonPrimaire: PoleLienProps;
  boutonSecondaire: PoleLienProps;
  /** Trois engagements courts et vrais, en coches sous le texte (ex. « Prix fixe écrit avant de commencer »). Jamais plus de trois. */
  reassurance?: readonly string[];
  /** Ligne discrète sous les boutons : lien vers l'outil gratuit de la page, ou vers le pôle parent. */
  mention?: ReactNode;
  /** Trois chiffres, jamais plus (150+ clients accompagnés, 4,9/5 sur 15 avis, puis un chiffre propre à la page). */
  chiffres: readonly PoleChiffre[];
  /** Visuel à droite du texte à partir de lg : maquette propre à la page (composant Mock…), carte des pôles sur le hub. */
  aside?: ReactNode;
  /** Enveloppe l'aside dans la carte en perspective légère (sous-pages). Le hub garde son aside à plat. */
  asideRelief?: boolean;
  /** Sous lg : l'aside est affiché après la colonne de texte (true) ou masqué (false, valeur par défaut). */
  asideMobile?: boolean;
}

/**
 * Hero commun au hub /services, aux quatre pages pôles et à leurs sous-pages :
 * même fond que l'accueil (mesh violet très clair, grille fine, projecteur,
 * tout en CSS et en -z-10), H1 avec mots clés en dégradé défilant, un
 * paragraphe (le second masqué sur mobile), trois coches, deux boutons, une
 * mention, trois chiffres en cartes ; à droite, l'illustration de la page.
 * Composant serveur : le H1 est dans le HTML.
 *
 * Ordre sur mobile (classes `order-*`) : titre, paragraphe, boutons, coches,
 * mention, chiffres, puis l'illustration si `asideMobile`. Sur desktop :
 * ordre du DOM, colonne de texte 7/12, illustration 5/12, centrées
 * verticalement l'une sur l'autre.
 */
export default function PoleHero({
  surtitre,
  titre,
  motsCles,
  texte,
  boutonPrimaire,
  boutonSecondaire,
  reassurance,
  mention,
  chiffres,
  aside,
  asideRelief = false,
  asideMobile = false,
}: PoleHeroProps) {
  const paragraphes = Array.isArray(texte) ? texte : [texte];
  return (
    <section className="relative isolate overflow-hidden bg-background py-14 sm:py-20 lg:py-24">
      <HeroMesh />
      <GrilleHero />
      <Spotlight />
      <Conteneur className={cn(aside && "lg:grid lg:grid-cols-12 lg:items-center lg:gap-12")}>
        <div className={cn("flex flex-col", aside && "lg:col-span-7")}>
          <Surtitre>{surtitre}</Surtitre>
          <h1 className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {motsCles && motsCles.length > 0 ? <MotsClesVague texte={titre} mots={motsCles} /> : titre}
          </h1>
          <div className="mt-6 max-w-2xl space-y-3 text-lg">
            {paragraphes.map((p, i) => (
              /* text-slate-600 : contraste AA sur le mesh purple-50 / pink-50. */
              <p key={i} className={cn("leading-relaxed text-slate-600", i > 0 && "hidden sm:block")}>
                {p}
              </p>
            ))}
          </div>

          {reassurance && reassurance.length > 0 && (
            <ul className="order-1 mt-6 flex flex-col gap-2.5 sm:order-none sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              {reassurance.slice(0, 3).map((r) => (
                <li key={r} className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <span
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    aria-hidden="true"
                  >
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <BoutonLien {...boutonPrimaire} variante="primaire" />
            <BoutonLien {...boutonSecondaire} variante="secondaire" />
          </div>

          {mention && <p className="order-2 mt-4 text-sm text-muted-foreground sm:order-none">{mention}</p>}

          {chiffres.length > 0 && (
            /* Sous sm : une ligne compacte par chiffre, les cartes bordées à partir de sm (même
               dessin que l'accueil). Fond blanc à 85 % sans backdrop-blur : un filtre posé sur le
               mesh animé se recalculerait à chaque image. */
            <dl className="order-3 mt-8 flex max-w-3xl flex-wrap gap-x-6 gap-y-2 sm:order-none sm:mt-10 sm:grid sm:grid-cols-3 sm:gap-4">
              {chiffres.slice(0, 3).map((c) => (
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

        {aside && (
          <div className={cn("mt-12 lg:col-span-5 lg:mt-0", !asideMobile && "hidden lg:block")}>
            {asideRelief ? (
              /* Perspective légère (aucun mouvement au tactile ni en animations réduites). */
              <CardContainer intensite={60} containerClassName="w-full" className="mx-auto w-full max-w-md">
                <CardBody className="w-full">
                  <CardItem translateZ={24} className="w-full">
                    {aside}
                  </CardItem>
                </CardBody>
              </CardContainer>
            ) : (
              aside
            )}
          </div>
        )}
      </Conteneur>
    </section>
  );
}
