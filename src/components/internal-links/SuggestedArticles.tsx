import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
// Composant serveur volontairement : importé depuis un composant client, le fichier
// blog-articles.ts (1 Mo, contenu complet des articles) partait dans le JavaScript de
// chaque page du site (374 Ko compressés par visite, mesuré le 18/09/2026).
import { blogArticles } from "@/data/blog-articles";

interface SuggestedArticlesProps {
  exclude?: string[];
  max?: number;
  title?: string;
  /**
   * Thèmes de la page (mots ou expressions en minuscules, ex. « référencement local »,
   * « boutique en ligne ») : les articles dont les tags, le titre ou la catégorie
   * contiennent le plus de thèmes passent devant. Sans thèmes : les plus récents.
   */
  themes?: string[];
}

const normaliser = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const SuggestedArticles = ({ exclude = [], max = 3, title = "Articles suggérés", themes = [] }: SuggestedArticlesProps) => {
  const cles = themes.map(normaliser).filter(Boolean);
  const articles = blogArticles
    .filter((a) => !exclude.includes(a.slug))
    .map((a, i) => {
      const texte = normaliser([a.title, a.category, ...(a.tags ?? [])].join(" "));
      const score = cles.reduce((n, cle) => n + (texte.includes(cle) ? 1 : 0), 0);
      return { a, i, score };
    })
    .sort((x, y) => y.score - x.score || x.i - y.i)
    .slice(0, max)
    .map(({ a }) => a);

  if (articles.length === 0) return null;

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:shadow-md hover:border-primary/40 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image}
                  alt={`${article.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Calendar className="w-3 h-3" />
                  {new Date(article.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                  <span className="ml-auto">{article.readTime}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3 flex-grow">{article.excerpt}</p>
                <span className="text-xs font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Lire l&apos;article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
            Voir tous les articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuggestedArticles;
