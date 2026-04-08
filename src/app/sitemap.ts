import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { cities } from "@/data/cities";
import { sectors } from "@/data/sectors";
import { glossaryTerms } from "@/data/glossary";
import { blogArticles } from "@/data/blog-articles";

const staticRoutes = [
  "",
  "/services",
  "/services/sites-web",
  "/services/sites-web/landing-page",
  "/services/sites-web/site-vitrine",
  "/services/sites-web/site-ecommerce",
  "/services/sites-web/application-web",
  "/services/sites-web/refonte-site",
  "/services/design",
  "/services/design/ui-ux",
  "/services/design/identite-visuelle",
  "/services/seo",
  "/services/seo/referencement",
  "/services/seo/audit",
  "/services/sea",
  "/services/sea/google-ads",
  "/services/sea/meta-ads",
  "/services/social-media",
  "/services/social-media/community-management",
  "/services/social-media/strategie",
  "/portfolio",
  "/contact",
  "/a-propos",
  "/blog",
  "/offre-speciale",
  "/offre-mensuelle",
  "/offre-mensuelle/devis",
  "/demande-maquette",
  "/estimation-prix-site-web",
  "/politique-de-confidentialite",
  "/agence-web",
  "/solutions",
  "/seo-check",
  "/speed-check",
  "/design-score",
  "/estimateur-ads",
  "/generateur-mentions-legales",
  "/generateur-robots-sitemap",
  "/rapport-sectoriel",
  "/comparateur-sites",
  "/prix",
  "/comparatifs",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteLastModified = new Date("2026-04-05");

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: siteLastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.7,
  }));

  // Blog articles — static + Supabase (merged, no duplicates)
  const staticBlogEntries: MetadataRoute.Sitemap = blogArticles.map((a) => ({
    url: `${SITE.url}/blog/${a.slug}`,
    lastModified: siteLastModified,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));
  const staticBlogSlugs = new Set(blogArticles.map((a) => a.slug));

  let supabaseBlogEntries: MetadataRoute.Sitemap = [];
  try {
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
    );
    const { data: articles } = await supabase
      .from("blog_articles")
      .select("slug, updated_at")
      .eq("published", true);
    if (articles) {
      supabaseBlogEntries = articles
        .filter((a) => !staticBlogSlugs.has(a.slug))
        .map((a) => ({
        url: `${SITE.url}/blog/${a.slug}`,
        lastModified: new Date(a.updated_at),
        changeFrequency: "weekly" as const,
        priority: 0.6,
      }));
    }
  } catch {
    // Fallback: no blog entries in sitemap
  }

  const cityEntries: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${SITE.url}/agence-web/${city.slug}`,
    lastModified: siteLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const sectorEntries: MetadataRoute.Sitemap = sectors.map((s) => ({
    url: `${SITE.url}/solutions/${s.slug}`,
    lastModified: siteLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const glossaryEntries: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/glossaire`, lastModified: siteLastModified, changeFrequency: "monthly" as const, priority: 0.6 },
    ...glossaryTerms.map((t) => ({
      url: `${SITE.url}/glossaire/${t.slug}`,
      lastModified: siteLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];

  const creationSiteTargetSlugs = [
    "paris", "lyon", "marseille", "bordeaux", "toulouse",
    "nice", "nantes", "lille", "montpellier", "strasbourg",
  ];

  const creationSiteEntries: MetadataRoute.Sitemap = cities
    .filter((city) => creationSiteTargetSlugs.includes(city.slug))
    .map((city) => ({
      url: `${SITE.url}/creation-site-internet/${city.slug}`,
      lastModified: siteLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const blogEntries = [...staticBlogEntries, ...supabaseBlogEntries];

  return [...staticEntries, ...blogEntries, ...cityEntries, ...sectorEntries, ...glossaryEntries, ...creationSiteEntries];
}
