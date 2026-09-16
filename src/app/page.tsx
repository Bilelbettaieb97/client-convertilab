import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE, STRUCTURED_DATA } from "@/lib/constants";
import { faqPageSchema } from "@/lib/faq-schema";
import { ACCUEIL_FAQ } from "@/data/accueil-faq";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { FormulaireFinal, PoleFAQ, StickyCtaBar } from "@/components/pole";
import { BESOINS_QUATRE_POLES } from "@/components/pole/besoins";
import SectionPolesDefilants from "@/components/pole/SectionPolesDefilants";
import dynamic from "next/dynamic";
import {
  AccueilHero,
  AppelFinal,
  BarreConfiance,
  ConstatEtMethode,
  OutilsGratuits,
  RueilFondateur,
} from "@/components/accueil";

// Section « Résultats clients » du site en ligne (filtres, cartes avec captures
// en défilement horizontal), reprise telle quelle à la demande du client.
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));

/** Étape 1 du formulaire final : le besoin, sans coordonnées (mêmes quatre entrées que ContactForm). */

// 59 caractères, identique au TITLE_DEFAUT du layout (règle du brief : 60 maximum).
const TITLE = "Agence marketing digital Rueil-Malmaison (92) | ConvertiLab";
const DESCRIPTION =
  "Agence marketing digital à Rueil-Malmaison : site internet, publicité, SEO et CRM. 150+ clients accompagnés, 4,9/5 sur 15 avis. Paris et Île-de-France.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "agence marketing digital Rueil-Malmaison",
    "agence web Rueil-Malmaison",
    "agence digitale Hauts-de-Seine",
    "agence digitale 92",
    "création site internet Rueil-Malmaison",
    "agence web Île-de-France",
    "agence marketing digital Paris",
  ],
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

/**
 * JSON-LD de l'accueil : Organization et LocalBusiness reprennent
 * STRUCTURED_DATA (mêmes @id que sur les pages pôles, areaServed, founder),
 * complétés par l'adresse postale, le logo et l'image. aggregateRating vient
 * de SITE.reviews, inchangé. La FAQPage est générée depuis la liste affichée.
 */
const organizationSchema = {
  ...STRUCTURED_DATA.organization,
  description: DESCRIPTION,
};

const localBusinessSchema = {
  ...STRUCTURED_DATA.localBusiness,
  description: DESCRIPTION,
  address: {
    ...STRUCTURED_DATA.localBusiness.address,
    streetAddress: "1 rue du Quatre Septembre",
  },
  image: DEFAULT_OG_IMAGE,
  logo: STRUCTURED_DATA.organization.logo,
  sameAs: STRUCTURED_DATA.organization.sameAs,
};

const webSiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  inLanguage: "fr-FR",
  publisher: { "@id": STRUCTURED_DATA.organization["@id"] },
};

// Le @context vit sur le @graph : une valeur undefined disparaît à la sérialisation.
const faqSchema = { ...faqPageSchema(ACCUEIL_FAQ), "@context": undefined };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, localBusinessSchema, webSiteSchema, faqSchema],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen">
        <Navigation />

        {/* pt-16 : la navigation est fixe et mesure 64 px. */}
        <div className="pt-16">
          {/* 1. Hero : H1 fixe, trois chiffres animés, formulaire à droite (fond mesh + projecteur) */}
          <AccueilHero />

          {/* 2. Les quatre pôles, un par écran, empilés au défilement */}
          <SectionPolesDefilants
            id="poles"
            titre="Quatre pôles pour trouver vos clients : site internet, publicité, SEO et CRM"
            intro="Un site sans visiteurs ne sert à rien, une campagne vers un site lent non plus. Les quatre leviers au même endroit, un pôle par écran."
          />

          {/* 3. Le constat et la méthode réunis : trois situations, quatre étapes datées */}
          <ConstatEtMethode />

          {/* 4. Résultats clients : la section du site en ligne, cartes avec captures en défilement horizontal.
              Elle se termine par son propre appel Calendly : pas de CtaIntermediaire à sa suite (un seul appel par écran). */}
          <Portfolio />

          {/* Les dix sites clients en défilement, juste après les résultats (demande de Bilel du 15/09) */}
          <BarreConfiance />

          {/* 5. Outils gratuits : les quatre plus utilisés, bouton vers les huit */}
          <OutilsGratuits />

          {/* 6. Section sombre : Rueil-Malmaison et le fondateur (« je », nom uniquement sous la photo) */}
          <RueilFondateur />

          {/* 7. FAQ rendue côté serveur, même liste que le JSON-LD */}
          <PoleFAQ
            id="faq"
            surtitre="Questions fréquentes"
            titre="Vos questions sur notre agence marketing digital à Paris et Rueil-Malmaison"
            items={ACCUEIL_FAQ}
            lien={{ href: "/contact", label: "Poser une autre question" }}
          />

          {/* 8. Formulaire final à deux étapes (ancre #formulaire de la barre collante et des CTA) */}
          <FormulaireFinal
            id="formulaire"
            pole="accueil"
            page="/"
            fond="sombre"
            motsCles={["24 h"]}
            surtitre="Parlons de votre projet"
            titre="Dites-nous ce que vous voulez, nous vous répondons sous 24 h"
            intro="Deux étapes, deux minutes. Aucune coordonnée à la première."
            question={{
              libelle: "Vous voulez :",
              aide: "Aucune coordonnée demandée à cette étape.",
              options: BESOINS_QUATRE_POLES,
            }}
            titreEtape2="Où vous répondre ?"
            boutonLabel="Recevoir ma réponse sous 24 h"
            calendlyLabel="ou réservez 30 min avec le fondateur"
            confirmation={{
              titre: "Merci, votre demande est bien reçue.",
              texte: "Nous vous répondons sous 24 h, par email ou par téléphone, avec une première recommandation.",
            }}
          />

          {/* 9. Dernier appel : trois portes (rendez-vous, formulaire, appel), le fondateur en rappel */}
          <AppelFinal />
        </div>

        <Footer />

        {/* Barre collante (remplace StickyMobileCTA) : se cache quand #formulaire est visible. */}
        <StickyCtaBar
          label="Ma maquette gratuite en 48 h"
          href="/demande-maquette"
          mentions={["Gratuit", "Sans engagement", "Réponse sous 24 h"]}
          formulaireId="formulaire"
        />
      </div>
    </>
  );
}
