import type { Metadata } from "next";
import AdsEstimatorForm from "@/components/estimateur-ads/AdsEstimatorForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Simulateur ROI Google Ads & Meta Ads Gratuit | ConvertiLab",
  description:
    "Estimez gratuitement le retour sur investissement de vos campagnes Google Ads et Meta Ads. Projection 12 mois, calcul ROAS et rapport PDF complet.",
  keywords:
    "simulateur ROI ads, calculateur Google Ads, estimation Meta Ads, ROAS publicite, retour sur investissement ads",
  openGraph: {
    title: "Simulateur ROI Google Ads & Meta Ads Gratuit",
    description:
      "Combien de clients et de CA pouvez-vous generer avec la publicite en ligne ? Estimation gratuite avec rapport PDF.",
    url: `${SITE.url}/estimateur-ads`,
    siteName: SITE.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulateur ROI Ads Gratuit — ConvertiLab",
    description: "Estimez votre ROI Google Ads et Meta Ads en 60 secondes. Rapport PDF complet et gratuit.",
  },
  alternates: {
    canonical: `${SITE.url}/estimateur-ads`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Simulateur ROI Ads Gratuit — ConvertiLab",
  description:
    "Outil gratuit d'estimation du retour sur investissement pour Google Ads et Meta Ads avec projections sur 12 mois.",
  url: `${SITE.url}/estimateur-ads`,
  applicationCategory: "Marketing Tool",
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
    title: "Estimation personnalisee",
    desc: "Projections basees sur les benchmarks de votre secteur d'activite en France.",
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Donnees sectorielles",
    desc: "CPC, CTR et taux de conversion reels pour 25+ secteurs d'activite.",
  },
  {
    icon: "\uD83D\uDCC5",
    title: "Projection 12 mois",
    desc: "Evolution mensuelle avec courbe d'apprentissage des algorithmes publicitaires.",
  },
  {
    icon: "\uD83D\uDCC4",
    title: "Rapport PDF complet",
    desc: "4 pages detaillees avec tableaux, projections et plan d'action.",
  },
  {
    icon: "\uD83D\uDCB0",
    title: "Calcul ROAS",
    desc: "Retour sur investissement publicitaire estime pour Google et Meta Ads.",
  },
  {
    icon: "\u26A1",
    title: "100% Gratuit",
    desc: "Aucun engagement. Resultats instantanes envoyes par email.",
  },
];

export default function EstimateurAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0a0a1a]">
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
              Estimez votre{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ROI Ads
              </span>
            </h1>

            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Combien de clients et de CA pouvez-vous generer avec la{" "}
              <strong className="text-white/70">publicite en ligne</strong> ? Estimez votre retour sur investissement Google Ads et Meta Ads.
            </p>
          </div>

          {/* Form */}
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
              <AdsEstimatorForm />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ce que contient votre estimation
            </h2>
            <p className="text-white/40 text-center mb-12 text-sm">
              Un rapport professionnel complet pour estimer la rentabilite de vos campagnes publicitaires.
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
            <div className="grid grid-cols-4 gap-6">
              {[
                { step: "1", title: "Votre secteur", desc: "Selectionnez votre activite et plateforme." },
                { step: "2", title: "Votre budget", desc: "Indiquez votre budget et panier moyen." },
                { step: "3", title: "Vos coordonnees", desc: "Pour recevoir le rapport par email." },
                { step: "4", title: "Vos projections", desc: "Resultats instantanes + PDF complet." },
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
              <div>Certifie Google Ads</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
