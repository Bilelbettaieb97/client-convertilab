/**
 * FAQ partagée entre le rendu HTML (PoleFAQ) et le JSON-LD FAQPage.
 * Une seule liste alimente les deux : le texte visible et les données
 * structurées restent toujours identiques.
 */
export type FaqItem = {
  q: string;
  a: string;
};

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  } as const;
}
