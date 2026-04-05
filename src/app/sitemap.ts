import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

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
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.7,
  }));

  // TODO: Fetch blog articles from Supabase when blog is dynamic
  // const { data: articles } = await supabase.from('blog_articles').select('slug, updated_at').eq('published', true)
  // const blogEntries = articles?.map(a => ({ url: `${SITE.url}/blog/${a.slug}`, lastModified: a.updated_at })) ?? []

  return [...staticEntries];
}
