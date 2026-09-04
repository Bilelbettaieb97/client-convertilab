@AGENTS.md

# Convertilab-siteweb — Référence Complète

**Site live** : https://www.convertilab.com / https://www.convertilab.fr
**Stack** : Next.js 16.2.2, React 19, TypeScript, Tailwind CSS, Shadcn/ui, Framer Motion
**Supabase** : `fubbjkcxbomoshyunjnn` (eu-west-3)
**Credentials** : `.env.local` à la racine (SUPABASE, RESEND, PIPEDRIVE, CRON_SECRET)

---

## Routes API (`src/app/api/`)

| Route | Fichier | Rôle |
|-------|---------|------|
| `/api/notify` | `notify/route.ts` | Réception de tous les formulaires → Pipedrive + email interne + séries email |
| `/api/seo-check` | `seo-check/route.ts` | Audit SEO complet → PDF + email lead + Supabase + Pipedrive |
| `/api/speed-check` | `speed-check/route.ts` | Analyse vitesse page → PDF + email |
| `/api/design-score` | `design-score/route.ts` | Score UX/design → PDF + email |
| `/api/estimateur-ads` | `estimateur-ads/route.ts` | Calculateur budget Google Ads → PDF + email |
| `/api/comparateur-sites` | `comparateur-sites/route.ts` | Comparaison 2 sites → rapport + email |
| `/api/robots-generator` | `robots-generator/route.ts` | Génération robots.txt + sitemap → PDF + email |
| `/api/mentions-legales` | `mentions-legales/route.ts` | Générateur mentions légales RGPD → PDF + email |
| `/api/rapport-sectoriel` | `rapport-sectoriel/route.ts` | Rapport marché sectoriel → PDF + email |
| `/api/chatbot-audit` | `chatbot-audit/route.ts` | Audit chatbot site web |
| `/api/pricing-calculator` | `pricing-calculator/route.ts` | Calculateur de prix site web |
| `/api/cron/send-emails` | `cron/send-emails/route.ts` | Cron Vercel horaire — traite la `email_queue` (status=pending, send_at <= now) |
| `/api/admin/outils` | `admin/outils/route.ts` | Dashboard admin outils |

---

## Bibliothèques (`src/lib/`)

### Fichiers racine
- `pipedrive.ts` — Fonctions Pipedrive : `pushToPipedrive()`, `getDeal()`, `createNote()`, `createActivity()`, `updateDealStage()`
- `email-series.ts` — **Cœur de l'automation email** : `scheduleEmailSeries()`, `buildFormSeriesContext()`, `firstName()`, `COMPANY_TYPE_LABELS`
- `constants.ts` — Config globale : prix, URLs, réseaux sociaux
- `utils.ts` — Utilitaires généraux

### `lib/tools/` — Pattern commun pour tous les outils
- `shared-api-handler.ts` — Handler universel (validate → analyze → generatePdf → sendEmail → Supabase → Pipedrive → emailSeries)
- `shared-email-template.ts` — Template email HTML commun pour les outils
- `shared-types.ts` — Interface `ToolConfig` avec méthode optionnelle `buildSeriesContext`

### `lib/seo/` — SEO Check
- `analyzer.ts` — Crawl + scoring SEO (scores: global, technique, onPage, schema, mobile, contenu, geo, performance, securite)
- `report-template.ts` — HTML du rapport SEO
- `pdf-template.tsx` — PDF React (@react-pdf/renderer)

### `lib/speed/` — Speed Check
- `analyzer.ts` — Analyse vitesse + Core Web Vitals

### `lib/design/` — Design Score
- `analyzer.ts` — Score UX/design (lisibilité, confiance, mobile)

### `lib/ads/` — Estimateur Ads
- `calculator.ts` — Projections ROAS, leads/mois, budget
- `pdf-template.tsx` — PDF rapport ads

### `lib/comparison/` — Comparateur Sites
- `comparator.ts` — Comparaison 2 URLs (vitesse, SEO, design, mobile)

### `lib/sectorial/` — Rapport Sectoriel
- `report.ts` — Génération rapport marché par secteur

### `lib/robots/` — Robots Generator
- `generator.ts` — Génération robots.txt + sitemap.xml

### `lib/legal/` — Mentions Légales
- `generator.ts` — Génération mentions légales conformes LCEN + RGPD
- `pdf-template.tsx` — PDF mentions légales

### `lib/supabase/`
- `client.ts` — Client Supabase browser
- `server.ts` — Client Supabase server (SSR)

---

## Système d'Email Automation (`email-series.ts`)

### Architecture
Les séries email utilisent une table Supabase `email_queue` :
- À la soumission d'un formulaire/outil → `scheduleEmailSeries()` insère tous les emails de la série avec `send_at` calculé
- Le cron Vercel (`/api/cron/send-emails`) tourne **toutes les heures** et envoie les emails dus

### Séries disponibles (15 total)
**Outils** : SEO Check, Speed Check, Design Score, Estimateur Ads, Comparateur Sites, Robots Generator, Mentions Legales, Rapport Sectoriel, Chatbot Audit (9 séries)

**Formulaires** (via `/api/notify`) : Contact, Newsletter, Devis, Demande Maquette, Estimation Prix Site Web, Offre Mensuelle, Offre Spéciale, HeroMiniForm (6 séries)

