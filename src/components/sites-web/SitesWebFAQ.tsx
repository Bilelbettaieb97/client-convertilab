"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    q: "Combien de temps faut-il pour creer mon site ?",
    a: "Cela depend du type de site : 5-7 jours pour une landing page, 10-15 jours pour un site vitrine, 21-30 jours pour un e-commerce. Nous nous engageons sur un calendrier precis des le devis."
  },
  {
    q: "Que se passe-t-il si le resultat ne me plait pas ?",
    a: "Nous validons avec vous chaque etape cle (maquette, developpement). Si le resultat final ne correspond pas au cahier des charges valide, nous retravaillons gratuitement jusqu'a votre satisfaction."
  },
  {
    q: "Y a-t-il des couts caches apres la livraison ?",
    a: "Non. Le prix du devis inclut la conception, le developpement, l'hebergement premiere annee et le support technique. Seul le renouvellement d'hebergement (environ 10 euros/mois) s'applique ensuite."
  },
  {
    q: "Mon site sera-t-il bien reference sur Google ?",
    a: "Oui. Tous nos sites incluent une optimisation SEO technique : balises meta, vitesse de chargement, structure semantique, sitemap. Pour un positionnement plus agressif, nous proposons des forfaits SEO dedies."
  },
  {
    q: "Puis-je modifier mon site moi-meme apres livraison ?",
    a: "Absolument. Nous vous formons a l'utilisation de votre site et vous fournissons une documentation. Pour les modifications complexes, notre support est disponible."
  },
  {
    q: "Proposez-vous le paiement en plusieurs fois ?",
    a: "Oui, nous proposons un paiement en 2 ou 3 fois sans frais : un acompte au demarrage, le solde a la livraison (ou reparti sur 2 echeances)."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a
    }
  }))
};

const SitesWebFAQ = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Questions frequentes</h2>
              <p className="text-muted-foreground">Les reponses aux questions que vous vous posez surement</p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default SitesWebFAQ;
