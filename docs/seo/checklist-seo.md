# Checklist SEO - ConvertiLab

Checklist a verifier **avant chaque mise en production**.

## Meta Tags

- [ ] Toutes les pages ont un `title` unique
- [ ] Tous les `title` suivent le template `%s | ConvertiLab`
- [ ] Toutes les pages ont une `description` de moins de 160 caracteres
- [ ] Les `description` contiennent le mot-cle principal de la page
- [ ] L'URL canonique (`alternates.canonical`) est correcte sur chaque page
- [ ] Les mots-cles (`keywords`) sont definis sur les pages strategiques

## Open Graph & Social

- [ ] Chaque page a un `og:title`
- [ ] Chaque page a un `og:description`
- [ ] L'image OG par defaut (`og-image.png` 1200x630) est presente dans `/public`
- [ ] Les pages blog et etudes de cas ont une image OG specifique
- [ ] Les meta Twitter (`twitter:card`, `twitter:title`, `twitter:description`) sont presentes
- [ ] Le `twitter:card` est en mode `summary_large_image`

## Structured Data (JSON-LD)

- [ ] Homepage : Organization, LocalBusiness, FAQPage, Product (Reviews), WebSite, HowTo
- [ ] Pages services : Service + BreadcrumbList
- [ ] Pages blog : meta OG type `article` avec `publishedTime` et `authors`
- [ ] Etudes de cas : Article + BreadcrumbList
- [ ] Toutes les pages internes : BreadcrumbList
- [ ] Valider sur [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Valider sur [Schema.org Validator](https://validator.schema.org/)
- [ ] Verifier dans Google Search Console > Enhancements

## Sitemap & Robots

- [ ] Le sitemap (`/sitemap.xml`) contient toutes les routes publiques
- [ ] Les nouvelles pages sont ajoutees dans `staticRoutes` de `sitemap.ts`
- [ ] Le `robots.txt` bloque `/admin`, `/newsletter-confirmation`, `/api`
- [ ] Le sitemap est reference dans le `robots.txt`
- [ ] Le sitemap est soumis dans Google Search Console

## Contenu & Images

- [ ] Toutes les images ont un attribut `alt` descriptif
- [ ] Les images utilisent le composant `next/image` (optimisation automatique)
- [ ] Les images ont des `sizes` adaptes aux breakpoints
- [ ] Le lazy loading est actif sur les images hors viewport
- [ ] Les textes des pages contiennent les mots-cles cibles naturellement

## Maillage Interne

- [ ] Les pages services ont une section `RelatedServicesSection`
- [ ] Les pages cles ont une section `SuggestedArticles`
- [ ] Le fil d'Ariane (Breadcrumb) est present sur toutes les pages internes
- [ ] Aucun lien interne ne mene vers une 404
- [ ] Les ancres de liens sont descriptives (pas de "cliquez ici")

## SEO Technique

- [ ] Le site est en HTTPS
- [ ] Les pages se chargent en SSR/SSG (pas de SPA avec rendering client-only)
- [ ] Les meta tags sont visibles dans le HTML source (pas de JS requis)
- [ ] Les redirections 301 sont en place pour les anciennes URLs (si migration)
- [ ] Pas de contenu duplique (canonical correcte)
- [ ] Le `hreflang` est correct (`fr` + `x-default`)
- [ ] La balise `lang="fr"` est presente sur le `<html>`

## SEO Local

- [ ] Schema `LocalBusiness` avec adresse, telephone, coordonnees GPS
- [ ] Meta geo (`geo.region`, `geo.placename`, `ICBM`) presentes
- [ ] Le numero de telephone est au format international (`+33...`)
- [ ] L'adresse physique est coherente avec Google My Business

## Performance

- [ ] Score Lighthouse Performance > 80
- [ ] Score Lighthouse Accessibility > 90
- [ ] Score Lighthouse SEO > 90
- [ ] Score Lighthouse Best Practices > 80
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Les polices sont preloadees (next/font)
- [ ] Les domaines externes sont en `preconnect` ou `dns-prefetch`

## Mobile

- [ ] Le site est mobile-friendly (test Google)
- [ ] Les touch targets font au moins 44px
- [ ] La navigation fonctionne au hamburger sur mobile
- [ ] Les formulaires sont utilisables sur mobile (champs pleine largeur)
- [ ] Le `StickyMobileCTA` fonctionne correctement
- [ ] Le viewport meta est correct (`width=device-width, initial-scale=1`)

## Analytics & Tracking

- [ ] Google Analytics 4 est installe et recoit des donnees
- [ ] Google Tag Manager est configure
- [ ] Meta Pixel est actif
- [ ] Les evenements de conversion sont traces (soumission formulaire, clic CTA, appel)
- [ ] Les UTM sont configures pour les campagnes

## Avant chaque nouvelle page

1. Definir le mot-cle cible
2. Ecrire un `title` unique (< 60 caracteres) incluant le mot-cle
3. Ecrire une `description` unique (< 160 caracteres) avec CTA
4. Definir l'URL canonique
5. Ajouter le schema BreadcrumbList
6. Ajouter la route dans `sitemap.ts`
7. Creer les liens internes depuis/vers les pages existantes
8. Tester le rendu OG avec [metatags.io](https://metatags.io/)
