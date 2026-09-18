import Link from "next/link";
import { majuscule } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { autresPoles, type PoleSlug } from "@/data/poles";
import { Conteneur, Paragraphes, Surtitre } from "./pole-ui";
import SuggestedArticles from "@/components/internal-links/SuggestedArticles";

/**
 * Ressources propres à chaque pôle : guides, pages prix et devis, thèmes d'articles.
 * Affichées sous les autres pôles sur les 22 pages de service (audit du 18/09/2026 :
 * 8 guides sur 10 n'avaient aucun lien entrant, le pôle CRM aucune page d'acquisition).
 */
const RESSOURCES_PAR_POLE: Record<PoleSlug, { guides: { href: string; label: string }[]; pages: { href: string; label: string }[]; themes: string[] }> = {
  "sites-web": {
    guides: [
      { href: "/guide/creer-site-internet", label: "Guide : créer un site internet professionnel" },
      { href: "/guide/creer-boutique-en-ligne", label: "Guide : créer une boutique en ligne" },
      { href: "/guide/creer-landing-page", label: "Guide : créer une landing page qui convertit" },
      { href: "/guide/refonte-site-web", label: "Guide : réussir sa refonte de site" },
      { href: "/guide/site-web-qui-convertit", label: "Guide : un site web qui convertit" },
    ],
    pages: [
      { href: "/prix/site-vitrine", label: "Prix du site vitrine" },
      { href: "/devis/site-vitrine", label: "Devis site vitrine" },
      { href: "/estimation-prix-site-web", label: "Simulateur de prix" },
      { href: "/comparatifs/agence-vs-freelance", label: "Comparatif agence ou freelance" },
    ],
    themes: ["site vitrine", "creation de site", "landing page", "refonte", "prix"],
  },
  seo: {
    guides: [
      { href: "/guide/ameliorer-seo", label: "Guide : améliorer son référencement" },
      { href: "/guide/choisir-agence-web", label: "Guide : choisir son agence web" },
    ],
    pages: [
      { href: "/prix/seo", label: "Prix du référencement" },
      { href: "/devis/seo", label: "Devis SEO" },
      { href: "/seo-check", label: "Audit SEO gratuit" },
      { href: "/glossaire/backlink", label: "Glossaire : backlink" },
    ],
    themes: ["referencement local", "seo", "fiche google", "audit seo", "backlink"],
  },
  publicite: {
    guides: [
      { href: "/guide/premiere-campagne-google-ads", label: "Guide : lancer sa première campagne Google Ads" },
      { href: "/guide/reseaux-sociaux-entreprise", label: "Guide : les réseaux sociaux pour son entreprise" },
    ],
    pages: [
      { href: "/devis/google-ads", label: "Devis Google Ads" },
      { href: "/devis/meta-ads", label: "Devis Meta Ads" },
      { href: "/estimateur-ads", label: "Estimateur de budget publicitaire" },
    ],
    themes: ["google ads", "meta ads", "publicite", "linkedin ads", "budget"],
  },
  crm: {
    guides: [{ href: "/guide/mettre-en-place-un-crm", label: "Guide : mettre en place un CRM dans une petite entreprise" }],
    pages: [
      { href: "/prix/crm", label: "Prix du CRM et des relances" },
      { href: "/devis/crm", label: "Devis CRM" },
      { href: "/glossaire/crm", label: "Glossaire : CRM" },
      { href: "/glossaire/relance-automatique", label: "Glossaire : relance automatique" },
    ],
    themes: ["crm", "relances", "rendez-vous", "prospection"],
  },
};

export interface PoleAutresPolesProps {
  id?: string;
  /** Pôle de la page courante : les trois autres sont affichés. */
  slug: PoleSlug;
  surtitre?: string;
  /** H2 de la section (ex. « Nos trois autres pôles »). */
  titre: string;
  intro?: string | string[];
}

export default function PoleAutresPoles({ id, slug, surtitre, titre, intro }: PoleAutresPolesProps) {
  const poles = autresPoles(slug);
  const ressources = RESSOURCES_PAR_POLE[slug];
  return (
    <>
    <section id={id} className="bg-background py-16 sm:py-20">
      <Conteneur>
        <div className="mx-auto max-w-3xl text-center">
          {surtitre && <Surtitre>{surtitre}</Surtitre>}
          <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">{titre}</h2>
          {intro && (
            <div className="mt-4 space-y-3 text-lg">
              <Paragraphes texte={intro} />
            </div>
          )}
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {poles.map((pole) => {
            const Icon = pole.icon;
            return (
              <li key={pole.slug}>
                <Link
                  href={pole.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors motion-reduce:transition-none hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary-texte">{pole.numero}</span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">{pole.nomCourt}</p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{pole.titre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pole.lignes[0]}</p>
                  <p className="mt-3 text-sm font-medium text-foreground">{majuscule(pole.prix)}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-primary-texte group-hover:underline underline-offset-4">
                    {pole.ancre}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Guides pour faire vous-même</h3>
            <ul className="mt-3 space-y-2">
              {ressources.guides.map((g) => (
                <li key={g.href}>
                  <Link href={g.href} className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4">
                    <ArrowRight className="h-4 w-4" />
                    {g.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Prix, devis et outils</h3>
            <ul className="mt-3 space-y-2">
              {ressources.pages.map((g) => (
                <li key={g.href}>
                  <Link href={g.href} className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4">
                    <ArrowRight className="h-4 w-4" />
                    {g.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Conteneur>
    </section>
    <SuggestedArticles title="Articles sur le sujet" max={3} themes={ressources.themes} />
    </>
  );
}