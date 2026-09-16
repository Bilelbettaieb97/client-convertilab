import Link from "next/link";
import { ArrowRight, Calculator, GitCompare, Palette, Search, type LucideIcon } from "lucide-react";
import { Conteneur, Paragraphes, Surtitre } from "@/components/pole/pole-ui";
import { Reveal } from "@/components/motion/reveal";
import { BoutonCercle } from "@/components/motion/ff/b-bouton-cercle";

/**
 * Les quatre outils gratuits les plus utilisés (Search Console, 90 jours au
 * 14/09/2026 : vérification SEO loin devant, puis estimation de prix,
 * comparateur et score design), avec un bouton vers la page qui liste les
 * huit outils. Chaque carte dit ce que l'on obtient, en combien de temps, et
 * ce qu'on ne demande pas.
 */
interface Outil {
  nom: string;
  href: string;
  icon: LucideIcon;
  resultat: string;
  duree: string;
  pour: string;
}

const OUTILS: Outil[] = [
  {
    nom: "Vérification SEO",
    href: "/seo-check",
    icon: Search,
    resultat: "Une note sur 100 et la liste de ce qui freine votre site sur Google, avec un rapport PDF.",
    duree: "60 secondes",
    pour: "Vous avez déjà un site",
  },
  {
    nom: "Estimation du prix de votre site",
    href: "/estimation-prix-site-web",
    icon: Calculator,
    resultat: "Une fourchette de prix et un délai pour votre projet, selon vos pages et vos options.",
    duree: "2 minutes",
    pour: "Vous voulez un site",
  },
  {
    nom: "Comparateur de sites",
    href: "/comparateur-sites",
    icon: GitCompare,
    resultat: "Votre site face à celui d'un concurrent, sur huit critères : vitesse, mobile, SEO, confiance.",
    duree: "60 secondes",
    pour: "Vous voulez vous situer",
  },
  {
    nom: "Score design",
    href: "/design-score",
    icon: Palette,
    resultat: "Six critères d'expérience utilisateur notés, et ce qui fait fuir vos visiteurs.",
    duree: "60 secondes",
    pour: "Votre site ne convertit pas",
  },
];

export default function OutilsGratuits() {
  return (
    <section id="outils" className="bg-background py-16 sm:py-24">
      <Conteneur>
        <div className="mx-auto max-w-3xl text-center">
          <Surtitre>Outils gratuits</Surtitre>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Testez votre site gratuitement, avant même de nous parler
          </h2>
          <div className="mt-4 text-lg">
            <Paragraphes texte="Quatre outils, sans inscription. Vous voyez ce qui bloque, vous gardez les résultats, que vous travailliez ensuite avec nous ou non." />
          </div>
        </div>

        {/* Estompage des voisines au survol (Frontend Forever « logo grid with sibling dimming »,
            adapté : `:has(>li:hover)` pour ne rien estomper quand le pointeur est dans une
            gouttière, opacité jamais sous 0,7, pas de grayscale, scale porté par le li
            (framer pose déjà un transform sur le div Reveal), rien sous lg ni au clavier). */}
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:[&:has(>li:hover)>li:not(:hover)]:opacity-70 lg:[&:has(>li:hover)>li:not(:hover)]:scale-[0.985] [&>li]:transition-[opacity,transform] [&>li]:duration-300 [&>li]:ease-[cubic-bezier(.23,1,.32,1)] motion-reduce:[&>li]:transition-none motion-reduce:lg:[&:has(>li:hover)>li:not(:hover)]:scale-100">
          {OUTILS.map((o, i) => {
            const Icon = o.icon;
            return (
              <li key={o.href} className="h-full">
                <Reveal delay={i * 0.08} className="h-full">
                  <Link
                    href={o.href}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-24px_hsl(270_70%_45%_/_0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <span
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-texte transition-colors duration-300 group-hover:bg-primary group-hover:text-white motion-reduce:transition-none"
                      aria-hidden="true"
                    >
                      <Icon
                        className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none"
                        strokeWidth={1.75}
                      />
                    </span>
                    <span className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">{o.pour}</span>
                    <span className="mt-1 text-lg font-semibold leading-snug text-foreground">{o.nom}</span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{o.resultat}</span>
                    <span className="mt-5 flex items-center justify-between text-sm">
                      <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground">
                        Gratuit · {o.duree}
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-primary-texte">
                        Tester
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <BoutonCercle href="/outils" label="Voir tous les outils gratuits" tonalite="clair" />
          <p className="text-sm text-muted-foreground">
            Test de vitesse, estimateur de budget publicitaire, mentions légales, robots et sitemap, rapport sectoriel.
          </p>
        </div>
      </Conteneur>
    </section>
  );
}
