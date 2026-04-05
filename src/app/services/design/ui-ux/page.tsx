import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import DesignUiUxContent from "./DesignUiUxContent";

export const metadata: Metadata = {
  title: "Design UI/UX | Interfaces Web",
  description: "Design UI/UX professionnel : wireframes, prototypes Figma, tests utilisateurs. Interfaces qui convertissent. Devis gratuit.",
  alternates: { canonical: `${SITE.url}/services/design/ui-ux` },
  openGraph: { title: "Design UI/UX | Interfaces Web | ConvertiLab", description: "Design UI/UX professionnel : wireframes, prototypes Figma, tests utilisateurs. Interfaces qui convertissent. Devis gratuit.", url: `${SITE.url}/services/design/ui-ux` },
};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
  { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
  { "@type": "ListItem", "position": 3, "name": "Design", "item": `${SITE.url}/services/design` },
  { "@type": "ListItem", "position": 4, "name": "Design UI/UX", "item": `${SITE.url}/services/design/ui-ux` },
]};

export default function DesignUiUxPage() {
  return (<div className="min-h-screen"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><Navigation /><DesignUiUxContent /><Footer /></div>);
}
