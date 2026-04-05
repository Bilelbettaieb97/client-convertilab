# Structured Data (JSON-LD) - ConvertiLab

## Homepage (`/`)

La homepage contient **6 schemas JSON-LD** :

### 1. Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ConvertiLab",
  "url": "https://convertilab.com",
  "logo": "https://convertilab.com/images/logo.png",
  "sameAs": [
    "https://www.youtube.com/@Convertilab",
    "https://www.tiktok.com/@convertilab",
    "https://www.instagram.com/convertilab/",
    "https://linkedin.com/in/bettaieb-bilel/",
    "https://www.facebook.com/Convertilab/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33616477245",
    "contactType": "customer service",
    "availableLanguage": "French"
  }
}
```

### 2. LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ConvertiLab",
  "url": "https://convertilab.com",
  "telephone": "+33616477245",
  "email": "contact@convertilab.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rueil-Malmaison",
    "postalCode": "92500",
    "addressRegion": "Ile-de-France",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "48.8769",
    "longitude": "2.1894"
  },
  "priceRange": "euro euro",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5"
  }
}
```

### 3. FAQPage

5 questions/reponses couvrant :
- Services proposes (offre 360)
- Delais de resultats (Ads immediat, SEO 3-6 mois, social 1-3 mois)
- Mesure du ROI (GA, pixels, UTMs, rapports mensuels)
- Difference avec une agence classique (tunnel complet)
- Budget a prevoir (a partir de 500eur/mois)

### 4. Product (Reviews)

```json
{
  "@type": "Product",
  "name": "Services ConvertiLab",
  "aggregateRating": {
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5"
  },
  "review": [
    { "author": "Marie Dubois", "ratingValue": "5", "reviewBody": "..." },
    { "author": "Thomas Laurent", "ratingValue": "5", "reviewBody": "..." },
    { "author": "Sophie Martin", "ratingValue": "5", "reviewBody": "..." },
    { "author": "Alexandre Chen", "ratingValue": "5", "reviewBody": "..." }
  ]
}
```

### 5. WebSite

```json
{
  "@type": "WebSite",
  "name": "ConvertiLab",
  "url": "https://convertilab.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://convertilab.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### 6. HowTo

Processus en 5 etapes :
1. Audit & Strategie
2. Plan d'Action
3. Mise en Place
4. Optimisation Continue
5. Scale & Croissance

`totalTime: "P30D"` (30 jours)

---

## Pages Services

### Schema Service

Present sur les pages de services detaillees (site-vitrine, site-ecommerce, design, SEO, SEA) :

```json
{
  "@type": "Service",
  "name": "Creation Site Vitrine",
  "description": "Site vitrine professionnel sur-mesure...",
  "url": "https://convertilab.com/services/sites-web/site-vitrine",
  "provider": {
    "@type": "Organization",
    "name": "ConvertiLab"
  },
  "offers": {
    "@type": "Offer",
    "price": 500,
    "priceCurrency": "EUR"
  }
}
```

Pages avec schema Service :
- `/services/sites-web/site-vitrine` (500 EUR)
- `/services/sites-web/site-ecommerce` (800 EUR)
- `/services/design` (sans prix)
- `/services/seo` (sans prix)
- `/services/sea` (sans prix)

### Schema BreadcrumbList

Present sur **toutes les pages internes**. Exemple pour une page de service :

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "position": 1, "name": "Accueil", "item": "https://convertilab.com" },
    { "position": 2, "name": "Services", "item": "https://convertilab.com/services" },
    { "position": 3, "name": "Sites Web", "item": "https://convertilab.com/services/sites-web" },
    { "position": 4, "name": "Site Vitrine", "item": "https://convertilab.com/services/sites-web/site-vitrine" }
  ]
}
```

Pages avec BreadcrumbList :
- `/services` (2 niveaux)
- `/services/sites-web` (3 niveaux)
- `/services/sites-web/*` (4 niveaux)
- `/services/design` et sous-pages
- `/services/seo` et sous-pages
- `/services/sea` et sous-pages
- `/a-propos` (2 niveaux)
- `/contact` (2 niveaux)
- `/portfolio` (2 niveaux)
- `/politique-de-confidentialite` (2 niveaux)
- `/etude-de-cas/[slug]` (3 niveaux)

---

## Blog (`/blog/[slug]`)

Les articles de blog utilisent les meta OG de type `article` avec :
- `publishedTime`
- `authors`
- Image OG dynamique

Schema Article a implementer dans le composant client si necessaire.

---

## Etudes de Cas (`/etude-de-cas/[slug]`)

Chaque etude de cas a 2 schemas :

### Article

```json
{
  "@type": "Article",
  "headline": "{client} - {title}",
  "description": "{subtitle}",
  "image": "{image}"
}
```

### BreadcrumbList

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "position": 1, "name": "Accueil", "item": "https://convertilab.com" },
    { "position": 2, "name": "Portfolio", "item": "https://convertilab.com/portfolio" },
    { "position": 3, "name": "{client}", "item": "https://convertilab.com/etude-de-cas/{slug}" }
  ]
}
```

---

## Validation

Tester les structured data avec :
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- Google Search Console > Enhancements