### Tokens disponibles par série
- Tous : `{{prenom}}`
- SEO Check : `{{domaine}}`, `{{score}}`, `{{grade}}`, `{{critiques}}`
- Speed Check : `{{domaine}}`, `{{score}}`, `{{grade}}`
- Design Score : `{{domaine}}`, `{{score}}`, `{{grade}}`
- Estimateur Ads : `{{secteur}}`, `{{budget_ads}}`, `{{roas}}`, `{{leads_mois}}`
- Comparateur : `{{site_a}}`, `{{site_b}}`, `{{gagnant}}`
- Robots Generator : `{{domaine}}`
- Rapport Sectoriel : `{{secteur}}`
- Mentions Legales : `{{entreprise}}`, `{{forme_jur}}`, `{{siret}}`
- Devis : `{{type_site}}`, `{{budget}}`, `{{delai}}`
- Demande Maquette : `{{type_site}}`, `{{style}}`

### Comment ajouter une nouvelle série
1. Ajouter l'entrée dans `EMAIL_SERIES` dans `email-series.ts`
2. Si c'est un outil : ajouter `buildSeriesContext()` dans la config `ToolConfig` du fichier route
3. Si c'est un formulaire : ajouter le mapping dans `buildFormSeriesContext()`

---

## Tables Supabase (projet fubbjkcxbomoshyunjnn)

| Table | Rôle |
|-------|------|
| `email_queue` | File d'attente emails automatisés (status: pending/sent/failed, send_at, html_body) |
| `seo_audits` | Résultats audits SEO (score, grade, issues, email_sent) |
| `mentions_legales` | Mentions légales générées |
| `site_comparisons` | Résultats comparaisons |
| `speed_audits` | Résultats analyses vitesse |
| `design_audits` | Résultats scores design |
| `ads_estimations` | Résultats estimations ads |
| `robots_generations` | Fichiers robots/sitemap générés |
| `sector_reports` | Rapports sectoriels |

**Tables des formulaires** (écrites depuis le navigateur, relues par `/api/cron/reconcile-leads`) : `contact_submissions`, `devis_submissions` (Devis **et** Offre Mensuelle), `price_estimations`, `offer_reservations`, `mockup_requests`, `newsletter_subscriptions`.

> ⚠️ Les noms de table ne suivent pas le nom de l'outil. Vérifier `tableName` dans `src/app/api/<outil>/route.ts` avant d'écrire une requête : 5 noms documentés ici étaient faux jusqu'au 04/09/2026 et pointaient vers des tables inexistantes.

---

## Pipedrive — Intégration

Tous les leads (formulaires + outils) sont poussés vers Pipedrive via `pushToPipedrive()` dans `lib/pipedrive.ts`.

- **Pipeline Formulaires** : stage 12 (entrée par défaut)
- **Pipeline Outils** : stage 16 (entrée par défaut)
- **Champ source** : clé `5e4c0a430208828f8b265769eb91b4af32c3a205`
- **Champs custom** : domain, grade, score, critical, sector, roas, budget, leads_mo, site_a, site_b, winner, siret, legal

---

## Pages principales (`src/app/`)

```
/                           ← Homepage
/services/sites-web         ← Services création site
/portfolio/                 ← Réalisations clients
/blog/                      ← Articles SEO (30+ articles)
/prix/                      ← Tarifs
/contact/                   ← Formulaire contact
/devis/                     ← Demande devis
/demande-maquette/          ← Demande maquette gratuite
/estimation-prix-site-web/  ← Calculateur prix
/offre-mensuelle/           ← Offre paiement mensuel
/offre-speciale/            ← Offres spéciales
/a-propos/                  ← À propos
/glossaire/                 ← Glossaire SEO (100+ termes)
/seo-check/                 ← Outil audit SEO
/speed-check/               ← Outil vitesse
/design-score/              ← Outil score design
/estimateur-ads/            ← Outil budget ads
/comparateur-sites/         ← Outil comparaison
/generateur-robots-sitemap/ ← Outil robots/sitemap
/generateur-mentions-legales/ ← Outil mentions légales
/rapport-sectoriel/         ← Outil rapport sectoriel
/admin/                     ← Dashboard admin (protégé)
```

---

## Données statiques (`src/data/`)

- `case-studies.ts` — 10+ études de cas clients
- `testimonials.ts` — 20+ témoignages (4.9★, 47 avis)
- `blog-articles.ts` — 30+ articles de blog
- `sectors.ts` — Données sectorielles
- `faq.ts` — FAQ complète
- `cities.ts` — Données géographiques (pages locales)
- `ads-benchmarks.ts` — Benchmarks Google Ads par secteur
- `glossary.ts` — 100+ termes SEO

---

## Vercel Cron (vercel.json)

```json
{
  "crons": [{"path": "/api/cron/send-emails", "schedule": "0 * * * *"}]
}
```

Le cron tourne toutes les heures. Il nécessite `CRON_SECRET` dans les variables d'env Vercel.

---

## Variables d'environnement requises (.env.local)

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
PIPEDRIVE_API_TOKEN=
CRON_SECRET=
```
