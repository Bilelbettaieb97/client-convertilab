# Checklist SEO - ConvertiLab

Checklist à vérifier **avant chaque mise en production**.

## Meta Tags

- [ ] Toutes les pages ont un `title` unique
- [ ] Tous les `title` suivent le template `%s | ConvertiLab`
- [ ] Toutes les pages ont une `description` de moins de 160 caractères
- [ ] Les `description` contiennent le mot-clé principal de la page
- [ ] L'URL canonique (`alternates.canonical`) est correcte sur chaque page
- [ ] Les mots-clés (`keywords`) sont définis sur les pages stratégiques

## Open Graph & Social

- [ ] Chaque page a un `og:title`
- [ ] Chaque page a un `og:description`
- [ ] L'image OG par défaut (`og-image.png` 1200x630) est présente dans `/public`
- [ ] Les pages blog et études de cas ont une image OG spécifique
- [ ] Les meta Twitter (`twitter:card`, `twitter:title`, `twitter:description`) sont présentes
- [ ] Le `twitter:card` est en mode `summary_large_image`

## Structured Data (JSON-LD)

- [ ] Homepage : Organization, LocalBusiness, FAQPage, Product (Reviews), WebSite, HowTo
- [ ] Pages services : Service + BreadcrumbList
- [ ] Pages blog : BlogPosting + BreadcrumbList (déjà implémenté dans `/blog/[slug]/page.tsx`)
- [ ] Études de cas : Article + BreadcrumbList
- [ ] Toutes les pages internes : BreadcrumbList
- [ ] Valider sur [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Valider sur [Schema.org Validator](https://validator.schema.org/)
- [ ] Vérifier dans Google Search Console > Enhancements
- [ ] **`reviewCount` à jour** → modifier `SITE.reviews.count` dans `src/lib/constants.ts` (se propage sur ~33 fichiers)

## Sitemap & Robots

- [ ] Le sitemap (`/sitemap.xml`) contient toutes les routes publiques
- [ ] Les nouvelles pages statiques sont ajoutées dans `staticRoutes` de `sitemap.ts`
- [ ] Les nouvelles pages haute priorité sont ajoutées dans `highPriorityRoutes`
- [ ] Le `lastModified` utilise des dates fixes — NE PAS utiliser `new Date()` sans valeur
- [ ] Le `robots.txt` bloque `/admin`, `/newsletter-confirmation`, `/api`
- [ ] Le sitemap est référencé dans le `robots.txt`
- [ ] Le sitemap est soumis dans Google Search Console
- [ ] Les pages formulaires intermédiaires sont en `noindex` (ex: `/offre-mensuelle/devis`)

## Contenu & Images

- [ ] Toutes les images ont un attribut `alt` descriptif (vérifier avec le script Python dans `/docs/seo/`)
- [ ] Les images utilisent le composant `next/image` (optimisation automatique)
- [ ] Les images ont des `sizes` adaptés aux breakpoints
- [ ] Le lazy loading est actif sur les images hors viewport
- [ ] Les textes des pages contiennent les mots-clés cibles naturellement

## Maillage Interne

- [ ] Les pages services (feuilles) ont `RelatedServicesSection` avec `exclude` sur leur propre URL
- [ ] Les pages villes (`/agence-web/*`) ont `SuggestedArticles` + `RelatedServicesSection`
- [ ] Les pages solutions (`/solutions/*`) ont `SuggestedArticles` + `RelatedServicesSection`
- [ ] Le fil d'Ariane (Breadcrumb) est présent sur toutes les pages internes
- [ ] Aucun lien interne ne mène vers une 404
- [ ] Les ancres de liens sont descriptives (pas de "cliquez ici")

## SEO Technique

- [ ] Le site est en HTTPS
- [ ] Les pages se chargent en SSR/SSG (pas de SPA avec rendering client-only)
- [ ] Les meta tags sont visibles dans le HTML source (pas de JS requis)
- [ ] Les redirections 301 sont en place pour les anciennes URLs (si migration)
- [ ] Pas de contenu dupliqué (canonical correct)
- [ ] Le `hreflang` est correct (`fr` + `x-default`)
- [ ] La balise `lang="fr"` est présente sur le `<html>`

## SEO Local

- [ ] Schema `LocalBusiness` avec adresse, téléphone, coordonnées GPS
- [ ] Meta geo (`geo.region`, `geo.placename`, `ICBM`) présentes
- [ ] Le numéro de téléphone est au format international (`+33...`)
- [ ] L'adresse physique est cohérente avec Google My Business

## Performance

- [ ] Score Lighthouse Performance > 80
- [ ] Score Lighthouse Accessibility > 90
- [ ] Score Lighthouse SEO > 90
- [ ] Score Lighthouse Best Practices > 80
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Les polices sont preloadées (next/font)
- [ ] Les domaines externes sont en `preconnect` ou `dns-prefetch`

## Mobile

- [ ] Le site est mobile-friendly (test Google)
- [ ] Les touch targets font au moins 44px
- [ ] La navigation fonctionne au hamburger sur mobile
- [ ] Les formulaires sont utilisables sur mobile (champs pleine largeur)
- [ ] Le `StickyMobileCTA` fonctionne correctement
- [ ] Le viewport meta est correct (`width=device-width, initial-scale=1`)

## Analytics & Tracking

- [ ] Google Analytics 4 est installé et reçoit des données
- [ ] Google Tag Manager est configuré
- [ ] Meta Pixel est actif
- [ ] Les événements de conversion sont tracés (soumission formulaire, clic CTA, appel)
- [ ] Les UTM sont configurés pour les campagnes

## Avant chaque nouvelle page

1. Définir le mot-clé cible
2. Écrire un `title` unique (< 60 caractères) incluant le mot-clé
3. Écrire une `description` unique (< 160 caractères) avec CTA
4. Définir l'URL canonique
5. Ajouter le schema BreadcrumbList
6. Ajouter la route dans `sitemap.ts` (+ `highPriorityRoutes` si applicable)
7. Créer les liens internes depuis/vers les pages existantes
8. Tester le rendu OG avec [metatags.io](https://metatags.io/)
9. Si page formulaire/confirmation → ajouter `robots: { index: false, follow: true }`

## Avant chaque nouvelle page programmatique

En plus des étapes ci-dessus :
1. Créer le fichier data (`src/data/mon-type.ts`) avec les entrées
2. Ajouter la génération dans `sitemap.ts` avec `TEMPLATES_CREATED` comme `lastModified`
3. Ajouter `<SuggestedArticles />` et `<RelatedServicesSection />` avant `<Footer />`
4. Vérifier que chaque entrée a un `canonical` dans `generateMetadata`
