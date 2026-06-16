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
    return { title: "Devis Gratuit | ConvertiLab" };
  }

  return {
    title: `Devis ${devisService.name} Gratuit — Réponse sous 24h`,
    description: devisService.description,
    alternates: { canonical: `${SITE.url}/devis/${service}` },
    openGraph: {
      title: `Devis ${devisService.name} Gratuit | ConvertiLab`,
      description: devisService.description,
      url: `${SITE.url}/devis/${service}`,
    },
  };
}

export default function DevisServicePage() {
  return <DevisServiceClient />;
}
