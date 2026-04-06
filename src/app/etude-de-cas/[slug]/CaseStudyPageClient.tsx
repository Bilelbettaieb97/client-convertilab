"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyOverview from "@/components/case-study/CaseStudyOverview";
import CaseStudyChallenge from "@/components/case-study/CaseStudyChallenge";
import CaseStudySolution from "@/components/case-study/CaseStudySolution";
import CaseStudyGallery from "@/components/case-study/CaseStudyGallery";
import CaseStudyMetrics from "@/components/case-study/CaseStudyMetrics";
import CaseStudyTimeline from "@/components/case-study/CaseStudyTimeline";
import CaseStudyTestimonial from "@/components/case-study/CaseStudyTestimonial";
import CaseStudyCTA from "@/components/case-study/CaseStudyCTA";
import CaseStudyNavigation from "@/components/case-study/CaseStudyNavigation";

interface NavigationProject {
  slug: string;
  title: string;
  client: string;
  image: string;
  sector: string;
}

interface CaseStudyData {
  sector: string;
  client: string;
  title: string;
  subtitle: string;
  image: string;
  gallery: Array<{ src: string; alt: string; caption: string }>;
  chartData: Array<{ name: string; before: number; after: number }>;
  challenge: string;
  solution: string;
  metrics: Array<{ label: string; value: string; description: string }>;
  technologies: string[];
  timeline: Array<{ phase: string; duration: string; description: string }>;
  results: string;
  testimonial: string;
  author: string;
  role: string;
}

interface RelatedSector {
  slug: string;
  name: string;
}

interface Props {
  caseStudy: CaseStudyData;
  slug: string;
  previous?: NavigationProject;
  next?: NavigationProject;
  relatedSector?: RelatedSector;
}

export default function CaseStudyPageClient({
  caseStudy,
  slug,
  previous,
  next,
  relatedSector,
}: Props) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Accueil</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/portfolio">Portfolio</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{caseStudy.client}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Button asChild variant="ghost" className="-ml-2">
          <Link href="/portfolio">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au portfolio
          </Link>
        </Button>
      </div>

      <CaseStudyHero
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        image={caseStudy.image}
        sector={caseStudy.sector}
        client={caseStudy.client}
      />

      <CaseStudyTestimonial
        testimonial={caseStudy.testimonial}
        author={caseStudy.author}
        role={caseStudy.role}
        client={caseStudy.client}
      />

      <CaseStudyOverview
        challenge={caseStudy.challenge}
        solution={caseStudy.solution}
        technologies={caseStudy.technologies}
      />

      <CaseStudyChallenge challenge={caseStudy.challenge} />

      <CaseStudySolution solution={caseStudy.solution} />

      <CaseStudyGallery images={caseStudy.gallery} />

      <CaseStudyMetrics metrics={caseStudy.metrics} />

      <CaseStudyTimeline timeline={caseStudy.timeline} />

      <CaseStudyCTA results={caseStudy.results} />

      {relatedSector && (
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 sm:p-10 border border-purple-100 text-center">
              <p className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Vous aussi vous êtes dans le secteur {relatedSector.name.toLowerCase()} ?
              </p>
              <p className="text-gray-600 mb-6">
                Découvrez notre offre spécialement conçue pour les professionnels de votre secteur.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8"
              >
                <Link href={`/solutions/${relatedSector.slug}`}>
                  Découvrir notre offre {relatedSector.name.toLowerCase()} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <CaseStudyNavigation
        previousProject={previous}
        nextProject={next}
      />

      <Footer />
    </div>
  );
}
