import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE, PRICING } from "@/lib/constants";
import { cities, getCityBySlug } from "@/data/cities";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
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

  const title = `Cr\u00e9ation Site Internet ${city.name} | Devis Gratuit`;
  const description = `Cr\u00e9ation de site internet \u00e0 ${city.name} \u00e0 partir de 500\u20ac. Site vitrine, e-commerce, landing page. Livr\u00e9 en 7 jours. Devis gratuit.`;

  return {
    title,
    description,
    keywords: [
      `cr\u00e9ation site internet ${city.name}`,
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
      price: "500\u20ac",
      features: [
        "Design sur-mesure responsive",
        "5 pages optimis\u00e9es SEO",
        "Formulaire de contact",
        "H\u00e9bergement 1 an inclus",
        "Certificat SSL",
      ],
      href: "/prix/site-vitrine",
      popular: false,
    },
    {
      icon: Store,
      name: "Site E-commerce",
      price: "800\u20ac",
      features: [
        "Catalogue produits illimit\u00e9",
        "Paiement s\u00e9curis\u00e9 Stripe",
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
      price: "500\u20ac",
      features: [
        "Page de conversion optimis\u00e9e",
        "A/B testing",
        "Int\u00e9gration analytics",
        "Design persuasif",
        "Livraison en 5 jours",
      ],
      href: "/prix/landing-page",
      popular: false,
    },
  ];

  const avantages = [
    { icon: Clock, title: "Livr\u00e9 en 7 jours", desc: "Votre site est en ligne rapidement, sans compromis sur la qualit\u00e9." },
    { icon: BadgeCheck, title: "Vous \u00eates propri\u00e9taire", desc: "Le code source et le nom de domaine vous appartiennent \u00e0 100%." },
    { icon: Search, title: "SEO int\u00e9gr\u00e9", desc: "Chaque site est optimis\u00e9 pour appara\u00eetre sur Google d\u00e8s le lancement." },
    { icon: Headphones, title: "Support r\u00e9actif", desc: "Une \u00e9quipe disponible pour r\u00e9pondre \u00e0 vos questions sous 24h." },
    { icon: Shield, title: "S\u00e9curis\u00e9 & performant", desc: "Technologies modernes, certificat SSL, h\u00e9bergement rapide." },
    { icon: Zap, title: "Technologies modernes", desc: "Next.js, React, Tailwind CSS pour des performances optimales." },
  ];

  const etapes = [
    { num: "01", title: "Appel d\u00e9couverte", desc: "30 minutes pour comprendre votre projet, vos objectifs et votre march\u00e9." },
    { num: "02", title: "Maquette & Design", desc: "Nous cr\u00e9ons une maquette sur-mesure valid\u00e9e avant le d\u00e9veloppement." },
    { num: "03", title: "D\u00e9veloppement", desc: "Code propre, responsive, optimis\u00e9 SEO. Vous suivez l\u2019avancement en direct." },
    { num: "04", title: "Mise en ligne", desc: "D\u00e9ploiement, tests finaux et formation \u00e0 la gestion de votre site." },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `ConvertiLab - Cr\u00e9ation Site Internet ${city.name}`,
      description: `Agence de cr\u00e9ation de sites internet \u00e0 ${city.name}. Sites vitrines, e-commerce et landing pages.`,
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
      priceRange: "\u20ac\u20ac",
      areaServed: { "@type": "City", name: city.name },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Cr\u00e9ation Site Internet", item: `${SITE.url}/creation-site-internet` },
        { "@type": "ListItem", position: 3, name: `Cr\u00e9ation Site Internet ${city.name}`, item: `${SITE.url}/creation-site-internet/${city.slug}` },
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
              <span className="text-gray-800 font-medium">Cr\u00e9ation Site Internet {city.name}</span>
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
              Cr\u00e9ation de Site Internet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300">
                \u00e0 {city.name}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mb-4">
              Votre site web professionnel, livr\u00e9 en 7 jours.{" "}
              <span className="font-semibold text-white">\u00c0 partir de {PRICING.vitrine.label}.</span>
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
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 text-base">
                <Link href="/portfolio">
                  Voir nos r\u00e9alisations
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-purple-200">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> +150 sites livr\u00e9s</span>
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
                Nos offres de cr\u00e9ation de site internet \u00e0 {city.name}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des solutions adapt\u00e9es \u00e0 chaque budget et chaque besoin. Tous nos sites sont livr\u00e9s cl\u00e9 en main.
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
                      Voir les d\u00e9tails <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POURQUOI NOUS */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Pourquoi choisir ConvertiLab \u00e0 {city.name} ?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Une agence qui s\u2019engage sur des r\u00e9sultats concrets, pas juste des promesses.
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
                  Ce que disent nos clients \u00e0 {city.name}
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
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.photo} alt={t.author} className="w-10 h-10 rounded-full object-cover" />
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
                Comment \u00e7a marche ?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Un processus simple et transparent, de l\u2019id\u00e9e \u00e0 la mise en ligne.
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
                  Questions fr\u00e9quentes sur la cr\u00e9ation de site \u00e0 {city.name}
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
              Pr\u00eat \u00e0 lancer votre site internet \u00e0 {city.name} ?
            </h2>
            <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
              Obtenez votre devis gratuit en moins de 2 minutes. Sans engagement, r\u00e9ponse sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100 font-bold px-8 text-base">
                <Link href="/devis/site-vitrine">
                  Demander un devis gratuit <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 text-base">
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
              En savoir plus sur notre agence \u00e0 {city.name}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
