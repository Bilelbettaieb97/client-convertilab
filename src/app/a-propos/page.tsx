import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, STRUCTURED_DATA } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import RelatedServicesSection from "@/components/internal-links/RelatedServicesSection";
import SuggestedArticles from "@/components/internal-links/SuggestedArticles";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Award, CheckCircle2, ArrowRight, Calendar, Globe, Search,
  BarChart3, Code, Users, TrendingUp, Sparkles, MapPin, GraduationCap, Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos | Bilel Bettaieb, Fondateur | Agence Web Paris",
  description:
    "Découvrez ConvertiLab et son fondateur Bilel Bettaieb. +150 sites créés, +50 clients accompagnés, expertise en création web, SEO et publicité digitale à Paris & Île-de-France.",
  keywords:
    "agence web Paris, ConvertiLab, Bilel Bettaieb, création site internet, agence digitale, développement web",
  alternates: { canonical: `${SITE.url}/a-propos` },
};

export default function AboutPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "À propos", item: `${SITE.url}/a-propos` },
    ],
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bilel Bettaieb",
    jobTitle: "Fondateur & Directeur",
    worksFor: { "@type": "Organization", name: SITE.name },
    url: `${SITE.url}/a-propos`,
    sameAs: [SITE.social.linkedin],
    knowsAbout: ["Marketing Digital", "SEO", "Création de sites web", "Google Ads", "Meta Ads", "Next.js", "React"],
    alumniOf: { "@type": "EducationalOrganization", name: "Université Paris" },
    address: { "@type": "PostalAddress", addressLocality: "Rueil-Malmaison", addressRegion: "Île-de-France", addressCountry: "FR" },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    ...STRUCTURED_DATA.organization,
    founder: { "@type": "Person", name: "Bilel Bettaieb" },
    foundingDate: "2024",
    numberOfEmployees: { "@type": "QuantitativeValue", value: "5" },
    areaServed: [
      { "@type": "City", name: "Paris" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
    ],
  };

  const expertise = [
    { icon: Globe, title: "Création Web", desc: "Sites vitrines, e-commerce, landing pages et applications web sur-mesure avec Next.js et React." },
    { icon: Search, title: "SEO & Référencement", desc: "Stratégies SEO on-page, technique et local pour dominer Google dans votre secteur." },
    { icon: BarChart3, title: "Google Ads & Meta Ads", desc: "Campagnes publicitaires ROI-driven avec optimisation continue et reporting transparent." },
    { icon: Code, title: "Développement Sur-Mesure", desc: "Applications web complexes, automatisations, intégrations API et solutions techniques avancées." },
  ];

  const parcours = [
    { year: "2019", title: "Début en développement web", desc: "Formation autodidacte en HTML, CSS, JavaScript. Premiers sites pour des proches et petites entreprises." },
    { year: "2020", title: "Spécialisation Marketing Digital", desc: "Approfondissement en SEO, Google Ads et stratégie d'acquisition. Premières campagnes performantes pour des clients." },
    { year: "2022", title: "Expert Full-Stack & Growth", desc: "Maîtrise de React, Next.js, Node.js. Combinaison unique de compétences techniques et marketing." },
    { year: "2024", title: "Création de ConvertiLab", desc: "Lancement de l'agence avec une mission claire : aider les PME et entrepreneurs à développer leur business grâce au digital." },
    { year: "2025-26", title: "+150 sites livrés", desc: "ConvertiLab accompagne plus de 50 clients actifs en Île-de-France avec un taux de satisfaction de 4.9/5." },
  ];

  const chiffres = [
    { value: "150+", label: "Sites créés" },
    { value: "50+", label: "Clients actifs" },
    { value: "4.9/5", label: "Satisfaction" },
    { value: "+280%", label: "CA moyen clients" },
  ];

  const certifications = [
    "Google Analytics Certified",
    "Google Ads Search Certified",
    "Meta Blueprint Certified",
    "Next.js & React Expert",
    "SEO Technique Avancé",
    "Stratégie Marketing Digital",
  ];

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <Navigation />

      <div className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Accueil</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>À propos</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Section Fondateur */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  Fondateur & Directeur
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Bilel{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Bettaieb</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Développeur full-stack et expert en marketing digital, j&apos;ai fondé ConvertiLab avec une conviction simple :
                  <strong className="text-gray-900"> chaque entreprise mérite un site web qui génère des clients</strong>,
                  pas juste une vitrine qui prend la poussière.
                </p>
                <p className="text-base text-gray-500 mb-8 leading-relaxed">
                  Après +5 ans d&apos;expérience en développement web et marketing digital, j&apos;ai créé ConvertiLab pour offrir
                  aux PME et entrepreneurs d&apos;Île-de-France un accompagnement complet : de la création du site web jusqu&apos;à
                  l&apos;acquisition de clients via le SEO et la publicité en ligne.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm border">
                    <MapPin className="w-4 h-4 text-purple-500" /> Rueil-Malmaison, IDF
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm border">
                    <Briefcase className="w-4 h-4 text-purple-500" /> +5 ans d&apos;expérience
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg shadow-sm border">
                    <GraduationCap className="w-4 h-4 text-purple-500" /> Certifié Google & Meta
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <Link href="/contact">
                      Me contacter <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={SITE.social.linkedin} target="_blank">
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Photo + Stats */}
              <div className="space-y-6">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-5xl font-bold mb-6 shadow-lg">
                    BB
                  </div>
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Bilel Bettaieb</h2>
                    <p className="text-purple-600 font-medium">Fondateur de ConvertiLab</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {chiffres.map((c, i) => (
                      <div key={i} className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{c.value}</div>
                        <div className="text-xs text-gray-600 mt-1">{c.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest text-center mb-6">Certifications & Compétences</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-700 border">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">Domaines d&apos;expertise</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Une double compétence technique et marketing pour des résultats concrets
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {expertise.map((e, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <e.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{e.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parcours */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Parcours</h2>
            <div className="space-y-8">
              {parcours.map((p, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg flex-shrink-0">
                      {p.year}
                    </div>
                    {i < parcours.length - 1 && <div className="w-0.5 flex-1 bg-purple-200 mt-2"></div>}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-bold text-gray-900 text-lg">{p.title}</h3>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision / About section */}
        <About />

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 sm:p-16 text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Travaillons ensemble</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Je m&apos;implique personnellement dans chaque projet. Discutons de vos objectifs et trouvons la meilleure stratégie pour votre business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold">
                  <Link href="/contact">
                    Prendre rendez-vous <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  <Link href="/portfolio">
                    Voir mes réalisations
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <RelatedServicesSection title="Découvrez nos services" max={4} />
        <SuggestedArticles title="Derniers articles du blog" max={3} />
      </div>

      <Footer />
    </div>
  );
}
