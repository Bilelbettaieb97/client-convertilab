import { Check } from "lucide-react";
import { SITE } from "@/lib/constants";
import { LABEL_CALENDLY, SURTITRE_ZONE } from "@/data/poles";
import ContactForm from "@/components/contact/ContactForm";
import { BoutonLien } from "@/components/pole";
import { Conteneur, Surtitre } from "@/components/pole/pole-ui";
import { HeroMesh } from "@/components/motion/hero-mesh";
import { Spotlight } from "@/components/motion/spotlight";
import { GrilleHero } from "@/components/motion/ff/a-grille-hero";
import { NumberTicker } from "@/components/motion/number-ticker";
import { MotsClesVague } from "@/components/motion/mots-cles-vague";
import { BorderBeam } from "@/components/motion/border-beam";
import { CHIFFRES_ACCUEIL } from "./chiffres";

export const H1_ACCUEIL =
  "Agence marketing digital à Rueil-Malmaison : site, publicité, SEO et CRM pour trouver vos clients";

/** Les quatre pôles, colorés dans le H1 (le texte du H1 ne change pas). */
const MOTS_CLES_H1 = ["site", "publicité", "SEO", "CRM"] as const;

const PASTILLES = ["Paiement étalé, pas d'abonnement", "Rueil-Malmaison (92)", "Vous parlez au fondateur"];

/**
 * Valeur de départ de chaque compteur (même ordre que CHIFFRES_ACCUEIL) :
 * proche de la cible pour éviter le flash « 0+ » au montage. 150 part de 100,
 * 4,9 de 4 ; « 2 semaines » ne bouge pas, car « 1 semaines » s'afficherait
 * pendant l'animation.
 */
const DEPART_COMPTEURS: readonly number[] = [100, 4, 2];

/**
 * Hero de l'accueil : H1 fixe rendu côté serveur, trois chiffres en compteurs
 * animés (la valeur finale est dans le HTML), deux boutons et le formulaire
 * ContactForm (client) à droite, souligné d'un faisceau discret. Fond : mesh
 * violet très clair, grille fine masquée autour du H1, puis projecteur, tout
 * en CSS (ordre du DOM = ordre de peinture, les trois sont en -z-10). Seul
 * dégradé fort de l'écran : le bouton principal.
 */
export default function AccueilHero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-background py-12 sm:py-16 lg:py-24">
      <HeroMesh />
      <GrilleHero />
      <Spotlight />
      <Conteneur>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Colonne texte : trois groupes (titre, actions, chiffres) répartis sur la hauteur du formulaire
              (rendu compact), haut et bas alignés sur ses bords. Le contenu naturel de la colonne fait à
              8 px près la hauteur du formulaire moins les deux gaps : les écarts restent entre 36 et 50 px
              de 1280 à 1920 px, 54 px entre 1024 et 1279 px où le H1 passe à 2,875 rem pour rester sur
              quatre lignes (mesure scratchpad/pw/mesure-hero.mjs), donc jamais de trou. */}
          <div className="flex flex-col lg:col-span-7 lg:justify-between lg:gap-8">
            <div>
            <Surtitre>{SURTITRE_ZONE}</Surtitre>
            <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.875rem] xl:text-[3.5rem]">
              <MotsClesVague texte={H1_ACCUEIL} mots={MOTS_CLES_H1} />
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Nous créons votre site internet, lançons vos campagnes, vous rendons visible sur Google et
              dans les IA, puis relançons chaque demande avec votre CRM et l&apos;IA. Une agence web en
              Île-de-France, un seul interlocuteur, un prix fixe.
            </p>

            </div>

            <div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <BoutonLien href="/demande-maquette" label="Ma maquette gratuite en 48 h" variante="primaire" />
              <BoutonLien href={SITE.calendly} label={LABEL_CALENDLY} external variante="secondaire" />
            </div>

            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground">
              {PASTILLES.map((p) => (
                <li key={p} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>

            </div>

            {/* Sous sm : une ligne compacte par chiffre (nombre puis libellé), les cartes bordées à partir de sm.
                Fond blanc à 85 % sans backdrop-blur : un filtre posé sur le mesh animé se recalculait à chaque image. */}
            <dl className="mt-8 flex max-w-2xl flex-wrap gap-x-6 gap-y-2 sm:grid sm:grid-cols-3 sm:gap-4 lg:mt-0">
              {CHIFFRES_ACCUEIL.map((c, i) => (
                <div
                  key={c.libelle}
                  className="flex flex-row items-baseline gap-2 sm:flex-col sm:gap-0 sm:rounded-2xl sm:border sm:border-border/80 sm:bg-white/85 sm:px-5 sm:py-5"
                >
                  <dt className="order-2 text-sm leading-snug text-muted-foreground sm:mt-1">{c.libelle}</dt>
                  <dd className="text-xl font-bold leading-none tracking-tight text-foreground tabular-nums sm:text-3xl">
                    <NumberTicker
                      value={c.nombre}
                      startValue={DEPART_COMPTEURS[i] ?? 0}
                      decimalPlaces={c.decimales}
                      delay={0.2 + i * 0.1}
                    />
                    <span className="text-base font-semibold text-slate-500 sm:text-xl">{c.suffixe}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            {/* Le faisceau hérite du rayon du conteneur : même arrondi que le formulaire. */}
            <div className="relative rounded-2xl sm:rounded-3xl">
              <ContactForm compact />
              <BorderBeam size={90} duration={12} borderWidth={1.5} />
            </div>
          </div>
        </div>
      </Conteneur>
    </section>
  );
}
