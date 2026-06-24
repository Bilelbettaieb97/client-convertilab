import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE, PRICING } from "@/lib/constants";
import { cities, getCityBySlug } from "@/data/cities";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Store,
  Rocket,
  Clock,
  Shield,
  Search,
  Headphones,
  Zap,
  BadgeCheck,
  Star,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ ville: string }> };

const TARGET_SLUGS = [
  "paris", "lyon", "marseille", "bordeaux", "toulouse",
  "nice", "nantes", "lille", "montpellier", "strasbourg",
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) return { title: "Page introuvable" };

  const title = `Création Site Internet ${city.name} | Dès 500€, Livré en 7 jours | ConvertiLab`;
  const description = `Création de site internet professionnel à ${city.name} à partir de 500€. Site vitrine, e-commerce ou landing page livrés en 7 jours. +150 clients, 4.9★. Devis gratuit sous 24h.`;

  return {
    title,
    description,
    keywords: [
      `création site internet ${city.name}`,
      `site web ${city.name}`,
      `agence web ${city.name}`,
      `site vitrine ${city.name}`,
      `site e-commerce ${city.name}`,
    ].join(", "),
    alternates: { canonical: `${SITE.url}/creation-site-internet/${city.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/creation-site-internet/${city.slug}`,
    },
    other: {
      "geo.region": "FR",
      "geo.placename": city.name,
      ICBM: `${city.lat}, ${city.lng}`,
    },
  };
}

export function generateStaticParams() {
  return TARGET_SLUGS.map((ville) => ({ ville }));
}

