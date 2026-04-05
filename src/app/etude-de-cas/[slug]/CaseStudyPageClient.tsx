"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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

interface Props {
  caseStudy: CaseStudyData;
  slug: string;
  previous?: NavigationProject;
  next?: NavigationProject;
}

export default function CaseStudyPageClient({
  caseStudy,
  slug,
  previous,
  next,
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

      <CaseStudyNavigation
        previousProject={previous}
        nextProject={next}
      />

      <Footer />
    </div>
  );
}
