# ConvertiLab -- Agence Digital Marketing

> Site vitrine professionnel pour ConvertiLab, agence de marketing digital basee a Rueil-Malmaison (Ile-de-France).

| Info          | Valeur                                                       |
|---------------|--------------------------------------------------------------|
| URL live      | https://client-convertilab.vercel.app                        |
| Repo GitHub   | https://github.com/Bilelbettaieb97/client-convertilab        |
| Framework     | Next.js 16.2.2 (App Router)                                 |
| UI            | Tailwind CSS 4 + shadcn/ui 4.1.2                            |
| Animations    | Framer Motion 12.38                                          |
| Backend       | Supabase (Auth SSR 0.10 + JS 2.101)                         |
| Langage       | TypeScript 5                                                 |
| Deploiement   | Vercel (connecte au repo GitHub)                             |

---

## Table des matieres

| Document                          | Description                                      |
|-----------------------------------|--------------------------------------------------|
| [Sitemap](architecture/sitemap.md)                   | Carte complete de toutes les routes du site       |
| [Stack technique](architecture/stack-technique.md)   | Dependances, versions et justifications           |
| [Structure dossiers](architecture/structure-dossiers.md) | Arborescence de /src avec explications        |
| [Composants](architecture/composants.md)             | Catalogue de tous les composants React            |

---

## Commandes

```bash
# Developpement local
npm run dev

# Build de production
npm run build

# Demarrer le serveur de production
npm run start

# Lint
npm run lint

# Deploiement en production sur Vercel
npx vercel deploy --prod
```

---

## Variables d'environnement

Creer un fichier `.env.local` a la racine avec :

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

---

## Contacts

- **Email** : contact@convertilab.com
- **Telephone** : 06 16 47 72 45
- **Adresse** : Rueil-Malmaison, 92500, Ile-de-France
- **Calendly** : https://calendly.com/convertilab-5bsc/30min
