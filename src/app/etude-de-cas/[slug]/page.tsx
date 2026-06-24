import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { caseStudies, getFullCaseStudyBySlug, getCaseStudyBySlug } from "@/data/case-studies";
import { getSectorBySlug } from "@/data/sectors";
import { notFound } from "next/navigation";
import CaseStudyPageClient from "./CaseStudyPageClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getFullCaseStudyBySlug(slug);
  if (!cs) return { title: "Etude de cas introuvable | ConvertiLab" };

  return {
    title: `${cs.client} - ${cs.title}`,
    description: cs.subtitle,
    alternates: { canonical: `${SITE.url}/etude-de-cas/${slug}` },
    openGraph: {
      title: `${cs.client} - ${cs.title} | ConvertiLab`,
      description: cs.subtitle,
      type: "article",
      url: `${SITE.url}/etude-de-cas/${slug}`,
      images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
    },
  };
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getFullCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  // Get navigation (previous/next)
  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const previousIndex = currentIndex === 0 ? caseStudies.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === caseStudies.length - 1 ? 0 : currentIndex + 1;
  const previousCase = caseStudies[previousIndex];
  const nextCase = caseStudies[nextIndex];

  const previous = previousCase
    ? { slug: previousCase.slug, title: previousCase.title, client: previousCase.client, image: previousCase.image, sector: previousCase.sector }
    : undefined;
  const next = nextCase
    ? { slug: nextCase.slug, title: nextCase.title, client: nextCase.client, image: nextCase.image, sector: nextCase.sector }
    : undefined;

  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${caseStudy.client} - ${caseStudy.title}`,
    description: caseStudy.subtitle,
    image: caseStudy.image || `${SITE.url}/favicon.png`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: `${SITE.url}/portfolio` },
      { "@type": "ListItem", position: 3, name: caseStudy.client, item: `${SITE.url}/etude-de-cas/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <CaseStudyPageClient
        caseStudy={caseStudy}
        slug={slug}
        previous={previous}
        next={next}
        relatedSector={(() => {
          const simpleCaseStudy = getCaseStudyBySlug(slug);
          if (!simpleCaseStudy?.relatedSector) return undefined;
          const sector = getSectorBySlug(simpleCaseStudy.relatedSector);
          if (!sector) return undefined;
          return { slug: sector.slug, name: sector.name };
        })()}
      />
    </>
  );
}
