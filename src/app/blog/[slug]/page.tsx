import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { createServerClient } from "@/lib/supabase/server";
import { getArticleBySlug, getRelatedArticles, blogArticles } from "@/data/blog-articles";
import type { FullBlogArticle } from "@/data/blog-articles";
import BlogArticleClient from "@/components/pages/BlogArticleClient";

type Props = {
  params: Promise<{ slug: string }>;
};

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
        publishedAt: data.published_at || new Date().toISOString(),
        author: { name: data.author_name || "ConvertiLab" },
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return { title: "Article introuvable" };
  }

  return {
    title: article.title,
    description: article.metaDescription,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `${SITE.url}/blog/${article.slug}`,
      type: "article",
      images: [{ url: article.image, width: 1200, height: 630 }],
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      images: [article.image],
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

  const wordCount = article.content.split(/\s+/).length;
  const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE.url}/blog/${article.slug}`,
    headline: article.title,
    description: article.metaDescription,
    image: {
      "@type": "ImageObject",
      url: article.image,
      width: 1200,
      height: 630,
    },
    datePublished: article.publishedAt,
    dateModified: new Date().toISOString(),
    inLanguage: "fr-FR",
    wordCount,
    timeRequired: `PT${readTimeMinutes}M`,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: `${SITE.url}/favicon.png` },
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogArticleClient article={article} relatedArticles={relatedArticles} />
    </>
  );
}
