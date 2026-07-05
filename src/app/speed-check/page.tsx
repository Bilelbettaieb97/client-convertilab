import type { Metadata } from "next";
import Link from "next/link";
import SpeedCheckForm from "@/components/speed-check/SpeedCheckForm";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Test de Vitesse Site Web Gratuit — Core Web Vitals en 60s",
  keywords:
    "test vitesse site web, tester la vitesse de son site, test de vitesse gratuit, site web lent, core web vitals, pagespeed, audit vitesse site internet",
  description:
    "Testez gratuitement la vitesse de votre site web. Temps de réponse, poids de page, compression, scripts bloquants, images. Rapport PDF complet envoyé par email.",
  openGraph: {
    title: "Audit Vitesse Gratuit — Testez la rapidité de votre site | ConvertiLab",
    description:
      "20+ points de contrôle vitesse, analyse complète, rapport PDF gratuit envoyé par email.",
    url: `${SITE.url}/speed-check`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
    siteName: SITE.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit Vitesse Gratuit — ConvertiLab",
    description: "Testez la vitesse de votre site web. Rapport PDF complet et gratuit.",
  },
  alternates: {
    canonical: `${SITE.url}/speed-check`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Audit Vitesse Gratuit — ConvertiLab",
  description: "Outil gratuit pour tester la vitesse de chargement de votre site web avec rapport PDF detaille.",
  url: `${SITE.url}/speed-check`,
  applicationCategory: "Performance Tool",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
};


