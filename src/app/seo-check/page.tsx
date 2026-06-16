import type { Metadata } from "next";
import SeoCheckForm from "@/components/seo-check/SeoCheckForm";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Audit SEO Gratuit — Analysez votre site en 60 secondes",
  description:
    "Recevez un audit SEO complet et gratuit de votre site web en PDF. 60+ points de contrôle, analyse IA (GEO), score détaillé et plan d'action. Résultats en 60 secondes.",
  openGraph: {
    title: "Audit SEO Gratuit — Analysez votre site en 60 secondes | ConvertiLab",
    description:
      "60+ points de contrôle SEO, analyse IA, rapport PDF complet envoyé par email. 100% gratuit.",
    url: `${SITE.url}/seo-check`,
    siteName: SITE.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit SEO Gratuit — ConvertiLab",
    description: "Analysez votre site web en 60 secondes. Rapport PDF complet et gratuit.",
  },
  alternates: {
    canonical: `${SITE.url}/seo-check`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SEO Check Gratuit — ConvertiLab",
  description: "Outil d'audit SEO gratuit avec analyse de 60+ points de controle et rapport PDF.",
  url: `${SITE.url}/seo-check`,
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
    icon: "🔍",
    title: "60+ Points de Controle",
    desc: "SEO technique, on-page, schema, mobile, contenu, performance, securite.",
  },
  {
    icon: "🤖",
    title: "Analyse IA (GEO)",
    desc: "Visibilite sur ChatGPT, Perplexity, Gemini, Claude et Google AI.",
  },
  {
    icon: "📊",
    title: "Score Detaille",
    desc: "8 categories notees sur 100 avec grade global de A+ a F.",
  },
  {
    icon: "📋",
    title: "Plan d'Action",
    desc: "Actions priorisees : critiques, importantes et recommandees.",
  },
  {
    icon: "📄",
    title: "Rapport PDF",
    desc: "Rapport complet envoye par email en piece jointe.",
  },
  {
    icon: "⚡",
    title: "60 Secondes",
    desc: "Resultats instantanes. Pas besoin d'attendre.",
  },
];

export default function SeoCheckPage() {
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
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,92,231,0.15),transparent_60%)]" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 text-sm text-purple-300 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              100% Gratuit — Sans engagement
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Audit SEO{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Gratuit
              </span>
            </h1>

            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Analysez votre site en 60 secondes. Recevez un rapport PDF complet avec{" "}
              <strong className="text-white/70">60+ points de controle</strong>, analyse IA et plan d&apos;action priorise.
            </p>
          </div>

          {/* Form */}
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
              <SeoCheckForm />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ce que contient votre audit
            </h2>
            <p className="text-white/40 text-center mb-12 text-sm">
              Un rapport professionnel complet, accessible aux debutants comme aux experts.
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
                { step: "2", title: "On analyse tout", desc: "Notre IA verifie 60+ points en 60 secondes." },
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

        {/* Trust */}
        <section className="py-16 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/30 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">★★★★★</span>
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
