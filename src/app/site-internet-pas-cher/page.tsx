import type { Metadata } from "next";
import Link from "next/link";
import { SITE, PRICING } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Shield,
  Clock,
  BadgeCheck,
  Calculator,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Site Internet Pas Cher : Site Web Professionnel dès 490€",
  description:
    "Un site web pas cher ne veut pas dire un site au rabais : site internet professionnel dès 490€ ou 39€/mois, livré en 2 semaines, SEO inclus, satisfait ou remboursé. Comparez avant de choisir.",
  keywords:
    "site internet pas cher, site web pas cher, site pas cher, création site internet pas cher, site web professionnel pas cher, site internet petit prix, site web petit budget",
  alternates: { canonical: `${SITE.url}/site-internet-pas-cher` },
  openGraph: {
    title: "Site Internet Pas Cher : Site Web Professionnel dès 490€ | ConvertiLab",
    description:
      "Site internet professionnel dès 490€ ou 39€/mois, livré en 2 semaines, SEO inclus, satisfait ou remboursé.",
    url: `${SITE.url}/site-internet-pas-cher`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
};

const faqItems = [
  {
    question: "Un site internet pas cher peut-il vraiment être professionnel ?",
    answer:
      "Oui, à condition de savoir d'où vient l'économie. Chez ConvertiLab, le prix bas vient d'un process optimisé (maquettes validées avant développement, technologies modernes sans licences) et non d'une baisse de qualité : chaque site est sur-mesure, responsive, optimisé SEO et livré avec un score Google PageSpeed 90+. Ce qu'il faut fuir, ce sont les sites à 100€ faits à la chaîne sur des templates, sans SEO ni propriété du code.",
  },
  {
    question: "Combien coûte réellement un site internet pas cher ?",
    answer:
      "Chez ConvertiLab : landing page à 490€, site vitrine 5 pages à 890€, site e-commerce dès 1490€. En paiement mensuel, votre site démarre à 39€/mois sans apport. Ces prix incluent le design sur-mesure, le développement, l'optimisation SEO de base et 30 jours de support. Seuls restent à votre charge le nom de domaine (~12€/an) et l'hébergement.",
  },
  {
    question: "Quelle est la différence avec un site gratuit (Wix, site builder) ?",
    answer:
      "Un site \"gratuit\" se paie autrement : publicités imposées, sous-domaine peu crédible (monsite.wixsite.com), référencement limité, et vous ne possédez rien. Dès que vous voulez un nom de domaine, retirer la pub et débloquer les fonctions de base, l'abonnement dépasse 200-300€/an — à vie. Un site professionnel pas cher à 490€ vous appartient à 100% (code et domaine) et est conçu pour être trouvé sur Google.",
  },
  {
    question: "Pourquoi certains sites pas chers sont-ils des pièges ?",
    answer:
      "Trois pièges classiques : la location déguisée (vous payez chaque mois mais ne possédez jamais votre site), les frais cachés (maintenance obligatoire, modifications facturées au prix fort), et l'absence de SEO (un site invisible sur Google ne sert à rien, même gratuit). Avant de signer, demandez toujours : suis-je propriétaire du code et du domaine ? Le SEO est-il inclus ? Le prix annoncé est-il définitif ?",
  },
  {
    question: "Que comprend exactement le site vitrine à 890€ ?",
    answer:
      "Le site vitrine à 890€ comprend : 5 pages sur-mesure (accueil, services, à propos, contact...), design responsive adapté mobile, formulaire de contact, optimisation SEO de base (balises, vitesse, indexation), intégration Google Maps, certificat SSL et 30 jours de support après livraison. Livraison en 2 semaines, satisfait ou remboursé.",
  },
  {
    question: "Le paiement mensuel à 39€/mois, comment ça marche ?",
    answer:
      "Au lieu de payer votre site en une fois, vous étalez le coût à partir de 39€/mois. C'est la solution idéale pour lancer votre activité sans immobiliser de trésorerie : votre site est en ligne en 2 semaines et vous lissez l'investissement. Le détail complet est sur notre page offre mensuelle.",
  },
  {
    question: "Un site pas cher sera-t-il bien référencé sur Google ?",
    answer:
      "Nos sites sont développés avec Next.js, une technologie ultra-rapide que Google valorise (Core Web Vitals au vert). L'optimisation SEO de base est incluse : structure des balises, vitesse, mobile, indexation. Pour viser la première page sur des requêtes concurrentielles, un accompagnement SEO complémentaire est possible — mais la fondation technique, elle, est déjà excellente.",
  },
  {
    question: "Combien de temps pour avoir mon site en ligne ?",
    answer:
      "2 semaines pour un site vitrine, 5 jours pour une landing page. Le process : un appel de 30 minutes, une maquette sous 48h que vous validez, puis le développement et la mise en ligne. Si nous dépassons le délai annoncé, un mois de maintenance vous est offert.",
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Site Internet Pas Cher",
      item: `${SITE.url}/site-internet-pas-cher`,
    },
  ],
};

