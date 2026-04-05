# Configuration Supabase

> Backend Supabase du projet ConvertiLab.

---

## Informations du projet

| Element | Valeur |
|---------|--------|
| Projet ID | `hoaofayagbbhenktvchh` |
| URL | `https://hoaofayagbbhenktvchh.supabase.co` |
| Dashboard | `https://supabase.com/dashboard/project/hoaofayagbbhenktvchh` |
| Region | _(a verifier dans le dashboard)_ |

---

## Cles d'acces

| Cle | Usage | Ou la trouver |
|-----|-------|---------------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL du projet, utilisee cote client et serveur | `.env.local` + Vercel env vars |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Cle anonyme (Row Level Security s'applique) | `.env.local` + Vercel env vars |
| `SUPABASE_SERVICE_ROLE_KEY` | Cle admin (bypass RLS) | Uniquement dans les Edge Functions |

---

## Client Supabase

### Client navigateur

**Fichier** : `src/lib/supabase/client.ts`

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

Utilise par tous les composants client (formulaires, blog, admin).

### Client serveur

**Fichier** : `src/lib/supabase/server.ts`

```typescript
export function createServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}
```

Utilise par les Server Components et les API routes.

---

## Tables principales

Voir `docs/formulaires/supabase-tables.md` pour le detail complet.

| Table | Usage |
|-------|-------|
| `contact_submissions` | Formulaires contact + devis |
| `newsletter_subscriptions` | Inscriptions newsletter |
| `offer_reservations` | Reservations offre speciale |
| `mockup_requests` | Demandes de maquette |
| `price_estimations` | Estimations de prix |
| `chat_conversations` | Conversations chat |
| `chat_messages` | Messages chat |
| `user_roles` | Roles admin |
| `rate_limit_log` | Rate limiting |
| `blog_articles` | Articles blog dynamiques |

---

## Edge Functions

Voir `docs/formulaires/edge-functions.md` pour le detail complet.

| Fonction | Role |
|----------|------|
| `notify-contact` | Notification email (Resend) pour toutes les soumissions |
| `send-confirmation-email` | Email de bienvenue newsletter |
| `get-admin-data` | Endpoint securise pour le panel admin |

---

## Authentification

- **Methode** : email + mot de passe via Supabase Auth
- **Usage** : uniquement pour le panel admin (`/admin`)
- **Roles** : geres dans la table `user_roles` (role = `admin`)
- **Pas d'auth visiteur** : les visiteurs du site n'ont pas besoin de compte

---

## Realtime

Utilise pour le compteur de places en temps reel sur la page `/offre-speciale` :

```typescript
const channel = supabase
  .channel("offer-reservations")
  .on("postgres_changes", {
    event: "INSERT",
    schema: "public",
    table: "offer_reservations"
  }, () => {
    setSpotsRemaining((prev) => Math.max(2, prev - 1));
  })
  .subscribe();
```

---

## Acces au dashboard

1. Aller sur https://supabase.com/dashboard
2. Se connecter avec le compte proprietaire
3. Selectionner le projet `hoaofayagbbhenktvchh`
4. Naviguer dans : Table Editor, SQL Editor, Auth, Edge Functions, etc.
