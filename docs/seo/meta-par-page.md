# Meta par Page - ConvertiLab

## Valeurs centralisées

**`reviewCount` et `ratingValue`** → modifier uniquement dans `src/lib/constants.ts` (`SITE.reviews`) — propagation automatique sur ~33 fichiers.

```typescript
// src/lib/constants.ts
reviews: {
  count: "15",   // ← mettre à jour quand Trustpilot évolue
  rating: "4.9",
}
```

---

## Pages Statiques

| Route | Title | Description | Canonical | Robots |
|---|---|---|---|---|
| `/` | Agence Web Paris & Île-de-France \| SEO & Ads \| ConvertiLab | Agence web à Paris & Rueil-Malmaison : création site internet, SEO, Google Ads, Meta Ads. +150 clients en Île-de-France, 4.9★ Trustpilot. Devis gratuit. | `https://www.convertilab.com` | index, follow |
| `/services` | Services Marketing Digital Paris \| ConvertiLab | Sites web dès 500€, SEO, Google Ads, Meta Ads. +150 clients, 4.9★ Trustpilot. Devis gratuit sous 24h, sans engagement. | `https://www.convertilab.com/services` | index, follow |
| `/services/sites-web` | Création Site Internet Paris dès 500€ \| ConvertiLab | Agence web Paris & Île-de-France : landing page, site vitrine, e-commerce. Prix fixes, livraison rapide. Devis gratuit. | `https://www.convertilab.com/services/sites-web` | index, follow |
| `/services/sites-web/landing-page` | Landing Page à partir de 500€ \| Haute Conversion \| ConvertiLab | Landing page haute conversion livrée en 5-7 jours. Optimisée pour Google Ads & Meta Ads. Devis gratuit. | `https://www.convertilab.com/services/sites-web/landing-page` | index, follow |
| `/services/sites-web/site-vitrine` | Site Vitrine à partir de 500€ \| Agence Web Paris \| ConvertiLab | Site vitrine professionnel en 10-15 jours. Design sur-mesure, SEO optimisé, prix fixe garanti. Devis gratuit. | `https://www.convertilab.com/services/sites-web/site-vitrine` | index, follow |
| `/services/sites-web/site-ecommerce` | Site E-commerce à partir de 800€ \| Agence Paris \| ConvertiLab | Boutique en ligne professionnelle en 21-30 jours. Paiement sécurisé, gestion des stocks, SEO intégré. Devis gratuit sous 24h. | `https://www.convertilab.com/services/sites-web/site-ecommerce` | index, follow |
| `/services/sites-web/application-web` | Application Web Sur-Mesure \| Paris \| ConvertiLab | Développement d'applications web sur-mesure : SaaS, portails clients, outils métiers. Architecture scalable et sécurisée. Devis gratuit. | `https://www.convertilab.com/services/sites-web/application-web` | index, follow |
| `/services/sites-web/refonte-site` | Refonte Site Web \| Modernisation SEO \| ConvertiLab | Modernisez votre site web : design actuel, SEO préservé, conversion optimisée. Audit gratuit et devis sous 24h. | `https://www.convertilab.com/services/sites-web/refonte-site` | index, follow |
| `/services/design` | Design UI/UX & Identité Visuelle Paris \| ConvertiLab | Design UI/UX et identité visuelle : logo, charte graphique, prototypes Figma. Interfaces qui convertissent. Devis gratuit. | `https://www.convertilab.com/services/design` | index, follow |
| `/services/design/ui-ux` | Design UI/UX \| Interfaces Web \| ConvertiLab | Design UI/UX professionnel : wireframes, prototypes Figma, tests utilisateurs. Interfaces qui convertissent. Devis gratuit. | `https://www.convertilab.com/services/design/ui-ux` | index, follow |
| `/services/design/identite-visuelle` | Identité Visuelle \| Logo & Branding \| ConvertiLab | Création de logo et charte graphique sur-mesure. Démarquez-vous avec une identité visuelle forte et mémorable. Devis gratuit. | `https://www.convertilab.com/services/design/identite-visuelle` | index, follow |
| `/services/seo` | SEO & Référencement Naturel Paris \| ConvertiLab | Référencement naturel et audit SEO. Atteignez la page 1 de Google avec une stratégie sur-mesure. Devis gratuit. | `https://www.convertilab.com/services/seo` | index, follow |
| `/services/seo/referencement` | Référencement SEO \| Page 1 Google \| ConvertiLab | Stratégie SEO complète : optimisation on-page, netlinking, contenu. Atteignez la page 1 de Google. Audit SEO gratuit. | `https://www.convertilab.com/services/seo/referencement` | index, follow |
| `/services/seo/audit` | Audit SEO Complet \| ConvertiLab | Audit SEO complet : technique, contenu, concurrence. Rapport détaillé + plan d'action priorisé. Premier audit gratuit. | `https://www.convertilab.com/services/seo/audit` | index, follow |
| `/services/sea` | Google Ads & Meta Ads \| Agence SEA Paris \| ConvertiLab | Campagnes publicitaires Google Ads et Meta Ads optimisées. x4.8 ROAS moyen. Audit gratuit et devis sous 24h. | `https://www.convertilab.com/services/sea` | index, follow |
| `/services/sea/google-ads` | Google Ads \| x4.8 ROAS Moyen \| ConvertiLab | Campagnes Google Ads optimisées : Search, Shopping, Display, Remarketing. x4.8 ROAS moyen. Audit gratuit. | `https://www.convertilab.com/services/sea/google-ads` | index, follow |
| `/services/sea/meta-ads` | Meta Ads \| Facebook & Instagram \| ConvertiLab | Publicités Facebook et Instagram : ciblage précis, créatifs optimisés, ROI maximisé. Audit de compte gratuit. | `https://www.convertilab.com/services/sea/meta-ads` | index, follow |
| `/services/social-media` | Social Media & Community Management \| ConvertiLab | Développez votre communauté et engagez votre audience sur les réseaux sociaux. Community management, stratégie social media. | `https://www.convertilab.com/services/social-media` | index, follow |
| `/services/social-media/community-management` | Community Management \| Gestion Réseaux Sociaux \| ConvertiLab | Confiez la gestion de vos réseaux sociaux à nos experts. Contenu engageant, modération, calendrier éditorial, reporting. | `https://www.convertilab.com/services/social-media/community-management` | index, follow |
| `/services/social-media/strategie` | Stratégie Social Media \| Plan Marketing Réseaux Sociaux \| ConvertiLab | Stratégie social media sur-mesure : audit, benchmark, ligne éditoriale, KPIs. | `https://www.convertilab.com/services/social-media/strategie` | index, follow |
| `/portfolio` | Portfolio \| +150 Projets Web Réussis \| ConvertiLab | +150 clients, +280% de CA moyen. Études de cas e-commerce, restaurants, B2B. Découvrez nos résultats concrets. | `https://www.convertilab.com/portfolio` | index, follow |
| `/a-propos` | À Propos \| Agence Web Paris \| ConvertiLab | Découvrez ConvertiLab, agence web à Paris. +150 clients accompagnés, 4.9★ Trustpilot. Expertise sites web, SEO et Ads. | `https://www.convertilab.com/a-propos` | index, follow |
| `/contact` | Contact \| Devis Gratuit sous 24h \| ConvertiLab | Agence web à Rueil-Malmaison & Paris. Devis gratuit sous 24h, consultation 30 min offerte. Tél : +33 6 16 47 72 45. | `https://www.convertilab.com/contact` | index, follow |
| `/blog` | Blog - Conseils Web, SEO et Business \| ConvertiLab | Articles et guides pratiques sur la création de sites web, le SEO et le marketing digital. | `https://www.convertilab.com/blog` | index, follow |
| `/offre-speciale` | Offre Spéciale - Site Web Pro à 300€ \| ConvertiLab | Offre limitée : obtenez un site web professionnel pour seulement 300€. Design personnalisé, livraison en 7 jours. | `https://www.convertilab.com/offre-speciale` | index, follow |
| `/offre-mensuelle` | Site Internet à 39€/mois \| Propriétaire, visible sur Google \| ConvertiLab | Votre site internet professionnel pour 39€/mois. Propriétaire, visible sur Google dès le lancement. Livré en 7 jours. | `https://www.convertilab.com/offre-mensuelle` | index, follow |
| `/offre-mensuelle/devis` | Demandez votre site vitrine — Réponse sous 24h \| ConvertiLab | Formulaire de devis rapide, réponse sous 24h. | `https://www.convertilab.com/offre-mensuelle/devis` | **noindex**, follow |
| `/demande-maquette` | Demande de Maquette Gratuite \| ConvertiLab | Demandez une maquette gratuite pour votre futur site web. Design personnalisé sous 48h. | `https://www.convertilab.com/demande-maquette` | index, follow |
| `/estimation-prix-site-web` | Estimation Prix Site Web Gratuite \| ConvertiLab | Estimez gratuitement le prix de votre site web. Site vitrine, e-commerce, landing page ou refonte. | `https://www.convertilab.com/estimation-prix-site-web` | index, follow |
| `/newsletter-confirmation` | Inscription confirmée \| ConvertiLab | — | `https://www.convertilab.com/newsletter-confirmation` | **noindex** |

