import { createClient } from "@supabase/supabase-js";

const CALENDLY = "https://calendly.com/convertilab-5bsc/30min";

type EmailTemplate = { delay: number; subject: string; body: string };

// ─────────────────────────────────────────────────────────────
// EMAIL SERIES — all delays in days from submission
// ─────────────────────────────────────────────────────────────
const EMAIL_SERIES: Record<string, EmailTemplate[]> = {

  // ── OUTILS ──────────────────────────────────────────────────

  "SEO Check": [
    {
      delay: 1,
      subject: "{{prenom}}, {{domaine}} score {{score}}/100 — ce que ça coûte chaque jour sans le savoir",
      body: `Bonjour {{prenom}},

Votre audit SEO pour {{domaine}} vient de tourner.

Score global : {{score}}/100 — Grade {{grade}}.

Ce que ce chiffre représente concrètement : chaque jour, des gens cherchent ce que vous proposez sur Google. Avec un score de {{score}}, une partie d'entre eux atterrit chez vos concurrents — pas chez vous. Sans que vous le sachiez.

On a identifié {{critiques}} problèmes critiques sur {{domaine}}. Ce sont les points que Google pénalise directement dans son classement.

La bonne nouvelle : chacun a une solution précise. En 20 minutes, je vous dis lesquels corriger en premier et dans quel ordre.

→ [Je réserve 20 min gratuites](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 3,
      subject: "Ce que vos concurrents en première page font différemment — avec les mêmes ressources que vous",
      body: `Bonjour {{prenom}},

Les sites qui dominent Google dans votre secteur n'ont pas forcément plus de budget. Ils ont mieux exécuté sur les bons critères, dans le bon ordre.

{{domaine}} à {{score}}/100 : l'écart avec la première page est technique, pas stratégique. Ça veut dire qu'il est comblable.

Ce qu'on observe chez les clients avec un profil similaire au vôtre :
• +38 % de visibilité organique en 8 semaines
• Passage de 3–4 mots-clés top 10 à 12–15 mots-clés top 10
• Trafic qualifié multiplié par 2,3 en moyenne

Aucun de ces résultats n'a nécessité une refonte complète.

→ [Voir comment ça s'applique à {{domaine}}](${CALENDLY})

Bilel`,
    },
    {
      delay: 7,
      subject: "{{prenom}}, voici le plan exact pour faire monter {{domaine}} sur Google",
      body: `Bonjour {{prenom}},

Je vous propose un audit stratégique de 45 minutes en visio.

Ce que vous repartez avec :
1. Les {{critiques}} points critiques à corriger dans les 30 prochains jours
2. Une estimation réelle de l'impact sur votre trafic Google
3. Un plan d'action priorisé — ce qui rapporte le plus, d'abord

Offert. Sans engagement. Que vous travailliez avec nous ensuite ou pas.

→ [Réserver mon audit stratégique gratuit](${CALENDLY})

Bilel Bettaieb · ConvertiLab
06 16 47 72 45`,
    },
    {
      delay: 14,
      subject: "Mon dernier message pour {{domaine}}, {{prenom}}",
      body: `Bonjour {{prenom}},

C'est mon dernier email.

Je ne veux pas vous relancer indéfiniment — vous n'avez pas besoin de ça non plus.

Ce que je sais : un score de {{score}}/100 avec {{critiques}} problèmes critiques est entièrement récupérable. Les sites qu'on a traités dans cet état ont systématiquement retrouvé leur positionnement en moins de 90 jours.

Si c'est le bon moment pour vous :

→ [Prendre rendez-vous](${CALENDLY}) · 06 16 47 72 45

Bonne continuation,
Bilel Bettaieb · ConvertiLab`,
    },
  ],

  "Speed Check": [
    {
      delay: 1,
      subject: "{{prenom}}, {{domaine}} est-il assez rapide pour Google — et pour vos visiteurs ?",
      body: `Bonjour {{prenom}},

Audit vitesse pour {{domaine}} : {{score}}/100 — Grade {{grade}}.

53 % des visiteurs quittent une page qui met plus de 3 secondes à s'afficher. Google utilise la vitesse comme critère de classement direct depuis Core Web Vitals (2021).

Ce que votre score indique : il y a probablement 2 à 4 corrections précises qui feraient passer {{domaine}} dans la zone verte — sans toucher au design, sans reconstruire quoi que ce soit.

En 30 minutes, je vous dis lesquelles, dans quel ordre, et quel gain attendre.

→ [Diagnostic vitesse — 30 min gratuits](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 3,
      subject: "1 seconde de chargement en moins = +27 % de conversions — voici la méthode",
      body: `Bonjour {{prenom}},

Ce n'est pas une exagération. Amazon a calculé qu'une seconde de délai supplémentaire lui coûte 1,6 milliard de dollars par an. Votre échelle est différente — mais le principe est identique.

{{domaine}} est à {{score}}/100. Pour franchir le cap des 80, il y a en général 3 à 5 interventions techniques ciblées. Aucune ne touche à votre contenu, aucune ne nécessite une refonte.

Je peux vous dire exactement lesquelles sur {{domaine}}.

→ [Obtenir mon plan vitesse en 30 min](${CALENDLY})

Bilel`,
    },
    {
      delay: 7,
      subject: "{{prenom}}, voici pourquoi {{domaine}} perd du trafic à cause de sa vitesse",
      body: `Bonjour {{prenom}},

Dans votre secteur, les sites en première page Google ont presque tous un score vitesse supérieur à 80.

{{domaine}} est à {{score}}. L'écart existe — et il joue contre vous à chaque recherche.

Ce n'est pas irrémédiable. Mais ça ne se règle pas tout seul.

30 minutes pour construire un plan d'action ensemble. Offert.

→ [Je réserve mon créneau](${CALENDLY})

Bilel Bettaieb · ConvertiLab
06 16 47 72 45`,
    },
    {
      delay: 14,
      subject: "Dernier message — {{domaine}}, {{prenom}}",
      body: `Bonjour {{prenom}},

Je ferme votre dossier après cet email.

La vitesse de {{domaine}} ({{score}}/100) peut être améliorée rapidement. Si ce n'est pas une priorité aujourd'hui, gardez votre rapport — il reste valable.

Si ça l'est :

→ [Réserver 30 min](${CALENDLY}) · 06 16 47 72 45

Bonne continuation,
Bilel Bettaieb · ConvertiLab`,
    },
  ],

  "Design Score": [
    {
      delay: 1,
      subject: "{{prenom}}, en 5 secondes vos visiteurs ont déjà jugé {{domaine}} — voici leur verdict",
      body: `Bonjour {{prenom}},

Score design & UX pour {{domaine}} : {{score}}/100 — Grade {{grade}}.

Vos visiteurs ne lisent pas votre site — ils le scannent. En moins de 5 secondes, ils décident inconsciemment : "je reste ou je pars". Un score {{grade}} indique que quelque chose dans cette décision joue contre vous.

Ce n'est pas une question de goût. C'est une question de structure, de hiérarchie visuelle, de friction.

Je peux vous montrer exactement où ça se bloque — et comment le corriger.

→ [Analyse UX — 30 min gratuites](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 4,
      subject: "Ce que vos visiteurs pensent vraiment de {{domaine}} (sans vous le dire)",
      body: `Bonjour {{prenom}},

Personne ne vous dit "votre site est confus" — ils partent, c'est tout.

Un score de {{score}}/100 sur {{domaine}} signifie qu'il y a des frictions invisibles pour vous — parce que vous connaissez trop bien votre site pour voir ce qu'un nouveau visiteur voit.

En 30 minutes, je vous montre {{domaine}} avec les yeux de quelqu'un qui ne vous connaît pas. Ce qui coince, où, et pourquoi.

→ [Voir mon site avec un regard extérieur](${CALENDLY})

Bilel`,
    },
    {
      delay: 10,
      subject: "{{prenom}}, un design qui convertit change tout — voici la preuve chiffrée",
      body: `Bonjour {{prenom}},

Un client dans un secteur similaire au vôtre a amélioré son taux de conversion de 34 % en restructurant uniquement la hiérarchie visuelle de sa page d'accueil.

Pas de nouveau contenu. Pas de refonte technique. Juste les bons éléments, au bon endroit, dans le bon ordre.

C'est exactement ce qu'on peut faire pour {{domaine}}.

→ [Réserver 30 min pour en parler](${CALENDLY})

Bilel Bettaieb · ConvertiLab
06 16 47 72 45`,
    },
  ],

  "Estimateur Ads": [
    {
      delay: 1,
      subject: "{{prenom}}, votre simulation Ads — ce que les projections ne vous disent pas",
      body: `Bonjour {{prenom}},

Votre simulation Google Ads vient de tourner :
→ {{leads_mois}} leads estimés/mois · ROAS projeté {{roas}}x · Budget : {{budget_ads}} €/mois · Secteur : {{secteur}}

Ces chiffres sont réels — mais ils supposent une campagne bien structurée dès le départ. Une mauvaise configuration peut brûler {{budget_ads}} € en un mois sans générer le moindre lead qualifié.

La différence entre une campagne qui performe et une qui saigne le budget : elle se joue dans les 3 premières semaines.

En 30 minutes, je vous explique comment sécuriser ces projections — et les conditions pour les dépasser.

→ [Sécuriser mes projections Ads](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 3,
      subject: "Dans {{secteur}}, voici pourquoi 80 % des campagnes Ads ratent",
      body: `Bonjour {{prenom}},

Les campagnes Google Ads échouent presque toujours pour les mêmes raisons : ciblage trop large, landing page non optimisée pour convertir, budget brûlé aux mauvaises heures de la journée.

Avec {{budget_ads}} €/mois dans {{secteur}}, vous avez l'enveloppe pour une campagne qui performe vraiment — à condition de l'architecturer correctement dès le départ.

Un mauvais départ dans les Ads coûte cher à corriger, en temps et en argent.

→ [Architecturer ma campagne Ads en 30 min](${CALENDLY})

Bilel`,
    },
    {
      delay: 7,
      subject: "{{prenom}}, un ROAS de {{roas}}x dans {{secteur}} — voici comment c'est réaliste",
      body: `Bonjour {{prenom}},

Un ROAS de {{roas}}x, c'est ambitieux — mais c'est un chiffre qu'on a atteint pour des clients dans {{secteur}} avec des budgets similaires au vôtre.

Ce qui les a différenciés : ils ont suivi un processus. Pas de l'improvisation.

1. Campagne structurée par intention d'achat
2. Landing page dédiée avec un seul objectif
3. Optimisation hebdomadaire sur les 30 premiers jours

Je vous explique tout ça en 30 minutes. Offert.

→ [Voir la stratégie pour mon budget](${CALENDLY})

Bilel Bettaieb · ConvertiLab
06 16 47 72 45`,
    },
    {
      delay: 14,
      subject: "{{prenom}}, je ferme votre dossier Ads — dernier message",
      body: `Bonjour {{prenom}},

Un budget de {{budget_ads}} €/mois peut générer des résultats sérieux dans {{secteur}} — mais uniquement avec un plan solide.

Si votre réflexion est toujours en cours :

→ [Réserver 30 min gratuites](${CALENDLY}) · 06 16 47 72 45

Bonne continuation,
Bilel Bettaieb · ConvertiLab`,
    },
  ],

  "Comparateur Sites": [
    {
      delay: 1,
      subject: "{{prenom}}, {{gagnant}} prend l'avantage — et maintenant ?",
      body: `Bonjour {{prenom}},

Le verdict est tombé : {{gagnant}} remporte la comparaison sur les métriques principales entre {{site_a}} et {{site_b}}.

Maintenant la vraie question : qu'est-ce que ça change concrètement pour votre stratégie ?

Connaître le gagnant, c'est la première étape. Comprendre pourquoi il gagne — et comment le dépasser — c'est celle qui fait la différence.

En 30 minutes, on analyse les leviers concrets ensemble.

→ [Analyser les résultats en 30 min](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 4,
      subject: "Ce que {{site_a}} fait que {{site_b}} ne fait pas — les 3 points qui changent tout",
      body: `Bonjour {{prenom}},

La valeur d'un comparatif ne tient pas dans le classement final — elle tient dans l'identification précise de ce que le gagnant fait différemment.

Sur les données que j'ai, il y a 3 leviers prioritaires que vous pouvez activer dès maintenant. Pas besoin de tout refaire.

En 30 minutes, je vous les montre.

→ [Décrypter le comparatif ensemble](${CALENDLY})

Bilel`,
    },
    {
      delay: 10,
      subject: "{{prenom}}, comment dépasser {{gagnant}} dans les 90 prochains jours",
      body: `Bonjour {{prenom}},

Dépasser un concurrent mieux positionné, ça ne se fait pas avec plus de budget.

Ça se fait avec une meilleure exécution sur les bons points, dans le bon ordre, sans disperser l'énergie.

J'ai les données issues du comparatif. Il me manque 30 minutes avec vous pour les transformer en plan d'action réaliste.

→ [Construire mon plan d'action](${CALENDLY})

Bilel Bettaieb · ConvertiLab
06 16 47 72 45`,
    },
  ],

  "Robots Generator": [
    {
      delay: 1,
      subject: "{{prenom}}, vos fichiers robots.txt et sitemap sont prêts — voici la suite logique",
      body: `Bonjour {{prenom}},

Votre robots.txt et sitemap.xml pour {{domaine}} sont dans votre boîte mail.

Ces deux fichiers disent à Google quoi explorer et quoi indexer. C'est la base technique — mais c'est loin d'être suffisant pour apparaître en bonne position dans les résultats.

L'indexation garantit que Google visite votre site. Le positionnement, c'est une autre mécanique entièrement.

Si vous voulez qu'on parle de la suite — 30 minutes, offert.

→ [Parler stratégie SEO pour {{domaine}}](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 5,
      subject: "{{domaine}} est-il correctement indexé par Google ? (comment le vérifier)",
      body: `Bonjour {{prenom}},

La question à se poser maintenant : est-ce que Google lit correctement vos fichiers et indexe les bonnes pages ?

Un fichier mal configuré — même un seul caractère dans robots.txt — peut bloquer l'indexation de vos pages les plus importantes, sans que vous vous en rendiez compte.

En 30 minutes, je fais un bilan complet sur la santé SEO de {{domaine}} : indexation, positionnement actuel, premières opportunités à saisir.

→ [Bilan SEO gratuit — 30 min](${CALENDLY})

Bilel`,
    },
    {
      delay: 14,
      subject: "{{prenom}}, dernier message concernant {{domaine}}",
      body: `Bonjour {{prenom}},

La technique est en place. Ce qui reste à construire : la stratégie qui fera remonter {{domaine}} dans les résultats Google.

Si c'est dans vos projets :

→ [Réserver 30 min](${CALENDLY}) · 06 16 47 72 45

Bonne continuation,
Bilel Bettaieb · ConvertiLab`,
    },
  ],

  "Rapport Sectoriel": [
    {
      delay: 1,
      subject: "{{prenom}}, votre rapport {{secteur}} — ce que les données ne peuvent pas faire à votre place",
      body: `Bonjour {{prenom}},

Vous venez de recevoir le rapport sectoriel sur {{secteur}}.

Les données sont là — benchmarks, tendances, comportements des acteurs qui dominent en ligne dans votre domaine.

Ce que le rapport ne peut pas faire à votre place : vous dire comment adapter ces insights à votre entreprise spécifiquement, avec vos ressources, votre position et vos objectifs de croissance.

C'est exactement ce qu'on fait ensemble en 30 minutes.

→ [Transformer le rapport en plan d'action](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 4,
      subject: "Les acteurs de {{secteur}} qui gagnent des clients en ligne — leur point commun",
      body: `Bonjour {{prenom}},

Dans {{secteur}}, les entreprises qui génèrent le plus de clients en ligne partagent toutes un point commun : elles ont investi dans leur présence digitale avant leurs concurrents directs.

La fenêtre d'avantage est réelle — mais elle se referme au fur et à mesure que le secteur se densifie en ligne.

En 30 minutes, je vous dis où en est {{secteur}} aujourd'hui et quel positionnement vous pouvez encore saisir.

→ [Identifier mon avantage concurrentiel](${CALENDLY})

Bilel`,
    },
    {
      delay: 10,
      subject: "{{prenom}}, une question directe",
      body: `Bonjour {{prenom}},

Est-ce que le digital est une priorité pour votre activité dans {{secteur}} cette année ?

Si oui — je suis disponible pour construire quelque chose ensemble.
Si non — revenez quand le moment est venu.

→ [Oui — je réserve 30 min](${CALENDLY}) · 06 16 47 72 45

Bilel Bettaieb · ConvertiLab`,
    },
  ],

  "Mentions Legales": [
    {
      delay: 2,
      subject: "{{prenom}}, vos mentions légales sont conformes — et votre site dans son ensemble ?",
      body: `Bonjour {{prenom}},

Vos mentions légales pour {{entreprise}} ({{forme_jur}} · SIRET {{siret}}) sont dans votre boîte mail.

Document conforme LCEN + RGPD — prêt à copier-coller sur votre site.

Une question naturelle s'ensuit : si on a regardé les mentions légales, c'est que vous avez un site. Est-ce qu'il travaille aussi bien qu'il le devrait — en termes de visibilité Google, de vitesse, de conversion ?

Un regard externe en 30 minutes peut révéler beaucoup.

→ [Audit express gratuit — 30 min](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 5,
      subject: "{{prenom}}, une {{forme_jur}} qui veut développer sa clientèle en ligne",
      body: `Bonjour {{prenom}},

En tant que {{forme_jur}}, vous avez probablement des objectifs de développement cette année.

Le digital est souvent le levier avec le meilleur ROI — et aussi le plus sous-exploité par les entreprises qui n'y ont pas consacré de stratégie claire.

Si votre site n'est pas encore votre premier commercial, c'est qu'il manque quelque chose. 30 minutes pour diagnostiquer quoi.

→ [Diagnostic digital — 30 min gratuits](${CALENDLY})

Bilel`,
    },
    {
      delay: 14,
      subject: "Dernier message, {{prenom}}",
      body: `Bonjour {{prenom}},

Je ne vous recontacterai plus après cet email.

Si vous avez un projet web en cours ou à venir — création, refonte, SEO, Ads — je suis disponible cette semaine.

→ [Réserver un appel](${CALENDLY}) · 06 16 47 72 45

Bonne continuation,
Bilel Bettaieb · ConvertiLab`,
    },
  ],

  "Chatbot Audit": [
    {
      delay: 1,
      subject: "{{prenom}}, votre audit chatbot pour {{domaine}} — score {{score}}/100",
      body: `Bonjour {{prenom}},

Score chatbot & capture : {{score}}/100 — Grade {{grade}} pour {{domaine}}.

Un chatbot bien configuré peut capturer entre 25 et 40 % des visiteurs qui quittent votre site sans laisser leurs coordonnées. Avec un score de {{score}}, une partie significative de ce potentiel est inexploitée en ce moment.

En 30 minutes, je vous montre les 3 réglages qui font le plus de différence sur votre site spécifiquement.

→ [Optimiser mon chatbot — 30 min gratuites](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 7,
      subject: "{{domaine}} perd des leads chaque nuit — voici comment les récupérer",
      body: `Bonjour {{prenom}},

Vos visiteurs arrivent à toutes les heures. Ceux qui viennent le soir, le week-end, hors de vos horaires de bureau — ils repartent sans contact si rien n'est en place pour les capturer.

Un chatbot ou un formulaire intelligent peut changer ça en quelques jours. Et les leads récupérés à 23h valent autant que ceux de 10h du matin.

30 minutes pour voir comment mettre ça en place sur {{domaine}}.

→ [Récupérer mes leads hors horaires](${CALENDLY})

Bilel`,
    },
    {
      delay: 14,
      subject: "{{prenom}}, dernier message — {{domaine}}",
      body: `Bonjour {{prenom}},

Je ferme votre dossier après cet email.

Si optimiser la capture de leads sur {{domaine}} reste un objectif :

→ [Réserver 30 min](${CALENDLY}) · 06 16 47 72 45

Bonne continuation,
Bilel Bettaieb · ConvertiLab`,
    },
  ],

  // ── FORMULAIRES ─────────────────────────────────────────────

  "promo_lead": [
    {
      delay: 0,
      subject: "{{prenom}}, votre demande de site à 300€ est bien reçue ✅",
      body: `Bonjour {{prenom}},

Votre demande est bien enregistrée.

Je l'ai reçue et je reviens vers vous sous 24h pour confirmer les détails et lancer la création de votre site.

En attendant, si vous souhaitez échanger directement :

→ [Réserver un appel de 15 min](${CALENDLY})

À très vite,
Bilel · ConvertiLab
06 16 47 72 45`,
    },
    {
      delay: 1,
      subject: "{{prenom}}, votre site sera prêt en 7 jours — voici comment ça se passe",
      body: `Bonjour {{prenom}},

Voici comment se déroule la création de votre site :

1. Appel de cadrage (15 min) — on aligne le style, les pages, le message
2. Maquette envoyée sous 48h — vous validez avant qu'on code
3. Site livré en 7 jours — hébergé, sécurisé, prêt à recevoir des clients

Aucune surprise. Aucun abonnement caché. Juste votre site, livré vite.

Si vous n'avez pas encore réservé votre créneau :

→ [Choisir mon créneau ici](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 4,
      subject: "Ce que disent nos clients après leur site à 300€",
      body: `Bonjour {{prenom}},

En 3 ans, on a livré plus de 150 sites pour des entrepreneurs comme vous.

Ce qu'ils retiennent : un site professionnel, livré rapidement, sans se ruiner.

→ [Voir nos réalisations](https://www.convertilab.com/portfolio)

Si votre projet est toujours d'actualité, je suis disponible cette semaine :

→ [Réserver 15 min](${CALENDLY})

Bilel Bettaieb · ConvertiLab
06 16 47 72 45`,
    },
    {
      delay: 10,
      subject: "{{prenom}}, je ferme votre dossier cette semaine",
      body: `Bonjour {{prenom}},

Je ferme votre dossier sans nouvelles de votre part.

Si votre projet est toujours d'actualité, répondez simplement à ce mail ou appelez-moi directement.

→ [Réserver un appel](${CALENDLY}) · 06 16 47 72 45

Bonne continuation,
Bilel Bettaieb · ConvertiLab`,
    },
  ],

  "Contact": [
    {
      delay: 1,
      subject: "{{prenom}}, votre demande est entre de bonnes mains",
      body: `Bonjour {{prenom}},

Votre message est bien reçu.

Vous cherchez {{projet}} — c'est exactement le type de mission sur lequel on travaille au quotidien.

Plutôt que de vous répondre par écrit et risquer de passer à côté de ce qui compte vraiment, je préfère vous donner 30 minutes de mon temps. On aligne les objectifs, vous repartez avec une réponse claire et un chiffrage honnête.

→ [Choisir mon créneau ici](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 3,
      subject: "Ce que font nos clients qui avaient le même besoin que vous",
      body: `Bonjour {{prenom}},

Les projets qui aboutissent bien ont tous un point commun : on a pris le temps d'aligner les objectifs dès le départ.

Pas de devis envoyé à l'aveugle. Pas de malentendu à mi-chemin. Pas de surprise sur la facture finale.

En 30 minutes ensemble, je vous dis exactement ce qui est faisable pour votre projet, dans quel délai, et pour quel investissement.

→ [Réserver 30 min gratuits](${CALENDLY})

Bilel`,
    },
    {
      delay: 7,
      subject: "{{prenom}}, ma proposition concrète pour votre projet",
      body: `Bonjour {{prenom}},

Ce que je peux vous promettre pour l'appel : une honnêteté totale sur ce qu'on peut faire pour vous, des exemples concrets de clients avec un besoin similaire, et une réponse claire — même si c'est "ce n'est pas le bon moment".

30 minutes. Sans engagement. Vous repartez avec des éléments concrets.

→ [Je réserve mon créneau](${CALENDLY})

Bilel Bettaieb · ConvertiLab
06 16 47 72 45`,
    },
    {
      delay: 14,
      subject: "{{prenom}}, dernier message",
      body: `Bonjour {{prenom}},

Je ferme votre dossier cette semaine sans nouvelles de votre part.

Ce n'est pas une pression — simplement, je ne veux pas vous relancer indéfiniment si votre projet a évolué.

Si c'est toujours d'actualité :

→ [Réserver un appel](${CALENDLY}) · 06 16 47 72 45

Bonne continuation,
Bilel Bettaieb · ConvertiLab`,
    },
  ],

  "Newsletter": [
    {
      delay: 2,
      subject: "Bienvenue — une promesse et une chose à savoir",
      body: `Bonjour,

Vous venez de rejoindre la newsletter ConvertiLab.

Ce que vous allez recevoir : des stratégies concrètes pour acquérir des clients en ligne. Des choses qu'on applique nous-mêmes, testées sur des projets réels. Pas de théorie.

Une chose à savoir dès maintenant : si vous avez un projet web en cours ou à venir — création, refonte, SEO, Ads — je suis disponible pour en parler 30 minutes, gratuitement.

→ [Réserver un appel découverte](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 7,
      subject: "La vraie question à se poser avant d'investir dans un site web",
      body: `Bonjour,

"Est-ce que ça vaut le coup d'investir dans un site web ?"

La réponse honnête : ça dépend entièrement de comment il est construit et pour quoi.

Un site pensé pour convertir — avec une architecture claire, une stratégie SEO, une proposition de valeur immédiatement visible — oui, c'est l'un des meilleurs investissements qu'une entreprise puisse faire.

Un site vitrine sans objectif de conversion — non.

La différence entre les deux, c'est ce qu'on regarde ensemble en 30 minutes.

→ [Réserver 30 min](${CALENDLY})

Bilel`,
    },
    {
      delay: 21,
      subject: "Un projet web dans les prochains mois ?",
      body: `Bonjour,

Un message simple : est-ce qu'il y a un projet web — création, refonte, SEO ou Ads — dans votre agenda pour les 6 prochains mois ?

Si oui, l'appel est gratuit, sans engagement. Vous repartez avec des réponses claires et un chiffrage honnête.

→ [Prendre rendez-vous](${CALENDLY}) · 06 16 47 72 45

Bilel Bettaieb · ConvertiLab`,
    },
  ],

  "Devis": [
    {
      delay: 1,
      subject: "{{prenom}}, votre demande de devis pour {{offre}}",
      body: `Bonjour {{prenom}},

Votre demande pour {{offre}} est bien reçue.

Pour vous envoyer un devis précis — pas une fourchette vague de type "3 000 à 15 000 €" — j'ai besoin de comprendre votre projet en 30 minutes. Votre secteur, vos objectifs de conversion, les contraintes à respecter.

Un appel bien préparé = un devis qui colle vraiment à votre réalité.

→ [Je réserve mon appel devis](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 2,
      subject: "Ce que comprend {{offre}} — et comment ça s'adapte à {{entreprise}}",
      body: `Bonjour {{prenom}},

Nos clients obtiennent : un site livré en 3 à 4 semaines, conçu pour convertir dès le premier jour, avec un mois d'accompagnement intégré au démarrage.

Mais chaque projet est unique — et c'est l'appel qui permet de calibrer exactement ce dont vous avez besoin, ni plus ni moins.

→ [Réserver 30 min pour mon devis sur mesure](${CALENDLY})

Bilel`,
    },
    {
      delay: 5,
      subject: "{{prenom}}, votre devis est prêt à être construit",
      body: `Bonjour {{prenom}},

En 30 minutes, je vous construis un devis complet pour {{entreprise}} : périmètre précis, délais, tarif fixe.

Pas de surprise. Pas de pression. Vous repartez avec un document que vous pouvez approuver, négocier, ou décliner.

→ [Construire mon devis en 30 min](${CALENDLY})

Bilel Bettaieb · ConvertiLab
06 16 47 72 45`,
    },
    {
      delay: 10,
      subject: "{{prenom}}, votre demande pour {{offre}} — toujours d'actualité ?",
      body: `Bonjour {{prenom}},

Sans nouvelles de votre part, je ferme votre demande pour {{offre}} et libère le créneau.

Si votre projet pour {{entreprise}} est toujours en cours :

→ [Réserver un appel avant qu'il soit trop tard](${CALENDLY})

Bonne continuation,
Bilel Bettaieb · ConvertiLab`,
    },
  ],

  "Demande Maquette": [
    {
      delay: 1,
      subject: "{{prenom}}, votre maquette pour un site {{type_site}} — je commence à réfléchir",
      body: `Bonjour {{prenom}},

Votre demande de maquette est bien reçue : site {{type_site}} dans {{secteur}}, style {{style}}.

Avant de me lancer dans la conception, j'ai besoin de 20 minutes avec vous pour comprendre une chose essentielle : qui sont les clients que ce site doit convaincre, et quelle est la première action que vous voulez qu'ils fassent.

Sans ça, une maquette reste une hypothèse. Avec ça, elle devient une arme commerciale.

→ [Appel maquette — 20 min](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 3,
      subject: "Voici les directions que j'envisage pour votre site {{secteur}}",
      body: `Bonjour {{prenom}},

Pour un site {{type_site}} dans {{secteur}} avec un style {{style}}, j'ai plusieurs directions en tête.

Mais il me manque votre vision — les sites que vous aimez ou que vous ne voulez surtout pas ressembler, les émotions que vous voulez provoquer chez vos visiteurs, vos couleurs si vous en avez.

30 minutes et je peux démarrer.

→ [Réserver notre appel maquette](${CALENDLY})

Bilel`,
    },
    {
      delay: 7,
      subject: "{{prenom}}, la différence entre une maquette qui retient et une qui fait fuir",
      body: `Bonjour {{prenom}},

Elle se joue dans les premières secondes.

Pas dans la couleur. Pas dans le logo. Dans la clarté du message principal et la fluidité avec laquelle le visiteur comprend ce que vous faites — et pourquoi c'est exactement pour lui.

C'est ce qu'on optimise dès la conception dans {{secteur}}.

→ [Je réserve mon appel maquette](${CALENDLY})

Bilel Bettaieb · ConvertiLab
06 16 47 72 45`,
    },
    {
      delay: 14,
      subject: "Votre maquette, {{prenom}} — toujours d'actualité ?",
      body: `Bonjour {{prenom}},

Votre demande de maquette attend encore.

Si votre projet est toujours en cours — 30 minutes et je démarre.
Si les priorités ont changé — revenez quand le moment est venu.

→ [Oui, je réserve un appel](${CALENDLY}) · 06 16 47 72 45

Bonne continuation,
Bilel Bettaieb · ConvertiLab`,
    },
  ],

  "Estimation Prix": [
    {
      delay: 1,
      subject: "{{prenom}}, votre estimation pour un site {{type_site}} — ce que les prix affichés ne disent pas",
      body: `Bonjour {{prenom}},

Vous avez demandé une estimation pour un site {{type_site}}.

La réalité du marché : les prix vont de 800 € à 25 000 € pour "un site web". Cette fourchette ne veut rien dire sans savoir exactement ce qui est inclus.

Ce que je peux vous donner : un chiffrage précis, honnête, avec ce qui est inclus, ce qui ne l'est pas, et ce que vous pouvez attendre en retour.

En 30 minutes.

→ [Obtenir mon estimation précise](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 3,
      subject: "Combien coûte vraiment un site {{type_site}} en 2026 — réponse honnête",
      body: `Bonjour {{prenom}},

La vraie réponse : entre 1 500 € et 15 000 € pour un site professionnel. Tout dépend de ce que vous mettez dedans — pas du prestataire.

Ce qui fait exploser les budgets : les fonctionnalités ajoutées en cours de route, les aller-retours interminables, les prestataires qui ne posent pas les bonnes questions au départ.

En 30 minutes, je vous dis exactement ce qu'on peut construire pour vous.

→ [Clarifier mon projet en 30 min](${CALENDLY})

Bilel`,
    },
    {
      delay: 7,
      subject: "{{prenom}}, voici ce qu'on peut faire pour votre projet",
      body: `Bonjour {{prenom}},

Pour un site {{type_site}} :

→ Site professionnel et rapide, optimisé SEO dès le départ
→ Livraison en 3 à 4 semaines
→ Un mois de support inclus au démarrage
→ Aucun frais caché

Les compromis intelligents — ceux qui ne coûtent rien en performance — c'est notre spécialité.

→ [Voir ce qui est possible pour mon projet](${CALENDLY})

Bilel Bettaieb · ConvertiLab
06 16 47 72 45`,
    },
    {
      delay: 14,
      subject: "{{prenom}}, votre projet est-il toujours en cours ?",
      body: `Bonjour {{prenom}},

Dernier message concernant votre demande pour un site {{type_site}}.

Si le projet est toujours d'actualité, je suis disponible cette semaine.
Si les priorités ont changé — pas de problème, revenez quand le moment est venu.

→ [Réserver 30 min](${CALENDLY})

Bonne continuation,
Bilel Bettaieb · ConvertiLab`,
    },
  ],

  "Offre Speciale": [
    {
      delay: 1,
      subject: "{{prenom}}, votre place est réservée — voici la prochaine étape",
      body: `Bonjour {{prenom}},

Votre réservation pour l'offre spéciale est confirmée. Vous faites partie des premiers à avoir répondu.

Pour démarrer dans les meilleures conditions, j'ai besoin de 20 minutes avec vous cette semaine — brief rapide, alignement sur vos objectifs, confirmation du planning.

→ [Réserver notre appel de démarrage](${CALENDLY})

À très vite,
Bilel · ConvertiLab`,
    },
    {
      delay: 2,
      subject: "Ce qui vous attend dans les 30 premiers jours",
      body: `Bonjour {{prenom}},

Voici à quoi ressemble le démarrage chez nous :

Semaine 1 → Brief approfondi + direction créative validée
Semaine 2 → Maquette + cycle de validation
Semaine 3–4 → Développement + intégrations
Livraison → Formation + 30 jours d'accompagnement inclus

Un seul interlocuteur. Une seule timeline. Zéro aller-retour inutile.

→ [Je prends mon rendez-vous de démarrage](${CALENDLY})

Bilel`,
    },
    {
      delay: 5,
      subject: "{{prenom}}, votre place est encore là — mais pas longtemps",
      body: `Bonjour {{prenom}},

Le planning se remplit vite. Ce n'est pas une technique marketing — c'est la réalité d'un planning chargé et d'une équipe qui ne prend pas plus de projets qu'elle ne peut en livrer correctement.

Si vous voulez démarrer dans les 2 prochaines semaines, l'appel doit avoir lieu avant jeudi.

→ [Confirmer mon démarrage avant jeudi](${CALENDLY}) · 06 16 47 72 45

Bilel`,
    },
    {
      delay: 10,
      subject: "{{prenom}}, votre réservation — dernière chance",
      body: `Bonjour {{prenom}},

Sans nouvelles de votre part avant demain, je libère votre place pour quelqu'un d'autre.

C'est la règle qu'on applique sans exception pour garantir notre niveau de qualité : on ne démarre pas 10 projets en même temps.

Si vous souhaitez toujours avancer avec l'offre spéciale :

→ [Je confirme mon projet maintenant](${CALENDLY})

Bilel Bettaieb · ConvertiLab`,
    },
  ],

  // Landing pages publicitaires Google Ads. Trafic payant et intention chaude :
  // on relance plus vite que sur les formulaires du site (J+1, J+3, J+6).
  "Site Internet (Google Ads)": [
    {
      delay: 1,
      subject: "{{prenom}}, votre devis arrive",
      body: `Bonjour {{prenom}},

Votre demande est bien arrivée (projet : {{type_site}}), je m'en occupe personnellement.

Je vous rappelle sous 24h pour comprendre votre activité et vos objectifs, puis je vous transmets un devis détaillé. Sans engagement, et sans que vous ayez la moindre démarche technique à faire.

En attendant, si vous préférez choisir vous-même votre créneau :

→ [Réserver un échange de 30 minutes](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 3,
      subject: "{{prenom}}, à quoi ressemble un site qu'on livre",
      body: `Bonjour {{prenom}},

Je n'ai pas encore réussi à vous joindre au sujet de votre projet.

Plutôt qu'un long discours, voici des sites que nous avons livrés. Vous pouvez les ouvrir et naviguer dedans, ce sont de vrais sites de vrais clients :

→ [Voir nos réalisations](https://www.convertilab.com/portfolio)

Ce qu'ils ont en commun : vous en êtes propriétaire, aucun abonnement, et le référencement est inclus dès le départ.

Si votre projet est toujours d'actualité, réservez le créneau qui vous arrange :

→ [Choisir mon créneau](${CALENDLY})

Bilel · ConvertiLab`,
    },
    {
      delay: 6,
      subject: "{{prenom}}, je clos votre demande ?",
      body: `Bonjour {{prenom}},

Sans nouvelle de votre part, je vais classer votre demande. Aucun souci si le moment n'est pas le bon.

Une seule chose avant de refermer : si vous hésitez sur le budget, sachez que le paiement peut être étalé, et que la prestation est satisfait ou remboursé. Ce sont souvent ces deux points qui bloquent, et ils se règlent en une conversation.

→ [Prendre 30 minutes avec moi](${CALENDLY})

Si je n'ai pas de retour, je ne vous relancerai plus. Merci de m'avoir consulté.

Bilel · ConvertiLab`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────

function firstName(fullName: string): string {
  return (fullName || "").split(/\s+/)[0] || fullName || "";
}

function resolveTokens(template: string, ctx: Record<string, string>): string {
  return template.replace(/\{\{([^}]+)\}\}/g, (_, key) => ctx[key.trim()] ?? "");
}

function bodyToHtml(text: string): string {
  const lines = text.split("\n");
  const out: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    // → [label](url) [optional · phone]
    const ctaMatch = trimmed.match(/^→ \[([^\]]+)\]\(([^)]+)\)(.*)$/);
    if (ctaMatch) {
      const [, label, url, rest] = ctaMatch;
      const phone = rest.trim().replace(/^[·•\-]\s*/, "").trim();
      out.push(
        `<div style="margin:24px 0;text-align:center;">` +
        `<a href="${url}" style="display:inline-block;background:#6c5ce7;color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;">→ ${label}</a>` +
        (phone ? `<br><span style="font-size:12px;color:#888;margin-top:8px;display:inline-block;">${phone}</span>` : "") +
        `</div>`
      );
      continue;
    }

    // Bullet •
    if (trimmed.startsWith("•")) {
      out.push(`<div style="margin:3px 0 3px 12px;color:#444;font-size:15px;line-height:1.6;">• ${trimmed.slice(1).trim()}</div>`);
      continue;
    }

    // Numbered list
    const numMatch = trimmed.match(/^(\d+)\. (.+)$/);
    if (numMatch) {
      out.push(`<div style="margin:4px 0 4px 12px;color:#444;font-size:15px;line-height:1.6;"><strong>${numMatch[1]}.</strong> ${numMatch[2]}</div>`);
      continue;
    }

    // Arrow prefix without link (→ text)
    if (trimmed.startsWith("→ ") && !trimmed.includes("](")) {
      out.push(`<div style="margin:4px 0;color:#6c5ce7;font-size:15px;font-weight:600;line-height:1.6;">${trimmed}</div>`);
      continue;
    }

    // Empty line
    if (trimmed === "") {
      out.push("<br>");
      continue;
    }

    // Regular text
    out.push(`<span style="display:block;color:#333;font-size:15px;line-height:1.7;">${trimmed}</span>`);
  }

  return out.join("");
}

function wrapEmail(bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f1f0f7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:20px;">
  <div style="background:#0a0a1a;border-radius:12px 12px 0 0;padding:18px 32px;text-align:center;">
    <span style="font-size:13px;color:#a29bfe;letter-spacing:3px;text-transform:uppercase;font-weight:700;">ConvertiLab</span>
  </div>
  <div style="background:#ffffff;padding:32px 36px;border-left:1px solid #e8e6f0;border-right:1px solid #e8e6f0;">
    ${bodyHtml}
  </div>
  <div style="background:#1a1040;border-radius:0 0 12px 12px;padding:16px 32px;text-align:center;">
    <p style="margin:0;font-size:11px;line-height:1.7;">
      <a href="https://www.convertilab.fr" style="color:#a29bfe;text-decoration:none;">convertilab.fr</a>
      <span style="color:#4a4060;"> &nbsp;·&nbsp; </span>
      <a href="tel:+33616477245" style="color:#a29bfe;text-decoration:none;">06 16 47 72 45</a>
      <span style="color:#4a4060;"> &nbsp;·&nbsp; </span>
      <a href="mailto:contact@convertilab.com" style="color:#a29bfe;text-decoration:none;">contact@convertilab.com</a>
    </p>
    <p style="color:#3a3050;font-size:10px;margin:8px 0 0;">Vous recevez cet email car vous avez utilisé un outil ConvertiLab.</p>
  </div>
</div>
</body>
</html>`;
}

// ─────────────────────────────────────────────────────────────
// CONTEXT HELPERS
// ─────────────────────────────────────────────────────────────

const COMPANY_TYPE_LABELS: Record<string, string> = {
  "auto-entrepreneur": "Auto-entrepreneur",
  sarl: "SARL",
  sas: "SAS",
  eurl: "EURL",
  association: "Association",
  autre: "Entreprise",
};

// Le champ project des formulaires Contact et HeroMiniForm stocke un slug technique.
// Sans traduction, le prospect lit « Vous cherchez site-ecommerce ». Les libelles
// portent leur article car la phrase est « Vous cherchez {{projet}} » (serie Contact).
const PROJET_LABELS: Record<string, string> = {
  // ContactForm
  vitrine: "un site vitrine",
  ecommerce: "une boutique en ligne",
  landing: "une landing page",
  audit: "un audit de votre site",
  // HeroMiniForm
  "site-vitrine": "un site vitrine",
  "site-ecommerce": "une boutique en ligne",
  "landing-page": "une landing page",
  refonte: "une refonte de site",
  autre: "un site web",
};

export function buildFormSeriesContext(
  formType: string,
  name?: string,
  company?: string,
  fields: Record<string, unknown> = {}
): Record<string, string> {
  const prenom = firstName(name || "");
  const entreprise = company || String(fields.company || "");
  const ctx: Record<string, string> = { prenom, entreprise };

  if (formType === "promo_lead") {
    ctx.situation = String(fields.situation || "");
    ctx.objectif  = String(fields.objectif  || "");
  } else if (formType === "Contact" || formType === "HeroMiniForm") {
    // hasOwnProperty obligatoire : /api/notify est un POST public non authentifie,
    // une valeur comme "toString" remonterait sinon la chaine de prototypes et
    // injecterait du code JavaScript dans le corps de l'email.
    const projetBrut = String(fields.project || "");
    ctx.projet = Object.prototype.hasOwnProperty.call(PROJET_LABELS, projetBrut)
      ? PROJET_LABELS[projetBrut]
      : "un site web";
  } else if (formType === "Devis" || formType.startsWith("Devis - ") || formType === "Offre Mensuelle") {
    ctx.offre = String(fields.service || fields.offerName || "votre projet");
    ctx.secteur = String(fields.sector || "");
  } else if (formType === "Demande Maquette") {
    ctx.type_site = String(fields.site_type || "");
    ctx.secteur = String(fields.sector || "");
    ctx.style = String(fields.design_style || "moderne");
  } else if (formType === "Estimation Prix") {
    ctx.type_site = String(fields.site_type || "");
    ctx.pages = String(fields.page_count || "");
  } else if (formType === "Offre Speciale") {
    ctx.type_site = String(fields.siteType || "");
  } else if (formType === "Site Internet (Google Ads)") {
    // Landing pub : soit un type de site choisi, soit un métier (restaurant, artisan)
    ctx.type_site = String(fields.type_site || fields.metier || "site professionnel");
  }

  return ctx;
}

// ─────────────────────────────────────────────────────────────
// SCHEDULE
// ─────────────────────────────────────────────────────────────

export async function scheduleEmailSeries(
  formType: string,
  leadEmail: string | undefined | null,
  context: Record<string, string>
): Promise<void> {
  if (!leadEmail) return;

  // "Devis - vitrine" → "Devis", "Mentions Légales" → "Mentions Legales"
  const normalized = formType.startsWith("Devis - ")
    ? "Devis"
    : formType.replace(/é/g, "e").replace(/è/g, "e").replace(/ê/g, "e");

  // Alias : réutilise une série existante pour des formulaires proches
  const SERIES_ALIASES: Record<string, string> = {
    HeroMiniForm: "Contact",        // mini-formulaire hero → série Contact
    "Offre Mensuelle": "Devis",     // devis offre mensuelle → série Devis
  };
  const seriesKey = SERIES_ALIASES[normalized] ?? normalized;

  const templates = EMAIL_SERIES[seriesKey];
  if (!templates?.length) return;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const now = Date.now();
  const rows = templates.map((tpl, idx) => {
    const resolvedSubject = resolveTokens(tpl.subject, context);
    const resolvedBody = resolveTokens(tpl.body, context);
    return {
      form_type: formType,
      series_index: idx,
      lead_email: leadEmail,
      subject: resolvedSubject,
      html_body: wrapEmail(bodyToHtml(resolvedBody)),
      send_at: new Date(now + tpl.delay * 24 * 60 * 60 * 1000).toISOString(),
      status: "pending",
    };
  });

  const { error } = await supabase.from("email_queue").insert(rows);
  if (error) console.error("[email_series] insert error:", error.message);
}

export { COMPANY_TYPE_LABELS, firstName };