const faqItems = [
  { question: "Le test de vitesse est-il vraiment gratuit ?",
    answer: "Oui, 100% gratuit et sans engagement. Vous entrez l'URL de votre site et votre email, et vous recevez le rapport complet en PDF avec votre score de vitesse, le détail des 20+ points de contrôle et les corrections à apporter, classées par priorité." },
  { question: "Que sont les Core Web Vitals ?",
    answer: "Ce sont les trois métriques officielles de Google pour mesurer l'expérience de chargement : le LCP (vitesse d'affichage du contenu principal, cible < 2,5s), le CLS (stabilité visuelle de la page) et l'INP (réactivité aux clics). Depuis 2021, elles font partie des critères de classement Google : un site lent perd des positions." },
  { question: "Quel est un bon score de vitesse pour un site web ?",
    answer: "Visez un chargement complet sous 3 secondes sur mobile et un score PageSpeed supérieur à 90. Entre 50 et 89, des optimisations ciblées s'imposent. Sous 50, la lenteur vous coûte concrètement des clients : chaque seconde de chargement supplémentaire fait chuter les conversions d'environ 7%." },
  { question: "Pourquoi mon site est-il lent ?",
    answer: "Les causes les plus fréquentes : images trop lourdes ou mal compressées, hébergement bas de gamme, thème WordPress surchargé de plugins, scripts tiers bloquants (chats, trackers), absence de cache et de CDN. Notre rapport identifie précisément lesquelles concernent votre site." },
  { question: "La vitesse influence-t-elle vraiment mon référencement Google ?",
    answer: "Oui, doublement. Directement : les Core Web Vitals sont un critère de classement officiel. Indirectement : un site lent augmente le taux de rebond, et Google interprète ces retours utilisateurs négatifs comme un signal de faible qualité. Vitesse et SEO sont indissociables — testez les deux avec notre audit SEO gratuit." },
  { question: "Testez-vous la version mobile ou desktop ?",
    answer: "L'analyse porte en priorité sur l'expérience mobile, car Google indexe d'abord la version mobile de votre site (mobile-first indexing) et plus de 60% du trafic est mobile. Un site rapide sur ordinateur mais lent sur smartphone perd l'essentiel de ses visiteurs." },
  { question: "Que faire si mon score de vitesse est mauvais ?",
    answer: "Commencez par les corrections prioritaires du rapport : compression des images, mise en cache, suppression des scripts inutiles. Si votre site repose sur une technologie lente par nature, une refonte avec une technologie moderne comme Next.js (score 90+ garanti sur nos créations) est souvent plus rentable que des rustines." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const features = [
  {
    icon: "\u23F1\uFE0F",
    title: "Temps de Reponse",
    desc: "Mesure du TTFB et du temps de chargement serveur.",
  },
  {
    icon: "\u2696\uFE0F",
    title: "Poids de Page",
    desc: "Analyse du poids HTML total et des ressources chargees.",
  },
  {
    icon: "\uD83D\uDDDC\uFE0F",
    title: "Compression",
    desc: "Verification de la compression Gzip ou Brotli.",
  },
  {
    icon: "\u26A0\uFE0F",
    title: "Scripts Bloquants",
    desc: "Detection des scripts qui ralentissent le rendu.",
  },
  {
    icon: "\uD83D\uDDBC\uFE0F",
    title: "Images Optimisees",
    desc: "WebP, lazy loading, nombre d'images analysees.",
  },
  {
    icon: "\u2705",
    title: "Bonnes Pratiques",
    desc: "Preconnect, font preload, viewport, DOM depth.",
  },
];

export default function SpeedCheckPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Navigation />
      <main className="min-h-screen bg-[#0a0a1a] pt-16">
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,92,231,0.15),transparent_60%)]" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 text-sm text-purple-300 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              100% Gratuit, sans engagement
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Audit Vitesse{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Gratuit
              </span>
            </h1>

            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Testez la rapidite de votre site en 60 secondes. Recevez un rapport PDF complet avec{" "}
              <strong className="text-white/70">20+ points de controle</strong> et un plan d&apos;action priorise.
            </p>
          </div>

          {/* Form */}
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
              <SpeedCheckForm />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ce que contient votre audit vitesse
            </h2>
            <p className="text-white/40 text-center mb-12 text-sm">
              Une analyse complete de la performance de votre site, accessible a tous.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-purple-500/30 transition-colors"
                >
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h3 className="text-white font-semibold text-sm mb-1">{f.title}</h3>
                  <p className="text-white/40 text-xs">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-12">Comment ca marche ?</h2>
            <div className="grid grid-cols-3 gap-8">
              {[
                { step: "1", title: "Entrez votre URL", desc: "Indiquez l'adresse de votre site web." },
                { step: "2", title: "On mesure tout", desc: "Notre outil analyse 20+ metriques de vitesse." },
                { step: "3", title: "Recevez le PDF", desc: "Rapport complet envoye a votre email." },
              ].map((s) => (
                <div key={s.step}>
                  <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold mx-auto mb-3">
                    {s.step}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{s.title}</h3>
                  <p className="text-white/40 text-xs">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Contenu SEO — pourquoi la vitesse compte */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Pourquoi tester la vitesse de votre site web ?
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                La vitesse de chargement est le facteur le plus sous-estimé du web :{" "}
                <strong className="text-white/80">53% des visiteurs mobiles quittent
                un site qui met plus de 3 secondes à charger</strong>, et chaque seconde
                supplémentaire fait chuter les conversions d&apos;environ 7%. Un site lent
                ne fait pas fuir que vos visiteurs — il fait fuir Google : les Core Web
                Vitals sont un critère de classement officiel depuis 2021.
              </p>
              <p>
                Notre <strong className="text-white/80">test de vitesse gratuit</strong>{" "}
                analyse votre site comme Google le fait : temps de réponse serveur, poids
                des pages, compression, images, scripts bloquants. En 60 secondes, vous
                savez exactement ce qui ralentit votre site et par quoi commencer pour le
                corriger — le détail complet arrive en PDF dans votre boîte mail.
              </p>
              <p>
                Pour comprendre les leviers d&apos;optimisation, lisez notre guide{" "}
                <Link href="/blog/optimiser-vitesse-site-web" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                  comment accélérer son site web
                </Link>{" "}
                ou découvrez{" "}
                <Link href="/blog/site-web-lent-fait-fuir-clients" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                  combien un site lent coûte réellement en clients perdus
                </Link>
                . Et pour une vision complète de votre visibilité, complétez avec notre{" "}
                <Link href="/seo-check" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                  audit SEO gratuit
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Questions fréquentes sur le test de vitesse
            </h2>
            <p className="text-white/40 text-center mb-12">
              Core Web Vitals, scores, causes de lenteur : ce qu&apos;il faut savoir
            </p>
            <div className="space-y-3">
              {faqItems.map((faq, i) => (
                <details key={i} className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-5 text-left font-semibold text-white/90 hover:text-purple-300 transition-colors [&::-webkit-details-marker]:hidden">
                    <span className="pr-4 text-sm md:text-base">{faq.question}</span>
                    <span className="text-purple-400 group-open:rotate-45 transition-transform duration-200 text-xl flex-shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-white/50 text-sm leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-16 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/30 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">{"\u2605\u2605\u2605\u2605\u2605"}</span>
                <span>4.9/5 sur 15 avis</span>
              </div>
              <div>+150 sites crees</div>
              <div>+50 clients actifs</div>
              <div>Certifie Google</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
