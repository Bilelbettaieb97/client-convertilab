import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";

/**
 * Bloc de maillage interne du cluster "prix / création de site" : CTA vers le
 * calculateur /estimation-prix-site-web + liens vers les ressources prix du
 * site. Pendant du SeoCheckCta pour le cluster budget/tarifs.
 */

const PRIX_RESOURCES = [
  { label: "Tous nos tarifs", href: "/prix" },
  { label: "Site internet pas cher", href: "/site-internet-pas-cher" },
  { label: "Combien coûte un site web ?", href: "/blog/combien-coute-site-web" },
  { label: "Votre site dès 39€/mois", href: "/offre-mensuelle" },
  { label: "Site gratuit vs professionnel", href: "/comparatifs/site-gratuit-vs-professionnel" },
  { label: "Réussir son devis de site web", href: "/guide/devis-site-web" },
];

export default function PrixSiteCta({
  title = "Quel budget pour votre site web ?",
  showResources = true,
}: {
  title?: string;
  showResources?: boolean;
}) {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <div>
              <div className="flex items-center gap-2 text-white/80 text-sm font-semibold mb-2">
                <Calculator className="w-4 h-4" />
                Calculateur de prix gratuit
              </div>
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-white/80 text-sm max-w-md">
                Estimez le prix de votre site internet en 2 minutes selon vos
                besoins réels. Estimation instantanée, sans engagement.
              </p>
            </div>
            <Link
              href="/estimation-prix-site-web"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap flex-shrink-0"
            >
              Estimer mon prix
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {showResources && (
          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-3 text-center">
              Pour bien budgéter votre projet :
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {PRIX_RESOURCES.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-700 hover:text-purple-600 hover:border-purple-200 transition-colors"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
