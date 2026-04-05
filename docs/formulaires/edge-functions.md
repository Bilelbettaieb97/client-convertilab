# Edge Functions Supabase

> Les 3 Edge Functions deployees sur le projet Supabase `hoaofayagbbhenktvchh`.

---

## 1. notify-contact

**Role** : Recevoir les soumissions de formulaires et envoyer un email de notification au proprietaire via Resend.

### Declenchement

Appelee par tous les formulaires du site apres insertion en base :

```typescript
await supabase.functions.invoke('notify-contact', {
  body: formData,
});
```

### Types de notifications

Le champ `type` dans le body determine le template d'email :

| Type | Formulaire source | Champs specifiques |
|------|-------------------|--------------------|
| _(absent)_ | ContactForm | name, email, company, phone, project, timeline, message |
| `newsletter` | Newsletter | email |
| `offer` | OffreSpeciale | name, email, phone, company |
| `mockup` | DemandeMaquette | name, email, phone, site_type, sector, design_style, current_site_url, description |
| `estimation` | EstimationPrix | name, email, phone, company, site_type, options, page_count, product_count, etc. |

### Securite

- **Rate-limiting par IP** : utilise la table `rate_limit_log` pour limiter les envois abusifs
- **Validation** : verifie la presence des champs requis
- **Email** : envoye via l'API Resend (token configure en variable d'environnement sur Supabase)

### Destinataire

Email de notification envoye a `contact@convertilab.com`.

---

## 2. send-confirmation-email

**Role** : Envoyer un email de bienvenue/confirmation aux nouveaux inscrits newsletter.

### Declenchement

Peut etre appele manuellement ou via un trigger Supabase sur insertion dans `newsletter_subscriptions`.

### Fonctionnement

- Recoit l'email du nouvel inscrit
- Envoie un email de bienvenue via Resend
- Template : message de bienvenue ConvertiLab avec lien vers le blog

---

## 3. get-admin-data

**Role** : Endpoint securise pour le panel admin. Fournit les donnees agrégées (soumissions, reservations, articles, etc.).

### Securite

- **Authentification** : verification du JWT Supabase (token Bearer)
- **Autorisation** : verification du role dans la table `user_roles` (role = `admin`)
- Retourne une erreur 401 si non authentifie, 403 si non autorise

### Donnees retournees

- Nombre de soumissions de contact
- Nombre d'inscriptions newsletter
- Nombre de reservations offre speciale
- Nombre de demandes de maquette
- Nombre d'estimations de prix
- Liste des articles de blog (avec statut publie/brouillon)

### Utilisation

Appelee depuis le panel admin (`/admin`) apres connexion :

```typescript
const { data, error } = await supabase.functions.invoke('get-admin-data');
```
