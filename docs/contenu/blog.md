# Blog

> Systeme de blog hybride : articles statiques dans le code + articles dynamiques via Supabase.

---

## Articles statiques

**Fichier** : `src/data/blog-articles.ts`

6 articles hardcodes dans le code source :

| # | Slug | Titre | Categorie | Temps de lecture |
|---|------|-------|-----------|-----------------|
| 1 | `pourquoi-site-web-indispensable-2024` | Pourquoi un Site Web est Indispensable pour Votre Business en 2024 | Business | 5 min |
| 2 | `erreurs-site-web-eviter` | Les 10 Erreurs Fatales qui Tuent Votre Site Web | Web Design | 8 min |
| 3 | `seo-local-guide-complet` | _(SEO local)_ | SEO | - |
| 4 | `combien-coute-site-web` | _(Cout d'un site web)_ | Business | - |
| 5 | `tendances-web-design-2024` | _(Tendances web design)_ | Design | - |
| 6 | `optimiser-vitesse-site-web` | _(Optimiser la vitesse)_ | Performance | - |

### Structure d'un article statique

```typescript
interface FullBlogArticle {
  slug: string;          // URL de l'article
  title: string;         // Titre
  excerpt: string;       // Extrait pour les listes
  image: string;         // Image de couverture (Unsplash)
  category: string;      // Categorie
  readTime: string;      // Temps de lecture
  publishedAt: string;   // Date de publication (YYYY-MM-DD)
  author: { name: string; avatar?: string };
  content: string;       // Contenu complet en Markdown
  tags: string[];        // Tags pour le SEO
  metaDescription: string; // Description meta SEO
}
```

---

## Articles dynamiques (Supabase)

**Table** : `blog_articles` (voir `docs/formulaires/supabase-tables.md`)

Les articles dynamiques sont geres via le panel admin et stockes dans Supabase. Ils apparaissent dans le blog aux cotes des articles statiques.

---

## Panel admin

### Acces

- **URL** : `/admin`
- **Authentification** : email + mot de passe via Supabase Auth
- **Autorisation** : role `admin` dans la table `user_roles`

### Fonctionnalites

| Action | Route |
|--------|-------|
| Liste des articles | `/admin` |
| Creer un article | `/admin/articles/new` |
| Editer un article | `/admin/articles/[id]/edit` |
| Supprimer un article | Depuis la liste (bouton supprimer) |

### Champs de l'editeur

- Titre
- Slug (genere automatiquement depuis le titre)
- Extrait / resume
- Contenu (Markdown)
- Image de couverture (URL)
- Categorie
- Tags
- Description meta SEO
- Statut : publie / brouillon

---

## Comment ajouter un article

### Via le panel admin (recommande)

1. Se connecter a `/admin` avec un compte admin
2. Cliquer sur "Nouvel article"
3. Remplir les champs du formulaire
4. Publier ou sauvegarder en brouillon

### Directement dans le code (articles statiques)

1. Ouvrir `src/data/blog-articles.ts`
2. Ajouter un nouvel objet dans le tableau `blogArticles` :

```typescript
{
  slug: "mon-nouvel-article",
  title: "Titre de l'Article",
  excerpt: "Resume court pour la liste...",
  metaDescription: "Description SEO de l'article.",
  image: "https://images.unsplash.com/photo-XXXXX?w=800&q=80",
  category: "Business",
  readTime: "5 min",
  publishedAt: "2026-04-05",
  author: { name: "ConvertiLab" },
  tags: ["tag1", "tag2"],
  content: `## Section 1\n\nContenu en Markdown...`
}
```

3. Committer et pusher sur `main` pour deployer automatiquement

### Via Supabase directement

Inserer une ligne dans la table `blog_articles` via le dashboard Supabase (https://supabase.com/dashboard).
