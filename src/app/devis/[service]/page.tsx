import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { getDevisServiceBySlug, getAllDevisServiceSlugs } from "@/data/devis-pages";
import DevisServiceClient from "./DevisServiceClient";

type Props = {
  params: Promise<{ service: string }>;
};

export function generateStaticParams() {
  return getAllDevisServiceSlugs().map((slug) => ({ service: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const devisService = getDevisServiceBySlug(service);

  if (!devisService) {
    return { title: "Devis Gratuit" };
  }

  return {
    title: `Devis ${devisService.name} Gratuit — Réponse sous 24h`,
    description: devisService.description,
    alternates: { canonical: `${SITE.url}/devis/${service}` },
    openGraph: {
      title: `Devis ${devisService.name} Gratuit | ConvertiLab`,
      description: devisService.description,
      url: `${SITE.url}/devis/${service}`,
      type: "website",
    },
  };
}

export default async function DevisServicePage({ params }: Props) {
  const { service } = await params;
  const devisService = getDevisServiceBySlug(service);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Devis", item: `${SITE.url}/devis` },
      ...(devisService
        ? [{ "@type": "ListItem", position: 3, name: `Devis ${devisService.name}`, item: `${SITE.url}/devis/${service}` }]
        : []),
    ],
  };

  const serviceSchema = devisService
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: devisService.name,
        description: devisService.description,
        provider: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
        },
        areaServed: { "@type": "Country", name: "France" },
        url: `${SITE.url}/devis/${service}`,
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      <DevisServiceClient />
    </>
  );
}
