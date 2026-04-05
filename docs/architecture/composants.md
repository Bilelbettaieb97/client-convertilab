# Catalogue des composants

Inventaire complet des composants React dans `src/components/`.

**Legende** : Client = utilise `"use client"` | Server = Server Component par defaut

---

## Layout

| Composant        | Chemin                            | Role                                      | Type   | Pages                    |
|------------------|-----------------------------------|-------------------------------------------|--------|--------------------------|
| Navigation       | `components/layout/Navigation.tsx`| Barre de navigation principale (burger mobile, mega-menu) | Client | Toutes (layout.tsx)      |
| Footer           | `components/layout/Footer.tsx`    | Pied de page global (liens, reseaux sociaux, newsletter)  | Client | Toutes (layout.tsx)      |

---

## Sections (homepage et pages principales)

| Composant          | Chemin                                    | Role                                           | Type   | Pages                                  |
|--------------------|-------------------------------------------|-------------------------------------------------|--------|-----------------------------------------|
| Hero               | `components/sections/Hero.tsx`            | Section hero avec titre, sous-titre et CTA      | Client | /                                       |
| Services           | `components/sections/Services.tsx`        | Grille des services proposes                     | Client | /                                       |
| About              | `components/sections/About.tsx`           | Presentation de l'agence et chiffres cles        | Client | /                                       |
| Portfolio          | `components/sections/Portfolio.tsx`       | Apercu des realisations                          | Client | /                                       |
| Testimonials       | `components/sections/Testimonials.tsx`    | Carousel de temoignages clients                  | Client | /                                       |
| Contact            | `components/sections/Contact.tsx`         | Section contact avec formulaire                  | Client | /                                       |
| SimplifiedContact  | `components/sections/SimplifiedContact.tsx`| Formulaire de contact allege                    | Server | Pages services                          |
| FAQ                | `components/sections/FAQ.tsx`             | Section FAQ avec accordeon                       | Client | /, pages services                       |
| ProcessTimeline    | `components/sections/ProcessTimeline.tsx` | Timeline du processus de travail                 | Client | /, /services                            |
| AnimatedSection    | `components/sections/AnimatedSection.tsx` | Wrapper d'animation au scroll (Framer Motion)    | Client | Multiple                                |
| AnimatedCounter    | `components/sections/AnimatedCounter.tsx` | Compteur anime pour chiffres cles                | Client | /, /a-propos                            |

---

## Blog

| Composant        | Chemin                                  | Role                                        | Type   | Pages                    |
|------------------|-----------------------------------------|----------------------------------------------|--------|--------------------------|
| BlogCard         | `components/blog/BlogCard.tsx`          | Carte d'apercu d'un article de blog          | Client | /blog                    |
| BlogHeader       | `components/blog/BlogHeader.tsx`        | En-tete de la page blog (titre, description) | Server | /blog                    |
| RelatedServices  | `components/blog/RelatedServices.tsx`   | Bloc de services lies a un article            | Client | /blog/[slug]             |

---

## Etudes de cas

| Composant              | Chemin                                          | Role                                        | Type   | Pages                |
|------------------------|-------------------------------------------------|----------------------------------------------|--------|-----------------------|
| CaseStudyHero          | `components/case-study/CaseStudyHero.tsx`       | Hero avec image et titre de l'etude          | Client | /etude-de-cas/[slug] |
| CaseStudyOverview      | `components/case-study/CaseStudyOverview.tsx`   | Vue d'ensemble du projet                     | Client | /etude-de-cas/[slug] |
| CaseStudyChallenge     | `components/case-study/CaseStudyChallenge.tsx`  | Description du defi client                   | Client | /etude-de-cas/[slug] |
| CaseStudySolution      | `components/case-study/CaseStudySolution.tsx`   | Solution proposee par l'agence               | Client | /etude-de-cas/[slug] |
| CaseStudyMetrics       | `components/case-study/CaseStudyMetrics.tsx`    | KPIs et resultats chiffres                   | Client | /etude-de-cas/[slug] |
| CaseStudyTimeline      | `components/case-study/CaseStudyTimeline.tsx`   | Chronologie du projet                        | Client | /etude-de-cas/[slug] |
| CaseStudyGallery       | `components/case-study/CaseStudyGallery.tsx`    | Galerie de captures d'ecran                  | Client | /etude-de-cas/[slug] |
| CaseStudyTestimonial   | `components/case-study/CaseStudyTestimonial.tsx`| Temoignage du client                         | Client | /etude-de-cas/[slug] |
| CaseStudyCTA           | `components/case-study/CaseStudyCTA.tsx`        | Appel a l'action en fin d'etude              | Client | /etude-de-cas/[slug] |
| CaseStudyNavigation    | `components/case-study/CaseStudyNavigation.tsx` | Navigation entre etudes de cas               | Client | /etude-de-cas/[slug] |

---

## Contact

| Composant                | Chemin                                             | Role                                          | Type   | Pages                  |
|--------------------------|----------------------------------------------------|------------------------------------------------|--------|------------------------|
| ContactForm              | `components/contact/ContactForm.tsx`               | Formulaire de contact principal (Supabase)     | Client | /contact               |
| ContactInfo              | `components/contact/ContactInfo.tsx`               | Coordonnees, horaires, carte                   | Client | /contact               |
| NewsletterSubscription   | `components/contact/NewsletterSubscription.tsx`    | Formulaire d'inscription a la newsletter       | Client | Footer, /blog          |

---

## Conversion (CRO)

