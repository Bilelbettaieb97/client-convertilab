import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MetaAdsContent from "./MetaAdsContent";

export const metadata: Metadata = {
  title: "Meta Ads | Facebook & Instagram",
  description: "Publicites Facebook et Instagram : ciblage precis, creatifs optimises, ROI maximise. Audit de compte gratuit.",
  alternates: { canonical: `${SITE.url}/services/sea/meta-ads` },
  openGraph: { title: "Meta Ads | Facebook & Instagram | ConvertiLab", description: "Publicites Facebook et Instagram : ciblage precis, creatifs optimises, ROI maximise. Audit de compte gratuit.", url: `${SITE.url}/services/sea/meta-ads` },
};

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE.url },
  { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE.url}/services` },
  { "@type": "ListItem", "position": 3, "name": "Publicite", "item": `${SITE.url}/services/sea` },
  { "@type": "ListItem", "position": 4, "name": "Meta Ads", "item": `${SITE.url}/services/sea/meta-ads` },
]};

export default function MetaAdsPage() {
  return (<div className="min-h-screen"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><Navigation /><MetaAdsContent /><Footer /></div>);
}
