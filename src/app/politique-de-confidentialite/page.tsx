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
  title: "Politique de Confidentialite | RGPD",
  description:
    "Politique de confidentialite ConvertiLab. Comment nous protegeons vos donnees personnelles conformement au RGPD.",
  alternates: { canonical: `${SITE.url}/politique-de-confidentialite` },
};

export default function PolitiqueConfidentialitePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Politique de confidentialite",
        item: `${SITE.url}/politique-de-confidentialite`,
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
                <BreadcrumbPage>Politique de confidentialite</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Politique de Confidentialite
            </h1>

            <p className="text-muted-foreground mb-6">
              Derniere mise a jour : 15 mars 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground mb-4">
                ConvertiLab s&apos;engage a proteger la vie privee des
                utilisateurs de son site web. Cette politique de confidentialite
                explique comment nous collectons, utilisons, stockons et
                protegeons vos informations personnelles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Donnees collectees
              </h2>
              <p className="text-muted-foreground mb-4">
                Nous collectons les informations suivantes :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  Informations d&apos;identification (nom, prenom, email,
                  telephone)
                </li>
                <li>
                  Informations professionnelles (nom de l&apos;entreprise)
                </li>
                <li>
                  Donnees de navigation (cookies, adresse IP, pages visitees)
                </li>
                <li>
                  Informations relatives a votre projet (budget, delais,
                  besoins)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Utilisation des donnees
              </h2>
              <p className="text-muted-foreground mb-4">
                Vos donnees sont utilisees pour :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Repondre a vos demandes de contact et devis</li>
                <li>
                  Vous envoyer notre newsletter (avec votre consentement)
                </li>
                <li>
                  Ameliorer nos services et l&apos;experience utilisateur
                </li>
                <li>Respecter nos obligations legales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Base legale du traitement
              </h2>
              <p className="text-muted-foreground mb-4">
                Le traitement de vos donnees repose sur :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Votre consentement explicite</li>
                <li>
                  L&apos;execution d&apos;un contrat ou de mesures
                  precontractuelles
                </li>
                <li>
                  Notre interet legitime a developper notre activite
                </li>
                <li>Le respect de nos obligations legales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Conservation des donnees
              </h2>
              <p className="text-muted-foreground mb-4">
                Vos donnees personnelles sont conservees pendant une duree de 3
                ans a compter de notre dernier contact, sauf obligation legale
                contraire.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Partage des donnees
              </h2>
              <p className="text-muted-foreground mb-4">
                Nous ne vendons pas vos donnees personnelles. Elles peuvent etre
                partagees avec :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Nos prestataires techniques (hebergement, emails)</li>
                <li>Les autorites competentes si la loi l&apos;exige</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Cookies
              </h2>
              <p className="text-muted-foreground mb-4">
                Notre site utilise des cookies pour ameliorer votre experience
                de navigation et analyser le trafic. Vous pouvez gerer vos
                preferences de cookies a tout moment via les parametres de votre
                navigateur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Vos droits
              </h2>
              <p className="text-muted-foreground mb-4">
                Conformement au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Droit d&apos;acces a vos donnees</li>
                <li>Droit de rectification</li>
                <li>Droit a l&apos;effacement (droit a l&apos;oubli)</li>
                <li>Droit a la limitation du traitement</li>
                <li>Droit a la portabilite des donnees</li>
                <li>Droit d&apos;opposition</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Pour exercer ces droits, contactez-nous a :{" "}
                <a
                  href="mailto:Contact@convertilab.com"
                  className="text-primary hover:underline"
                >
                  Contact@convertilab.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Securite
              </h2>
              <p className="text-muted-foreground mb-4">
                Nous mettons en oeuvre des mesures techniques et
                organisationnelles appropriees pour proteger vos donnees contre
                tout acces non autorise, modification, divulgation ou
                destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Contact
              </h2>
              <p className="text-muted-foreground mb-4">
                Pour toute question concernant cette politique de
                confidentialite, vous pouvez nous contacter :
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li>
                  Email :{" "}
                  <a
                    href="mailto:Contact@convertilab.com"
                    className="text-primary hover:underline"
                  >
                    Contact@convertilab.com
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

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Modifications
              </h2>
              <p className="text-muted-foreground mb-4">
                Nous nous reservons le droit de modifier cette politique de
                confidentialite a tout moment. Les modifications prendront effet
                des leur publication sur cette page.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
