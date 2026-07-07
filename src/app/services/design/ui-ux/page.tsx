import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import DesignUiUxContent from "./DesignUiUxContent";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";

export const metadata: Metadata = {
  title: "Design UI/UX Paris | Interfaces Web Qui Convertissent",
  description: "Design UI/UX professionnel : wireframes, prototypes Figma, tests utilisateurs. Interfaces qui convertissent. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/services/design/ui-ux` },
  openGraph: { title: "Design UI/UX Paris | Interfaces Web Qui Convertissent | ConvertiLab", description: "Design UI/UX professionnel : wireframes, prototypes Figma, tests utilisateurs. Interfaces qui convertissent. Devis gratuit.", url: `${SITE.url}/services/design/ui-ux` },
};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
  { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
  { "@type": "ListItem", "position": 3, "name": "Design", "item": `${SITE.url}/services/design` },
  { "@type": "ListItem", "position": 4, "name": "Design UI/UX", "item": `${SITE.url}/services/design/ui-ux` },
]};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Design UI/UX",
  description: "Conception d'interfaces web et mobile intuitives, modernes et orientées conversion.",
  url: `${SITE.url}/services/design/ui-ux`,
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
  },
  areaServed: { "@type": "AdministrativeArea", name: "Île-de-France" },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "500",
    availability: "https://schema.org/InStock",
  },
};

export default function DesignUiUxPage() {
  return (<div className="min-h-screen"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><Navigation /><DesignUiUxContent /><RelatedServicesSection exclude={["/services/design/ui-ux"]} />
      <Footer /></div>);
}
