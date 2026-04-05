# Sitemap -- Carte complete du site

Legende des types de rendu :
- **Static** = contenu entierement statique, pas de donnees dynamiques
- **SSG** = genere au build, potentiellement avec revalidation
- **Dynamic** = rendu cote serveur a chaque requete (donnees Supabase, params dynamiques)

---

## Pages principales

| Route                          | Type     | Description                                 |
|--------------------------------|----------|---------------------------------------------|
| `/`                            | Static   | Page d'accueil                              |
| `/services`                    | Static   | Hub de tous les services                    |
| `/portfolio`                   | Static   | Realisations et projets clients             |
| `/contact`                     | Static   | Formulaire de contact + coordonnees         |
| `/a-propos`                    | Static   | Presentation de l'agence                    |
| `/blog`                        | Dynamic  | Liste des articles (Supabase)               |

---

## Pages services -- Sites Web

| Route                                        | Type     | Description                          |
|----------------------------------------------|----------|--------------------------------------|
| `/services/sites-web`                        | Static   | Hub creation de sites web            |
| `/services/sites-web/landing-page`           | Static   | Service landing page                 |
| `/services/sites-web/site-vitrine`           | Static   | Service site vitrine                 |
| `/services/sites-web/site-ecommerce`         | Static   | Service site e-commerce              |
| `/services/sites-web/application-web`        | Static   | Service application web sur mesure   |
| `/services/sites-web/refonte-site`           | Static   | Service refonte de site existant     |

---

## Pages services -- Design

| Route                                        | Type     | Description                          |
|----------------------------------------------|----------|--------------------------------------|
| `/services/design`                           | Static   | Hub design graphique                 |
| `/services/design/ui-ux`                     | Static   | Service design UI/UX                 |
| `/services/design/identite-visuelle`         | Static   | Service identite visuelle            |

---

## Pages services -- SEO

| Route                                        | Type     | Description                          |
|----------------------------------------------|----------|--------------------------------------|
| `/services/seo`                              | Static   | Hub referencement naturel            |
| `/services/seo/referencement`                | Static   | Service referencement SEO            |
| `/services/seo/audit`                        | Static   | Service audit SEO                    |

---

## Pages services -- SEA

| Route                                        | Type     | Description                          |
|----------------------------------------------|----------|--------------------------------------|
| `/services/sea`                              | Static   | Hub publicite payante                |
| `/services/sea/google-ads`                   | Static   | Service Google Ads                   |
| `/services/sea/meta-ads`                     | Static   | Service Meta Ads (Facebook/Instagram)|

---

## Pages services -- Social Media

| Route                                              | Type     | Description                       |
|----------------------------------------------------|----------|-----------------------------------|
| `/services/social-media`                           | Static   | Hub reseaux sociaux               |
| `/services/social-media/community-management`      | Static   | Service community management      |
| `/services/social-media/strategie`                 | Static   | Service strategie social media    |

---

## Pages offres

| Route                          | Type     | Description                                 |
|--------------------------------|----------|---------------------------------------------|
| `/offre-speciale`              | Static   | Offre promotionnelle en cours               |
| `/offre-mensuelle`             | Static   | Formules d'abonnement mensuel               |
| `/offre-mensuelle/devis`       | Static   | Formulaire de demande de devis mensuel      |

---

## Pages conversion / outils

| Route                          | Type     | Description                                 |
|--------------------------------|----------|---------------------------------------------|
| `/demande-maquette`            | Static   | Formulaire de demande de maquette gratuite  |
| `/estimation-prix-site-web`    | Static   | Simulateur / estimateur de prix             |

---

## Pages dynamiques

| Route                          | Type     | Description                                 |
|--------------------------------|----------|---------------------------------------------|
| `/blog/[slug]`                 | Dynamic  | Article de blog (contenu Supabase)          |
| `/etude-de-cas/[slug]`         | Dynamic  | Etude de cas detaillee (contenu Supabase)   |

---

## Pages admin

| Route                              | Type     | Description                             |
|------------------------------------|----------|-----------------------------------------|
| `/admin`                           | Dynamic  | Dashboard admin (layout protege)        |
| `/admin/articles/new`              | Dynamic  | Creation d'un nouvel article            |
| `/admin/articles/[id]/edit`        | Dynamic  | Edition d'un article existant           |

---

## Pages utilitaires

| Route                              | Type     | Description                             |
|------------------------------------|----------|-----------------------------------------|
| `/newsletter-confirmation`         | Static   | Page de confirmation d'inscription      |
| `/politique-de-confidentialite`    | Static   | Politique de confidentialite / RGPD     |
| `/not-found`                       | Static   | Page 404 personnalisee                  |

---

## Fichiers SEO speciaux

| Fichier              | Description                                        |
|----------------------|----------------------------------------------------|
| `src/app/sitemap.ts` | Sitemap XML genere dynamiquement (35 routes)       |
| `src/app/robots.ts`  | Fichier robots.txt genere dynamiquement             |

---

## Total

| Categorie          | Nombre |
|--------------------|--------|
| Pages statiques    | 30     |
| Pages dynamiques   | 5      |
| **Total routes**   | **35** |
