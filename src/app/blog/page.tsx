import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import BlogPageClient from "@/components/pages/BlogPageClient";
import { blogArticles } from "@/data/blog-articles";
import type { BlogArticle } from "@/data/blog-articles";

export const metadata: Metadata = {
  title: "Blog : Conseils Web, SEO et Business",
  description:
    "Articles et guides pratiques sur la création de sites web, le SEO et le marketing digital. Conseils d'experts pour développer votre business en ligne.",
  keywords: [
    "blog web design",
    "conseils SEO",
    "création site web",
    "marketing digital",
    "business en ligne",
  ],
  openGraph: {
    title: `Blog : Conseils Web, SEO et Business | ${SITE.name}`,
    description:
      "Articles et guides pratiques sur la création de sites web, le SEO et le marketing digital.",
    url: `${SITE.url}/blog`,
    type: "website",
    images: [{ url: `${SITE.url}/og-image.png`, width: 1200, height: 630 }],
  },
  alternates: {
    canonical: `${SITE.url}/blog`,
  },
};

export default function BlogPage() {
  // Seuls les champs de carte partent au client : le contenu complet des articles
  // (1 Mo) n'a rien à faire dans le JavaScript de la page de liste.
  const cartes: BlogArticle[] = blogArticles.map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    image: a.image,
    category: a.category,
    readTime: a.readTime,
    publishedAt: a.publishedAt,
    updatedAt: a.updatedAt,
    author: a.author,
  }));
  return <BlogPageClient articles={cartes} />;
}
