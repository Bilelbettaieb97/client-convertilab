import type { Metadata } from "next";
import Link from "next/link";
import DesignScoreForm from "@/components/design-score/DesignScoreForm";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Audit Design & UX Gratuit — Notez le Design de votre Site Web",
  keywords:
    "audit design site web, score design site, audit ux gratuit, améliorer design site internet, site web moderne, refonte design site, test design site web",
  description:
    "Évaluez gratuitement le design et l'UX de votre site web. CTA, hiérarchie visuelle, signaux de confiance, compatibilité mobile. Rapport PDF complet envoyé par email.",
  openGraph: {
    title: "Audit Design & UX Gratuit — Score sur 100, Rapport PDF | ConvertiLab",
    description:
      "6 catégories UX analysées, rapport PDF complet et gratuit envoyé par email.",
    url: `${SITE.url}/design-score`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
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


const faqItems = [
  { question: "L'audit design est-il vraiment gratuit ?",
    answer: "Oui, entièrement gratuit et sans engagement. Vous entrez l'URL de votre site et votre email, et vous recevez un score design sur 100 avec le détail des points analysés (lisibilité, confiance, mobile) et les corrections prioritaires, en PDF dans votre boîte mail." },
  { question: "Pourquoi le design de mon site influence-t-il mes ventes ?",
    answer: "Les visiteurs jugent la crédibilité d'un site en 50 millisecondes — avant même de lire une ligne. 75% des internautes évaluent le sérieux d'une entreprise sur le design de son site. Un design daté ou brouillon fait fuir des clients qui ne vous diront jamais pourquoi ils sont partis." },
  { question: "Que vérifie exactement l'audit design ?",
    answer: "Trois familles de critères : la lisibilité (hiérarchie visuelle, typographie, contrastes, espacement), les signaux de confiance (cohérence graphique, professionnalisme perçu, éléments de réassurance) et l'expérience mobile (affichage responsive, zones tactiles, navigation au pouce)." },
  { question: "Quelles sont les erreurs de design les plus courantes ?",
    answer: "Les plus fréquentes : trop d'informations sans hiérarchie (le visiteur ne sait pas où regarder), des textes peu lisibles (petite taille, faible contraste), un design non adapté au mobile, des appels à l'action invisibles, et un style visuel daté qui décrédibilise l'entreprise. Notre rapport identifie celles qui concernent votre site." },
  { question: "Mon site est vieux de quelques années, dois-je le refondre ?",
    answer: "Pas systématiquement. Si la structure est saine, des retouches ciblées (typographie, couleurs, espacement, CTA) suffisent parfois. Mais si le site n'est pas responsive, lent, ou visuellement dépassé, une refonte complète est généralement plus rentable — nos refontes démarrent à 400€ et conservent votre référencement." },
  { question: "Le design influence-t-il aussi mon référencement Google ?",
    answer: "Indirectement mais fortement. Un design confus augmente le taux de rebond et réduit le temps passé sur le site — des signaux que Google interprète négativement. L'expérience mobile, elle, est un critère direct de classement. Design, vitesse et SEO forment un tout : testez les trois." },
  { question: "Que faire après avoir reçu mon score design ?",
    answer: "Commencez par les corrections prioritaires du rapport. Si vous êtes à l'aise, beaucoup sont réalisables vous-même (contrastes, tailles de texte). Pour une transformation en profondeur, nos designers peuvent retravailler votre interface — jetez un œil à nos réalisations pour voir le niveau de finition." },
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


        {/* Contenu SEO — pourquoi le design compte */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Pourquoi auditer le design de votre site web ?
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Vos visiteurs jugent votre entreprise en{" "}
                <strong className="text-white/80">50 millisecondes</strong> — le temps
                de percevoir votre design, avant même de lire un mot. 75% des
                internautes évaluent la crédibilité d&apos;une entreprise sur
                l&apos;apparence de son site : un design daté, surchargé ou peu lisible
                fait fuir des clients qui ne vous diront jamais pourquoi.
              </p>
              <p>
                Notre <strong className="text-white/80">audit design gratuit</strong>{" "}
                note votre site sur 100 en analysant trois dimensions : la lisibilité
                (hiérarchie, typographie, contrastes), les signaux de confiance et
                l&apos;expérience mobile. Le rapport PDF vous donne les corrections
                classées par priorité — certaines se règlent en une heure.
              </p>
              <p>
                Pour aller plus loin, lisez notre guide de{" "}
                <Link href="/blog/audit-design-ux-site-web" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                  l&apos;audit design et UX
                </Link>{" "}
                ou découvrez les{" "}
                <Link href="/blog/design-web-tendances-2026" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                  tendances design 2026
                </Link>
                . Si votre site a besoin d&apos;une transformation en profondeur, nos
                designers s&apos;en chargent :{" "}
                <Link href="/services/design/ui-ux" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                  design UI/UX professionnel
                </Link>{" "}
                ou{" "}
                <Link href="/services/sites-web/refonte-site" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                  refonte complète
                </Link>
                . Et complétez le diagnostic avec le{" "}
                <Link href="/speed-check" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                  test de vitesse
                </Link>{" "}
                et l&apos;
                <Link href="/seo-check" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                  audit SEO
                </Link>
                , gratuits eux aussi.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Questions fréquentes sur l&apos;audit design
            </h2>
            <p className="text-white/40 text-center mb-12">
              Score, critères analysés, refonte : ce qu&apos;il faut savoir
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