export default async function CreationSiteInternetVillePage({ params }: Props) {
  const { ville } = await params;
  const city = getCityBySlug(ville);
  if (!city || !TARGET_SLUGS.includes(city.slug)) notFound();

  const offres = [
    {
      icon: Globe,
      name: "Site Vitrine",
      price: "500€",
      features: [
        "Design sur-mesure responsive",
        "5 pages optimisées SEO",
        "Formulaire de contact",
        "Hébergement 1 an inclus",
        "Certificat SSL",
      ],
      href: "/prix/site-vitrine",
      popular: false,
    },
    {
      icon: Store,
      name: "Site E-commerce",
      price: "800€",
      features: [
        "Catalogue produits illimité",
        "Paiement sécurisé Stripe",
        "Gestion des commandes",
        "SEO e-commerce",
        "Formation incluse",
      ],
      href: "/prix/site-ecommerce",
      popular: true,
    },
    {
      icon: Rocket,
      name: "Landing Page",
      price: "500€",
      features: [
        "Page de conversion optimisée",
        "A/B testing",
        "Intégration analytics",
        "Design persuasif",
        "Livraison en 5 jours",
      ],
      href: "/prix/landing-page",
      popular: false,
    },
  ];

  const avantages = [
    { icon: Clock, title: "Livré en 7 jours", desc: "Votre site est en ligne rapidement, sans compromis sur la qualité." },
    { icon: BadgeCheck, title: "Vous êtes propriétaire", desc: "Le code source et le nom de domaine vous appartiennent à 100%." },
    { icon: Search, title: "SEO intégré", desc: "Chaque site est optimisé pour apparaître sur Google dès le lancement." },
    { icon: Headphones, title: "Support réactif", desc: "Une équipe disponible pour répondre à vos questions sous 24h." },
    { icon: Shield, title: "Sécurisé & performant", desc: "Technologies modernes, certificat SSL, hébergement rapide." },
    { icon: Zap, title: "Technologies modernes", desc: "Next.js, React, Tailwind CSS pour des performances optimales." },
  ];

  const etapes = [
    { num: "01", title: "Appel découverte", desc: "30 minutes pour comprendre votre projet, vos objectifs et votre marché." },
    { num: "02", title: "Maquette & Design", desc: "Nous créons une maquette sur-mesure validée avant le développement." },
    { num: "03", title: "Développement", desc: "Code propre, responsive, optimisé SEO. Vous suivez l’avancement en direct." },
    { num: "04", title: "Mise en ligne", desc: "Déploiement, tests finaux et formation à la gestion de votre site." },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `ConvertiLab - Création Site Internet ${city.name}`,
      description: `Agence de création de sites internet à ${city.name}. Sites vitrines, e-commerce et landing pages.`,
      url: `${SITE.url}/creation-site-internet/${city.slug}`,
      telephone: SITE.phone,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        postalCode: city.postalCode,
        addressRegion: city.region,
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.lat,
        longitude: city.lng,
      },
      image: `${SITE.url}/og-image.png`,
      priceRange: "€€",
      areaServed: { "@type": "City", name: city.name },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: SITE.reviews.rating,
        reviewCount: SITE.reviews.count,
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Création Site Internet", item: `${SITE.url}/creation-site-internet` },
        { "@type": "ListItem", position: 3, name: `Création Site Internet ${city.name}`, item: `${SITE.url}/creation-site-internet/${city.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: city.faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Structured Data */}
        {structuredData.map((sd, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(sd) }}
          />
        ))}

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-purple-600 transition-colors">Accueil</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-gray-800 font-medium">Création Site Internet {city.name}</span>
            </nav>
          </div>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white py-20 sm:py-28">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <div className="flex items-center gap-2 text-purple-200 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{city.name} ({city.department})</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Création de Site Internet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300">
                à {city.name}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mb-4">
              Votre site web professionnel, livré en 7 jours.{" "}
              <span className="font-semibold text-white">À partir de {PRICING.vitrine.label}.</span>
            </p>
            <p className="text-purple-200 max-w-2xl mb-8">
              {city.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100 font-bold px-8 text-base">
                <Link href="/devis/site-vitrine">
                  Devis gratuit <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white bg-white/15 font-semibold px-8 text-base">
                <Link href="/portfolio">
                  Voir nos réalisations
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-purple-200">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> +150 sites livrés</span>
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-400" /> 4.9/5 avis</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-400" /> 7 jours</span>
            </div>
          </div>
        </section>

        {/* OFFRES */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Nos offres de création de site internet à {city.name}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des solutions adaptées à chaque budget et chaque besoin. Tous nos sites sont livrés clé en main.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {offres.map((offre) => (
                <div
                  key={offre.name}
                  className={`relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl ${
                    offre.popular
                      ? "border-purple-500 shadow-lg ring-2 ring-purple-500/20"
                      : "border-gray-200 hover:border-purple-300"
                  }`}
                >
                  {offre.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                        Populaire
                      </span>
                    </div>
                  )}
                  <offre.icon className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{offre.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-purple-600">{offre.price}</span>
                    <span className="text-gray-500 text-sm ml-1">HT</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {offre.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full font-semibold ${offre.popular ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white" : ""}`} variant={offre.popular ? "default" : "outline"}>
                    <Link href={offre.href}>
                      Voir les détails <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTEXTE LOCAL — contenu unique par ville */}
        <section className="py-14 sm:py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Pourquoi créer votre site internet à{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    {city.name}
                  </span>{" "}
                  maintenant ?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {city.localContext}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Avec <strong>{city.stats.entreprises}</strong> recensées et{" "}
                  <strong>{city.stats.searches}</strong>, le marché digital de{" "}
                  {city.name} est en pleine croissance. Les entreprises qui
                  investissent dans leur présence en ligne aujourd&apos;hui
                  prennent une longueur d&apos;avance décisive sur leurs
                  concurrents.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Secteurs d&apos;activité clés à {city.name}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {city.keyIndustries.map((industry, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                  <p className="text-sm text-gray-500 mb-3">Nos clients à {city.name} obtiennent en moyenne :</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">+280%</div>
                      <div className="text-xs text-gray-500 mt-1">de CA</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-pink-600">7j</div>
                      <div className="text-xs text-gray-500 mt-1">délai livraison</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-amber-600">4.9★</div>
                      <div className="text-xs text-gray-500 mt-1">satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POURQUOI NOUS */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Pourquoi choisir ConvertiLab à {city.name} ?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Une agence qui s’engage sur des résultats concrets, pas juste des promesses.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {avantages.map((a) => (
                <div key={a.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mb-4">
                    <a.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{a.title}</h3>
                  <p className="text-gray-600 text-sm">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEMOIGNAGES */}
        {city.testimonials && city.testimonials.length > 0 && (
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Ce que disent nos clients à {city.name}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {city.testimonials.map((t, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <Image src={t.photo} alt={t.author} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                        <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
                      </div>
                    </div>
                    {t.metric && (
                      <div className="mt-3 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-lg inline-block">
                        {t.metric}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PROCESS */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Comment ça marche ?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Un processus simple et transparent, de l’idée à la mise en ligne.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {etapes.map((e) => (
                <div key={e.num} className="relative">
                  <div className="text-5xl font-black text-purple-100 mb-3">{e.num}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{e.title}</h3>
                  <p className="text-gray-600 text-sm">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {city.faqItems && city.faqItems.length > 0 && (
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Questions fréquentes sur la création de site à {city.name}
                </h2>
              </div>
              <div className="space-y-4">
                {city.faqItems.map((faq, i) => (
                  <details key={i} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                    <summary className="flex items-center justify-between cursor-pointer p-5 text-left font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                      {faq.question}
                      <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                    </summary>
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA FINAL */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Prêt à lancer votre site internet à {city.name} ?
            </h2>
            <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
              Obtenez votre devis gratuit en moins de 2 minutes. Sans engagement, réponse sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100 font-bold px-8 text-base">
                <Link href="/devis/site-vitrine">
                  Demander un devis gratuit <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white bg-white/15 font-semibold px-8 text-base">
                <Link href="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* LIEN VERS PAGE VILLE */}
        <section className="py-10 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl text-center">
            <Link
              href={`/agence-web/${city.slug}`}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
            >
              <MapPin className="w-4 h-4" />
              En savoir plus sur notre agence à {city.name}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
