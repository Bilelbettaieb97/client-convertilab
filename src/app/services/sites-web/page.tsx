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
  title: "Création de Site Internet Paris — dès 500€",
  description: "Agence web Paris & Île-de-France : landing page dès 500€, site vitrine, e-commerce. Prix fixes, livraison rapide. Devis gratuit sous 24h.",
  alternates: { canonical: `${SITE.url}/services/sites-web` },
  openGraph: {
    title: "Création de Site Internet Paris — dès 500€ | ConvertiLab",
    description: "Agence web Paris & Île-de-France : landing page dès 500€, site vitrine, e-commerce. Prix fixes, livraison rapide. Devis gratuit sous 24h.",
    url: `${SITE.url}/services/sites-web`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
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

export default function SitesWebPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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

        {/* Outil gratuit */}
        <div className="container mx-auto px-4 sm:px-6 my-8">
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900">Testez la vitesse de votre site gratuitement</p>
                <p className="text-sm text-gray-600">Analysez les performances et obtenez des recommandations</p>
              </div>
              <Link href="/speed-check" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 whitespace-nowrap">
                Tester mon site
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>

        <SitesWebCTA />
      </main>
      <Footer />
    </div>
  );
}
