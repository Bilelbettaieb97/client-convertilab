# Configuration GitHub

> Depot Git du projet ConvertiLab.

---

## Informations du depot

| Element | Valeur |
|---------|--------|
| Repo actuel | https://github.com/Bilelbettaieb97/client-convertilab |
| Branch principale | `main` |
| Ancien repo (Lovable) | https://github.com/Bilelbettaieb97/testtttest |
| Visibilite | _(a verifier : public ou prive)_ |

---

## Workflow de deploiement

```
Modification locale
       |
       v
  git add + git commit
       |
       v
  git push origin main
       |
       v
  Vercel detecte le push (webhook)
       |
       v
  Build automatique (next build)
       |
       v
  Deploiement en production
  https://client-convertilab.vercel.app
```

Temps moyen de deploiement : 1-2 minutes apres le push.

---

## Commandes courantes

### Developper en local

```bash
# Cloner le repo
git clone https://github.com/Bilelbettaieb97/client-convertilab.git
cd client-convertilab

# Installer les dependances
npm install

# Copier les variables d'environnement
cp .env.local.example .env.local
# (ou creer .env.local avec NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY)

# Lancer le serveur de dev
npm run dev
```

### Deployer une modification

```bash
# Verifier les changements
git status
git diff

# Ajouter et committer
git add .
git commit -m "description de la modification"

# Pusher (declenche le deploiement auto)
git push origin main
```

### Creer une branche de feature

```bash
# Creer et basculer sur une nouvelle branche
git checkout -b feature/ma-feature

# Travailler, committer...
git add .
git commit -m "ajout de ma feature"

# Pusher la branche (cree un preview deployment sur Vercel)
git push -u origin feature/ma-feature

# Merger dans main via Pull Request sur GitHub
```

---

## Ancien repo Lovable

Le projet a ete initialement genere avec Lovable sur le repo `Bilelbettaieb97/testtttest`. Ce repo est conserve comme reference mais n'est plus utilise pour le deploiement.

Le code a ete migre vers `client-convertilab` avec :
- Migration de Vite/React vers Next.js 14+ (App Router)
- Restructuration complete du code
- Ajout du systeme de blog dynamique
- Ajout des formulaires multi-etapes
- Optimisations SEO et performance

---

## Fichiers importants

| Fichier | Role |
|---------|------|
| `.env.local` | Variables d'environnement locales (non commite) |
| `.gitignore` | Fichiers exclus du versionning |
| `next.config.js` | Configuration Next.js |
| `tailwind.config.ts` | Configuration Tailwind CSS |
| `tsconfig.json` | Configuration TypeScript |
| `package.json` | Dependances et scripts |
