import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import DemandeMaquetteClient from "./DemandeMaquetteClient";

export const metadata: Metadata = {
  title: "Maquette de Site Web Gratuite sous 48h — Visualisez Votre Site",
  description:
    "Demandez votre maquette de site internet gratuite : design personnalisé de votre future page d'accueil livré sous 48h, sans engagement. Vous ne payez que si la maquette vous plaît.",
  keywords:
    "maquette site web gratuite, maquette site internet, maquette gratuite site web, mockup site web, prototype site internet, design site web gratuit, aperçu site web personnalisé, maquette gratuite agence web",
  alternates: { canonical: `${SITE.url}/demande-maquette` },
  openGraph: {
    title: "Maquette de Site Web Gratuite sous 48h | ConvertiLab",
    description:
      "Recevez une maquette personnalisée de votre site web sous 48h, gratuitement et sans engagement. Design adapté à votre secteur et vos couleurs.",
    url: `${SITE.url}/demande-maquette`,
    type: "website",
  },
};

const faqItems = [
  {
    question: "La maquette de site web est-elle vraiment gratuite ?",
    answer:
      "Oui, entièrement gratuite et sans engagement. Vous remplissez le formulaire en 2 minutes, nos designers créent la maquette de votre future page d'accueil, et vous la recevez sous 48h. Si elle vous plaît, nous développons le site complet ; sinon, vous ne devez rien. C'est notre façon de prouver notre travail avant de vous demander le moindre euro.",
  },
  {
    question: "Qu'est-ce qu'une maquette de site web exactement ?",
    answer:
      "Une maquette (ou mockup) est une représentation visuelle fidèle de votre futur site : mise en page, couleurs, typographies, textes et images en situation réelle. Ce n'est pas un croquis abstrait — c'est le design de votre page d'accueil tel qu'il apparaîtra en ligne, adapté à votre secteur d'activité et au style que vous avez choisi.",
  },
  {
    question: "Que contient la maquette gratuite ?",
    answer:
      "Le design complet de votre page d'accueil : structure des sections, palette de couleurs adaptée à votre activité, typographies, emplacement des textes et visuels. La maquette suit le style que vous sélectionnez dans le formulaire (minimaliste, coloré, premium, naturel, tech) et intègre les codes de votre secteur.",
  },
  {
    question: "Sous quel délai vais-je recevoir ma maquette ?",
    answer:
      "Sous 48h ouvrées après votre demande. Nos designers travaillent à partir des informations du formulaire : type de site, secteur d'activité, style visuel souhaité et, si vous en avez un, votre site actuel pour comprendre l'existant.",
  },
  {
    question: "Puis-je demander des modifications sur la maquette ?",
    answer:
      "Oui. La maquette est un point de départ pour la discussion : lors de sa présentation, vous nous dites ce que vous aimez et ce que vous voulez changer. Les révisions sont incluses jusqu'à validation — nous ne développons le site qu'une fois que le design vous plaît à 100%.",
  },
  {
    question: "Que se passe-t-il si la maquette ne me plaît pas ?",
    answer:
      "Rien — c'est justement l'intérêt de la formule. Vous n'avez aucun engagement et rien à payer. Soit nous retravaillons le design selon vos retours, soit vous en restez là, sans frais ni justification à donner. Vous ne prenez aucun risque à demander votre maquette.",
  },
  {
    question: "Pourquoi une agence web offre-t-elle des maquettes gratuites ?",
    answer:
      "Parce que c'est le meilleur moyen de vous convaincre sur pièce plutôt que sur promesse. La plupart des agences vous demandent de signer un devis avant de voir quoi que ce soit. Nous faisons l'inverse : vous jugez notre travail concrètement, puis vous décidez. Environ un tiers des maquettes se transforment en projet — c'est notre modèle, transparent et assumé.",
  },
  {
    question: "Et après la maquette, combien coûte le site complet ?",
    answer:
      "Un site vitrine complet démarre à 500€ (ou 39€/mois en paiement étalé), livré en 7 jours après validation de la maquette. Le devis exact dépend de vos besoins : nombre de pages, fonctionnalités, e-commerce. Vous pouvez estimer votre budget en 2 minutes avec notre calculateur de prix en ligne.",
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

/* Contenu SEO rendu côté serveur (indexable), affiché sous le wizard */
function MaquetteSeoContent() {
  return (
    <div className="bg-slate-950 border-t border-slate-800/60">
      {/* Qu'est-ce qu'une maquette */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Qu&apos;est-ce qu&apos;une maquette de site web ?
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Une <strong className="text-slate-200">maquette de site web</strong> (aussi
              appelée mockup) est la représentation visuelle fidèle de votre futur site :
              la mise en page, les couleurs, les typographies et les visuels de votre page
              d&apos;accueil, exactement tels qu&apos;ils apparaîtront en ligne. C&apos;est
              la différence entre imaginer votre site… et le voir.
            </p>
            <p>
              Chez ConvertiLab, la maquette est <strong className="text-slate-200">créée
              sur-mesure par un designer</strong> à partir de votre secteur d&apos;activité
              et du style visuel que vous choisissez — pas un template générique
              recoloré. Restaurant, artisan, cabinet, boutique en ligne : chaque secteur a
              ses codes, et votre maquette les respecte dès la première version.
            </p>
            <p>
              C&apos;est aussi le moyen le plus sûr de <strong className="text-slate-200">
              comparer les agences web avant de vous engager</strong> : au lieu de juger
              sur un devis et des promesses, vous jugez sur un design concret de{" "}
              <em>votre</em> site. Jetez un œil à{" "}
              <Link href="/portfolio" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
                nos réalisations
              </Link>{" "}
              pour voir le niveau de finition de nos sites livrés.
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi avant de payer */}
      <section className="py-16 px-4 border-t border-slate-800/60">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Pourquoi demander une maquette gratuite avant de créer votre site ?
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Le principal risque quand on confie son site à un prestataire, c&apos;est de
              payer d&apos;abord et de découvrir le résultat ensuite. La maquette gratuite
              inverse ce rapport : <strong className="text-slate-200">vous voyez le
              design avant de dépenser le moindre euro</strong>, et vous ne vous engagez
              que si le résultat vous convainc.
            </p>
            <p>
              Concrètement : vous décrivez votre projet en 2 minutes dans le formulaire
              ci-dessus, nos designers créent la maquette de votre page d&apos;accueil
              sous 48h, puis nous vous la présentons. Elle vous plaît ? Nous développons
              le site complet — vitrine dès 500€, livré en 7 jours, avec{" "}
              <Link href="/prix" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
                des tarifs publiés et définitifs
              </Link>
              . Elle ne vous plaît pas ? Vous ne devez rien, sans justification.
            </p>
            <p>
              Pour préparer votre projet, vous pouvez aussi{" "}
              <Link href="/estimation-prix-site-web" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
                estimer le prix de votre site en 2 minutes
              </Link>{" "}
              ou découvrir nos{" "}
              <Link href="/site-internet-pas-cher" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
                sites internet à petit prix
              </Link>{" "}
              — professionnels, sans frais cachés.
            </p>
          </div>
        </div>
      </section>

      {/* 3 étapes */}
      <section className="py-16 px-4 border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            Votre maquette gratuite en 3 étapes
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Décrivez votre projet",
                desc: "2 minutes dans le formulaire : type de site, secteur d'activité, style visuel préféré. Pas besoin de cahier des charges.",
              },
              {
                step: "2",
                title: "Nos designers créent",
                desc: "Sous 48h ouvrées, un designer conçoit la maquette sur-mesure de votre page d'accueil, adaptée aux codes de votre secteur.",
              },
              {
                step: "3",
                title: "Vous décidez, sans pression",
                desc: "Présentation de la maquette, vos retours, révisions incluses. Vous ne payez que si vous validez et lancez le projet.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold mb-4">
                  {s.step}
                </div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 border-t border-slate-800/60">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            Questions fréquentes sur la maquette gratuite
          </h2>
          <p className="text-slate-500 text-center mb-10">
            Tout ce qu&apos;il faut savoir avant de demander votre maquette de site web
          </p>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="group bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 text-left font-semibold text-slate-200 hover:text-violet-300 transition-colors [&::-webkit-details-marker]:hidden">
                  <span className="pr-4 text-sm md:text-base">{faq.question}</span>
                  <span className="text-violet-400 group-open:rotate-45 transition-transform duration-200 text-xl flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function DemandeMaquettePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Demande de maquette", item: `${SITE.url}/demande-maquette` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Maquette de site web gratuite",
    description: "Recevez une maquette personnalisée de votre futur site web sous 48h, gratuitement et sans engagement.",
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Maquette gratuite et sans engagement",
    },
    areaServed: { "@type": "Country", name: "France" },
    url: `${SITE.url}/demande-maquette`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <DemandeMaquetteClient>
        <MaquetteSeoContent />
      </DemandeMaquetteClient>
    </>
  );
}