| Composant          | Chemin                                          | Role                                              | Type   | Pages              |
|--------------------|-------------------------------------------------|----------------------------------------------------|--------|--------------------|
| ExitIntentPopup    | `components/conversion/ExitIntentPopup.tsx`     | Popup declenchee a l'intention de quitter la page  | Client | Toutes             |
| PromoBanner        | `components/conversion/PromoBanner.tsx`         | Bandeau promotionnel en haut du site               | Client | Toutes             |
| SocialProofToast   | `components/conversion/SocialProofToast.tsx`    | Notification de preuve sociale ("X vient de...")    | Client | Toutes             |
| StickyMobileCTA    | `components/conversion/StickyMobileCTA.tsx`     | Bouton CTA fixe en bas de l'ecran mobile           | Client | Toutes             |

---

## Maillage interne

| Composant                | Chemin                                                | Role                                        | Type   | Pages                  |
|--------------------------|-------------------------------------------------------|----------------------------------------------|--------|------------------------|
| RelatedServicesSection   | `components/internal-links/RelatedServicesSection.tsx`| Section de services lies                     | Client | Pages services         |
| SuggestedArticles        | `components/internal-links/SuggestedArticles.tsx`     | Articles de blog suggeres                    | Client | Pages services, blog   |

---

## Portfolio

| Composant        | Chemin                                      | Role                                       | Type   | Pages         |
|------------------|---------------------------------------------|--------------------------------------------|--------|---------------|
| PortfolioHeader  | `components/portfolio/PortfolioHeader.tsx`  | En-tete de la page portfolio               | Client | /portfolio    |
| PortfolioCard    | `components/portfolio/PortfolioCard.tsx`    | Carte de projet avec apercu et lien        | Client | /portfolio    |
| PortfolioCTA     | `components/portfolio/PortfolioCTA.tsx`     | Appel a l'action en fin de page            | Client | /portfolio    |

---

## Services

| Composant            | Chemin                                            | Role                                         | Type   | Pages             |
|----------------------|---------------------------------------------------|-----------------------------------------------|--------|-------------------|
| ServiceCaseStudies   | `components/services/ServiceCaseStudies.tsx`      | Etudes de cas liees a un service specifique   | Client | Pages services    |
| ServiceDetailSchema  | `components/services/ServiceDetailSchema.tsx`     | Schema JSON-LD pour le SEO des services       | Server | Pages services    |
| ServiceFAQ           | `components/services/ServiceFAQ.tsx`              | FAQ specifique a un service                   | Client | Pages services    |

---

## Sites Web (sous-section services)

| Composant              | Chemin                                            | Role                                           | Type   | Pages                    |
|------------------------|---------------------------------------------------|-------------------------------------------------|--------|--------------------------|
| SitesWebHero           | `components/sites-web/SitesWebHero.tsx`           | Hero de la page sites web                       | Client | /services/sites-web      |
| SitesWebServices       | `components/sites-web/SitesWebServices.tsx`       | Grille des types de sites proposes              | Client | /services/sites-web      |
| SitesWebComparison     | `components/sites-web/SitesWebComparison.tsx`     | Tableau comparatif des offres et tarifs         | Server | /services/sites-web      |
| SitesWebProcess        | `components/sites-web/SitesWebProcess.tsx`        | Etapes du processus de creation                 | Server | /services/sites-web      |
| SitesWebTestimonials   | `components/sites-web/SitesWebTestimonials.tsx`   | Temoignages clients specifiques aux sites       | Server | /services/sites-web      |
| SitesWebGuarantee      | `components/sites-web/SitesWebGuarantee.tsx`      | Section garantie et engagement qualite          | Server | /services/sites-web      |
| SitesWebFAQ            | `components/sites-web/SitesWebFAQ.tsx`            | FAQ specifique a la creation de sites           | Client | /services/sites-web      |
| SitesWebCTA            | `components/sites-web/SitesWebCTA.tsx`            | Appel a l'action final                          | Server | /services/sites-web      |

---

## Pages (composants clients full-page)

| Composant            | Chemin                                        | Role                                         | Type   | Pages         |
|----------------------|-----------------------------------------------|-----------------------------------------------|--------|---------------|
| HomePageClient       | `components/pages/HomePageClient.tsx`         | Assemblage client de la homepage              | Client | /             |
| BlogPageClient       | `components/pages/BlogPageClient.tsx`         | Assemblage client de la page blog             | Client | /blog         |
| BlogArticleClient    | `components/pages/BlogArticleClient.tsx`      | Assemblage client d'un article                | Client | /blog/[slug]  |

---

## Utilitaires

| Composant    | Chemin                            | Role                                                | Type   | Pages              |
|--------------|-----------------------------------|------------------------------------------------------|--------|--------------------|
| Analytics    | `components/Analytics.tsx`        | Injection des scripts GA, GTM, Meta Pixel, AdSense   | Client | Toutes (layout.tsx)|

---

## Composants UI (shadcn/ui)

16 composants primitifs dans `components/ui/`. Tous sont des Client Components.

| Composant        | Basé sur (Radix)                    |
|------------------|--------------------------------------|
| accordion        | @radix-ui/react-accordion            |
| aspect-ratio     | @radix-ui/react-aspect-ratio         |
| badge            | --                                   |
| breadcrumb       | --                                   |
| button           | @radix-ui/react-slot                 |
| card             | --                                   |
| carousel         | embla-carousel-react                 |
| dialog           | @radix-ui/react-dialog               |
| input            | --                                   |
| label            | @radix-ui/react-label                |
| navigation-menu  | @radix-ui/react-navigation-menu      |
| select           | @radix-ui/react-select               |
| separator        | @radix-ui/react-separator            |
| sonner           | sonner                               |
| tabs             | @radix-ui/react-tabs                 |
| textarea         | --                                   |

---

## Statistiques

| Categorie        | Nombre |
|------------------|--------|
| Composants metier | 48    |
| Composants UI     | 16    |
| Client Components | 59    |
| Server Components | 5     |
| **Total**         | **64** |
