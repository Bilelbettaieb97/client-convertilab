# Deploiement Vercel

> Configuration du deploiement sur Vercel.

---

## Informations du projet

| Element | Valeur |
|---------|--------|
| URL production | https://client-convertilab.vercel.app |
| Projet Vercel | `client-convertilab` |
| Team | `bilelbettaieb97s-projects` |
| Framework | Next.js (detecte automatiquement) |
| Branch de deploiement | `main` |

---

## Variables d'environnement

Configurees dans les settings du projet Vercel :

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://hoaofayagbbhenktvchh.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Cle anonyme Supabase (JWT) |

Ces variables sont aussi presentes dans `.env.local` pour le developpement local.

---

## Deploiement automatique

Le deploiement est **automatique** a chaque push sur la branche `main` :

1. Push sur `main` (ou merge de PR)
2. Vercel detecte le changement via le webhook GitHub
3. Build Next.js (`next build`)
4. Deploiement en production

Les branches autres que `main` generent des **preview deployments** avec une URL unique.

---

## Deploiement manuel

Pour deployer manuellement sans passer par GitHub :

```bash
# Installer Vercel CLI si pas deja fait
npm i -g vercel

# Deployer en production
npx vercel deploy --prod

# Deployer en preview (pour tester)
npx vercel deploy
```

---

## Domaine personnalise

Pour connecter un domaine personnalise (ex: convertilab.com) :

1. Aller dans les settings du projet Vercel > Domains
2. Ajouter le domaine
3. Configurer les DNS chez le registrar (CNAME ou A record)
4. Vercel genere automatiquement le certificat SSL

---

## Monitoring

- **Logs** : disponibles dans le dashboard Vercel > Logs
- **Analytics** : Vercel Analytics peut etre active dans les settings
- **Speed Insights** : disponible dans le dashboard pour surveiller les Core Web Vitals
