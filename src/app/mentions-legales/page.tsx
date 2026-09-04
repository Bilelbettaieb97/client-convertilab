import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Mentions Légales | ConvertiLab",
  description:
    "Mentions légales de ConvertiLab : éditeur, hébergeur, propriété intellectuelle et informations légales conformément à la loi pour la confiance dans l'économie numérique (LCEN).",
  alternates: { canonical: `${SITE.url}/mentions-legales` },
};

export default function MentionsLegalesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mentions légales",
        item: `${SITE.url}/mentions-legales`,
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navigation />

      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Mentions légales</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Mentions légales
            </h1>

            <p className="text-muted-foreground mb-6">
              Dernière mise à jour : 26 août 2026
            </p>

            <p className="text-muted-foreground mb-8">
              Conformément aux dispositions de l&apos;article 6 III de la loi
              n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie
              numérique (LCEN), il est porté à la connaissance des utilisateurs
              du site {SITE.url.replace("https://", "")} les présentes mentions
              légales.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Éditeur du site
              </h2>
              <p className="text-muted-foreground mb-4">
                Le site {SITE.url.replace("https://www.", "")} est édité par :
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong>Bilel Bettaieb</strong>, entrepreneur individuel (EI)</li>
                <li>Exerçant sous le nom commercial : <strong>ConvertiLab</strong></li>
                <li>Forme juridique : Entreprise individuelle (EI)</li>
                <li>Adresse : 1 rue du Quatre Septembre, 92500 Rueil-Malmaison, France</li>
                <li>
                  Email :{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-primary hover:underline"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  Téléphone :{" "}
                  <a
                    href={`tel:${SITE.phone}`}
                    className="text-primary hover:underline"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li>SIREN : 109 007 575</li>
                <li>SIRET (siège) : 109 007 575 00011</li>
                <li>Code APE / NAF : 6201Z (Programmation informatique)</li>
                <li>
                  Immatriculée au Registre National des Entreprises (RNE) sous
                  le numéro SIREN 109 007 575
                </li>
                <li>
                  Activité libérale non réglementée. En sa qualité de
                  profession libérale, l&apos;entreprise est dispensée
                  d&apos;immatriculation au Registre du Commerce et des Sociétés
                  (RCS).
                </li>
                <li>
                  TVA : TVA non applicable, article 293 B du Code général des
                  impôts (franchise en base de TVA).
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Directeur de la publication
              </h2>
              <p className="text-muted-foreground mb-4">
                Le directeur de la publication est Monsieur Bilel Bettaieb, en
                sa qualité d&apos;éditeur du site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Hébergeur
              </h2>
              <p className="text-muted-foreground mb-4">
                Le site est hébergé par :
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong>Vercel Inc.</strong></li>
                <li>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
                <li>
                  Site :{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    vercel.com
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Propriété intellectuelle
              </h2>
              <p className="text-muted-foreground mb-4">
                L&apos;ensemble des éléments composant le site (textes, images,
                graphismes, logo, icônes, sons, logiciels, structure et code)
                est la propriété exclusive de ConvertiLab, sauf mention
                contraire, et est protégé par les lois françaises et
                internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-muted-foreground mb-4">
                Toute reproduction, représentation, modification, publication ou
                adaptation de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite sans
                l&apos;autorisation écrite préalable de ConvertiLab. Toute
                exploitation non autorisée du site ou de son contenu sera
                considérée comme constitutive d&apos;une contrefaçon et
                poursuivie conformément aux dispositions légales en vigueur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Données personnelles
              </h2>
              <p className="text-muted-foreground mb-4">
                Le traitement de vos données personnelles est détaillé dans
                notre{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="text-primary hover:underline"
                >
                  politique de confidentialité
                </Link>
                . Conformément au Règlement Général sur la Protection des
                Données (RGPD) et à la loi Informatique et Libertés, vous
                disposez d&apos;un droit d&apos;accès, de rectification,
                d&apos;effacement et d&apos;opposition sur vos données. Pour
                exercer ces droits, contactez-nous à{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-primary hover:underline"
                >
                  {SITE.email}
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Cookies
              </h2>
              <p className="text-muted-foreground mb-4">
                Le site utilise des cookies afin d&apos;améliorer
                l&apos;expérience de navigation et de mesurer son audience. Pour
                en savoir plus et gérer vos préférences, consultez notre{" "}
                <Link
                  href="/politique-de-cookies"
                  className="text-primary hover:underline"
                >
                  politique de cookies
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Responsabilité et liens hypertextes
              </h2>
              <p className="text-muted-foreground mb-4">
                ConvertiLab s&apos;efforce d&apos;assurer l&apos;exactitude et
                la mise à jour des informations diffusées sur le site, mais ne
                saurait garantir l&apos;absence totale d&apos;erreurs ou
                d&apos;omissions. L&apos;utilisateur reste seul responsable de
                l&apos;usage qu&apos;il fait des informations fournies.
              </p>
              <p className="text-muted-foreground mb-4">
                Le site peut contenir des liens vers des sites tiers.
                ConvertiLab n&apos;exerce aucun contrôle sur ces sites et
                décline toute responsabilité quant à leur contenu ou à leur
                politique de confidentialité.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Droit applicable et litiges
              </h2>
              <p className="text-muted-foreground mb-4">
                Les présentes mentions légales sont régies par le droit
                français. En cas de litige et à défaut de résolution amiable, les
                tribunaux français seront seuls compétents.
              </p>
              <p className="text-muted-foreground mb-4">
                Conformément aux articles L.612-1 et suivants du Code de la
                consommation, le consommateur a le droit de recourir
                gratuitement à un médiateur de la consommation en vue de la
                résolution amiable d&apos;un éventuel litige.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Contact
              </h2>
              <p className="text-muted-foreground mb-4">
                Pour toute question relative aux présentes mentions légales,
                vous pouvez nous contacter :
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li>
                  Email :{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-primary hover:underline"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  Via notre{" "}
                  <Link
                    href="/contact"
                    className="text-primary hover:underline"
                  >
                    formulaire de contact
                  </Link>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
