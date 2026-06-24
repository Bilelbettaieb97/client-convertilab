# Sitemap & Robots - ConvertiLab

## Sitemap (`src/app/sitemap.ts`)

### Fonctionnement

Le sitemap est généré **dynamiquement** par Next.js via `src/app/sitemap.ts`. URL :

```
https://www.convertilab.com/sitemap.xml
```

### Dates `lastModified`

| Type de page | Date utilisée |
|---|---|
| Pages clés (home, services, portfolio…) | `SITE_LAST_UPDATED` = `2026-05-01` (à mettre à jour à chaque refonte majeure) |
| Templates programmatiques (villes, glossaire, solutions…) | `TEMPLATES_CREATED` = `2026-01-01` |
| Articles blog statiques | `new Date(a.publishedAt)` — date réelle de l'article |
| Articles blog Supabase | `new Date(a.updated_at)` — date réelle depuis Supabase |

**Ne jamais utiliser `new Date()` seul** — Google verrait toutes les pages comme modifiées à chaque deploy.

### Routes statiques (42 routes)

```
/
/services
/services/sites-web
/services/sites-web/landing-page
/services/sites-web/site-vitrine
/services/sites-web/site-ecommerce
/services/sites-web/application-web
/services/sites-web/refonte-site
/services/design
/services/design/ui-ux
/services/design/identite-visuelle
/services/seo
/services/seo/referencement
/services/seo/audit
/services/sea
/services/sea/google-ads
/services/sea/meta-ads
/services/social-media
/services/social-media/community-management
/services/social-media/strategie
/portfolio
/contact
/a-propos
/blog
/offre-speciale
/offre-mensuelle
/demande-maquette
/estimation-prix-site-web
/politique-de-confidentialite
/politique-de-cookies
/agence-web
/solutions
/seo-check
/speed-check
/design-score
/estimateur-ads
/generateur-mentions-legales
/generateur-robots-sitemap
/rapport-sectoriel
/comparateur-sites
/prix
/comparatifs
/outils
```

### Pages programmatiques dynamiques

| Type | Fichier data | URL pattern | ~Nb pages |
|---|---|---|---|
| Agence web par ville | `src/data/cities.ts` | `/agence-web/[ville]` | ~53 |
| Solutions par secteur | `src/data/sectors.ts` | `/solutions/[secteur]` | ~20 |
| Création site par ville (top 10) | `src/data/cities.ts` | `/creation-site-internet/[ville]` | 10 |
| Glossaire SEO | `src/data/glossary.ts` | `/glossaire/[terme]` | ~31 |
| Guides pratiques | `src/data/guides.ts` | `/guide/[slug]` | variable |
| Comparatifs | `src/data/comparisons.ts` | `/comparatifs/[slug]` | variable |
| Pages prix | `src/data/pricing-pages.ts` | `/prix/[service]` | variable |
| Études de cas | `src/data/case-studies.ts` | `/etude-de-cas/[slug]` | ~10 |
| Pages devis | `src/data/devis-pages.ts` | `/devis/[service]` | variable |
| Articles blog statiques | `src/data/blog-articles.ts` | `/blog/[slug]` | ~66 |
| Articles blog Supabase | table `blog_articles` | `/blog/[slug]` | variable |

**Total sitemap estimé : 400+ URLs**

### Priorités

| Condition | Priority | changeFrequency |
|---|---|---|
| Homepage (`/`) | `1.0` | `weekly` |
| Pages high-priority (services, portfolio, prix…) | `0.9` | `monthly` |
| Pages `/services/*` | `0.8` | `monthly` |
| Pages villes (`/agence-web/*`, `/creation-site-internet/*`) | `0.8` | `monthly` |
| Pages prix et devis | `0.7` | `monthly` |
| Pages secteurs, autres statiques | `0.7` | `monthly` |
| Blog, guides, comparatifs | `0.6` | `monthly` |
| Glossaire | `0.5` | `monthly` |

### Comment ajouter une nouvelle route statique

1. Ouvrir `src/app/sitemap.ts`
2. Ajouter la route dans `staticRoutes`
3. Si c'est une page haute priorité, l'ajouter aussi dans `highPriorityRoutes`
4. Déployer

### Routes exclues du sitemap (volontairement)

- `/admin` et sous-pages — back-office
- `/newsletter-confirmation` — page confirmation (noindex)
- `/offre-mensuelle/devis` — formulaire intermédiaire (noindex)
- `/api/*` — endpoints API

---

## Robots (`src/app/robots.ts`)

### Configuration actuelle

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /newsletter-confirmation
Disallow: /api
Disallow: /*.webmanifest

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://www.convertilab.com/sitemap.xml
```

Les bots IA (GPT, Claude, Perplexity, Google SGE) sont **autorisés** intentionnellement pour maximiser la visibilité dans les résultats IA.

### Ajouter une règle de blocage

```typescript
// src/app/robots.ts
{
  userAgent: "MonBot",
  disallow: ["/"],
}
```
