import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { createServerClient } from "@/lib/supabase/server";
import { getArticleBySlug, getRelatedArticles, blogArticles } from "@/data/blog-articles";
import type { FullBlogArticle, BlogFaqItem } from "@/data/blog-articles";
import BlogArticleClient from "@/components/pages/BlogArticleClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

async function getArticle(slug: string): Promise<FullBlogArticle | null> {
  try {
    const supabase = createServerClient();
    if (!supabase) throw new Error("No supabase client");
    const { data, error } = await supabase
      .from("blog_articles")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (!error && data) {
      return {
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt || "",
        metaDescription: data.meta_description || data.excerpt || "",
        image: data.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        category: data.category || "Business",
        readTime: data.read_time || "5 min",
        publishedAt: data.published_at || "2024-01-01T00:00:00.000Z",
        updatedAt: data.updated_at || data.published_at || undefined,
        author: { name: data.author_name || "Bilel Bettaieb" },
        tags: data.tags || [],
        content: data.content || "",
      };
    }
  } catch {
    // Fallback to static
  }

  const staticArticle = getArticleBySlug(slug);
  return staticArticle || null;
}

/** Meta description sous 155 caractères : coupe à la dernière phrase complète, sinon au dernier mot. */
function descriptionCourte(texte: string): string {
  if (texte.length <= 155) return texte;
  const tronque = texte.slice(0, 153);
  const finPhrase = Math.max(tronque.lastIndexOf(". "), tronque.lastIndexOf(" ! "), tronque.lastIndexOf(" ? "));
  if (finPhrase >= 90) return tronque.slice(0, finPhrase + 1);
  return tronque.slice(0, tronque.lastIndexOf(" ")) + "…";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return { title: "Article introuvable" };
  }

  const titre = article.seoTitle ?? article.title;
  return {
    // Au-delà de 51 caractères, le suffixe « | ConvertiLab » ferait dépasser 65 : titre seul.
    title: titre.length > 51 ? { absolute: titre } : titre,
    description: descriptionCourte(article.metaDescription),
    keywords: article.tags,
    authors: [{ name: "Bilel Bettaieb", url: `${SITE.url}/a-propos` }],
    openGraph: {
      title: article.seoTitle ?? article.title,
      description: descriptionCourte(article.metaDescription),
      url: `${SITE.url}/blog/${article.slug}`,
      type: "article",
      images: [{ url: article.image.startsWith("http") ? article.image : `${SITE.url}${article.image}`, width: 1200, height: 630 }],
      publishedTime: article.publishedAt,
      // Même auteur que la byline et le schéma : le fondateur, pas la marque.
      authors: ["Bilel Bettaieb"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      images: [article.image.startsWith("http") ? article.image : `${SITE.url}${article.image}`],
    },
    alternates: {
      canonical: `${SITE.url}/blog/${article.slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, 3);
  // Voisins dans l'ordre du fichier (du plus récent au plus ancien) : 31 articles
  // n'avaient que un ou deux liens entrants ; précédent/suivant en garantit deux de plus.
  const position = blogArticles.findIndex((a) => a.slug === slug);
  const voisin = (i: number) => (blogArticles[i] ? { slug: blogArticles[i].slug, title: blogArticles[i].title } : null);
  const precedent = voisin(position - 1);
  const suivant = voisin(position + 1);

  const wordCount = article.content.split(/\s+/).length;
  const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  const imageAbsolue = article.image.startsWith("http") ? article.image : `${SITE.url}${article.image}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE.url}/blog/${article.slug}`,
    headline: article.title,
    description: article.metaDescription,
    image: {
      "@type": "ImageObject",
      url: imageAbsolue,
      width: 1200,
      height: 630,
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    inLanguage: "fr-FR",
    wordCount,
    timeRequired: `PT${readTimeMinutes}M`,
    author: {
      "@type": "Person",
      "@id": `${SITE.url}/#bilel-bettaieb`,
      name: article.author.name && article.author.name !== "ConvertiLab" ? article.author.name : "Bilel Bettaieb",
      url: `${SITE.url}/a-propos`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: `${SITE.url}/favicon.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${article.slug}`,
    },
    keywords: article.tags.join(", "),
    articleSection: article.category,
    isPartOf: {
      "@type": "Blog",
      "@id": `${SITE.url}/blog`,
      name: `Blog ${SITE.name}`,
      publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE.url}/blog/${article.slug}` },
    ],
  };

  const faqSchema = article.faqItems && article.faqItems.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqItems.map((faq: BlogFaqItem) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <BlogArticleClient article={article} relatedArticles={relatedArticles} precedent={precedent} suivant={suivant} />
    </>
  );
}
