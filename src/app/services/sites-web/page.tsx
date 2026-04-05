import type { Metadata } from "next";
import { SITE, STRUCTURED_DATA } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import SitesWebHero from "@/components/sites-web/SitesWebHero";
import SitesWebServices from "@/components/sites-web/SitesWebServices";
import SitesWebProcess from "@/components/sites-web/SitesWebProcess";
import SitesWebComparison from "@/components/sites-web/SitesWebComparison";
import SitesWebGuarantee from "@/components/sites-web/SitesWebGuarantee";
import SitesWebTestimonials from "@/components/sites-web/SitesWebTestimonials";
import SitesWebFAQ from "@/components/sites-web/SitesWebFAQ";
import SitesWebCTA from "@/components/sites-web/SitesWebCTA";

export const metadata: Metadata = {
  title: "Creation Site Internet Paris des 500 euros",
  description: "Agence web Paris & Ile-de-France : landing page des 500 euros, site vitrine, e-commerce. Prix fixes, livraison rapide. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/services/sites-web` },
  openGraph: {
    title: "Creation Site Internet Paris des 500 euros | ConvertiLab",
    description: "Agence web Paris & Ile-de-France : landing page des 500 euros, site vitrine, e-commerce. Prix fixes, livraison rapide. Devis gratuit.",
    url: `${SITE.url}/services/sites-web`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
    { "@type": "ListItem", "position": 3, "name": "Sites Web", "item": `${SITE.url}/services/sites-web` },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment creer un site internet professionnel avec ConvertiLab",
  "description": "Un processus simple et transparent en 4 etapes pour obtenir votre site web sur-mesure.",
  "totalTime": "P14D",
  "step": [
    { "@type": "HowToStep", "name": "Consultation gratuite", "text": "Echange sur vos objectifs et besoins. Devis detaille sous 24h." },
    { "@type": "HowToStep", "name": "Maquette & validation", "text": "Validation du design avant tout developpement. Modifications illimitees incluses." },
    { "@type": "HowToStep", "name": "Developpement", "text": "Votre site prend vie. Vous suivez l'avancement en temps reel." },
    { "@type": "HowToStep", "name": "Livraison & formation", "text": "Mise en ligne, formation a l'utilisation, et support technique inclus." },
  ]
};

export default function SitesWebPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link href="/">Accueil</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link href="/services">Services</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Sites Web</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <SitesWebHero />
        <SitesWebServices />
        <SitesWebProcess />
        <SitesWebComparison />
        <SitesWebGuarantee />
        <SitesWebTestimonials />
        <SitesWebFAQ />
        <SitesWebCTA />
      </main>
      <Footer />
    </div>
  );
}
