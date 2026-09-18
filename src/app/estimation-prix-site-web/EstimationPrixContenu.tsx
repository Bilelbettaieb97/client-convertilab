import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { pricingPages } from "@/data/pricing-pages";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import SuggestedArticles from "@/components/internal-links/SuggestedArticles";

/**
 * Contenu serveur affiché sous le simulateur : la grille de prix (lue dans
 * pricing-pages.ts, donc toujours alignée sur /prix), ce qui fait varier le
 * prix, et une FAQ avec ses données structurées. Le simulateur reste le
 * point d'entrée ; cette partie répond à ceux qui veulent un ordre de prix
 * avant de remplir quoi que ce soit.
 */

const OFFRES = ["landing-page", "site-vitrine", "site-ecommerce", "refonte-site"] as const;

const FACTEURS = [
  {
    titre: "Le nombre de pages",
    texte:
      "Un site vitrine de 5 pages et un site de 20 pages ne demandent pas le même travail de structure, de rédaction et de maillage. Au-delà des pages incluses, chaque page supplémentaire est facturée entre 50 et 100 € selon sa complexité.",
  },
  {
    titre: "Les fonctionnalités",
    texte:
      "Un formulaire de contact est inclus partout. Une prise de rendez-vous en ligne, un paiement, un espace client ou un catalogue de produits ajoutent du développement et des tests, donc du prix.",
  },
  {
    titre: "Le design",
    texte:
      "Toutes nos offres comprennent un design sur mesure et responsive. Une identité visuelle complète (logo, charte, déclinaisons) est un travail à part, chiffré séparément.",
  },
  {
    titre: "Les contenus",
    texte:
      "Textes et images sont à fournir. Si vous préférez que nous rédigions les pages ou que nous cherchions les visuels, comptez un supplément proportionnel au nombre de pages.",
  },
  {
    titre: "Le référencement",
    texte:
      "L'optimisation de base (balises, sitemap, vitesse, structure) est incluse. Un travail de référencement suivi, avec production de contenus et suivi des positions, est un accompagnement mensuel distinct.",
  },
  {
    titre: "L'hébergement et la maintenance",
    texte:
      "La première année d'hébergement et le certificat HTTPS sont compris. Ensuite, vous choisissez entre un hébergement seul ou un forfait mensuel qui inclut les mises à jour et les petites modifications.",
  },
];

const FAQ = [
  {
    q: "Combien coûte un site internet en 2026 ?",
    a: "Chez ConvertiLab, une landing page coûte 490 €, un site vitrine 890 €, une refonte 690 € et un site e-commerce à partir de 1 490 €. Le marché va de quelques centaines d'euros chez un indépendant à plusieurs milliers chez une agence traditionnelle ; ce qui change le prix, c'est le nombre de pages, les fonctionnalités et le niveau de personnalisation.",
  },
  {
    q: "Le simulateur donne-t-il un prix immédiat ?",
    a: "Oui. Dès que vous avez choisi le type de site et vos options, le simulateur affiche une fourchette calculée sur notre grille publique, avant même de vous demander vos coordonnées. Le devis écrit et détaillé, poste par poste, vous parvient ensuite sous 24 h.",
  },
  {
    q: "L'estimation engage-t-elle à quelque chose ?",
    a: "Non. L'estimation est gratuite et sans engagement. Vous recevez un chiffrage écrit, vous le comparez, et vous décidez. Aucune relance commerciale insistante.",
  },
  {
    q: "Peut-on payer un site internet en plusieurs fois ?",
    a: "Oui. Chaque offre peut être réglée en 2 ou 3 fois sans frais, ou étalée sur 12 à 24 mois : un site vitrine revient par exemple à 39 € par mois sur 24 mois. Ce n'est pas un abonnement, le site vous appartient.",
  },
  {
    q: "Y a-t-il des frais cachés après la livraison ?",
    a: "Non. Le prix comprend la création complète et l'hébergement la première année. Ensuite, l'hébergement coûte environ 39 € par mois, ou vous optez pour un forfait mensuel tout compris. Le nom de domaine reste à votre nom.",
  },
  {
    q: "Quel délai pour un site vitrine ou une landing page ?",
    a: "Une landing page est livrée en 5 à 10 jours, un site vitrine en 7 à 14 jours, un site e-commerce en 14 à 21 jours, à partir de la réception de vos contenus. Une maquette gratuite vous est proposée sous 48 h avant tout engagement.",
  },
];

