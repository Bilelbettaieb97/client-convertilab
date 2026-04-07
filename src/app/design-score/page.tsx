import type { Metadata } from "next";
import DesignScoreForm from "@/components/design-score/DesignScoreForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Audit Design & UX Gratuit — Evaluez l'experience utilisateur de votre site | ConvertiLab",
  description:
    "Evaluez gratuitement le design et l'UX de votre site web. CTA, hierarchie visuelle, signaux de confiance, compatibilite mobile. Rapport PDF complet envoye par email.",
  openGraph: {
    title: "Audit Design & UX Gratuit — Evaluez l'experience utilisateur de votre site",
    description:
      "6 categories UX analysees, rapport PDF complet et gratuit envoye par email.",
    url: `${SITE.url}/design-score`,
    siteName: SITE.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit Design & UX Gratuit — ConvertiLab",
    description: "Evaluez le design et l'UX de votre site web. Rapport PDF complet et gratuit.",
  },
  alternates: {
    canonical: `${SITE.url}/design-score`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Audit Design & UX Gratuit — ConvertiLab",
  description: "Outil gratuit pour evaluer le design et l'experience utilisateur de votre site web avec rapport PDF detaille.",
  url: `${SITE.url}/design-score`,
  applicationCategory: "UX Tool",
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
    icon: "\uD83C\uDFAF",
    title: "CTA & Conversion",
    desc: "Detection des boutons d'action, formulaires et signaux d'urgence.",
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Hierarchie Visuelle",
    desc: "Analyse de la structure des titres H1-H4 et de l'ordre logique.",
  },
  {
    icon: "\u2B50",
    title: "Signaux de Confiance",
    desc: "Temoignages, avis clients, certifications et mentions legales.",
  },
  {
    icon: "\uD83D\uDCF1",
    title: "Compatibilite Mobile",
    desc: "Viewport, framework responsive et adaptabilite mobile.",
  },
  {
    icon: "\uD83D\uDDBC\uFE0F",
    title: "Images & Medias",
    desc: "Alt text, format WebP, lazy loading et optimisation.",
  },
  {
    icon: "\uD83E\uDDED",
    title: "Navigation & UX",
    desc: "Barre de navigation, footer, breadcrumbs et accessibilite.",
  },
];

export default function DesignScorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0a0a1a]">
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,92,231,0.15),transparent_60%)]" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 text-sm text-purple-300 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              100% Gratuit — Sans engagement
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Audit Design & UX{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Gratuit
              </span>
            </h1>

            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Evaluez l&apos;experience utilisateur de votre site en 60 secondes. Recevez un rapport PDF avec{" "}
              <strong className="text-white/70">6 categories UX analysees</strong> et un plan d&apos;action priorise.
            </p>
          </div>

          {/* Form */}
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
              <DesignScoreForm />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ce que contient votre audit UX
            </h2>
            <p className="text-white/40 text-center mb-12 text-sm">
              Une evaluation complete du design et de l&apos;experience utilisateur de votre site.
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
                { step: "2", title: "On analyse le design", desc: "Notre outil evalue 6 categories UX cles." },
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
                <span className="text-yellow-400">{"\u2605\u2605\u2605\u2605\u2605"}</span>
                <span>4.9/5 — 47 avis</span>
              </div>
              <div>+150 sites crees</div>
              <div>+50 clients actifs</div>
              <div>Certifie Google</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