const offres = [
  {
    name: "Landing Page",
    price: PRICING.landing.label,
    monthly: PRICING.landing.monthly,
    desc: "Une page unique orientée conversion, idéale pour lancer une offre ou capter des leads avec vos publicités.",
    link: "/services/sites-web/landing-page",
    delai: "5 jours",
  },
  {
    name: "Site Vitrine",
    price: PRICING.vitrine.label,
    monthly: PRICING.vitrine.monthly,
    desc: "5 pages professionnelles sur-mesure : la solution complète pour présenter votre activité et être trouvé sur Google.",
    link: "/services/sites-web/site-vitrine",
    delai: "2 semaines",
    popular: true,
  },
  {
    name: "Site E-commerce",
    price: PRICING.ecommerce.label,
    monthly: PRICING.ecommerce.monthly,
    desc: "Boutique en ligne avec catalogue, paiement sécurisé Stripe et gestion des commandes.",
    link: "/services/sites-web/site-ecommerce",
    delai: "10-15 jours",
  },
];

const comparatif = [
  {
    critere: "Prix de départ",
    convertilab: "890€ (ou 39€/mois sur 24 mois)",
    gratuit: "0€... puis 200-300€/an à vie",
    freelance: "800-3 000€, très variable",
    agence: "3 000-10 000€",
  },
  {
    critere: "Propriété du site",
    convertilab: "100% à vous (code + domaine)",
    gratuit: "Jamais propriétaire",
    freelance: "Selon le contrat",
    agence: "Généralement oui",
  },
  {
    critere: "SEO inclus",
    convertilab: "Oui, dès la livraison",
    gratuit: "Très limité",
    freelance: "Rarement",
    agence: "Souvent en option payante",
  },
  {
    critere: "Délai de livraison",
    convertilab: "2 semaines garantis",
    gratuit: "Immédiat mais à faire soi-même",
    freelance: "2-8 semaines",
    agence: "1-3 mois",
  },
  {
    critere: "Garantie",
    convertilab: "Satisfait ou remboursé",
    gratuit: "Aucune",
    freelance: "Rare",
    agence: "Variable",
  },
];

