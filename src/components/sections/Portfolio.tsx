"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  ShoppingCart,
  Utensils,
  Home,
  Users,
  TrendingUp,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
  Briefcase,
  LayoutGrid,
  Globe,
  Rocket,
  Camera,
  Award,
  ArrowRight,
  Key,
  Search,
} from "lucide-react";
import {
  caseStudies,
  portfolioCategories,
  type CaseStudy,
  type CaseStudyMetric,
} from "@/data/case-studies";

/* ─── Icon resolver ─── */
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Utensils,
  ShoppingCart,
  Home,
  Users,
  Sparkles,
  BookOpen,
  Briefcase,
  TrendingUp,
  Star,
  Clock,
  Camera,
  LayoutGrid,
  Globe,
  Rocket,
};

function resolveIcon(name: string) {
  return iconMap[name] ?? Sparkles;
}

function resolveMetricIcon(metric: CaseStudyMetric) {
  return resolveIcon(metric.icon);
}

/* ─── PortfolioCard ─── */
function PortfolioCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const testimonialSentences =
    caseStudy.testimonial.match(/[^.!?]+[.!?]*/g) || [];
  const formattedTestimonial = testimonialSentences.slice(0, 2).join(" ").trim();

  const Icon = resolveIcon(caseStudy.icon);

  const cardContent = (
    <Card
      className={`group bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col ${
        caseStudy.slug ? "cursor-pointer" : ""
      }`}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={caseStudy.image}
            alt={`${caseStudy.title} - ${caseStudy.client} | Portfolio ConvertiLab`}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            width={371}
            height={238}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 371px"
          />
        </AspectRatio>
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold shadow-md">
            {caseStudy.results}
          </span>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2">
          <Icon className={`w-6 h-6 ${caseStudy.iconColor}`} />
          <Badge
            variant="outline"
            className="bg-card border-primary/20 text-primary text-xs"
          >
            {caseStudy.sector}
          </Badge>
        </div>

        <CardTitle className="text-lg font-bold text-foreground mb-1 min-h-[3rem] line-clamp-2">
          {caseStudy.title}
        </CardTitle>
        <p className="text-primary font-semibold text-sm">{caseStudy.client}</p>
      </CardHeader>

      <CardContent className="space-y-3 flex-grow flex flex-col">
        <p className="text-muted-foreground text-sm leading-relaxed min-h-[2.5rem] line-clamp-2">
          {caseStudy.description}
        </p>

        <div className="grid grid-cols-3 gap-2 min-h-[80px]">
          {caseStudy.metrics.slice(0, 3).map((metric, index) => {
            const MetricIcon = resolveMetricIcon(metric);
            return (
              <div key={index} className="text-center p-2 bg-muted/50 rounded-lg">
                <MetricIcon className="w-4 h-4 text-primary mx-auto mb-1" />
                <div className="text-sm font-bold text-foreground">
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-auto space-y-3">
          <div className="bg-muted/50 rounded-lg p-3 min-h-[5.5rem]">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-muted-foreground italic text-sm mb-2 line-clamp-2">
              &quot;{formattedTestimonial}&quot;
            </p>
            <div className="text-xs font-semibold text-foreground">
              {caseStudy.author}
            </div>
          </div>

          {caseStudy.slug && (
            <div className="w-full bg-primary text-primary-foreground group/btn inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2">
              Voir l&apos;étude de cas
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (caseStudy.slug) {
    return (
      <Link href={`/etude-de-cas/${caseStudy.slug}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

/* ─── PortfolioHeader ─── */
function PortfolioHeader() {
  return (
    <div className="text-center mb-6 sm:mb-8">
      <Badge className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border-0">
        <Award className="w-4 h-4 mr-2" />
        Résultats Clients
      </Badge>

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
        Quels résultats{" "}
        <span className="text-primary">concrets et mesurables</span>
        {" "}pour nos clients ?
      </h2>

      <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
        Découvrez comment nos stratégies ont transformé le business de nos
        clients.
      </p>

      {/* Metrics bar — desktop only */}
      <div className="hidden sm:flex justify-center gap-10 mb-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-0.5">
            <Users className="w-4 h-4 text-primary" />
          </div>
          <div className="text-2xl font-black text-foreground">+50</div>
          <div className="text-xs text-muted-foreground">Clients</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-0.5">
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-2xl font-black text-foreground">+280%</div>
          <div className="text-xs text-muted-foreground">CA moyen</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-0.5">
            <Star className="w-4 h-4 text-yellow-500" />
          </div>
          <div className="text-2xl font-black text-foreground">4.9/5</div>
          <div className="text-xs text-muted-foreground">Satisfaction</div>
        </div>
      </div>
    </div>
  );
}

/* ─── PortfolioCTA ─── */
function PortfolioCTA() {
  return (
    <div className="text-center rounded-2xl p-6 sm:p-10 bg-primary relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-xl sm:text-3xl font-bold text-primary-foreground mb-2 sm:mb-3">
          Votre site professionnel dès 39€/mois
        </h3>
        <p className="text-sm sm:text-lg text-primary-foreground/80 mb-5 max-w-xl mx-auto">
          Vous êtes propriétaire de votre site, visible sur Google dès le
          lancement.
        </p>

        <Button
          asChild
          size="lg"
          className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90 text-base sm:text-lg px-8 py-6 font-semibold shadow-lg"
        >
          <Link href="/offre-mensuelle/devis">
            Lancer mon site
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-5 text-xs sm:text-sm text-primary-foreground/70">
          <span className="flex items-center gap-1.5">
            <Key className="w-3.5 h-3.5" /> Propriétaire
          </span>
          <span className="flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5" /> Visible sur Google
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Category filter icon resolver ─── */
const categoryIconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  LayoutGrid,
  Globe,
  ShoppingCart,
  Rocket,
  Camera,
};

/* ─── Main Portfolio Section ─── */
interface PortfolioProps {
  activeCategory?: string;
}

const Portfolio = ({ activeCategory: externalCategory }: PortfolioProps) => {
  const [internalCategory, setInternalCategory] = useState("all");
  const isHomepage = externalCategory === undefined;
  const activeCategory = isHomepage ? internalCategory : externalCategory;

  const isFiltered = activeCategory && activeCategory !== "all";

  const filteredCases = useMemo(() => {
    if (!isFiltered) return caseStudies;
    return caseStudies.filter((c) => c.category === activeCategory);
  }, [activeCategory, isFiltered]);

  // Keep dedicated filtered grid behavior only on /portfolio page
  if (isFiltered && !isHomepage) {
    return (
      <section
        className="py-8 sm:py-12 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 relative overflow-hidden"
        id="portfolio"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <p className="text-center text-muted-foreground mb-6 font-medium">
            {filteredCases.length} projet
            {filteredCases.length > 1 ? "s" : ""} trouvé
            {filteredCases.length > 1 ? "s" : ""}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredCases.map((caseStudy, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <PortfolioCard caseStudy={caseStudy} />
              </div>
            ))}
          </div>
          <PortfolioCTA />
        </div>
      </section>
    );
  }

  return (
    <section
      className="pt-4 sm:pt-6 pb-8 sm:pb-12 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 relative overflow-hidden"
      id="portfolio"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {isHomepage && <PortfolioHeader />}

        {/* Category filter for homepage */}
        {isHomepage && (
          <div className="flex overflow-x-auto sm:overflow-visible sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-6 pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            {portfolioCategories.map((cat) => {
              const CatIcon = categoryIconMap[cat.icon] ?? LayoutGrid;
              const isActive = internalCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setInternalCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-sm font-medium transition-all duration-300 border-2 flex-shrink-0 ${
                    isActive
                      ? "bg-background text-primary border-primary shadow-md scale-105 font-semibold"
                      : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground hover:shadow-md"
                  }`}
                >
                  <CatIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Always carousel on homepage, filtered or not */}
        {isHomepage ? (
          <div
            className="mb-8 relative"
            style={
              {
                minHeight: "420px",
                contentVisibility: "auto",
                containIntrinsicSize: "auto 420px",
              } as React.CSSProperties
            }
          >
            {/* Swipe hint - above carousel on mobile */}
            <div className="flex md:hidden justify-center mb-4 text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mx-auto w-fit shadow-lg border border-purple-100">
              <ChevronLeft className="w-4 h-4 mr-1 text-purple-600" />
              <span className="font-medium">
                Glissez pour voir plus d&apos;exemples
              </span>
              <ChevronRight className="w-4 h-4 ml-1 text-purple-600" />
            </div>

            <Carousel
              className="w-full max-w-6xl mx-auto"
              opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}
            >
              <CarouselContent
                className="-ml-2 md:-ml-4 items-stretch"
                style={{ willChange: "transform" }}
              >
                {filteredCases.map((caseStudy, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <PortfolioCard caseStudy={caseStudy} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden md:flex -left-12 bg-white shadow-xl border-2 border-purple-200 text-purple-600 w-12 h-12 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 hover:scale-110">
                <ChevronLeft className="h-6 w-6" />
              </CarouselPrevious>
              <CarouselNext className="hidden md:flex -right-12 bg-white shadow-xl border-2 border-purple-200 text-purple-600 w-12 h-12 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 hover:scale-110">
                <ChevronRight className="h-6 w-6" />
              </CarouselNext>
            </Carousel>
          </div>
        ) : (
          <>
            <p className="text-center text-muted-foreground mb-6 font-medium">
              {filteredCases.length} projet
              {filteredCases.length > 1 ? "s" : ""} trouvé
              {filteredCases.length > 1 ? "s" : ""}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredCases.map((caseStudy, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <PortfolioCard caseStudy={caseStudy} />
                </div>
              ))}
            </div>
          </>
        )}

        <PortfolioCTA />
      </div>
    </section>
  );
};

export default Portfolio;
