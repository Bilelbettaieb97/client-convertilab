import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { cities } from "@/data/cities";
import { sectors } from "@/data/sectors";
import { glossaryTerms } from "@/data/glossary";
import { blogArticles } from "@/data/blog-articles";
import { guides } from "@/data/guides";
import { comparisons } from "@/data/comparisons";
import { pricingPages } from "@/data/pricing-pages";
import { caseStudies } from "@/data/case-studies";
import { devisServices } from "@/data/devis-pages";

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
  "/demande-maquette",
  "/estimation-prix-site-web",
  "/politique-de-confidentialite",
  "/politique-de-cookies",
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
  "/outils",
  "/faq",
];

// Updated automatically — change this date when you publish new content
const SITE_LAST_UPDATED = new Date("2026-06-25");
const TEMPLATES_CREATED = new Date("2026-06-25");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const highPriorityRoutes = new Set([
    "", "/services", "/services/sites-web", "/services/sea", "/services/seo",
    "/prix", "/contact", "/a-propos", "/portfolio", "/blog",
    "/offre-mensuelle", "/demande-maquette", "/estimation-prix-site-web",
  ]);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : highPriorityRoutes.has(route) ? 0.9 : route.startsWith("/services") ? 0.8 : 0.7,
  }));

  // Blog articles — static + Supabase (merged, no duplicates)
  const staticBlogEntries: MetadataRoute.Sitemap = blogArticles.map((a) => ({
    url: `${SITE.url}/blog/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  const staticBlogSlugs = new Set(blogArticles.map((a) => a.slug));

  let supabaseBlogEntries: MetadataRoute.Sitemap = [];
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { data: articles, error } = await supabase
        .from("blog_articles")
        .select("slug, updated_at")
        .eq("published", true);
      if (error) {
        console.warn("[sitemap] Supabase blog fetch failed:", error.message);
      } else if (articles) {
        supabaseBlogEntries = articles
          .filter((a) => !staticBlogSlugs.has(a.slug))
          .map((a) => ({
            url: `${SITE.url}/blog/${a.slug}`,
            lastModified: new Date(a.updated_at),
            changeFrequency: "monthly" as const,
            priority: 0.6,
          }));
      }
    } catch (err) {
      console.warn("[sitemap] Unexpected Supabase error:", err);
    }
  } else {
    console.warn("[sitemap] Supabase env vars missing — skipping dynamic blog entries");
  }

  const cityEntries: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${SITE.url}/agence-web/${city.slug}`,
    lastModified: TEMPLATES_CREATED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const sectorEntries: MetadataRoute.Sitemap = sectors.map((s) => ({
    url: `${SITE.url}/solutions/${s.slug}`,
    lastModified: TEMPLATES_CREATED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const glossaryEntries: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/glossaire`, lastModified: TEMPLATES_CREATED, changeFrequency: "monthly" as const, priority: 0.5 },
    ...glossaryTerms.map((t) => ({
      url: `${SITE.url}/glossaire/${t.slug}`,
      lastModified: TEMPLATES_CREATED,
      changeFrequency: "monthly" as const,
      priority: 0.3,
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
      lastModified: TEMPLATES_CREATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const blogEntries = [...staticBlogEntries, ...supabaseBlogEntries];

  const guideEntries: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${SITE.url}/guide/${g.slug}`,
    lastModified: TEMPLATES_CREATED,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const comparatifEntries: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${SITE.url}/comparatifs/${c.slug}`,
    lastModified: TEMPLATES_CREATED,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const prixEntries: MetadataRoute.Sitemap = pricingPages.map((p) => ({
    url: `${SITE.url}/prix/${p.slug}`,
    lastModified: TEMPLATES_CREATED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${SITE.url}/etude-de-cas/${cs.slug}`,
    lastModified: TEMPLATES_CREATED,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const devisEntries: MetadataRoute.Sitemap = devisServices.map((d) => ({
    url: `${SITE.url}/devis/${d.slug}`,
    lastModified: TEMPLATES_CREATED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    ...blogEntries,
    ...cityEntries,
    ...sectorEntries,
    ...glossaryEntries,
    ...creationSiteEntries,
    ...guideEntries,
    ...comparatifEntries,
    ...prixEntries,
    ...caseStudyEntries,
    ...devisEntries,
  ];
}