export default function EstimationPrixContenu() {
  const offres = OFFRES.map((slug) => pricingPages.find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );

  return (
    <>
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Grille de prix 2026 : nos tarifs sont publics
            </h2>
            <p className="text-lg text-muted-foreground">
              Avant même de remplir le simulateur, voici les prix de départ de chaque type de site.
              Ils sont fixes, écrits, et identiques pour tous nos clients.
            </p>
          </div>

          {/* Mobile : une carte par offre, le tableau ne se lit bien qu'à partir de md */}
          <div className="grid gap-4 md:hidden">
            {offres.map((offre) => (
              <div key={offre.slug} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Link href={offre.relatedService} className="font-semibold text-foreground hover:text-primary transition-colors">
                      {offre.name}
                    </Link>
                    <p className="text-muted-foreground text-sm mt-1">{offre.description}</p>
                  </div>
                  <span className="text-lg font-bold text-foreground whitespace-nowrap">{offre.priceLabel}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Livraison : {offre.deliveryTime}</p>
                <ul className="mt-3 space-y-1.5">
                  {offre.includes.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden md:block overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full text-sm sm:text-base border-separate border-spacing-0 rounded-2xl border border-border overflow-hidden">
              <thead className="bg-muted/60">
                <tr className="text-left">
                  <th className="px-4 sm:px-6 py-4 font-semibold text-foreground">Type de site</th>
                  <th className="px-4 sm:px-6 py-4 font-semibold text-foreground">Prix</th>
                  <th className="px-4 sm:px-6 py-4 font-semibold text-foreground">Délai</th>
                  <th className="px-4 sm:px-6 py-4 font-semibold text-foreground hidden md:table-cell">Inclus</th>
                </tr>
              </thead>
              <tbody>
                {offres.map((offre) => (
                  <tr key={offre.slug} className="border-t border-border align-top">
                    <td className="px-4 sm:px-6 py-5 border-t border-border">
                      <Link href={offre.relatedService} className="font-semibold text-foreground hover:text-primary transition-colors">
                        {offre.name}
                      </Link>
                      <p className="text-muted-foreground text-sm mt-1 max-w-xs">{offre.description}</p>
                    </td>
                    <td className="px-4 sm:px-6 py-5 border-t border-border whitespace-nowrap">
                      <span className="text-xl font-bold text-foreground">{offre.priceLabel}</span>
                    </td>
                    <td className="px-4 sm:px-6 py-5 border-t border-border whitespace-nowrap text-muted-foreground">
                      {offre.deliveryTime}
                    </td>
                    <td className="px-4 sm:px-6 py-5 border-t border-border hidden md:table-cell">
                      <ul className="space-y-1.5">
                        {offre.includes.slice(0, 4).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Paiement en 2 ou 3 fois sans frais, ou étalé dès 39 € par mois. Le détail complet de chaque offre est sur la{" "}
            <Link href="/prix" className="text-primary underline underline-offset-4 hover:no-underline">
              page des prix
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ce qui fait varier le prix d&apos;un site internet
            </h2>
            <p className="text-lg text-muted-foreground">
              Deux devis pour « un site vitrine » peuvent aller du simple au quadruple. Voici les six
              postes qui expliquent l&apos;écart, et comment nous les traitons.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FACTEURS.map((f) => (
              <div key={f.titre} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2">{f.titre}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{f.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-center">
              Comment fonctionne l&apos;estimation
            </h2>
            <ol className="space-y-4">
              {[
                {
                  n: "1",
                  t: "Vous décrivez votre projet",
                  d: "Type de site, options souhaitées, nombre de pages ou de produits. Trois écrans, deux minutes, aucune connaissance technique nécessaire.",
                },
                {
                  n: "2",
                  t: "Nous chiffrons précisément",
                  d: "Le simulateur affiche aussitôt une fourchette calculée sur la grille publique ci-dessus. Vous recevez ensuite un chiffrage écrit sous 24 h, poste par poste.",
                },
                {
                  n: "3",
                  t: "Vous voyez avant de décider",
                  d: "Si le projet vous intéresse, nous réalisons une maquette gratuite de votre page d'accueil sous 48 h. Vous validez sur du concret, pas sur une promesse.",
                },
              ].map((e) => (
                <li key={e.n} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    {e.n}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{e.t}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{e.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="text-center mt-8">
              <Link
                href="/demande-maquette"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4"
              >
                Demander directement une maquette gratuite
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={FAQ} title="Questions fréquentes sur le prix d'un site internet" />

      <SuggestedArticles
        title="Pour affiner votre budget"
        themes={["prix", "cout", "combien", "budget", "creation de site"]}
        max={3}
      />
    </>
  );
}
