import type { Metadata } from "next";
import ComparateurForm from "@/components/comparateur-sites/ComparateurForm";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Comparateur de Sites Web Gratuit — Votre site vs la concurrence",
  description:
    "Comparez votre site web avec celui de votre concurrent. 8 catégories analysées, scores détaillés, points forts/faibles et rapport PDF gratuit.",
  openGraph: {
    title: "Comparateur de Sites Web Gratuit — Votre site vs la concurrence | ConvertiLab",
    description:
      "Comparez 8 catégories SEO, découvrez qui gagne et recevez un rapport PDF comparatif gratuit.",
    url: `${SITE.url}/comparateur-sites`,
    siteName: SITE.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comparateur de Sites Web — ConvertiLab",
    description: "Votre site est-il meilleur que celui de votre concurrent ? Decouvrez-le gratuitement.",
  },
  alternates: {
    canonical: `${SITE.url}/comparateur-sites`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Comparateur de Sites Web — ConvertiLab",
  description: "Outil gratuit de comparaison SEO entre deux sites web avec rapport PDF.",
  url: `${SITE.url}/comparateur-sites`,
  applicationCategory: "SEO Tool",
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

const features = [
  {
    icon: "\ud83d\udcca",
    title: "8 Categories",
    desc: "Technique, on-page, schema, mobile, contenu, IA, performance, securite.",
  },
  {
    icon: "\ud83c\udfc6",
    title: "Score Detaille",
    desc: "Chaque categorie est notee sur 100 avec un gagnant identifie.",
  },
  {
    icon: "\u2705",
    title: "Points Forts / Faibles",
    desc: "Decouvrez les forces et faiblesses de chaque site.",
  },
  {
    icon: "\ud83d\udcc4",
    title: "Rapport PDF",
    desc: "4 pages de comparaison detaillee envoyees par email.",
  },
  {
    icon: "\ud83d\udcb0",
    title: "100% Gratuit",
    desc: "Aucun frais, aucun engagement. Resultats complets.",
  },
  {
    icon: "\u26a1",
    title: "Analyse en 60s",
    desc: "Les deux sites sont analyses en parallele pour gagner du temps.",
  },
];

export default function ComparateurSitesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              100% Gratuit — Resultats en 60 secondes
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Comparez{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Votre Site
              </span>
            </h1>

            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Votre site web est-il meilleur que celui de votre concurrent ?{" "}
              <strong className="text-white/70">Comparez-les sur 8 categories</strong> et recevez un rapport PDF gratuit.
            </p>
          </div>

          {/* Form */}
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
              <ComparateurForm />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ce que contient le comparatif
            </h2>
            <p className="text-white/40 text-center mb-12 text-sm">
              Une analyse detaillee de chaque site sur les criteres qui comptent vraiment.
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
                { step: "1", title: "Entrez les 2 URLs", desc: "Votre site et celui de votre concurrent." },
                { step: "2", title: "On compare tout", desc: "8 categories analysees en parallele." },
                { step: "3", title: "Recevez le PDF", desc: "Rapport comparatif envoye a votre email." },
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

        {/* Trust */}
        <section className="py-16 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/30 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span>4.9/5 — 47 avis</span>
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
