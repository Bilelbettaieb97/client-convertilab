export interface InternalLink {
  title: string;
  description: string;
  href: string;
  cta: string;
}

export interface ArticleInternalLinks {
  primary: InternalLink;
  secondary?: InternalLink;
}

export const articleInternalLinks: Record<string, ArticleInternalLinks> = {
  "pourquoi-site-web-indispensable-2024": {
    primary: { title: "Création de site vitrine", description: "Site professionnel en 7 jours dès 500€, satisfait ou remboursé.", href: "/services/sites-web/site-vitrine", cta: "Voir nos offres" },
    secondary: { title: "Estimation de prix", description: "Calculez le coût de votre site en 2 minutes.", href: "/estimation-prix-site-web", cta: "Estimer mon projet" },
  },
  "erreurs-site-web-eviter": {
    primary: { title: "Audit de design gratuit", description: "Découvrez les points faibles de votre site en quelques secondes.", href: "/design-score", cta: "Analyser mon site" },
    secondary: { title: "Refonte de site web", description: "Transformez un site daté en machine à convertir.", href: "/services/sites-web/refonte-site", cta: "Refondre mon site" },
  },
  "seo-local-guide-complet": {
    primary: { title: "Référencement SEO local", description: "Apparaissez en première page Google dans votre ville.", href: "/services/seo/referencement", cta: "Booster mon SEO local" },
    secondary: { title: "Audit SEO gratuit", description: "Analysez votre visibilité en ligne en 60 secondes.", href: "/seo-check", cta: "Auditer mon site" },
  },
  "combien-coute-site-web": {
    primary: { title: "Estimation de prix personnalisée", description: "Obtenez une estimation précise selon votre projet.", href: "/estimation-prix-site-web", cta: "Calculer mon budget" },
    secondary: { title: "Devis gratuit en 24h", description: "Un devis détaillé sans engagement sous 24h.", href: "/contact", cta: "Demander un devis" },
  },
  "tendances-web-design-2024": {
    primary: { title: "Design UI/UX professionnel", description: "Interfaces modernes qui convertissent et impressionnent.", href: "/services/design/ui-ux", cta: "Voir nos designs" },
    secondary: { title: "Score design gratuit", description: "Notez la qualité visuelle de votre site en 1 minute.", href: "/design-score", cta: "Tester mon design" },
  },
  "optimiser-vitesse-site-web": {
    primary: { title: "Analyse de vitesse gratuite", description: "Core Web Vitals, PageSpeed, LCP — diagnostic complet.", href: "/speed-check", cta: "Tester ma vitesse" },
    secondary: { title: "Création de site rapide (Next.js)", description: "Sites optimisés 90+ PageSpeed dès la livraison.", href: "/services/sites-web/site-vitrine", cta: "Créer mon site" },
  },
  "audit-seo-gratuit-guide": {
    primary: { title: "Audit SEO automatique", description: "Rapport complet : technique, on-page, local, mobile.", href: "/seo-check", cta: "Lancer mon audit SEO" },
    secondary: { title: "Audit SEO professionnel", description: "Diagnostic approfondi par nos experts SEO.", href: "/services/seo/audit", cta: "Demander un audit" },
  },
  "tester-vitesse-site-web": {
    primary: { title: "Test de vitesse gratuit", description: "Core Web Vitals et recommandations personnalisées.", href: "/speed-check", cta: "Tester ma vitesse" },
    secondary: { title: "Sites Next.js ultra-rapides", description: "Score PageSpeed 90+ garanti sur nos créations.", href: "/services/sites-web/site-vitrine", cta: "En savoir plus" },
  },
  "audit-design-ux-site-web": {
    primary: { title: "Score design gratuit", description: "Notation automatique : lisibilité, confiance, mobile.", href: "/design-score", cta: "Analyser mon design" },
    secondary: { title: "Design UI/UX professionnel", description: "Refonte visuelle par nos designers.", href: "/services/design/ui-ux", cta: "Revoir mon design" },
  },
  "estimer-roi-google-ads-meta-ads": {
    primary: { title: "Estimateur de budget ads", description: "Calculez votre ROI, CPL et leads/mois estimés.", href: "/estimateur-ads", cta: "Estimer mon ROI" },
    secondary: { title: "Gestion Google Ads", description: "Campagnes Search et Shopping optimisées par nos experts.", href: "/services/sea/google-ads", cta: "Lancer mes campagnes" },
  },
  "generateur-mentions-legales-gratuit": {
    primary: { title: "Générateur de mentions légales", description: "Mentions RGPD conformes LCEN en 2 minutes, gratuitement.", href: "/generateur-mentions-legales", cta: "Générer mes mentions" },
    secondary: { title: "Création de site conforme RGPD", description: "Tous nos sites intègrent la conformité légale.", href: "/services/sites-web/site-vitrine", cta: "En savoir plus" },
  },
  "generateur-robots-txt-sitemap-xml": {
    primary: { title: "Générateur robots.txt & sitemap", description: "Fichiers optimisés pour Google en 1 minute.", href: "/generateur-robots-sitemap", cta: "Générer mes fichiers" },
    secondary: { title: "Audit SEO technique", description: "Diagnostic complet de votre configuration SEO.", href: "/seo-check", cta: "Auditer mon site" },
  },
  "rapport-sectoriel-analyse-concurrence": {
    primary: { title: "Rapport sectoriel gratuit", description: "Analyse de votre marché et de votre concurrence.", href: "/rapport-sectoriel", cta: "Générer mon rapport" },
    secondary: { title: "Comparateur de sites", description: "Comparez votre site à celui d'un concurrent.", href: "/comparateur-sites", cta: "Comparer mes concurrents" },
  },
  "comparateur-sites-web-concurrent": {
    primary: { title: "Comparateur de sites gratuit", description: "SEO, vitesse, design — comparez-vous à vos concurrents.", href: "/comparateur-sites", cta: "Comparer maintenant" },
    secondary: { title: "Audit SEO complet", description: "Score global et plan d'action pour dépasser vos concurrents.", href: "/seo-check", cta: "Auditer mon site" },
  },
  "comment-choisir-agence-web-2026": {
    primary: { title: "Pourquoi choisir ConvertiLab ?", description: "+150 clients, 4.9★ Trustpilot, livraison en 7 jours.", href: "/a-propos", cta: "Découvrir ConvertiLab" },
    secondary: { title: "Voir nos réalisations", description: "Portfolio de sites créés pour nos clients.", href: "/portfolio", cta: "Voir le portfolio" },
  },
  "site-vitrine-vs-site-ecommerce": {
    primary: { title: "Création site vitrine dès 500€", description: "5 pages pro, SEO inclus, livré en 7 jours.", href: "/services/sites-web/site-vitrine", cta: "Créer mon site vitrine" },
    secondary: { title: "Création boutique en ligne dès 800€", description: "Catalogue, paiement Stripe, espace client.", href: "/services/sites-web/site-ecommerce", cta: "Créer ma boutique" },
  },
  "pourquoi-nextjs-meilleur-wordpress": {
    primary: { title: "Sites Next.js sur-mesure", description: "Performance 90+, SEO natif, sécurité renforcée.", href: "/services/sites-web/site-vitrine", cta: "Créer mon site Next.js" },
    secondary: { title: "Test de vitesse", description: "Comparez la vitesse de votre site WordPress actuel.", href: "/speed-check", cta: "Tester mon site" },
  },
  "landing-page-convertir-visiteurs": {
    primary: { title: "Création de landing page", description: "Page de conversion optimisée dès 300€, livrée en 5 jours.", href: "/services/sites-web/landing-page", cta: "Créer ma landing page" },
    secondary: { title: "Demander une maquette", description: "Maquette de votre landing page en 48h, gratuite.", href: "/demande-maquette", cta: "Voir une maquette" },
  },
  "refonte-site-web-quand-comment": {
    primary: { title: "Refonte de site web", description: "Modernisez votre site sans perdre votre SEO.", href: "/services/sites-web/refonte-site", cta: "Refondre mon site" },
    secondary: { title: "Audit design gratuit", description: "Identifiez les points à améliorer sur votre site actuel.", href: "/design-score", cta: "Analyser mon site" },
  },
  "site-web-responsive-mobile-first": {
    primary: { title: "Sites 100% responsive", description: "Mobile-first, testé sur tous les appareils.", href: "/services/sites-web/site-vitrine", cta: "En savoir plus" },
    secondary: { title: "Test de vitesse mobile", description: "Score Core Web Vitals sur mobile.", href: "/speed-check", cta: "Tester mon site" },
  },
  "cout-creation-site-internet-2026": {
    primary: { title: "Estimateur de prix", description: "Calculez le coût de votre site en 2 minutes.", href: "/estimation-prix-site-web", cta: "Estimer mon projet" },
    secondary: { title: "Offre paiement mensuel", description: "Votre site dès 39€/mois, sans apport initial.", href: "/offre-mensuelle", cta: "Voir l'offre mensuelle" },
  },
  "site-web-rapide-importance-performance": {
    primary: { title: "Test de vitesse gratuit", description: "Score PageSpeed et Core Web Vitals en 60 secondes.", href: "/speed-check", cta: "Tester ma vitesse" },
    secondary: { title: "Sites Next.js haute performance", description: "Score 90+ garanti sur tous nos projets.", href: "/services/sites-web/site-vitrine", cta: "Créer un site rapide" },
  },
  "hebergement-web-guide-debutant": {
    primary: { title: "Création de site clé en main", description: "Hébergement, SSL, déploiement — on gère tout.", href: "/services/sites-web/site-vitrine", cta: "Site clé en main" },
    secondary: { title: "Test de vitesse de votre hébergement", description: "Mesurez les performances de votre serveur actuel.", href: "/speed-check", cta: "Tester mon hébergement" },
  },
  "formulaire-contact-efficace-conversions": {
    primary: { title: "Site vitrine avec formulaire optimisé", description: "Formulaire multi-étapes connecté à votre CRM.", href: "/services/sites-web/site-vitrine", cta: "Créer mon site" },
    secondary: { title: "Demande de maquette", description: "Visualisez votre futur site avant de commencer.", href: "/demande-maquette", cta: "Voir une maquette" },
  },
  "guide-seo-debutant-2026": {
    primary: { title: "Audit SEO gratuit", description: "Score SEO + plan d'action prioritaire en 60 secondes.", href: "/seo-check", cta: "Auditer mon SEO" },
    secondary: { title: "Référencement SEO professionnel", description: "Stratégie SEO sur-mesure par nos experts.", href: "/services/seo/referencement", cta: "En savoir plus" },
  },
  "seo-local-google-business-profile": {
    primary: { title: "Référencement SEO local", description: "Dominez le Local Pack Google dans votre ville.", href: "/services/seo/referencement", cta: "Améliorer mon SEO local" },
    secondary: { title: "Pages locales optimisées", description: "Pages /agence-web/[ville] pour capter les clients locaux.", href: "/agence-web", cta: "Voir nos pages locales" },
  },
  "backlinks-strategie-netlinking-2026": {
    primary: { title: "Stratégie SEO complète", description: "Netlinking, contenu, technique — un plan global.", href: "/services/seo/referencement", cta: "Lancer ma stratégie SEO" },
    secondary: { title: "Audit SEO gratuit", description: "Identifiez vos lacunes SEO actuelles.", href: "/seo-check", cta: "Auditer mon site" },
  },
  "balises-meta-optimiser-seo": {
    primary: { title: "Audit SEO complet", description: "Balises title, meta, canonical — tout est vérifié.", href: "/seo-check", cta: "Auditer mes balises" },
    secondary: { title: "SEO technique professionnel", description: "Nos développeurs optimisent votre SEO on-page.", href: "/services/seo/audit", cta: "Demander un audit" },
  },
  "comment-apparaitre-premier-google": {
    primary: { title: "Référencement SEO", description: "Page 1 Google durablement grâce à notre expertise.", href: "/services/seo/referencement", cta: "Apparaître sur Google" },
    secondary: { title: "Audit SEO gratuit", description: "Où en êtes-vous sur Google aujourd'hui ?", href: "/seo-check", cta: "Voir mon positionnement" },
  },
  "audit-seo-site-web-etapes": {
    primary: { title: "Audit SEO automatique gratuit", description: "Rapport complet en 60 secondes.", href: "/seo-check", cta: "Lancer mon audit" },
    secondary: { title: "Audit SEO professionnel", description: "Analyse approfondie par nos experts SEO.", href: "/services/seo/audit", cta: "Demander un audit expert" },
  },
  "indexation-google-accelerer": {
    primary: { title: "Générateur de sitemap", description: "Sitemap.xml optimisé pour accélérer l'indexation.", href: "/generateur-robots-sitemap", cta: "Générer mon sitemap" },
    secondary: { title: "Audit SEO technique", description: "Identifiez les blocages d'indexation.", href: "/seo-check", cta: "Auditer mon site" },
  },
  "contenu-seo-redaction-optimisee": {
    primary: { title: "Stratégie de contenu SEO", description: "Articles de blog et pages optimisés pour Google.", href: "/services/seo/referencement", cta: "Booster mon contenu" },
    secondary: { title: "Audit SEO de contenu", description: "Identifiez le contenu à améliorer en priorité.", href: "/seo-check", cta: "Analyser mon contenu" },
  },
  "erreurs-seo-courantes-eviter": {
    primary: { title: "Audit SEO gratuit", description: "Vérifiez si votre site commet ces erreurs.", href: "/seo-check", cta: "Auditer mon site" },
    secondary: { title: "SEO professionnel", description: "Nos experts corrigent et optimisent votre SEO.", href: "/services/seo/referencement", cta: "Corriger mon SEO" },
  },
  "seo-vs-sea-lequel-choisir": {
    primary: { title: "Estimateur de budget ads", description: "Calculez votre ROI Google Ads vs SEO.", href: "/estimateur-ads", cta: "Calculer mon ROI" },
    secondary: { title: "SEO + SEA : stratégie combinée", description: "Nos experts vous conseillent la meilleure approche.", href: "/services", cta: "Voir nos services" },
  },
  "google-ads-guide-debutant-2026": {
    primary: { title: "Campagnes Google Ads", description: "Création et gestion par nos spécialistes certifiés.", href: "/services/sea/google-ads", cta: "Lancer mes Google Ads" },
    secondary: { title: "Estimateur de budget ads", description: "Calculez combien investir et quel ROI attendre.", href: "/estimateur-ads", cta: "Estimer mon budget" },
  },
  "meta-ads-facebook-instagram-guide": {
    primary: { title: "Publicités Meta Ads", description: "Campagnes Facebook & Instagram qui convertissent.", href: "/services/sea/meta-ads", cta: "Lancer mes Meta Ads" },
    secondary: { title: "Estimateur de budget ads", description: "ROI estimé, CPL, leads/mois pour votre secteur.", href: "/estimateur-ads", cta: "Estimer mon ROI" },
  },
  "community-management-reseaux-sociaux": {
    primary: { title: "Community management", description: "Gestion de vos réseaux sociaux clé en main.", href: "/services/social-media/community-management", cta: "Externaliser mes réseaux" },
    secondary: { title: "Stratégie social media", description: "Plan éditorial et stratégie sur-mesure.", href: "/services/social-media/strategie", cta: "Voir notre stratégie" },
  },
  "email-marketing-newsletter-strategies": {
    primary: { title: "Création de landing page", description: "Page de capture d'emails optimisée pour la conversion.", href: "/services/sites-web/landing-page", cta: "Créer ma landing page" },
    secondary: { title: "Site vitrine avec formulaire", description: "Capturez des emails depuis votre site.", href: "/services/sites-web/site-vitrine", cta: "En savoir plus" },
  },
  "tunnel-conversion-optimiser-ventes": {
    primary: { title: "Création de landing page", description: "Tunnel de vente optimisé pour convertir.", href: "/services/sites-web/landing-page", cta: "Créer mon tunnel" },
    secondary: { title: "Audit design et UX", description: "Identifiez les blocages dans votre funnel actuel.", href: "/design-score", cta: "Analyser mon site" },
  },
  "strategie-marketing-digital-pme": {
    primary: { title: "Services marketing digital", description: "SEO, Ads, Social Media — une stratégie intégrée.", href: "/services", cta: "Voir tous nos services" },
    secondary: { title: "Rapport sectoriel gratuit", description: "Analyse de votre marché et positionnement concurrentiel.", href: "/rapport-sectoriel", cta: "Générer mon rapport" },
  },
  "retargeting-remarketing-guide": {
    primary: { title: "Campagnes Meta Ads", description: "Retargeting et remarketing sur Facebook & Instagram.", href: "/services/sea/meta-ads", cta: "Lancer mon retargeting" },
    secondary: { title: "Campagnes Google Ads", description: "Display et remarketing Google pour recapturer vos visiteurs.", href: "/services/sea/google-ads", cta: "En savoir plus" },
  },
  "budget-publicite-en-ligne-combien": {
    primary: { title: "Estimateur de budget ads", description: "Budget optimal, ROI et leads estimés pour votre secteur.", href: "/estimateur-ads", cta: "Calculer mon budget" },
    secondary: { title: "Gestion Google Ads + Meta Ads", description: "Nos experts gèrent vos campagnes pour vous.", href: "/services/sea", cta: "Voir nos offres SEA" },
  },
  "instagram-entreprise-guide-complet": {
    primary: { title: "Publicités Meta Ads", description: "Campagnes Instagram qui génèrent des clients.", href: "/services/sea/meta-ads", cta: "Lancer mes Instagram Ads" },
    secondary: { title: "Community management", description: "Gestion de votre compte Instagram par nos experts.", href: "/services/social-media/community-management", cta: "Déléguer mon Instagram" },
  },
  "google-analytics-4-guide-debutant": {
    primary: { title: "Audit SEO avec analytics", description: "On installe et configure GA4 sur votre site.", href: "/services/seo/audit", cta: "Configurer mon analytics" },
    secondary: { title: "Test de vitesse avec données réelles", description: "Core Web Vitals depuis les données de terrain.", href: "/speed-check", cta: "Tester mon site" },
  },
  "creer-boutique-en-ligne-guide-2026": {
    primary: { title: "Création boutique en ligne", description: "E-commerce Next.js + Stripe dès 800€.", href: "/services/sites-web/site-ecommerce", cta: "Créer ma boutique" },
    secondary: { title: "Estimation de prix e-commerce", description: "Calculez le coût de votre boutique.", href: "/estimation-prix-site-web", cta: "Estimer mon projet" },
  },
  "fiche-produit-optimisee-vendre": {
    primary: { title: "Création boutique e-commerce", description: "Fiches produits optimisées SEO dès la création.", href: "/services/sites-web/site-ecommerce", cta: "Créer ma boutique" },
    secondary: { title: "Audit SEO e-commerce", description: "Analysez votre boutique existante.", href: "/seo-check", cta: "Auditer ma boutique" },
  },
  "panier-abandonne-solutions-ecommerce": {
    primary: { title: "E-commerce avec abandon cart", description: "Emails de relance automatiques intégrés.", href: "/services/sites-web/site-ecommerce", cta: "Créer ma boutique" },
    secondary: { title: "Landing page de relance", description: "Page dédiée pour récupérer les paniers abandonnés.", href: "/services/sites-web/landing-page", cta: "Créer ma landing page" },
  },
  "stripe-paiement-en-ligne-guide": {
    primary: { title: "Boutique en ligne avec Stripe", description: "Paiement sécurisé intégré dès 800€.", href: "/services/sites-web/site-ecommerce", cta: "Créer ma boutique" },
    secondary: { title: "Site vitrine avec paiement", description: "Formulaire de devis avec acompte Stripe.", href: "/services/sites-web/site-vitrine", cta: "En savoir plus" },
  },
  "seo-ecommerce-referencer-produits": {
    primary: { title: "Boutique e-commerce SEO-ready", description: "Fiches produits, schema markup, sitemap — tout inclus.", href: "/services/sites-web/site-ecommerce", cta: "Créer ma boutique SEO" },
    secondary: { title: "Audit SEO boutique", description: "Analysez les lacunes SEO de votre boutique actuelle.", href: "/seo-check", cta: "Auditer ma boutique" },
  },
  "taux-conversion-ameliorer-site": {
    primary: { title: "Audit design & UX gratuit", description: "Score de conversion de votre site en 1 minute.", href: "/design-score", cta: "Analyser mon taux de conversion" },
    secondary: { title: "Refonte orientée conversion", description: "Redesign de votre site pour doubler vos leads.", href: "/services/sites-web/refonte-site", cta: "Refondre mon site" },
  },
  "photos-produits-ecommerce-conseils": {
    primary: { title: "Boutique e-commerce complète", description: "Galerie photos optimisée SEO et expérience d'achat fluide.", href: "/services/sites-web/site-ecommerce", cta: "Créer ma boutique" },
    secondary: { title: "Score design de votre boutique", description: "Analysez l'impact visuel de vos photos produits.", href: "/design-score", cta: "Analyser ma boutique" },
  },
  "livraison-ecommerce-strategie": {
    primary: { title: "Boutique e-commerce avec gestion livraison", description: "Intégration transporteurs, suivi commandes, zones de livraison.", href: "/services/sites-web/site-ecommerce", cta: "Créer ma boutique" },
    secondary: { title: "Audit e-commerce", description: "Identifiez les freins à l'achat sur votre boutique.", href: "/comparateur-sites", cta: "Comparer avec la concurrence" },
  },
  "avis-clients-ecommerce-importance": {
    primary: { title: "Boutique avec avis intégrés", description: "Module avis clients Trustpilot/Google sur votre boutique.", href: "/services/sites-web/site-ecommerce", cta: "Créer ma boutique" },
    secondary: { title: "Demande de maquette", description: "Visualisez votre boutique avant de commencer.", href: "/demande-maquette", cta: "Voir une maquette" },
  },
  "vendre-sur-instagram-social-commerce": {
    primary: { title: "Publicités Instagram & Meta Ads", description: "Campagnes social commerce qui vendent.", href: "/services/sea/meta-ads", cta: "Lancer mes Instagram Ads" },
    secondary: { title: "Boutique e-commerce + Instagram", description: "Connectez votre boutique à Instagram Shopping.", href: "/services/sites-web/site-ecommerce", cta: "Créer ma boutique" },
  },
  "design-web-tendances-2026": {
    primary: { title: "Design UI/UX 2026", description: "Sites modernes avec les dernières tendances design.", href: "/services/design/ui-ux", cta: "Voir nos designs" },
    secondary: { title: "Score design gratuit", description: "Votre site est-il aux standards 2026 ?", href: "/design-score", cta: "Tester mon design" },
  },
  "identite-visuelle-entreprise-guide": {
    primary: { title: "Identité visuelle & logo", description: "Logo, charte graphique, templates — identité complète.", href: "/services/design/identite-visuelle", cta: "Créer mon identité" },
    secondary: { title: "Design UI/UX", description: "Interface cohérente avec votre identité de marque.", href: "/services/design/ui-ux", cta: "En savoir plus" },
  },
  "ux-design-ameliorer-experience-utilisateur": {
    primary: { title: "Design UX professionnel", description: "Audit UX et refonte d'interface orientée conversion.", href: "/services/design/ui-ux", cta: "Améliorer mon UX" },
    secondary: { title: "Audit design gratuit", description: "Score UX de votre site en 1 minute.", href: "/design-score", cta: "Analyser mon UX" },
  },
  "accessibilite-web-guide-wcag": {
    primary: { title: "Sites web accessibles WCAG 2.2", description: "Conformité accessibilité native sur tous nos projets.", href: "/services/sites-web/site-vitrine", cta: "Créer un site accessible" },
    secondary: { title: "Audit de conformité", description: "Vérifiez la conformité RGPD et accessibilité de votre site.", href: "/seo-check", cta: "Auditer ma conformité" },
  },
  "psychologie-couleurs-web-design": {
    primary: { title: "Design identité visuelle", description: "Palette de couleurs stratégique pour votre marque.", href: "/services/design/identite-visuelle", cta: "Créer mon identité" },
    secondary: { title: "Score design gratuit", description: "Analysez l'impact de vos couleurs actuelles.", href: "/design-score", cta: "Analyser mes couleurs" },
  },
  "freelance-ou-agence-web-comparaison": {
    primary: { title: "Pourquoi choisir ConvertiLab ?", description: "L'expertise d'une agence au prix d'un freelance.", href: "/a-propos", cta: "Découvrir ConvertiLab" },
    secondary: { title: "Nos réalisations clients", description: "+150 sites créés, 4.9★ Trustpilot.", href: "/portfolio", cta: "Voir le portfolio" },
  },
  "presence-en-ligne-entreprise-2026": {
    primary: { title: "Pack présence en ligne complète", description: "Site + SEO + Google Ads — tout en un.", href: "/services", cta: "Voir nos offres" },
    secondary: { title: "Audit de votre présence actuelle", description: "SEO, vitesse, design — bilan complet.", href: "/seo-check", cta: "Auditer ma présence" },
  },
  "rgpd-site-web-conformite-guide": {
    primary: { title: "Générateur de mentions légales", description: "Mentions RGPD conformes LCEN gratuitement.", href: "/generateur-mentions-legales", cta: "Générer mes mentions légales" },
    secondary: { title: "Sites créés conformes RGPD", description: "Cookies, mentions légales, politique de confidentialité inclus.", href: "/services/sites-web/site-vitrine", cta: "Créer un site conforme" },
  },
  "ssl-https-securite-site-web": {
    primary: { title: "Sites avec HTTPS automatique", description: "SSL Let's Encrypt sur Vercel — aucune action requise.", href: "/services/sites-web/site-vitrine", cta: "Créer un site sécurisé" },
    secondary: { title: "Test de sécurité de votre site", description: "Audit technique incluant HTTPS et headers de sécurité.", href: "/seo-check", cta: "Auditer ma sécurité" },
  },
  "budget-publicite-en-ligne-combien": {
    primary: { title: "Estimateur de budget ads", description: "Budget optimal, ROI et leads estimés pour votre secteur.", href: "/estimateur-ads", cta: "Calculer mon budget" },
    secondary: { title: "Gestion Google Ads + Meta Ads", description: "Nos experts gèrent vos campagnes pour vous.", href: "/services/sea", cta: "Voir nos offres SEA" },
  },
  "typographie-web-choisir-polices": {
    primary: { title: "Design UI/UX professionnel", description: "Typographie soignée, cohérence visuelle, identité forte.", href: "/services/design/ui-ux", cta: "Voir nos designs" },
    secondary: { title: "Score design gratuit", description: "Évaluez la qualité typographique de votre site.", href: "/design-score", cta: "Analyser mon design" },
  },
};

export function getArticleLinks(slug: string): ArticleInternalLinks | null {
  return articleInternalLinks[slug] || null;
}
