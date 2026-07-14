import type { Metadata } from "next";
import Link from "next/link";
import SeoCheckForm from "@/components/seo-check/SeoCheckForm";
import { SITE } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Audit SEO Gratuit en Ligne : Analyse SEO de votre Site en 60s",
  description:
    "Outil d'audit SEO gratuit en ligne : analyse SEO complète de votre site web (60+ points de contrôle), score détaillé, analyse IA (GEO) et rapport SEO gratuit en PDF. Résultats en 60 secondes, sans engagement.",
  keywords:
    "audit seo gratuit, analyse seo, audit seo en ligne, audit seo gratuit en ligne, rapport seo gratuit, analyse seo gratuite, diagnostic seo, outil audit seo, test seo, audit seo site web, analyse seo en ligne",
  openGraph: {
    title: "Audit SEO Gratuit en Ligne : Analyse SEO en 60 secondes | ConvertiLab",
    description:
      "60+ points de contrôle SEO, analyse IA, rapport PDF complet envoyé par email. 100% gratuit.",
    url: `${SITE.url}/seo-check`,
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
    siteName: SITE.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit SEO Gratuit | ConvertiLab",
    description: "Analysez votre site web en 60 secondes. Rapport PDF complet et gratuit.",
  },
  alternates: {
    canonical: `${SITE.url}/seo-check`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Audit SEO Gratuit en Ligne | ConvertiLab",
  description: "Outil d'audit SEO gratuit avec analyse de 60+ points de contrôle et rapport PDF.",
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

const faqItems = [
  {
    question: "L'audit SEO est-il vraiment gratuit ?",
    answer:
      "Oui, l'audit SEO est 100% gratuit et sans engagement. Vous entrez l'URL de votre site, votre email, et vous recevez le rapport complet en PDF. Aucune carte bancaire n'est demandée, aucun abonnement caché. Nous proposons cet outil gratuitement car certains utilisateurs choisissent ensuite de nous confier la correction des problèmes détectés, mais rien ne vous y oblige.",
  },
  {
    question: "Qu'est-ce qu'un audit SEO exactement ?",
    answer:
      "Un audit SEO est un diagnostic complet de votre site web qui évalue sa capacité à être bien positionné sur Google. Il analyse la technique (vitesse, mobile, sécurité, indexation), le contenu (balises, mots-clés, structure) et la visibilité (données structurées, référencement local). Le résultat : une liste priorisée des problèmes qui freinent votre classement, et des actions concrètes pour les corriger.",
  },
  {
    question: "Combien de temps prend l'analyse SEO de mon site ?",
    answer:
      "Environ 60 secondes. Notre outil analyse votre page en temps réel : exploration du code, vérification des 60+ points de contrôle, calcul des scores par catégorie et génération du rapport PDF. Vous recevez le rapport par email immédiatement après l'analyse.",
  },
  {
    question: "Que contient le rapport SEO gratuit en PDF ?",
    answer:
      "Le rapport contient : un score global sur 100 avec un grade de A+ à F, 8 scores par catégorie (technique, on-page, données structurées, mobile, contenu, GEO, performance, sécurité), la liste détaillée des problèmes détectés classés par priorité (critiques, importants, recommandés), et un plan d'action concret pour améliorer votre référencement.",
  },
  {
    question: "Quelle est la différence entre une analyse SEO et un audit SEO ?",
    answer:
      "Dans la pratique, les deux termes désignent la même chose : un examen des facteurs qui influencent votre positionnement sur Google. « Analyse SEO » désigne parfois un examen plus rapide et « audit SEO » un diagnostic plus complet. Notre outil fait les deux : une analyse instantanée en ligne, restituée sous forme d'un audit complet en PDF.",
  },
  {
    question: "Qu'est-ce que l'analyse GEO (visibilité IA) ?",
    answer:
      "Le GEO (Generative Engine Optimization) mesure la capacité de votre site à être cité par les intelligences artificielles comme ChatGPT, Perplexity, Gemini ou Google AI Overviews. De plus en plus de clients cherchent des prestataires via ces outils : notre audit vérifie si votre site est lisible et compréhensible par ces IA, un critère que la plupart des outils d'audit SEO classiques ignorent encore.",
  },
  {
    question: "À quelle fréquence faut-il faire un audit SEO de son site ?",
    answer:
      "Nous recommandons un audit tous les 3 à 6 mois, et systématiquement après une refonte, un changement d'hébergement ou une chute de trafic. Google fait évoluer ses critères en permanence : un site bien noté il y a un an peut avoir accumulé des problèmes depuis (liens cassés, lenteur, contenu obsolète).",
  },
  {
    question: "Que faire après avoir reçu mon rapport d'audit SEO ?",
    answer:
      "Commencez par les problèmes critiques : ce sont eux qui pénalisent le plus votre classement. Beaucoup de corrections sont à votre portée (balises title, textes alternatifs des images, contenu). Pour les problèmes techniques (vitesse, données structurées, indexation), vous pouvez les corriger vous-même si vous êtes à l'aise, ou nous confier la correction, nous proposons un audit SEO professionnel approfondi avec mise en œuvre des corrections.",
  },
  {
    question: "L'outil fonctionne-t-il sur tous les sites ?",
    answer:
      "Oui, l'outil analyse tout site accessible publiquement : WordPress, Shopify, Wix, Squarespace, site sur-mesure, e-commerce ou vitrine. Peu importe la technologie utilisée, les critères SEO évalués sont les mêmes que ceux de Google.",
  },
  {
    question: "Mes données sont-elles conservées ou revendues ?",
    answer:
      "Non. Votre email sert uniquement à vous envoyer le rapport PDF et, si vous ne vous y opposez pas, quelques conseils SEO complémentaires dont vous pouvez vous désinscrire en un clic. Vos données ne sont jamais revendues à des tiers, conformément au RGPD.",
  },
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

const auditCategories = [
  {
    title: "SEO technique",
    desc: "Indexabilité, robots.txt, sitemap, balises canoniques, redirections, erreurs d'exploration : tout ce qui permet à Google de lire correctement votre site.",
  },
  {
    title: "SEO on-page",
    desc: "Balises title et meta description, structure des titres H1-H6, densité des mots-clés, maillage interne, attributs alt des images.",
  },
  {
    title: "Données structurées",
    desc: "Présence et validité des schemas (LocalBusiness, FAQ, avis, fil d'Ariane) qui permettent d'obtenir des résultats enrichis sur Google.",
  },
  {
    title: "Compatibilité mobile",
    desc: "Affichage responsive, taille des zones tactiles, lisibilité des textes : Google indexe d'abord la version mobile de votre site.",
  },
  {
    title: "Qualité du contenu",
    desc: "Volume et originalité du texte, structure sémantique, fraîcheur du contenu, les critères E-E-A-T que Google valorise.",
  },
  {
    title: "GEO : Visibilité IA",
    desc: "Capacité de votre site à être compris et cité par ChatGPT, Perplexity, Gemini et Google AI Overviews. Le référencement de demain.",
  },
  {
    title: "Performance",
    desc: "Vitesse de chargement, Core Web Vitals (LCP, CLS, INP), poids des images : un site lent perd des positions et des visiteurs.",
  },
  {
    title: "Sécurité",
    desc: "Certificat HTTPS, en-têtes de sécurité, absence de contenu mixte : des prérequis pour la confiance de Google et de vos visiteurs.",
  },
];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              100% Gratuit, sans engagement
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Audit SEO{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Gratuit
              </span>{" "}
              en Ligne
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

        {/* ============================================
            CONTENU SEO : Qu'est-ce qu'un audit SEO
            ============================================ */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Qu&apos;est-ce qu&apos;un audit SEO ?
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Un <strong className="text-white/80">audit SEO</strong> est un diagnostic complet
                de votre site web qui mesure sa capacité à être trouvé sur Google. Concrètement,
                il répond à trois questions : Google peut-il lire correctement votre site ? Votre
                contenu répond-il aux recherches de vos clients ? Votre site inspire-t-il
                suffisamment confiance (vitesse, sécurité, mobile) pour être bien classé ?
              </p>
              <p>
                93% des expériences en ligne commencent par un moteur de recherche, et 75% des
                internautes ne dépassent jamais la première page de résultats. Si votre site a des
                problèmes techniques ou de contenu invisibles à l&apos;œil nu, vous perdez chaque
                jour des clients au profit de concurrents mieux optimisés. L&apos;
                <strong className="text-white/80">analyse SEO</strong> révèle précisément ces
                problèmes, et par quoi commencer pour les corriger.
              </p>
              <p>
                Notre outil d&apos;<strong className="text-white/80">audit SEO en ligne</strong>{" "}
                automatise ce diagnostic : là où un audit manuel prend plusieurs heures, vous
                obtenez en 60 secondes un rapport professionnel fondé sur les mêmes critères que
                ceux utilisés par Google.
              </p>
            </div>
          </div>
        </section>

        {/* Les 8 catégories analysées */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Que vérifie notre outil d&apos;audit SEO en ligne ?
            </h2>
            <p className="text-white/40 text-center mb-12 max-w-2xl mx-auto">
              L&apos;analyse couvre 8 catégories et plus de 60 points de contrôle, chaque
              catégorie reçoit un score sur 100 dans votre rapport.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {auditCategories.map((cat, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-white font-semibold mb-2">{cat.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comment lire le score */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Comment lire votre score SEO ?
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Votre rapport attribue un <strong className="text-white/80">score global sur
                100</strong>, traduit en grade de A+ à F. Un score de 90+ (A) signifie que votre
                site est techniquement solide, la marge de progression se situe alors dans le
                contenu et la notoriété. Entre 70 et 89 (B-C), des optimisations ciblées peuvent
                débloquer des positions rapidement. En dessous de 70 (D-F), des problèmes
                structurels freinent activement votre visibilité : c&apos;est souvent là que se
                cachent les gains les plus spectaculaires.
              </p>
              <p>
                Chaque problème détecté est classé par priorité :{" "}
                <strong className="text-white/80">critique</strong> (pénalise directement votre
                classement), <strong className="text-white/80">important</strong> (limite votre
                potentiel) ou <strong className="text-white/80">recommandé</strong>{" "}
                (optimisation de finition). Traitez-les dans cet ordre : corriger 3 problèmes
                critiques a plus d&apos;impact que 20 recommandations mineures.
              </p>
            </div>
          </div>
        </section>

        {/* Outil vs agence */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Audit SEO automatique ou audit d&apos;agence : que choisir ?
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Notre <strong className="text-white/80">audit SEO gratuit</strong> détecte les
                problèmes mesurables : technique, balises, vitesse, mobile, données structurées.
                C&apos;est le point de départ idéal pour savoir où vous en êtes, et pour beaucoup
                de sites, corriger ces points suffit à gagner des positions.
              </p>
              <p>
                Un{" "}
                <Link
                  href="/services/seo/audit"
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
                >
                  audit SEO professionnel
                </Link>{" "}
                va plus loin : analyse de la concurrence, stratégie de mots-clés, plan de contenu
                et mise en œuvre des corrections. Si votre rapport révèle un score faible ou si
                vous visez des requêtes concurrentielles, nos experts peuvent prendre le relais.
                Découvrez aussi notre accompagnement en{" "}
                <Link
                  href="/services/seo/referencement"
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
                >
                  référencement naturel
                </Link>
                . Et pour une vision complète, complétez avec notre{" "}
                <Link
                  href="/speed-check"
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
                >
                  test de vitesse
                </Link>{" "}
                et notre{" "}
                <Link
                  href="/design-score"
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
                >
                  score design
                </Link>{" "}
                gratuits.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Questions fréquentes sur l&apos;audit SEO gratuit
            </h2>
            <p className="text-white/40 text-center mb-12">
              Tout ce que vous devez savoir avant de lancer votre analyse SEO
            </p>
            <div className="space-y-3">
              {faqItems.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 text-left font-semibold text-white/90 hover:text-purple-300 transition-colors [&::-webkit-details-marker]:hidden">
                    <span className="pr-4 text-sm md:text-base">{faq.question}</span>
                    <span className="text-purple-400 group-open:rotate-45 transition-transform duration-200 text-xl flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-white/50 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Ressources SEO, maillage vers le cluster */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Aller plus loin en SEO
            </h2>
            <p className="text-white/40 text-center mb-10">
              Nos guides gratuits pour comprendre et améliorer votre référencement
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Guide complet : améliorer son SEO", href: "/guide/ameliorer-seo" },
                { label: "Le SEO expliqué aux débutants", href: "/blog/guide-seo-debutant-2026" },
                { label: "Comment apparaître premier sur Google", href: "/blog/comment-apparaitre-premier-google" },
                { label: "SEO local : le guide complet", href: "/blog/seo-local-guide-complet" },
                { label: "Les étapes d'un audit SEO réussi", href: "/blog/audit-seo-site-web-etapes" },
                { label: "Optimiser ses balises meta", href: "/blog/balises-meta-optimiser-seo" },
                { label: "Accélérer son indexation Google", href: "/blog/indexation-google-accelerer" },
                { label: "Les erreurs SEO à éviter", href: "/blog/erreurs-seo-courantes-eviter" },
                { label: "Backlinks et netlinking en 2026", href: "/blog/backlinks-strategie-netlinking-2026" },
                { label: "SEO ou Google Ads : que choisir ?", href: "/comparatifs/seo-vs-google-ads" },
              ].map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-white/70 hover:text-purple-300 hover:border-purple-500/30 transition-colors"
                >
                  <span>{r.label}</span>
                  <span className="text-purple-400">→</span>
                </Link>
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
