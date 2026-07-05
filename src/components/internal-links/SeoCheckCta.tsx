import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

/**
 * Bloc de maillage interne SEO : CTA vers l'outil /seo-check + liens vers les
 * ressources SEO du site. À insérer sur toutes les pages traitant de SEO pour
 * concentrer l'autorité interne sur /seo-check (hub du cluster "audit seo").
 */

const SEO_RESOURCES = [
  { label: "Guide : améliorer son SEO", href: "/guide/ameliorer-seo" },
  { label: "SEO ou Google Ads ?", href: "/comparatifs/seo-vs-google-ads" },
  { label: "Guide SEO débutant", href: "/blog/guide-seo-debutant-2026" },
  { label: "Apparaître premier sur Google", href: "/blog/comment-apparaitre-premier-google" },
  { label: "SEO local : le guide", href: "/blog/seo-local-guide-complet" },
  { label: "Audit SEO professionnel", href: "/services/seo/audit" },
];

export default function SeoCheckCta({
  title = "Où en est le SEO de votre site ?",
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
                <Search className="w-4 h-4" />
                Audit SEO gratuit en ligne
              </div>
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-white/80 text-sm max-w-md">
                Analysez votre site en 60 secondes : 60+ points de contrôle, score
                détaillé et rapport PDF gratuit. Sans engagement.
              </p>
            </div>
            <Link
              href="/seo-check"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap flex-shrink-0"
            >
              Lancer mon audit SEO
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {showResources && (
          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-3 text-center">
              Nos ressources pour progresser en référencement :
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SEO_RESOURCES.map((r) => (
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
