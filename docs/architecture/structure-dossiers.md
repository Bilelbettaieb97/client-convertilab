# Structure des dossiers

Arborescence complete du repertoire `/src` avec explication de chaque dossier.

```
src/
  app/                              # Routes Next.js (App Router)
    layout.tsx                      # Layout racine (metadata globale, fonts, analytics)
    page.tsx                        # Page d'accueil /
    not-found.tsx                   # Page 404 personnalisee
    sitemap.ts                      # Generateur de sitemap XML
    robots.ts                       # Generateur de robots.txt
    a-propos/
      page.tsx                      # /a-propos
    admin/
      layout.tsx                    # Layout admin (protection par mot de passe)
      page.tsx                      # /admin -- dashboard
      articles/
        new/
          page.tsx                  # /admin/articles/new
        [id]/
          edit/
            page.tsx                # /admin/articles/[id]/edit
    blog/
      page.tsx                      # /blog -- liste des articles
      [slug]/
        page.tsx                    # /blog/[slug] -- article dynamique
    contact/
      page.tsx                      # /contact
    demande-maquette/
      page.tsx                      # /demande-maquette (server)
      DemandeMaquetteClient.tsx     # Composant client du formulaire
    estimation-prix-site-web/
      page.tsx                      # /estimation-prix-site-web (server)
      EstimationPrixClient.tsx      # Composant client du simulateur
    etude-de-cas/
      [slug]/
        page.tsx                    # /etude-de-cas/[slug] (server)
        CaseStudyPageClient.tsx     # Composant client de l'etude de cas
    newsletter-confirmation/
      page.tsx                      # /newsletter-confirmation
    offre-mensuelle/
      page.tsx                      # /offre-mensuelle (server)
      OffreMensuelleClient.tsx      # Composant client de l'offre
      devis/
        page.tsx                    # /offre-mensuelle/devis (server)
        DevisClient.tsx             # Composant client du devis
    offre-speciale/
      page.tsx                      # /offre-speciale (server)
      OffreSpecialeClient.tsx       # Composant client de l'offre
    politique-de-confidentialite/
      page.tsx                      # /politique-de-confidentialite
    portfolio/
      page.tsx                      # /portfolio (server)
      PortfolioClient.tsx           # Composant client du portfolio
    services/
      page.tsx                      # /services -- hub (server)
      ServicesPageContent.tsx        # Contenu client de la page services
      design/
        page.tsx                    # /services/design
        DesignPageContent.tsx       # Contenu client
        ui-ux/
          page.tsx                  # /services/design/ui-ux
          DesignUiUxContent.tsx     # Contenu client
        identite-visuelle/
          page.tsx                  # /services/design/identite-visuelle
          IdentiteVisuelleClient.tsx
          IdentiteVisuelleContent.tsx
      sea/
        page.tsx                    # /services/sea
        SeaPageContent.tsx          # Contenu client
        google-ads/
          page.tsx                  # /services/sea/google-ads
          GoogleAdsContent.tsx      # Contenu client
        meta-ads/
          page.tsx                  # /services/sea/meta-ads
          MetaAdsContent.tsx        # Contenu client
      seo/
        page.tsx                    # /services/seo
        SeoPageContent.tsx          # Contenu client
        SeoClient.tsx               # Composant client SEO
        audit/
          page.tsx                  # /services/seo/audit
          AuditSeoContent.tsx       # Contenu client
          AuditSeoClient.tsx        # Composant client
        referencement/
          page.tsx                  # /services/seo/referencement
          ReferencementContent.tsx  # Contenu client
          ReferencementClient.tsx   # Composant client
      sites-web/
        page.tsx                    # /services/sites-web
        landing-page/
          page.tsx                  # /services/sites-web/landing-page
          LandingPageContent.tsx    # Contenu client
        site-vitrine/
          page.tsx                  # /services/sites-web/site-vitrine
          SiteVitrineContent.tsx    # Contenu client
        site-ecommerce/
          page.tsx                  # /services/sites-web/site-ecommerce
          SiteEcommerceContent.tsx  # Contenu client
        application-web/
          page.tsx                  # /services/sites-web/application-web
          ApplicationWebContent.tsx # Contenu client
        refonte-site/
          page.tsx                  # /services/sites-web/refonte-site
          RefonteSiteContent.tsx    # Contenu client
      social-media/
        page.tsx                    # /services/social-media
        SocialMediaContent.tsx      # Contenu client
        community-management/
          page.tsx                  # /services/social-media/community-management
          CommunityManagementContent.tsx
        strategie/
          page.tsx                  # /services/social-media/strategie
          StrategieContent.tsx      # Contenu client

  components/                       # Composants React reutilisables
    Analytics.tsx                   # Scripts analytics (GA, GTM, Pixel, AdSense)
    blog/                           # Composants specifiques au blog
      BlogCard.tsx                  # Carte d'article
      BlogHeader.tsx                # En-tete de la page blog
      RelatedServices.tsx           # Services lies a un article
    case-study/                     # Composants des etudes de cas
      CaseStudyCTA.tsx              # Appel a l'action
      CaseStudyChallenge.tsx        # Section defi
      CaseStudyGallery.tsx          # Galerie de captures
      CaseStudyHero.tsx             # Hero de l'etude de cas
      CaseStudyMetrics.tsx          # Metriques et KPIs
      CaseStudyNavigation.tsx       # Navigation entre etudes
      CaseStudyOverview.tsx         # Vue d'ensemble
      CaseStudySolution.tsx         # Section solution
      CaseStudyTestimonial.tsx      # Temoignage client
      CaseStudyTimeline.tsx         # Chronologie du projet
    contact/                        # Composants de contact
      ContactForm.tsx               # Formulaire de contact principal
      ContactInfo.tsx               # Informations de contact
      NewsletterSubscription.tsx    # Formulaire d'inscription newsletter
    conversion/                     # Composants d'optimisation CRO
      ExitIntentPopup.tsx           # Popup d'intention de sortie
      PromoBanner.tsx               # Bandeau promotionnel
      SocialProofToast.tsx          # Notification de preuve sociale
      StickyMobileCTA.tsx           # CTA fixe en bas (mobile)
    internal-links/                 # Composants de maillage interne
      RelatedServicesSection.tsx    # Section services lies
      SuggestedArticles.tsx         # Articles suggeres
    layout/                         # Composants de mise en page globale
      Footer.tsx                    # Pied de page
      Navigation.tsx                # Barre de navigation principale
    pages/                          # Composants clients pour les pages
      BlogArticleClient.tsx         # Page article (client)
      BlogPageClient.tsx            # Page liste blog (client)
      HomePageClient.tsx            # Page d'accueil (client)
    portfolio/                      # Composants du portfolio
      PortfolioCTA.tsx              # Appel a l'action portfolio
      PortfolioCard.tsx             # Carte de projet
      PortfolioHeader.tsx           # En-tete du portfolio
    sections/                       # Sections reutilisables de la homepage
      About.tsx                     # Section a propos
      AnimatedCounter.tsx           # Compteur anime (chiffres cles)
      AnimatedSection.tsx           # Wrapper d'animation au scroll
      Contact.tsx                   # Section contact
      FAQ.tsx                       # Section FAQ avec accordeon
      Hero.tsx                      # Section hero principale
      Portfolio.tsx                 # Section portfolio
      ProcessTimeline.tsx           # Timeline du processus de travail
      Services.tsx                  # Section services
      SimplifiedContact.tsx         # Formulaire de contact simplifie
      Testimonials.tsx              # Section temoignages clients
    services/                       # Composants specifiques aux pages services
      ServiceCaseStudies.tsx        # Etudes de cas par service
      ServiceDetailSchema.tsx       # Schema JSON-LD pour le SEO
      ServiceFAQ.tsx                # FAQ par service
    sites-web/                      # Composants specifiques a /services/sites-web
      SitesWebCTA.tsx               # Appel a l'action
      SitesWebComparison.tsx        # Tableau comparatif des offres
      SitesWebFAQ.tsx               # FAQ sites web
      SitesWebGuarantee.tsx         # Section garantie
      SitesWebHero.tsx              # Hero de la page sites web
      SitesWebProcess.tsx           # Processus de creation
      SitesWebServices.tsx          # Liste des services web
      SitesWebTestimonials.tsx      # Temoignages specifiques
    ui/                             # Composants shadcn/ui (primitifs)
      accordion.tsx
      aspect-ratio.tsx
      badge.tsx
      breadcrumb.tsx
      button.tsx
      card.tsx
      carousel.tsx
      dialog.tsx
      input.tsx
      label.tsx
      navigation-menu.tsx
      select.tsx
      separator.tsx
      sonner.tsx
      tabs.tsx
      textarea.tsx

  lib/                              # Utilitaires et configuration
    constants.ts                    # Constantes globales (SITE, PRICING, SEO)
    utils.ts                        # Fonctions utilitaires (cn, etc.)
    supabase/
      client.ts                     # Client Supabase cote navigateur
      server.ts                     # Client Supabase cote serveur (cookies)
```

---

## Pattern architectural

Le projet suit le pattern **Server Component par defaut** de Next.js App Router :

1. **page.tsx** = Server Component (metadata, SEO, fetch initial)
2. **XxxClient.tsx** = Client Component co-localise (interactivite, animations)
3. **components/** = composants partages entre les pages

Ce decoupage permet d'optimiser le bundle JavaScript envoye au navigateur tout en conservant un bon SEO grace au rendu serveur.
