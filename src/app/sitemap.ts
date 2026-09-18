import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { cities } from "@/data/cities";
import { VILLES_RETIREES } from "@/app/agence-web/[secteur]/page";
import { sectors } from "@/data/sectors";
import { glossaryTerms } from "@/data/glossary";
import { blogArticles } from "@/data/blog-articles";
import { guides } from "@/data/guides";
import { comparisons } from "@/data/comparisons";
import { pricingPages } from "@/data/pricing-pages";
import { caseStudies, fullCaseStudies } from "@/data/case-studies";
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
  "/services/seo/seo-local",
  "/services/seo/visibilite-ia",
  "/services/sea",
  "/services/sea/google-ads",
  "/services/sea/meta-ads",
  "/services/sea/tiktok-ads",
  "/services/sea/pinterest-ads",
  "/services/sea/linkedin-ads",
  "/services/integration-ia",
  "/services/crm",
  "/services/crm/creation-crm",
  "/services/crm/optimisation-crm",
  "/services/crm/nettoyage-crm",
  "/services/social-media",
  "/services/social-media/community-management",
  "/services/social-media/strategie",
  "/portfolio",
  "/contact",
  "/a-propos",
  "/blog",
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
  "/mentions-legales",
  "/generateur-robots-sitemap",
  "/rapport-sectoriel",
  "/comparateur-sites",
  "/prix",
  "/comparatifs",
  "/outils",
  "/faq",
  "/site-internet-pas-cher",
  "/devis",
];

// Dates réelles de dernière modification du contenu (pas la date de build).
// À mettre à jour quand le contenu correspondant change réellement :
// SITE_LAST_UPDATED = pages statiques (titles/H2/hero revus le 07/07),
// CITY_PAGES_UPDATED = pages villes (carte + tel ajoutés le 07/07),
// TEMPLATES_CREATED = templates non retouchés depuis leur création.
const SITE_LAST_UPDATED = new Date("2026-07-07");
// 18/09/2026 : contenu local propre à chaque ville, schémas refaits, chiffres estimés retirés
const CITY_PAGES_UPDATED = new Date("2026-09-18");
// 18/09/2026 : gabarits secteurs (cas clients réels, prix), glossaire (voisins), comparatifs (liens croisés)
const TEMPLATES_CREATED = new Date("2026-09-18");
// Refonte de septembre 2026 : accueil, /services, les quatre pôles et leurs sous-pages (dont les cinq nouvelles et les trois sous-pages CRM du 16/09).
const REFONTE_POLES_UPDATED = new Date("2026-09-16");
const ROUTES_REFONTE_POLES = new Set([
  "",
  "/services",
  "/services/sites-web",
  "/services/sites-web/landing-page",
  "/services/sites-web/site-vitrine",
  "/services/sites-web/site-ecommerce",
  "/services/sites-web/application-web",
  "/services/sites-web/refonte-site",
  "/services/seo",
  "/services/seo/referencement",
  "/services/seo/audit",
  "/services/seo/seo-local",
  "/services/seo/visibilite-ia",
  "/services/sea",
  "/services/sea/google-ads",
  "/services/sea/meta-ads",
  "/services/sea/tiktok-ads",
  "/services/sea/pinterest-ads",
  "/services/sea/linkedin-ads",
  "/services/integration-ia",
  "/services/crm",
  "/services/crm/creation-crm",
  "/services/crm/optimisation-crm",
  "/services/crm/nettoyage-crm",
]);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const highPriorityRoutes = new Set([
    "", "/services", "/services/sites-web", "/services/sea", "/services/seo", "/services/integration-ia", "/services/crm",
    "/prix", "/contact", "/a-propos", "/portfolio", "/blog",
    "/offre-mensuelle", "/demande-maquette", "/estimation-prix-site-web",
  ]);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: ROUTES_REFONTE_POLES.has(route) ? REFONTE_POLES_UPDATED : SITE_LAST_UPDATED,
  }));

  // Blog articles — static + Supabase (merged, no duplicates)
  const staticBlogEntries: MetadataRoute.Sitemap = blogArticles.map((a) => ({
    url: `${SITE.url}/blog/${a.slug}`,
    lastModified: new Date(a.updatedAt ?? a.publishedAt),
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
          }));
      }
    } catch (err) {
      console.warn("[sitemap] Unexpected Supabase error:", err);
    }
  } else {
    console.warn("[sitemap] Supabase env vars missing — skipping dynamic blog entries");
  }

  const cityEntries: MetadataRoute.Sitemap = cities.filter((city) => !VILLES_RETIREES.includes(city.slug)).map((city) => ({
    url: `${SITE.url}/agence-web/${city.slug}`,
    lastModified: CITY_PAGES_UPDATED,
  }));

  const sectorEntries: MetadataRoute.Sitemap = sectors.map((s) => ({
    url: `${SITE.url}/solutions/${s.slug}`,
    lastModified: TEMPLATES_CREATED,
  }));

  const glossaryEntries: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/guide`, lastModified: new Date("2026-09-18") },
    { url: `${SITE.url}/glossaire`, lastModified: TEMPLATES_CREATED, },
    ...glossaryTerms.map((t) => ({
      url: `${SITE.url}/glossaire/${t.slug}`,
      lastModified: TEMPLATES_CREATED,
    })),
  ];

  // /creation-site-internet/[ville] redirige désormais (301) vers /agence-web/[ville]
  // pour cause de cannibalisation (cf. next.config.ts). On ne les liste plus au sitemap.

  const blogEntries = [...staticBlogEntries, ...supabaseBlogEntries];

  const guideEntries: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${SITE.url}/guide/${g.slug}`,
    lastModified: TEMPLATES_CREATED,
  }));

  const comparatifEntries: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${SITE.url}/comparatifs/${c.slug}`,
    lastModified: TEMPLATES_CREATED,
  }));

  const prixEntries: MetadataRoute.Sitemap = pricingPages.map((p) => ({
    url: `${SITE.url}/prix/${p.slug}`,
    lastModified: TEMPLATES_CREATED,
  }));

  // Seules les études de cas décrites dans fullCaseStudies ont une page (sinon 404).
  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.filter((cs) => cs.slug in fullCaseStudies).map((cs) => ({
    url: `${SITE.url}/etude-de-cas/${cs.slug}`,
    lastModified: TEMPLATES_CREATED,
  }));

  const devisEntries: MetadataRoute.Sitemap = devisServices.map((d) => ({
    url: `${SITE.url}/devis/${d.slug}`,
    lastModified: TEMPLATES_CREATED,
  }));

  return [
    ...staticEntries,
    ...blogEntries,
    ...cityEntries,
    ...sectorEntries,
    ...glossaryEntries,
    ...guideEntries,
    ...comparatifEntries,
    ...prixEntries,
    ...caseStudyEntries,
    ...devisEntries,
  ];
}
