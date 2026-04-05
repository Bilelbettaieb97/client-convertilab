# Tables Supabase

> Structure des tables utilisees par le projet ConvertiLab.
> Projet Supabase : `hoaofayagbbhenktvchh`

---

## contact_submissions

Table principale pour les formulaires de contact et devis.

| Colonne | Type | Description |
|---------|------|-------------|
| id | uuid | Cle primaire |
| name | text | Nom du prospect |
| email | text | Email |
| company | text | Nom de l'entreprise |
| phone | text | Telephone |
| project | text | Type de projet (vitrine, ecommerce, landing, audit) |
| main_challenge | text | Defi principal (defaut: "non_specifie") |
| timeline | text | Delai souhaite |
| message | text | Message libre |
| urgency | text | Niveau d'urgence |
| sector | text | Secteur d'activite (pour DevisForm) |
| offer | text | Offre choisie (pour DevisForm: essentiel, pro, premium) |
| created_at | timestamptz | Date de creation |

Utilisee par : **ContactForm**, **DevisForm**

---

## newsletter_subscriptions

| Colonne | Type | Description |
|---------|------|-------------|
| id | uuid | Cle primaire |
| email | text | Email (unique) |
| created_at | timestamptz | Date d'inscription |

Contrainte UNIQUE sur `email` (code erreur 23505 si doublon).

---

## offer_reservations

Table pour les reservations de l'offre speciale a 300 EUR.

| Colonne | Type | Description |
|---------|------|-------------|
| id | uuid | Cle primaire |
| name | text | Nom |
| email | text | Email (unique) |
| phone | text | Telephone (prefixe +33) |
| company | text | Entreprise |
| created_at | timestamptz | Date de reservation |

Contrainte UNIQUE sur `email`. Abonnement Realtime actif pour le compteur en temps reel.

---

## mockup_requests

Table pour les demandes de maquette gratuite.

| Colonne | Type | Description |
|---------|------|-------------|
| id | uuid | Cle primaire |
| name | text | Nom |
| email | text | Email |
| phone | text | Telephone |
| current_site_url | text | URL du site actuel (optionnel) |
| sector | text | Secteur d'activite |
| site_type | text | Type de site souhaite |
| design_style | text | Style de design prefere (optionnel) |
| description | text | Description du projet (optionnel) |
| created_at | timestamptz | Date de creation |

---

## price_estimations

Table pour les estimations de prix.

| Colonne | Type | Description |
|---------|------|-------------|
| id | uuid | Cle primaire |
| site_type | text | Type de site |
| options | text[] | Options selectionnees |
| page_count | text | Nombre de pages (vitrine) |
| product_count | text | Nombre de produits (ecommerce) |
| landing_objective | text | Objectif (landing) |
| refonte_url | text | URL du site a refondre |
| refonte_reasons | text[] | Raisons de la refonte |
| refonte_improvements | text[] | Ameliorations souhaitees |
| name | text | Nom |
| email | text | Email |
| phone | text | Telephone |
| company | text | Entreprise (optionnel) |
| description | text | Description (optionnel) |
| created_at | timestamptz | Date de creation |

---

## chat_conversations

Table pour le systeme de chat (si active).

| Colonne | Type | Description |
|---------|------|-------------|
| id | uuid | Cle primaire |
| visitor_id | text | Identifiant du visiteur |
| status | text | Statut (open, closed) |
| created_at | timestamptz | Date de creation |

---

## chat_messages

| Colonne | Type | Description |
|---------|------|-------------|
| id | uuid | Cle primaire |
| conversation_id | uuid | FK vers chat_conversations |
| sender | text | Expediteur (visitor, agent) |
| message | text | Contenu du message |
| created_at | timestamptz | Date d'envoi |

---

## user_roles

Table pour la gestion des roles admin.

| Colonne | Type | Description |
|---------|------|-------------|
| id | uuid | Cle primaire |
| user_id | uuid | FK vers auth.users |
| role | text | Role (admin, editor) |
| created_at | timestamptz | Date de creation |

---

## rate_limit_log

Table pour le rate-limiting des Edge Functions.

| Colonne | Type | Description |
|---------|------|-------------|
| id | uuid | Cle primaire |
| ip | text | Adresse IP |
| action | text | Type d'action |
| created_at | timestamptz | Date du log |

---

## blog_articles

Table pour les articles de blog dynamiques (panel admin).

| Colonne | Type | Description |
|---------|------|-------------|
| id | uuid | Cle primaire |
| slug | text | Slug URL (unique) |
| title | text | Titre |
| excerpt | text | Extrait / resume |
| content | text | Contenu complet (Markdown) |
| image | text | URL de l'image de couverture |
| category | text | Categorie |
| read_time | text | Temps de lecture |
| tags | text[] | Tags |
| meta_description | text | Description SEO |
| author_name | text | Nom de l'auteur |
| published | boolean | Publie ou brouillon |
| published_at | timestamptz | Date de publication |
| created_at | timestamptz | Date de creation |
| updated_at | timestamptz | Date de mise a jour |

Geree via le panel admin `/admin`.
