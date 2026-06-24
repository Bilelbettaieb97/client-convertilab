import type { Metadata } from "next";
import SectorReportForm from "@/components/rapport-sectoriel/SectorReportForm";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Rapport Digital par Secteur — Guide Gratuit | ConvertiLab",
  description:
    "Recevez un rapport digital complet et gratuit pour votre secteur d'activite. Diagnostic, checklist, etudes de cas et plan d'action en PDF. 50+ secteurs disponibles.",
  openGraph: {
    title: "Rapport Digital par Secteur — Guide Gratuit",
    description:
      "50+ secteurs. Diagnostic marche, checklist digitale, etudes de cas et solutions concretes. Rapport PDF gratuit.",
    url: `${SITE.url}/rapport-sectoriel`,
    siteName: SITE.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapport Digital par Secteur — ConvertiLab",
    description: "Decouvrez les opportunites digitales de votre secteur. Rapport PDF gratuit.",
  },
  alternates: {
    canonical: `${SITE.url}/rapport-sectoriel`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Rapport Digital par Secteur — ConvertiLab",
  description: "Outil gratuit de diagnostic digital par secteur d'activite avec rapport PDF complet.",
  url: `${SITE.url}/rapport-sectoriel`,
  applicationCategory: "Business Tool",
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
    icon: "\ud83c\udfe2",
    title: "50+ Secteurs",
    desc: "Restauration, sante, artisanat, commerce, services... Trouvez votre secteur.",
  },
  {
    icon: "\ud83d\udcca",
    title: "Diagnostic Marche",
    desc: "Problemes frequents, erreurs courantes et chiffres cles de votre industrie.",
  },
  {
    icon: "\u2705",
    title: "Checklist Digitale",
    desc: "Liste complete des essentiels pour votre presence en ligne.",
  },
  {
    icon: "\ud83d\udcd6",
    title: "Etudes de Cas",
    desc: "Exemples concrets de resultats obtenus dans votre secteur.",
  },
  {
    icon: "\ud83d\udca1",
    title: "Solutions Concretes",
    desc: "Recommandations adaptees et fonctionnalites essentielles.",
  },
  {
    icon: "\ud83d\udcc4",
    title: "Rapport PDF",
    desc: "6 pages completes envoyees par email en piece jointe.",
  },
];

export default function RapportSectorielPage() {
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
              100% Gratuit, 50+ secteurs
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Rapport Digital{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Gratuit
              </span>
            </h1>

            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Decouvrez les opportunites digitales de votre{" "}
              <strong className="text-white/70">secteur d&apos;activite</strong>. Diagnostic, checklist et plan d&apos;action en PDF.
            </p>
          </div>

          {/* Form */}
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
              <SectorReportForm />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ce que contient votre rapport
            </h2>
            <p className="text-white/40 text-center mb-12 text-sm">
              Un rapport professionnel de 6 pages adapte a votre secteur d&apos;activite.
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
                { step: "1", title: "Choisissez votre secteur", desc: "Selectionnez votre activite parmi 50+ secteurs." },
                { step: "2", title: "On compile les donnees", desc: "Diagnostic, checklist, etudes de cas et plan d'action." },
                { step: "3", title: "Recevez le PDF", desc: "Rapport de 6 pages envoye a votre email." },
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
