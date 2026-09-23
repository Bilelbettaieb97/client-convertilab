import type { Metadata } from "next";
import MentionsLegalesForm from "@/components/mentions-legales/MentionsLegalesForm";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Générateur de Mentions Légales Gratuit : Conforme RGPD",
  description:
    "Créez vos mentions légales conformes LCEN + RGPD en 2 minutes. Document PDF personnalisé, prêt à copier-coller sur votre site. 100 % gratuit.",
  openGraph: {
    title: "Générateur de Mentions Légales Gratuit : Conforme RGPD | ConvertiLab",
    description:
      "Créez vos mentions légales conformes LCEN + RGPD en 2 minutes. Document PDF personnalisé et gratuit.",
    url: `${SITE.url}/generateur-mentions-legales`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
    siteName: SITE.name,
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Générateur de Mentions Légales Gratuit | ConvertiLab",
    description: "Créez vos mentions légales conformes LCEN + RGPD en 2 minutes. 100 % gratuit.",
  },
  alternates: {
    canonical: `${SITE.url}/generateur-mentions-legales`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Générateur de Mentions Légales Gratuit : ConvertiLab",
  description: "Outil gratuit de génération de mentions légales conformes LCEN et RGPD.",
  url: `${SITE.url}/generateur-mentions-legales`,
  applicationCategory: "Legal Tool",
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
    icon: "⚖️",
    title: "Conforme LCEN",
    desc: "Respect de la loi pour la confiance dans l'economie numerique.",
  },
  {
    icon: "🛡️",
    title: "Conforme RGPD",
    desc: "Section protection des données personnelles incluse.",
  },
  {
    icon: "🍪",
    title: "Politique Cookies",
    desc: "Section cookies personnalisée selon vos usages.",
  },
  {
    icon: "📄",
    title: "PDF Telechargeable",
    desc: "Document professionnel envoyé par email en PDF.",
  },
  {
    icon: "💰",
    title: "100 % gratuit",
    desc: "Aucun frais, aucune inscription requise.",
  },
  {
    icon: "✨",
    title: "Personnalise",
    desc: "Adapte a votre forme juridique et vos besoins.",
  },
];

export default function GenerateurMentionsLegalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navigation />
      <main className="min-h-screen bg-[#0a0a1a] pt-16">
        {/* Hero */}
        <section className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden px-4 py-3 md:block md:min-h-0 md:pt-32 md:pb-16">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,92,231,0.15),transparent_60%)]" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto text-center mb-4 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-3.5 py-1 text-[0.8rem] text-purple-300 mb-2 md:px-4 md:py-1.5 md:text-sm md:mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              100 % gratuit, conforme LCEN + RGPD
            </div>

            <h1 className="text-[1.6rem] leading-[1.15] md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4">
              Générateur de{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mentions Légales
              </span>
            </h1>

            <p className="hidden md:block text-lg text-white/50 max-w-xl mx-auto">
              Créez vos mentions légales conformes{" "}
              <strong className="text-white/70">LCEN + RGPD</strong> en 2 minutes.
              Document PDF personnalisé, prêt a copier-coller sur votre site.
            </p>
          </div>

          {/* Form */}
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-10">
              <MentionsLegalesForm />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Ce que contient votre document
            </h2>
            <p className="text-white/40 text-center mb-12 text-sm">
              Un document legal complet, conforme et personnalisé pour votre entreprise.
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
                { step: "1", title: "Remplissez le formulaire", desc: "Indiquez les informations de votre entreprise." },
                { step: "2", title: "On généré tout", desc: "Mentions légales conformes en quelques secondes." },
                { step: "3", title: "Recevez le PDF", desc: "Document complet envoyé a votre email." },
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
                <span>4,5/5 sur 14 avis</span>
              </div>
              <div>150+ clients accompagnés</div>
              <div>Rueil-Malmaison (92)</div>
              <div>Certifie Google</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
