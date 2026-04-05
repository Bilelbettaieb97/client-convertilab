# Strategie SEO - ConvertiLab

## Objectif

Se positionner sur les requetes a forte intention commerciale liees aux services web en Ile-de-France :

### Mots-cles principaux

| Mot-cle | Volume est. | Intention | Page cible |
|---------|-------------|-----------|------------|
| agence web Paris | Eleve | Commerciale | `/` (homepage) |
| creation site internet | Eleve | Commerciale | `/services/sites-web` |
| SEO Paris | Moyen | Commerciale | `/services/seo` |
| Google Ads Ile-de-France | Moyen | Commerciale | `/services/sea/google-ads` |
| agence digitale Rueil-Malmaison | Faible | Locale | `/` (homepage) |
| marketing digital Paris | Moyen | Informationnelle | `/services` |
| prix site web | Moyen | Commerciale | `/estimation-prix-site-web` |
| site internet pas cher | Moyen | Commerciale | `/offre-mensuelle` |
| landing page conversion | Faible | Informationnelle | `/services/sites-web/landing-page` |
| community management Paris | Moyen | Commerciale | `/services/social-media/community-management` |

### Mots-cles secondaires (blog)

- "combien coute un site web"
- "comment ameliorer son SEO"
- "Google Ads vs Meta Ads"
- "refonte site web checklist"
- "UX design bonnes pratiques"

## Avantage Technique : SSR/SSG natif

Le site est construit avec **Next.js App Router** en mode SSR (Server-Side Rendering) et SSG (Static Site Generation). Contrairement a une SPA (Single Page Application) classique :

- Les meta tags (`title`, `description`, `og:*`) sont presents dans le HTML initial **sans JavaScript**
- Les structured data JSON-LD sont rendus cote serveur
- Les pages de services sont generees statiquement (SSG) pour un chargement instantane
- Les pages dynamiques (blog, etudes de cas) utilisent le SSR avec cache

Cela signifie que **Google peut indexer parfaitement toutes les pages** sans avoir a executer JavaScript.

## Architecture SEO

### Arborescence en silo

```
/ (homepage)
├── /services (hub)
│   ├── /sites-web (silo)
│   │   ├── /landing-page
│   │   ├── /site-vitrine
│   │   ├── /site-ecommerce
│   │   ├── /application-web
│   │   └── /refonte-site
│   ├── /design (silo)
│   │   ├── /ui-ux
│   │   └── /identite-visuelle
│   ├── /seo (silo)
│   │   ├── /referencement
│   │   └── /audit
│   ├── /sea (silo)
│   │   ├── /google-ads
│   │   └── /meta-ads
│   └── /social-media (silo)
│       ├── /community-management
│       └── /strategie
├── /portfolio
├── /blog (content marketing)
│   └── /[slug] (articles)
├── /etude-de-cas
│   └── /[slug] (cas clients)
├── /contact
├── /a-propos
├── /offre-speciale
├── /offre-mensuelle
│   └── /devis
├── /demande-maquette
└── /estimation-prix-site-web
```

### Maillage interne

Deux composants dedies au maillage interne :

1. **RelatedServicesSection** (`src/components/internal-links/RelatedServicesSection.tsx`)
   - Affiche des services lies en bas de chaque page
   - Renforce les liens internes entre les silos de services
   - Present sur : homepage, services, a-propos, portfolio, contact

2. **SuggestedArticles** (`src/components/internal-links/SuggestedArticles.tsx`)
   - Suggere des articles de blog pertinents en bas de page
   - Augmente le temps de session et le pageviews/session
   - Present sur : a-propos, portfolio

### Breadcrumbs

Toutes les pages internes ont un fil d'Ariane :
- Composant visuel `Breadcrumb` (shadcn/ui)
- Schema JSON-LD `BreadcrumbList` associe
- Hierarchie coherente : Accueil > Categorie > Sous-categorie > Page

## Blog & Content Marketing

Le blog (`/blog`) sert de levier de content marketing pour :
- Attirer du trafic organique sur des requetes informationnelles longue traine
- Demontrer l'expertise (E-E-A-T)
- Alimenter le maillage interne vers les pages de services
- Fournir du contenu pour le social media et l'email marketing

### Sources de contenu
- Articles statiques dans `src/data/blog-articles.ts`
- Articles dynamiques via Supabase (table `blog_articles`, champs : slug, title, excerpt, meta_description, content, image, category, tags, read_time, author_name, published, published_at)

### Schema Article
Chaque article de blog a :
- Metadata dynamique (title, description, keywords, OG, Twitter)
- URL canonique
- Schema JSON-LD `Article` (a implementer dans le client)

## SEO Local

Le site exploite le SEO local via :
- Schema `LocalBusiness` sur la homepage (Rueil-Malmaison, 92500, IDF)
- Meta tags geo : `geo.region: FR-IDF`, `geo.placename: Rueil-Malmaison`, `ICBM: 48.8769, 2.1894`
- Ancrage textuel "Paris", "Ile-de-France", "Rueil-Malmaison" dans les titles et descriptions
- Hreflang `fr` et `x-default`

## Tracking & Analytics

- Google Analytics 4 : `G-N9NTVTE0R6`
- Google Tag Manager : `GTM-5TDHTDHP`
- Meta Pixel : `1413733970752208`
- Google AdSense : `ca-pub-5844925774606937`
