# Liste des Formulaires

> Inventaire complet de tous les formulaires du site ConvertiLab.

---

## Tableau recapitulatif

| Nom | Page | Champs | Etapes | Table Supabase | Edge Function |
|-----|------|--------|--------|----------------|---------------|
| **ContactForm** | `/contact` (+ sidebar accueil) | name, email, company, phone, project (type de site), main_challenge, timeline, message, urgency | 3 etapes : 1. Type de projet 2. Details (delai) 3. Coordonnees + message | `contact_submissions` | `notify-contact` |
| **DevisForm** (offre mensuelle) | `/offre-mensuelle/devis` | sector, companyDescription, offer (essentiel/pro/premium), name, email, company, phone, message | 3 etapes : 1. Secteur d'activite 2. Choix de l'offre 3. Coordonnees | `contact_submissions` | `notify-contact` |
| **DemandeMaquette** | `/demande-maquette` | name, email, phone, current_site_url, sector, site_type, description, design_style | 4 etapes : 1. Type de site 2. Secteur 3. Style de design 4. Coordonnees | `mockup_requests` | `notify-contact` (type: mockup) |
| **EstimationPrix** | `/estimation-prix-site-web` | site_type, options[], page_count, product_count, landing_objective, refonte_url, refonte_reasons[], refonte_improvements[], name, email, phone, company, description | 3 etapes : 1. Type de site + options 2. Options detaillees 3. Coordonnees | `price_estimations` | `notify-contact` (type: estimation) |
| **OffreSpeciale** | `/offre-speciale` | name, email, phone, company | 1 etape unique (formulaire simple) | `offer_reservations` | `notify-contact` (type: offer) |
| **Newsletter** | Blog sidebar, footer | email | 1 etape unique (champ email seul) | `newsletter_subscriptions` | `notify-contact` (type: newsletter) |

---

## Details par formulaire

### ContactForm

- **Fichier** : `src/components/contact/ContactForm.tsx`
- **Persistance** : localStorage (`convertilab_contact_form`) pour sauvegarder nom, email, entreprise, telephone entre sessions
- **Types de projet** : vitrine, ecommerce, landing, audit
- **Delais** : urgent (< 1 semaine), 1-2 semaines (recommande), 1 mois, flexible
- **Validation** : regex email, telephone min 10 chiffres
- **Post-soumission** : confetti animation, ecran de confirmation (etape 4), lien Calendly, tracking conversion GA

### DevisForm (offre mensuelle)

- **Fichier** : `src/app/offre-mensuelle/devis/DevisClient.tsx`
- **Persistance** : localStorage (`convertilab_devis_form`)
- **Offres** : Essentiel (39,50 EUR/mois), Pro (47,50 EUR/mois), Premium (52,50 EUR/mois)
- **Pre-remplissage** : parametre URL `?offre=essentiel|pro|premium`
- **Insert dans** : `contact_submissions` (meme table que ContactForm)

### DemandeMaquette

- **Fichier** : `src/app/demande-maquette/DemandeMaquetteClient.tsx`
- **Secteurs** : Restaurant, Immobilier, Sante, E-commerce, B2B, BTP, Coaching, Beaute, Tech, Association, Autre
- **Types de site** : Landing Page, Site Vitrine, E-commerce, Application Web, Refonte, Autre
- **Styles de design** : Moderne & Minimaliste, Colore & Dynamique, Elegant & Premium, Naturel & Organique, Tech & Futuriste, Carte blanche
- **Validation** : nom, email, telephone, secteur et type de site requis

### EstimationPrix

- **Fichier** : `src/app/estimation-prix-site-web/EstimationPrixClient.tsx`
- **Types de site** : vitrine, ecommerce, landing, refonte
- **Options conditionnelles** :
  - Vitrine : SEO, one-page, multi-pages, blog, formulaire, RDV, multilingue, design sur mesure, reseaux sociaux, vitesse, hebergement
  - E-commerce : paiement, produits, commandes, livraison, promos, compte client, avis, multilingue, SEO
  - Landing : leads, vente, evenement, telechargement + design premium, copywriting, SEO, tracking, formulaire avance, CRM
  - Refonte : raisons (design depasse, mauvais SEO, site lent, ajout fonctionnalites) + ameliorations

### OffreSpeciale

- **Fichier** : `src/app/offre-speciale/OffreSpecialeClient.tsx`
- **Places limitees** : compteur en temps reel via Supabase Realtime (channel `offer-reservations`)
- **Minimum affiche** : toujours au moins 2 places (`Math.max(2, TOTAL_SPOTS - count)`)
- **Validation** : telephone min 6 chiffres, email unique (erreur 23505 = deja inscrit)
- **Post-soumission** : confetti animation

### Newsletter

- **Fichier** : `src/components/contact/NewsletterSubscription.tsx`
- **Validation** : regex email, max 255 caracteres, trim + lowercase
- **Doublon** : si email existe (erreur 23505), redirige quand meme vers confirmation
- **Redirection** : `/newsletter-confirmation` apres inscription
- **Tracking** : `trackFormConversion()` sur inscription
