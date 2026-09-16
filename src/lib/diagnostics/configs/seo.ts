import type { Diagnostic } from "../types";

/**
 * Diagnostics interactifs du pôle (seo) : un par page qui en propose un.
 * Voir types.ts pour la forme et les règles d'écriture.
 *
 * Les pages /services/seo/referencement, /audit et /visibilite-ia embarquent
 * l'audit réel d'une URL (SeoCheckForm), qui a son propre rapport : elles
 * n'ont donc pas de diagnostic ici.
 */
export const DIAGNOSTICS_SEO: Diagnostic[] = [
  /* ------------------------------------------------ /services/seo (pôle) */
  {
    slug: "seo-diagnostic-referencement",
    type: "questionnaire",
    titre: "Où en est votre référencement ?",
    accroche:
      "Douze questions sur ce que vous avez réellement en place : la technique, les contenus, la présence locale et la visibilité dans les réponses des IA. Résultat immédiat, sans email.",
    obtenez: [
      "Un score global et un score par axe : technique, contenu, local, visibilité IA",
      "Vos trois priorités, avec l'action concrète à faire pour chacune",
      "Le rapport complet par email, avec le plan SEO sur 6 mois en bonus",
    ],
    axes: [
      { id: "technique", label: "Technique" },
      { id: "contenu", label: "Contenu" },
      { id: "local", label: "Local" },
      { id: "ia", label: "Visibilité IA" },
    ],
    questions: [
      {
        id: "search-console",
        texte: "Votre site est-il relié à Google Search Console ?",
        aide: "C'est l'outil gratuit de Google qui dit quelles pages sont indexées et sur quelles recherches elles apparaissent.",
        axe: "technique",
        options: [
          { id: "suivi", label: "Oui, et je regarde les pages indexées et les requêtes au moins une fois par mois", points: 3 },
          {
            id: "dormant",
            label: "Oui, mais je ne l'ouvre presque jamais",
            points: 1,
            conseil: {
              titre: "Ouvrez Search Console une fois par mois",
              texte:
                "Rapport Pages : notez le nombre de pages indexées et la liste des pages exclues. Rapport Performances : notez les dix requêtes qui vous apportent des impressions. Vingt minutes par mois suffisent pour voir ce qui bouge et ce qui bloque.",
            },
          },
          {
            id: "non",
            label: "Non, ou je ne sais pas",
            points: 0,
            conseil: {
              titre: "Reliez votre site à Google Search Console cette semaine",
              texte:
                "Créez une propriété de type Domaine sur search.google.com/search-console, validez-la par l'enregistrement DNS proposé chez votre hébergeur, puis envoyez votre sitemap. C'est gratuit, et c'est la seule source qui dit ce que Google voit réellement de votre site.",
            },
          },
        ],
      },
      {
        id: "vitesse",
        texte: "Combien de temps met votre page d'accueil à s'afficher sur un téléphone ?",
        axe: "technique",
        options: [
          { id: "rapide", label: "Moins de trois secondes, mesuré avec PageSpeed Insights", points: 2 },
          {
            id: "jamais-mesure",
            label: "Je ne l'ai jamais mesuré",
            points: 1,
            conseil: {
              titre: "Mesurez votre vitesse mobile avec PageSpeed Insights",
              texte:
                "Entrez l'adresse de votre page d'accueil sur pagespeed.web.dev, onglet Mobile, et notez le LCP. S'il dépasse 2,5 secondes, commencez par compresser les images (format WebP, moins de 200 Ko chacune) et retirez les extensions que vous n'utilisez plus.",
            },
          },
          {
            id: "lent",
            label: "Plus de trois secondes, ou le site rame visiblement",
            points: 0,
            conseil: {
              titre: "Allégez d'abord les images de la page d'accueil",
              texte:
                "Passez vos photos au format WebP avec un outil gratuit comme Squoosh, visez moins de 200 Ko par image, et retirez la vidéo d'arrière-plan si vous en avez une. Ce sont les deux causes les plus fréquentes d'un site lent sur mobile, et les plus simples à corriger soi-même.",
            },
          },
        ],
      },
      {
        id: "titres",
        texte: "Chaque page de votre site a-t-elle un titre (balise title) qui lui est propre ?",
        aide: "C'est le texte affiché dans l'onglet du navigateur et en bleu dans les résultats Google.",
        axe: "technique",
        options: [
          { id: "propres", label: "Oui, chaque page a un titre unique avec le service et la ville", points: 2 },
          {
            id: "auto",
            label: "Les titres sont ceux générés automatiquement (nom du site, « Accueil »...)",
            points: 1,
            conseil: {
              titre: "Réécrivez le titre de vos cinq pages principales",
              texte:
                "Format : service + ville + nom de l'entreprise, en moins de 60 caractères. Exemple : « Plombier à Rueil-Malmaison | Dupont Plomberie ». Faites-le sur l'accueil et sur les quatre pages qui vendent le plus, avant toutes les autres.",
            },
          },
          {
            id: "inconnu",
            label: "Je ne sais pas, je n'ai jamais regardé",
            points: 0,
            conseil: {
              titre: "Vérifiez vos titres en deux minutes",
              texte:
                "Ouvrez votre site et lisez le texte dans l'onglet du navigateur : c'est le titre que Google affiche. S'il dit « Accueil » ou seulement le nom du site, réécrivez-le avec le service et la ville depuis votre éditeur de site (rubrique SEO ou Réglages de la page), puis faites de même pour chaque page.",
            },
          },
        ],
      },
      {
        id: "pages-prestations",
        texte: "Avez-vous une page dédiée à chaque prestation que vous vendez ?",
        axe: "contenu",
        options: [
          { id: "une-par-service", label: "Oui, une page par prestation, avec au moins 400 mots chacune", points: 3 },
          {
            id: "page-services",
            label: "Une seule page « Services » qui liste tout",
            points: 1,
            conseil: {
              titre: "Découpez votre page Services en une page par prestation",
              texte:
                "Google classe une page pour une recherche donnée : une page « Nos services » ne peut pas se positionner sur dix prestations à la fois. Créez d'abord la page de la prestation la plus rentable : ce qu'elle comprend, pour qui, la fourchette de prix, trois questions fréquentes, un bouton de contact.",
            },
          },
          {
            id: "accueil",
            label: "Les prestations sont décrites sur la page d'accueil seulement",
            points: 0,
            conseil: {
              titre: "Créez une page pour votre prestation principale",
              texte:
                "Sortez la description de votre service principal de la page d'accueil et donnez-lui sa propre page, avec une adresse claire (votre-site.fr/nom-de-la-prestation), 400 mots, une photo réelle et un bouton de contact. Répétez ensuite pour chaque prestation.",
            },
          },
        ],
      },
      {
        id: "publication",
        texte: "À quelle fréquence publiez-vous un nouveau contenu sur le site (article, page, réalisation) ?",
        axe: "contenu",
        options: [
          { id: "mensuel", label: "Au moins une fois par mois", points: 3 },
          {
            id: "rare",
            label: "Quelques fois par an",
            points: 1,
            conseil: {
              titre: "Fixez un rendez-vous mensuel de publication",
              texte:
                "Bloquez deux heures le premier lundi de chaque mois. Le sujet : une question qu'un client vous a posée dans le mois. Comptez 500 mots, une photo, et un lien vers la page de prestation concernée.",
            },
          },
          {
            id: "jamais",
            label: "Jamais, le site n'a pas bougé depuis sa mise en ligne",
            points: 0,
            conseil: {
              titre: "Publiez vos trois premières réponses à des questions clients",
              texte:
                "Notez les trois questions qu'on vous pose le plus souvent avant d'acheter (le prix, le délai, comment ça se passe). Rédigez une page de 500 mots pour chacune, avec une réponse directe dès le premier paragraphe. Ce sont les recherches que vos futurs clients tapent.",
            },
          },
        ],
      },
      {
        id: "requetes",
        texte: "Savez-vous sur quelles recherches vos clients vous cherchent, et quelle page de votre site répond à chacune ?",
        axe: "contenu",
        options: [
          { id: "liste", label: "Oui, j'ai une liste de recherches cibles, avec une page pour chacune", points: 2 },
          {
            id: "vague",
            label: "J'ai une idée générale, mais rien d'écrit",
            points: 1,
            conseil: {
              titre: "Écrivez votre liste de dix recherches cibles",
              texte:
                "Une ligne par recherche (« service + ville »), puis la page de votre site qui doit y répondre. Si une recherche n'a pas de page, c'est votre prochain contenu à créer. Vérifiez les formulations réelles dans Search Console, rapport Performances.",
            },
          },
          {
            id: "non",
            label: "Non, je n'y ai jamais réfléchi",
            points: 0,
            conseil: {
              titre: "Partez des mots de vos clients",
              texte:
                "Reprenez vos dix derniers échanges (emails, devis, appels) et notez comment les clients nomment votre prestation. Tapez ces formulations dans Google et regardez qui ressort : c'est votre liste de départ, et vos concurrents à observer.",
            },
          },
        ],
      },
      {
        id: "fiche-google",
        texte: "Votre fiche d'établissement Google est-elle revendiquée et complète ?",
        aide: "La fiche qui apparaît dans Google Maps et à droite des résultats quand on tape votre nom.",
        axe: "local",
        options: [
          { id: "complete", label: "Oui : catégorie, horaires, téléphone, site, description et photos sont remplis", points: 3 },
          {
            id: "incomplete",
            label: "Elle existe, mais il manque des éléments (photos, description, horaires...)",
            points: 1,
            conseil: {
              titre: "Complétez les champs vides de votre fiche Google",
              texte:
                "Dans Google Business Profile : la catégorie principale exacte, les horaires, le téléphone, le lien vers votre site, une description de 750 caractères avec vos prestations et votre zone, et au moins dix photos réelles. Une fiche complète ressort davantage dans les résultats locaux.",
            },
          },
          {
            id: "aucune",
            label: "Je n'ai pas de fiche, ou je ne l'ai jamais revendiquée",
            points: 0,
            conseil: {
              titre: "Revendiquez ou créez votre fiche Google cette semaine",
              texte:
                "Rendez-vous sur google.com/business et cherchez votre entreprise. Si elle existe, revendiquez-la ; sinon, créez-la. Google valide par courrier, vidéo ou téléphone selon les cas. Sans fiche, vous n'apparaissez pas dans la carte Google, quelle que soit la qualité de votre site.",
            },
          },
        ],
      },
      {
        id: "avis",
        texte: "Combien d'avis Google avez-vous reçus au cours des trois derniers mois ?",
        axe: "local",
        options: [
          { id: "reguliers", label: "Au moins un par mois, et je réponds à chacun", points: 2 },
          {
            id: "irreguliers",
            label: "Un ou deux, sans régularité",
            points: 1,
            conseil: {
              titre: "Demandez un avis après chaque prestation terminée",
              texte:
                "Créez votre lien court d'avis depuis votre fiche Google (bouton « Demander des avis »). Envoyez-le par SMS le jour de la fin de prestation, avec une phrase personnelle. Répondez à chaque avis sous 48 heures, y compris les positifs.",
            },
          },
          {
            id: "aucun",
            label: "Aucun",
            points: 0,
            conseil: {
              titre: "Sollicitez vos cinq derniers clients satisfaits",
              texte:
                "Envoyez-leur un message personnel avec le lien d'avis de votre fiche Google. Quelques avis récents changent déjà la perception d'un prospect qui vous compare, et Google tient compte de la fraîcheur des avis autant que de leur nombre.",
            },
          },
        ],
      },
      {
        id: "villes",
        texte: "Votre site mentionne-t-il clairement les villes ou la zone où vous intervenez ?",
        axe: "local",
        options: [
          { id: "pages-villes", label: "Oui, avec une page par ville ou zone principale", points: 2 },
          {
            id: "pied-de-page",
            label: "La ville est citée dans le pied de page ou la page Contact seulement",
            points: 1,
            conseil: {
              titre: "Créez une page pour votre ville principale",
              texte:
                "Une page « [Votre prestation] à [ville] » : les communes ou quartiers couverts, deux réalisations locales avec photo, les délais d'intervention, un bouton d'appel. Ensuite, une page par commune où vous avez déjà des clients.",
            },
          },
          {
            id: "aucune",
            label: "Non, aucune ville n'est indiquée",
            points: 0,
            conseil: {
              titre: "Indiquez votre zone sur la page d'accueil et dans les titres",
              texte:
                "Ajoutez la ville dans le titre de la page d'accueil et dans son premier paragraphe, et votre adresse complète dans le pied de page de toutes les pages. Google ne peut pas vous montrer aux habitants d'une ville qu'il ne voit nulle part sur votre site.",
            },
          },
        ],
      },
      {
        id: "test-ia",
        texte: "Avez-vous déjà demandé à ChatGPT, Perplexity ou Gemini de recommander un professionnel de votre métier dans votre ville ?",
        axe: "ia",
        options: [
          { id: "cite", label: "Oui, et mon entreprise est citée dans la réponse", points: 3 },
          {
            id: "pas-cite",
            label: "Oui, mais je ne suis pas cité",
            points: 1,
            conseil: {
              titre: "Écrivez la page qui répond à la question posée à l'IA",
              texte:
                "Regardez quelles sources l'IA cite : souvent des annuaires, des articles locaux, des pages qui alignent des faits. Créez sur votre site une page factuelle, en phrases courtes : qui vous êtes, votre zone, vos prestations, vos tarifs, vos délais. Les IA citent ce qu'elles peuvent lire et résumer sans effort.",
            },
          },
          {
            id: "jamais",
            label: "Non, jamais testé",
            points: 0,
            conseil: {
              titre: "Faites le test en cinq minutes",
              texte:
                "Posez à ChatGPT et à Perplexity la question : « Quel [métier] me recommandes-tu à [ville] ? ». Notez qui est cité et d'où viennent les sources affichées. C'est votre point de départ, et vous découvrez qui sont vos concurrents dans les réponses générées.",
            },
          },
        ],
      },
      {
        id: "faq",
        texte: "Vos pages contiennent-elles des questions-réponses (FAQ) avec des réponses complètes ?",
        axe: "ia",
        options: [
          { id: "par-page", label: "Oui, une FAQ sur chaque page de prestation", points: 2 },
          {
            id: "generale",
            label: "Une FAQ générale sur une seule page",
            points: 1,
            conseil: {
              titre: "Ajoutez trois questions-réponses sur chaque page de prestation",
              texte:
                "Reprenez les questions réelles de vos clients pour cette prestation. Une réponse de deux à quatre phrases, avec le chiffre ou le délai quand vous le connaissez. Les IA reprennent volontiers ce format question-réponse, à condition que la réponse soit complète.",
            },
          },
          {
            id: "aucune",
            label: "Non",
            points: 0,
            conseil: {
              titre: "Écrivez votre première FAQ de cinq questions",
              texte:
                "Sur votre page principale, ajoutez cinq questions que l'on vous pose avant de commander (prix, délai, zone, garantie, déroulement), avec une réponse directe pour chacune. Une question par sous-titre, la réponse juste en dessous.",
            },
          },
        ],
      },
      {
        id: "donnees-structurees",
        texte: "Votre site contient-il des données structurées (schema.org : LocalBusiness, FAQ, Service) ?",
        aide: "Un code invisible qui décrit votre entreprise aux moteurs et aux IA. Les extensions SEO le génèrent souvent.",
        axe: "ia",
        options: [
          { id: "verifiees", label: "Oui, vérifié avec l'outil de test des résultats enrichis de Google", points: 2 },
          {
            id: "inconnu",
            label: "Je ne sais pas",
            points: 1,
            conseil: {
              titre: "Testez votre site avec l'outil de résultats enrichis",
              texte:
                "Entrez l'adresse de votre page d'accueil sur search.google.com/test/rich-results. S'il ne détecte rien, ajoutez au moins un bloc LocalBusiness (nom, adresse, téléphone, horaires) : la plupart des éditeurs de site ont une extension qui le fait à partir de vos coordonnées.",
            },
          },
          {
            id: "aucune",
            label: "Non, il n'y en a pas",
            points: 0,
            conseil: {
              titre: "Ajoutez un bloc LocalBusiness et un bloc FAQ",
              texte:
                "Sur WordPress, une extension SEO (Yoast, Rank Math) génère le bloc LocalBusiness depuis vos coordonnées. Pour la FAQ, utilisez le bloc FAQ de la même extension sur vos pages de prestation. Vérifiez ensuite avec l'outil de test des résultats enrichis de Google.",
            },
          },
        ],
      },
    ],
    verdicts: [
      {
        min: 70,
        titre: "Un socle solide, à faire fructifier",
        texte:
          "Les bases sont en place : Google peut lire votre site, il sait de quoi il parle et où vous êtes. Les priorités ci-dessous sont des marges de progression, pas des urgences. Gardez votre rythme de publication et regardez Search Console chaque mois pour voir ce qui monte.",
      },
      {
        min: 40,
        titre: "Des bases présentes, des manques qui coûtent des positions",
        texte:
          "Une partie du travail est faite, mais certains manques bloquent des résultats que vous pourriez déjà avoir. Traitez les priorités dans l'ordre affiché : la première corrige souvent ce qui pèse le plus. Comptez quelques semaines de travail régulier avant d'en mesurer l'effet.",
      },
      {
        min: 0,
        titre: "Le référencement n'a pas encore vraiment commencé",
        texte:
          "Ce n'est pas une mauvaise nouvelle : tout ce qui manque est identifié, et chaque priorité ci-dessous se fait sans compétence technique. Commencez par la fiche Google et Search Console, dont les effets se voient en premier, puis avancez page par page.",
      },
    ],
    ressource: "seo-plan-6-mois-tpe",
    pole: "seo",
    page: "/services/seo",
  },

  /* --------------------------------------------- /services/seo/seo-local */
  {
    slug: "seo-diagnostic-fiche-google",
    type: "questionnaire",
    titre: "Votre fiche Google est-elle bien tenue ?",
    accroche:
      "Douze questions sur votre fiche d'établissement : ce qui est rempli, vos avis, vos photos et la cohérence avec votre site. Résultat immédiat, sans email.",
    obtenez: [
      "Un score par axe : fiche complète, avis, photos et actualités, cohérence des coordonnées",
      "Vos trois priorités, avec la manipulation exacte à faire dans Google Business Profile",
      "Le rapport complet par email, avec la checklist des 32 points et le script pour obtenir des avis",
    ],
    axes: [
      { id: "fiche", label: "Fiche complète" },
      { id: "avis", label: "Avis" },
      { id: "photos", label: "Photos et actualités" },
      { id: "coherence", label: "Coordonnées et site" },
    ],
    questions: [
      {
        id: "propriete",
        texte: "Qui a la main sur votre fiche Google aujourd'hui ?",
        axe: "fiche",
        options: [
          { id: "moi", label: "Moi, en tant que propriétaire principal, avec le compte Google de l'entreprise", points: 2 },
          {
            id: "tiers",
            label: "Un prestataire ou un ancien collaborateur, je ne suis pas sûr d'avoir accès",
            points: 1,
            conseil: {
              titre: "Reprenez la propriété principale de votre fiche",
              texte:
                "Dans Google Business Profile, rubrique Utilisateurs : vérifiez que votre compte est Propriétaire principal. Si c'est un ancien prestataire, demandez-lui le transfert ; sans réponse sous sept jours, lancez la demande d'accès depuis la fiche elle-même. Une fiche dont vous n'avez pas la main ne se corrige pas.",
            },
          },
          {
            id: "personne",
            label: "Personne, la fiche n'a jamais été revendiquée",
            points: 0,
            conseil: {
              titre: "Revendiquez votre fiche cette semaine",
              texte:
                "Sur google.com/business, cherchez votre entreprise et cliquez sur « Gérer cet établissement ». Google valide par courrier, téléphone ou vidéo. Tant qu'elle n'est pas revendiquée, n'importe qui peut suggérer des modifications d'horaires ou de téléphone sans que vous le sachiez.",
            },
          },
        ],
      },
      {
        id: "categorie",
        texte: "Votre catégorie principale correspond-elle exactement à votre métier ?",
        aide: "C'est le libellé affiché sous votre nom dans Google Maps, par exemple « Plombier » ou « Restaurant italien ».",
        axe: "fiche",
        options: [
          { id: "exacte", label: "Oui, et j'ai ajouté des catégories secondaires pour mes autres prestations", points: 2 },
          {
            id: "approx",
            label: "Elle est proche mais pas exacte, ou je n'ai qu'une seule catégorie",
            points: 1,
            conseil: {
              titre: "Ajustez la catégorie principale et ajoutez les secondaires",
              texte:
                "Tapez votre métier dans le champ Catégorie et choisissez le libellé le plus précis (« Plombier » plutôt que « Entrepreneur »). Ajoutez ensuite deux à quatre catégories secondaires pour vos autres prestations. La catégorie principale décide des recherches sur lesquelles Google vous montre.",
            },
          },
          {
            id: "inconnue",
            label: "Je ne sais pas quelle catégorie est renseignée",
            points: 0,
            conseil: {
              titre: "Vérifiez votre catégorie en une minute",
              texte:
                "Cherchez votre entreprise sur Google Maps : la catégorie apparaît sous le nom. Si elle est vague ou fausse, modifiez-la depuis votre fiche, rubrique Modifier le profil, puis Catégorie. Regardez aussi celle de vos trois concurrents les mieux placés sur votre recherche principale.",
            },
          },
        ],
      },
      {
        id: "description-services",
        texte: "La description et la liste des services de votre fiche sont-elles remplies ?",
        axe: "fiche",
        options: [
          { id: "complet", label: "Oui : description complète, et un service par prestation avec son descriptif", points: 3 },
          {
            id: "sans-services",
            label: "La description est remplie, mais pas la rubrique Services",
            points: 2,
            conseil: {
              titre: "Ajoutez vos prestations dans la rubrique Services",
              texte:
                "Rubrique Modifier les services : une ligne par prestation, avec un descriptif de deux phrases et une fourchette de prix si vous pouvez l'annoncer. Google les affiche dans la fiche et s'en sert pour vous montrer sur des recherches plus précises que votre seule catégorie.",
            },
          },
          {
            id: "courte",
            label: "Une description courte, écrite à la va-vite",
            points: 1,
            conseil: {
              titre: "Réécrivez la description sur 750 caractères",
              texte:
                "Première phrase : ce que vous faites, pour qui, et la ville. Ensuite vos trois prestations principales, votre zone d'intervention, et ce qui vous distingue (délai, garantie, années d'expérience). Pas de lien, pas de majuscules partout, pas de promesse invérifiable.",
            },
          },
          {
            id: "rien",
            label: "Rien n'est rempli",
            points: 0,
            conseil: {
              titre: "Remplissez la description et trois services aujourd'hui",
              texte:
                "Description de 750 caractères : métier, ville, prestations, zone. Puis rubrique Services : vos trois prestations principales avec deux phrases chacune. Vingt minutes de travail, que Google prend en compte rapidement.",
            },
          },
        ],
      },
      {
        id: "avis-recents",
        texte: "Combien d'avis Google avez-vous reçus au cours des trois derniers mois ?",
        axe: "avis",
        options: [
          { id: "trois-plus", label: "Trois ou plus", points: 2 },
          {
            id: "un-deux",
            label: "Un ou deux",
            points: 1,
            conseil: {
              titre: "Mettez en place la demande d'avis systématique",
              texte:
                "Récupérez votre lien court d'avis (bouton « Demander des avis » de la fiche). Envoyez-le par SMS ou par email dans les 24 heures qui suivent la fin de la prestation, avec une phrase personnelle. La régularité compte davantage que le total.",
            },
          },
          {
            id: "aucun",
            label: "Aucun",
            points: 0,
            conseil: {
              titre: "Sollicitez vos cinq derniers clients satisfaits",
              texte:
                "Un message personnel, avec le lien d'avis de votre fiche : « Votre avis en deux phrases nous aiderait beaucoup ». Des avis récents comptent pour Google comme pour un prospect qui compare, davantage que des avis anciens, même nombreux.",
            },
          },
        ],
      },
      {
        id: "reponses-avis",
        texte: "Répondez-vous aux avis, y compris aux avis positifs ?",
        axe: "avis",
        options: [
          { id: "tous", label: "Oui, à tous, en général sous 48 heures", points: 2 },
          {
            id: "negatifs",
            label: "Seulement aux avis négatifs",
            points: 1,
            conseil: {
              titre: "Répondez aussi aux avis positifs",
              texte:
                "Deux phrases suffisent : remerciez, et citez la prestation réalisée (« merci pour votre confiance pour la rénovation de votre salle de bain à Nanterre »). Les prospects voient que vous êtes présent, et le texte de vos réponses est lu par Google.",
            },
          },
          {
            id: "jamais",
            label: "Jamais",
            points: 0,
            conseil: {
              titre: "Répondez à vos dix derniers avis cette semaine",
              texte:
                "Commencez par les avis négatifs : un ton calme, les faits, une proposition de contact direct. Puis les positifs : un remerciement et la prestation réalisée. Activez ensuite les notifications de la fiche pour répondre sous 48 heures.",
            },
          },
        ],
      },
      {
        id: "note-concurrents",
        texte: "Comment votre note et votre nombre d'avis se comparent-ils aux concurrents affichés dans la carte Google ?",
        axe: "avis",
        options: [
          { id: "au-niveau", label: "Au niveau ou au-dessus, en note comme en nombre d'avis", points: 2 },
          {
            id: "moins-avis",
            label: "Bonne note, mais nettement moins d'avis qu'eux",
            points: 1,
            conseil: {
              titre: "Rattrapez l'écart de volume d'avis",
              texte:
                "Comptez les avis des trois concurrents affichés dans la carte Google sur votre recherche principale. Fixez-vous l'objectif de les rejoindre en six mois : avec une demande systématique après chaque prestation, l'écart se comble plus vite qu'on ne le pense.",
            },
          },
          {
            id: "jamais-compare",
            label: "Note plus basse, ou je ne me suis jamais comparé",
            points: 0,
            conseil: {
              titre: "Faites le point sur votre note et celle de vos concurrents",
              texte:
                "Tapez votre métier et votre ville dans Google Maps : notez la note et le nombre d'avis des trois premiers, puis les vôtres. Si votre note est basse, répondez d'abord aux avis négatifs, puis relancez vos clients satisfaits pour rééquilibrer.",
            },
          },
        ],
      },
      {
        id: "photos",
        texte: "Combien de photos compte votre fiche, et de quand datent les dernières ?",
        axe: "photos",
        options: [
          { id: "vivante", label: "Plus de vingt, et j'en ajoute au moins une par mois", points: 3 },
          {
            id: "anciennes",
            label: "Plus de vingt, mais aucune récente",
            points: 2,
            conseil: {
              titre: "Reprenez le rythme d'une photo par mois",
              texte:
                "Une réalisation terminée, l'équipe, le véhicule, l'atelier : une photo réelle prise au téléphone, ajoutée depuis l'application Google Business Profile le dernier vendredi du mois. Une fiche qui reçoit des photos récentes paraît active, pour Google comme pour les prospects.",
            },
          },
          {
            id: "dizaine",
            label: "Une dizaine, ajoutées à la création de la fiche",
            points: 1,
            conseil: {
              titre: "Ajoutez une photo par mois, prise sur le terrain",
              texte:
                "Une réalisation terminée, l'équipe, le véhicule, l'atelier : des photos réelles, prises au téléphone, sans retouche lourde. Ajoutez-les depuis l'application Google Business Profile. Les prospects regardent les photos avant de lire quoi que ce soit.",
            },
          },
          {
            id: "logo",
            label: "Seulement le logo ou la photo de profil",
            points: 0,
            conseil: {
              titre: "Mettez en ligne dix photos cette semaine",
              texte:
                "Devanture ou véhicule, intérieur ou atelier, trois réalisations, l'équipe, un avant-après. Format paysage, bien éclairées, prises au téléphone. Ce sont les images que le prospect voit avant même de cliquer sur votre site.",
            },
          },
        ],
      },
      {
        id: "posts",
        texte: "Publiez-vous des posts sur votre fiche (actualités, offres, réalisations) ?",
        axe: "photos",
        options: [
          { id: "mensuel", label: "Oui, au moins un par mois", points: 2 },
          {
            id: "arrete",
            label: "J'en ai publié quelques-uns, puis j'ai arrêté",
            points: 1,
            conseil: {
              titre: "Reprenez avec un post par mois, calé sur vos réalisations",
              texte:
                "Un post = une photo de prestation terminée, trois phrases (quoi, où, pour qui) et un bouton « Appeler » ou « En savoir plus ». Programmez-le le même jour chaque mois, depuis l'application, en cinq minutes.",
            },
          },
          {
            id: "jamais",
            label: "Jamais",
            points: 0,
            conseil: {
              titre: "Publiez votre premier post cette semaine",
              texte:
                "Prenez votre dernière réalisation : une photo, trois phrases, un bouton vers votre page de contact. Les posts restent visibles sur la fiche, et Google voit qu'elle est tenue à jour.",
            },
          },
        ],
      },
      {
        id: "questions-reponses",
        texte: "Utilisez-vous la rubrique Questions et réponses de votre fiche ?",
        aide: "Sur Google Maps, n'importe qui peut poser une question sur votre établissement, et n'importe qui peut y répondre.",
        axe: "photos",
        options: [
          { id: "publiees", label: "Oui, j'ai publié moi-même les questions fréquentes avec leurs réponses", points: 2 },
          {
            id: "reactif",
            label: "Je réponds quand quelqu'un pose une question",
            points: 1,
            conseil: {
              titre: "Ajoutez vous-même vos cinq questions fréquentes",
              texte:
                "Vous pouvez poser et répondre à vos propres questions sur votre fiche : tarifs, délais, zone, devis gratuit ou non, moyens de paiement. Cela évite qu'un inconnu réponde à votre place, et le prospect trouve la réponse sans avoir à appeler.",
            },
          },
          {
            id: "inconnue",
            label: "Je ne savais pas que cette rubrique existait",
            points: 0,
            conseil: {
              titre: "Vérifiez la rubrique Questions et réponses de votre fiche",
              texte:
                "Ouvrez votre fiche sur Google Maps et cherchez « Questions et réponses ». Regardez s'il y a des questions sans réponse ou des réponses fausses laissées par des tiers, puis ajoutez vos cinq questions les plus fréquentes avec vos propres réponses.",
            },
          },
        ],
      },
      {
        id: "nap",
        texte: "Votre nom, votre adresse et votre téléphone sont-ils rigoureusement identiques sur la fiche, le site et les annuaires ?",
        aide: "Pages Jaunes, Facebook, les annuaires de votre métier, votre pied de page.",
        axe: "coherence",
        options: [
          { id: "identiques", label: "Oui, je l'ai vérifié : même orthographe, même numéro partout", points: 2 },
          {
            id: "a-peu-pres",
            label: "À peu près, il y a peut-être de petites différences",
            points: 1,
            conseil: {
              titre: "Alignez vos coordonnées sur toutes vos présences",
              texte:
                "Choisissez une version de référence (nom exact, adresse au format postal, numéro au format 01 23 45 67 89) et appliquez-la à l'identique sur le site, la fiche Google, Facebook, Pages Jaunes et les annuaires de votre métier. Les écarts brouillent la confiance de Google dans vos données.",
            },
          },
          {
            id: "obsoletes",
            label: "Non, l'adresse ou le numéro a changé et tout n'est pas à jour",
            points: 0,
            conseil: {
              titre: "Corrigez d'abord la fiche Google, puis le site, puis les annuaires",
              texte:
                "Commencez par la fiche Google (rubrique Modifier le profil), puis le pied de page et la page Contact de votre site, puis Pages Jaunes et Facebook. Tapez votre ancien numéro dans Google pour retrouver les annuaires qui le citent encore.",
            },
          },
        ],
      },
      {
        id: "lien-site",
        texte: "Votre fiche renvoie-t-elle vers votre site, et votre site affiche-t-il la même adresse et le même téléphone ?",
        axe: "coherence",
        options: [
          { id: "coherent", label: "Oui, le lien pointe vers la bonne page, et le site affiche les mêmes coordonnées", points: 2 },
          {
            id: "lien-inadapte",
            label: "Le lien existe, mais renvoie vers une page inadaptée (page morte, réseau social, accueil générique)",
            points: 1,
            conseil: {
              titre: "Faites pointer la fiche vers votre page la plus utile",
              texte:
                "Rubrique Modifier le profil, puis Site Web : votre page d'accueil si elle présente vos prestations et votre ville, ou votre page Contact si l'objectif est l'appel. Vérifiez que la page s'ouvre correctement sur mobile et qu'elle affiche les mêmes coordonnées que la fiche.",
            },
          },
          {
            id: "aucun",
            label: "Pas de site, ou pas de lien",
            points: 0,
            conseil: {
              titre: "Ajoutez le lien vers votre site, ou une page de contact simple",
              texte:
                "Si vous avez un site, ajoutez son adresse dans la fiche, rubrique Site Web, et vérifiez que son pied de page reprend l'adresse et le téléphone de la fiche. Si vous n'en avez pas, Google propose un site simple généré depuis votre fiche : mieux qu'un champ vide en attendant.",
            },
          },
        ],
      },
      {
        id: "horaires-zone",
        texte: "Vos horaires et votre zone d'intervention sont-ils à jour sur la fiche ?",
        axe: "coherence",
        options: [
          { id: "a-jour", label: "Oui : horaires exacts, jours fériés renseignés, zone d'intervention définie", points: 2 },
          {
            id: "creation",
            label: "Les horaires sont ceux de la création, jamais mis à jour",
            points: 1,
            conseil: {
              titre: "Mettez à jour les horaires et les jours fériés",
              texte:
                "Vérifiez vos horaires réels, ajoutez les horaires spéciaux des prochains jours fériés (Google vous les propose) et, si vous vous déplacez, définissez votre zone d'intervention par communes. Une fiche marquée « fermé » à tort fait perdre des appels.",
            },
          },
          {
            id: "inconnu",
            label: "Non, ou je ne sais pas ce qui est affiché",
            points: 0,
            conseil: {
              titre: "Vérifiez ce que Google affiche aujourd'hui",
              texte:
                "Cherchez votre entreprise sur Google Maps depuis votre téléphone et lisez la fiche comme un client : horaires, mention « ouvert » ou « fermé », zone. Corrigez depuis la rubrique Modifier le profil, puis Horaires, puis Zone desservie.",
            },
          },
        ],
      },
    ],
    verdicts: [
      {
        min: 70,
        titre: "Une fiche bien tenue, qui travaille pour vous",
        texte:
          "Les fondamentaux sont là : la fiche est complète, active et cohérente avec votre site. Les priorités ci-dessous sont des ajustements. Gardez le rythme (une photo, un post et des demandes d'avis chaque mois) et regardez les statistiques de la fiche chaque trimestre.",
      },
      {
        min: 40,
        titre: "Une fiche présente, mais qui ne donne pas tout ce qu'elle pourrait",
        texte:
          "Votre fiche existe et fonctionne, mais plusieurs rubriques restent vides ou dormantes, et cela pèse dans la carte Google face à des concurrents plus actifs. Traitez les priorités dans l'ordre affiché : chacune demande moins d'une heure.",
      },
      {
        min: 0,
        titre: "Votre fiche Google est presque à construire",
        texte:
          "Bonne nouvelle : c'est le levier local le plus rapide à activer, et tout ce qui suit se fait sans prestataire. Commencez par la propriété de la fiche et les coordonnées, puis les photos et la première série de demandes d'avis.",
      },
    ],
    ressource: "seo-local-fiche-google-32-points",
    pole: "seo",
    page: "/services/seo/seo-local",
  },
];