---

## Pages Programmatiques

| Route | Metadata source | Canonical |
|---|---|---|
| `/agence-web/[ville]` | `generateMetadata` dans la page | `${SITE.url}/agence-web/${city.slug}` |
| `/creation-site-internet/[ville]` | `generateMetadata` | `${SITE.url}/creation-site-internet/${city.slug}` |
| `/solutions/[secteur]` | `generateMetadata` | `${SITE.url}/solutions/${sector.slug}` |
| `/glossaire/[terme]` | `generateMetadata` | `${SITE.url}/glossaire/${term.slug}` |
| `/guide/[slug]` | `generateMetadata` | `${SITE.url}/guide/${slug}` |
| `/comparatifs/[slug]` | `generateMetadata` | `${SITE.url}/comparatifs/${slug}` |
| `/prix/[service]` | `generateMetadata` | `${SITE.url}/prix/${slug}` |
| `/devis/[service]` | `generateMetadata` | `${SITE.url}/devis/${service}` |
| `/etude-de-cas/[slug]` | `generateMetadata` | `${SITE.url}/etude-de-cas/${slug}` |
| `/blog/[slug]` | `generateMetadata` | `${SITE.url}/blog/${article.slug}` |

---

## Pages Admin (non indexées)

| Route | Robots |
|---|---|
| `/admin` | Bloqué par robots.txt (`disallow: /admin`) |
| `/admin/articles/new` | Bloqué par robots.txt |
| `/admin/articles/[id]/edit` | Bloqué par robots.txt |

---

## Metadata Globale (layout.tsx)

```typescript
metadataBase: new URL("https://www.convertilab.com"),
title: {
  default: "Agence Web Paris & Île-de-France | SEO & Ads | ConvertiLab",
  template: "%s | ConvertiLab",
},
```

## Open Graph Global

- Type : `website`
- Locale : `fr_FR`
- Image par défaut : `https://www.convertilab.com/og-image.png` (1200x630)

## Hreflang

```typescript
alternates: {
  languages: {
    "fr": "https://www.convertilab.com",
    "x-default": "https://www.convertilab.com",
  }
}
```