export default function SiteInternetPasCherPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />

      {/* HERO */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
            <BadgeCheck className="w-4 h-4" />
            Prix fixe garanti, zéro frais caché
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Site Internet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Pas Cher
            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">
              mais 100% Professionnel
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Un site web pas cher ne devrait jamais être un site au rabais. Site
            sur-mesure dès <strong>{PRICING.vitrine.from}€</strong> ou{" "}
            <strong>39€/mois</strong>, livré en 2 semaines, optimisé pour Google,
            satisfait ou remboursé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6 text-lg"
            >
              <Link href="/contact">
                Devis gratuit en 24h
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg">
              <Link href="/estimation-prix-site-web">
                <Calculator className="mr-2 w-5 h-5" />
                Estimer mon prix en 2 min
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Livraison en 2 semaines
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Code 100% à vous
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              SEO inclus
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              +150 clients, 4.9★
            </span>
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Nos sites web à petit prix
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Des prix transparents, publiés et définitifs — comparez avec les
            devis flous que vous recevez ailleurs. Détail complet sur notre{" "}
            <Link href="/prix" className="text-purple-600 underline underline-offset-2">
              page tarifs
            </Link>
            .
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {offres.map((o) => (
              <div
                key={o.name}
                className={`rounded-2xl p-7 border ${
                  o.popular
                    ? "border-purple-300 bg-purple-50/50 shadow-lg relative"
                    : "border-gray-200 bg-white shadow-sm"
                }`}
              >
                {o.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full">
                    Le plus choisi
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{o.name}</h3>
                <p className="text-2xl font-black text-purple-600 mb-1">{o.price}</p>
                <p className="text-sm text-gray-500 mb-4">ou {o.monthly}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{o.desc}</p>
                <p className="text-xs text-gray-400 mb-5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Livré en {o.delai}
                </p>
                <Link
                  href={o.link}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors"
                >
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600">
            Petit budget ?{" "}
            <Link
              href="/offre-mensuelle"
              className="text-purple-600 font-semibold underline underline-offset-2"
            >
              Étalez le paiement dès 39€/mois
            </Link>{" "}
            — votre site en ligne en 2 semaines, sans apport.
          </p>
        </div>
      </section>

      {/* COMPARATIF */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Site pas cher : comparez les options avant de choisir
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            « Pas cher » n&apos;a pas le même sens partout. Voici ce que cache
            chaque option :
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left p-4 font-semibold text-gray-500"></th>
                  <th className="text-left p-4 font-bold text-purple-700">ConvertiLab</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Site "gratuit" (Wix...)</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Freelance low-cost</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Agence classique</th>
                </tr>
              </thead>
              <tbody>
                {comparatif.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="p-4 font-semibold text-gray-900">{row.critere}</td>
                    <td className="p-4 text-purple-700 font-medium">{row.convertilab}</td>
                    <td className="p-4 text-gray-600">{row.gratuit}</td>
                    <td className="p-4 text-gray-600">{row.freelance}</td>
                    <td className="p-4 text-gray-600">{row.agence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-8 text-gray-600 text-sm">
            Pour creuser :{" "}
            <Link href="/comparatifs/site-gratuit-vs-professionnel" className="text-purple-600 underline underline-offset-2">
              site gratuit vs professionnel
            </Link>
            {" · "}
            <Link href="/comparatifs/wix-vs-agence" className="text-purple-600 underline underline-offset-2">
              Wix vs agence
            </Link>
            {" · "}
            <Link href="/comparatifs/agence-vs-freelance" className="text-purple-600 underline underline-offset-2">
              agence vs freelance
            </Link>
          </p>
        </div>
      </section>

      {/* POURQUOI PAS CHER */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Pourquoi nos sites web sont-ils moins chers qu&apos;en agence classique ?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Une agence web classique facture 3 000 à 10 000€ un site vitrine, car
              vous payez ses réunions, ses allers-retours interminables et sa
              structure. Chez ConvertiLab, le process est radicalement optimisé :
              un appel de 30 minutes, une maquette sous 48h que vous validez{" "}
              <strong>avant</strong> tout développement, puis une livraison en 2 semaines. Moins de temps perdu, donc un prix sans commune mesure avec
              celui d'une agence classique, sans toucher à la qualité.
            </p>
            <p>
              Deuxième levier : la technologie. Nous développons avec Next.js — pas
              de licence CMS à payer, pas de plugins premium, pas de maintenance
              WordPress mensuelle imposée. Le site livré est plus rapide (score
              Google PageSpeed 90+), plus sécurisé, et vous appartient à 100%.
            </p>
            <p>
              Résultat : plus de 150 entrepreneurs, artisans et commerçants ont
              choisi cette formule, avec une note de 4.9/5. Un site web pas cher
              peut être votre meilleur investissement — à condition qu&apos;il soit
              fait pour durer et pour être trouvé sur Google. Pour savoir combien
              coûterait le vôtre, utilisez notre{" "}
              <Link href="/estimation-prix-site-web" className="text-purple-600 underline underline-offset-2">
                calculateur de prix en ligne
              </Link>{" "}
              ou lisez notre guide{" "}
              <Link href="/blog/combien-coute-site-web" className="text-purple-600 underline underline-offset-2">
                combien coûte un site web en 2026
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* PIEGES */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Les 3 pièges du site internet pas cher
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "La location déguisée",
                desc: "Certains prestataires « à 29€/mois » ne vous vendent rien : arrêtez de payer, votre site disparaît. Vérifiez toujours que le code et le nom de domaine vous appartiennent.",
              },
              {
                title: "Les frais cachés",
                desc: "Prix d'appel bas, puis maintenance obligatoire, modifications facturées 80€/h, options indispensables en supplément. Exigez un prix définitif écrit avant de signer.",
              },
              {
                title: "Le site invisible",
                desc: "Un site sans optimisation SEO n'apparaît jamais sur Google : il ne sert à rien, même gratuit. Le référencement de base doit être inclus, pas vendu en option.",
              },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm">
                <XCircle className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-white rounded-2xl p-7 border border-green-200 flex items-start gap-4">
            <Shield className="w-8 h-8 text-green-500 flex-shrink-0" />
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-gray-900">Notre engagement anti-piège :</strong>{" "}
              prix publiés et définitifs, code source et nom de domaine 100% à
              vous, SEO de base inclus, satisfait ou remboursé, et 30 jours de
              support offerts. Tout est écrit dans le devis.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Questions fréquentes sur les sites internet pas chers
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Tout ce qu&apos;il faut savoir avant de créer un site web à petit prix
          </p>
          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left font-semibold text-gray-900 hover:text-purple-700 transition-colors [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{faq.question}</span>
                  <span className="text-purple-600 group-open:rotate-45 transition-transform duration-200 text-2xl flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Votre site professionnel dès {PRICING.vitrine.from}€
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Devis gratuit et définitif sous 24h. Maquette offerte sous 48h.
                Paiement uniquement après validation — vous ne risquez rien.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold"
                >
                  <Link href="/contact">
                    Demander mon devis gratuit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white px-8 py-6 text-lg"
                >
                  <Link href="/estimation-prix-site-web">Estimer mon prix</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
