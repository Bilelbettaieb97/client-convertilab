"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CaseStudyData {
  client: string;
  sector: string;
  title: string;
  image: string;
  slug: string;
  category: "site-vitrine" | "landing-page" | "e-commerce" | "portfolio";
}

const allCaseStudies: CaseStudyData[] = [
  { client: "Monsieur Arancini", sector: "Restauration", title: "Site vitrine premium pour artisan sicilien", image: "/portfolio/arancini-hero.webp", slug: "monsieur-arancini", category: "site-vitrine" },
  { client: "ACB Renovation", sector: "BTP / Renovation", title: "Site vitrine BTP avec generation de devis", image: "/portfolio/acb-hero.webp", slug: "acb-renovation", category: "site-vitrine" },
  { client: "Eleva Conciergerie", sector: "Conciergerie / Immobilier", title: "Site premium pour conciergerie locative", image: "/portfolio/eleva-hero.webp", slug: "eleva-conciergerie", category: "site-vitrine" },
  { client: "ADSB Wissembourg", sector: "Association", title: "Site vitrine pour association de donneurs de sang", image: "/portfolio/adsb-hero.webp", slug: "adsb-wissembourg", category: "site-vitrine" },
  { client: "Alliance Securite Incendie", sector: "Securite Incendie", title: "Site vitrine B2B pour securite incendie", image: "/portfolio/asi-hero.webp", slug: "alliance-securite-incendie", category: "site-vitrine" },
  { client: "Tri Event", sector: "Recyclage / Evenementiel", title: "Site vitrine eco-responsable pour recyclage", image: "/portfolio/trievent-hero.webp", slug: "trievent", category: "site-vitrine" },
  { client: "Le Temple de l'Energie", sector: "Bien-etre / Massage", title: "Site vitrine immersif pour espace bien-etre", image: "/portfolio/templezen-hero.webp", slug: "temple-zen", category: "site-vitrine" },
  { client: "Institut Nomad", sector: "Education", title: "Site vitrine pour accompagnement educatif", image: "/portfolio/institut-nomad-hero.webp", slug: "institut-nomad", category: "site-vitrine" },
  { client: "AH Studio Caen", sector: "Photographie", title: "Site portfolio pour photographe professionnel", image: "/portfolio/ahstudio-hero.webp", slug: "ah-studio", category: "site-vitrine" },
  { client: "Couleur Sable by K", sector: "Coiffure / Beaute", title: "Site vitrine premium pour salon de coiffure", image: "/portfolio/couleursable-hero.webp", slug: "couleur-sable", category: "site-vitrine" },
  { client: "FilmReel Gallery", sector: "Production Video", title: "Site portfolio cinematographique", image: "/portfolio/filmreel-hero.webp", slug: "filmreel-gallery", category: "site-vitrine" },
  { client: "PapaPret", sector: "Formation / Infoproduit", title: "Landing page haute conversion pour formation", image: "/portfolio/papapret-hero.webp", slug: "papapret", category: "landing-page" },
  { client: "Vinoboat Prestige", sector: "Tourisme de Luxe", title: "Landing page premium nautique de luxe", image: "/portfolio/vinoboat-hero.webp", slug: "vinoboat", category: "landing-page" },
  { client: "Spectacle", sector: "Evenementiel", title: "Landing page evenementielle pour spectacle", image: "/portfolio/spectacle-hero.webp", slug: "spectacle", category: "landing-page" },
  { client: "Funestore", sector: "E-commerce B2B", title: "E-commerce B2B pour le secteur funeraire", image: "/portfolio/funestore-hero.webp", slug: "funestore", category: "e-commerce" },
  { client: "Art des Roses", sector: "E-commerce / Art", title: "E-commerce artistique pour vente d'oeuvres", image: "/portfolio/artdesroses-hero.webp", slug: "art-des-roses", category: "e-commerce" },
  { client: "Segermes", sector: "E-commerce / Alimentaire", title: "E-commerce premium huile d'olive haut de gamme", image: "/portfolio/segermes-hero.webp", slug: "segermes", category: "e-commerce" },
  { client: "L'Ecrin de Seoul", sector: "Cosmetique / K-Beauty", title: "E-commerce cosmetique coreenne", image: "/portfolio/ecrindeseoul-hero.webp", slug: "ecrin-de-seoul", category: "e-commerce" },
];

interface ServiceCaseStudiesProps {
  category: "site-vitrine" | "landing-page" | "e-commerce";
  title?: string;
  subtitle?: string;
  max?: number;
}

const ServiceCaseStudies = ({ category, title, subtitle, max }: ServiceCaseStudiesProps) => {
  const filtered = allCaseStudies.filter(c => c.category === category);
  const displayed = max ? filtered.slice(0, max) : filtered;

  if (displayed.length === 0) return null;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {title || "Nos realisations"}
          </h2>
          <p className="text-muted-foreground">
            {subtitle || "Decouvrez nos projets recents"}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayed.map((study) => (
            <Link
              key={study.slug}
              href={`/etude-de-cas/${study.slug}`}
              className="group block rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10]">
                <img
                  src={study.image}
                  alt={`${study.title} - ${study.client} | Realisation ConvertiLab`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={400}
                />
              </div>
              <div className="p-5">
                <Badge variant="secondary" className="mb-2 text-xs">{study.sector}</Badge>
                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {study.client}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{study.title}</p>
                <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                  Voir l&apos;etude de cas
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">
              Voir tous nos projets
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCaseStudies;
