# Sitemap & Robots - ConvertiLab

## Sitemap (`src/app/sitemap.ts`)

### Fonctionnement

Le sitemap est genere **dynamiquement** par Next.js via le fichier `src/app/sitemap.ts`. Il est accessible a l'URL :

```
https://convertilab.com/sitemap.xml
```

### Routes statiques incluses

Le sitemap inclut actuellement **31 routes statiques** :

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
/offre-mensuelle/devis
/demande-maquette
/estimation-prix-site-web
/politique-de-confidentialite
```

### Priorites

| Condition | Priority | changeFrequency |
|-----------|----------|-----------------|
| Homepage (`/`) | `1.0` | `weekly` |
| Pages `/services/*` | `0.8` | `monthly` |
| Toutes les autres pages | `0.7` | `monthly` |

### Derniere modification

Toutes les entrees utilisent `new Date()` comme `lastModified`, ce qui signifie la date du build/deploiement.

### Articles de blog (TODO)

Un commentaire dans le code indique l'intention d'ajouter les articles de blog dynamiques via Supabase :

```typescript
// TODO: Fetch blog articles from Supabase when blog is dynamic
// const { data: articles } = await supabase
//   .from('blog_articles')
//   .select('slug, updated_at')
//   .eq('published', true)
// const blogEntries = articles?.map(a => ({
//   url: `${SITE.url}/blog/${a.slug}`,
//   lastModified: a.updated_at
// })) ?? []
```

### Comment ajouter une nouvelle route au sitemap

1. Ouvrir `src/app/sitemap.ts`
2. Ajouter la route dans le tableau `staticRoutes` :
   ```typescript
   const staticRoutes = [
     // ... routes existantes
     "/ma-nouvelle-page",
   ];
   ```
3. La priorite sera automatiquement calculee :
   - `0.8` si la route commence par `/services`
   - `0.7` pour toutes les autres
4. Pour une priorite personnalisee, modifier la logique dans `staticEntries.map()`
5. Deployer : le sitemap sera regenere automatiquement

### Routes exclues du sitemap

Ces routes ne sont **pas** dans le sitemap (volontairement) :
- `/admin` et sous-pages (back-office)
- `/newsletter-confirmation` (page de confirmation, noindex)
- `/api/*` (endpoints API)
- `/etude-de-cas/[slug]` (a ajouter quand les etudes de cas seront listees dynamiquement)

---

## Robots (`src/app/robots.ts`)

### Configuration

```typescript
{
  rules: [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/newsletter-confirmation", "/api"],
    },
  ],
  sitemap: "https://convertilab.com/sitemap.xml",
}
```

### Resultat genere

Le fichier `robots.txt` accessible a `https://convertilab.com/robots.txt` contient :

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /newsletter-confirmation
Disallow: /api

Sitemap: https://convertilab.com/sitemap.xml
```

### Routes bloquees

| Route | Raison |
|-------|--------|
| `/admin` | Back-office de gestion des articles. Pas de contenu indexable. |
| `/newsletter-confirmation` | Page de confirmation post-inscription. Aussi marquee `noindex` dans les metadata. |
| `/api` | Endpoints API (formulaires, webhooks). Pas de contenu HTML. |

### Comment modifier les regles robots

1. Ouvrir `src/app/robots.ts`
2. Ajouter/retirer des chemins dans le tableau `disallow`
3. Pour bloquer un bot specifique, ajouter un nouveau bloc `rules` :
   ```typescript
   {
     userAgent: "GPTBot",
     disallow: ["/"],
   }
   ```
