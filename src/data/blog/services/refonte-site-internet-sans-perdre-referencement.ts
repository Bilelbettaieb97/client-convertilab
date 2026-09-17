import type { FullBlogArticle } from "@/data/blog-articles";

/**
 * Article lié à la page /services/sites-web/refonte-site.
 * Angle : la méthode concrète (inventaire, redirections, contrôles) pour
 * refaire un site sans perdre ses pages Google. Prix repris de la page de
 * service, aucun chiffre de résultat inventé.
 */
export const article: FullBlogArticle = {
  slug: "refonte-site-internet-sans-perdre-referencement",
  title: "Refonte de site internet : la méthode sans perdre son référencement",
  excerpt:
    "Inventaire des pages, redirections, contenus à garder, migration depuis Wix ou WordPress, prix et contrôles après la mise en ligne : la méthode pour refaire votre site sans perdre vos pages Google.",
  metaDescription:
    "Refonte de site internet sans perdre son référencement : inventaire des pages, redirections 301, contenus à garder, prix fixe 690 € et contrôles après lancement.",
  image: "/images/blog/refonte-site-internet-sans-perdre-referencement.png",
  category: "Création de sites web",
  readTime: "9 min",
  publishedAt: "2026-09-17",
  author: { name: "ConvertiLab" },
  tags: [
    "refonte site internet",
    "refonte site web seo",
    "redirection 301 refonte",
    "refonte site internet prix",
    "migrer site sans perdre référencement",
  ],
  faqItems: [
    {
      question: "Vais-je perdre mon référencement Google pendant la refonte ?",
      answer:
        "Pas si elle est préparée. Les pages qui reçoivent du trafic sont listées avant les travaux, chaque ancienne adresse est redirigée vers la nouvelle, et la réindexation est contrôlée dans la Search Console après la mise en ligne. Personne ne peut garantir qu'une position ne bougera jamais, mais ce travail évite les pertes d'une refonte faite sans plan de redirections.",
    },
    {
      question: "Combien coûte une refonte de site internet ?",
      answer:
        "La refonte d'un site vitrine coûte 690 € chez ConvertiLab, avec paiement étalé possible et sans abonnement. La refonte d'un site e-commerce démarre à 1 490 €, avec un délai écrit dans le devis. Le prix est fixe, posé par écrit avant de commencer, et l'audit de l'existant est offert.",
    },
    {
      question: "Mon site actuel reste-t-il en ligne pendant les travaux ?",
      answer:
        "Oui. Le nouveau site se construit sur un espace séparé, invisible du public. Votre site actuel reste consultable et continue d'apporter des appels jusqu'au basculement, qui prend quelques minutes une fois le nouveau site validé et les redirections vérifiées. Vos clients ne voient jamais de page « en travaux ».",
    },
    {
      question: "Refonte ou nouveau site : comment trancher ?",
      answer:
        "Si votre site a des pages référencées, des contenus et des avis, la refonte les conserve et coûte moins cher qu'un site neuf. S'il n'a que deux pages sans trafic, ou tourne sur un outil que vous voulez quitter, un site vitrine neuf à 890 € est souvent plus simple. L'audit gratuit tranche dès le premier appel.",
    },
    {
      question: "Pourrai-je modifier le site moi-même après la refonte ?",
      answer:
        "Oui. Une session de formation est comprise dans le prix : changer un texte, une photo, un avis, des horaires, ajouter une page. Vous n'avez plus besoin d'un développeur pour une mise à jour courante. Nous restons joignables pour le reste, et les corrections après la mise en ligne sont incluses.",
    },
  ],
  content: `Votre site a quelques années. Il se lit mal sur téléphone et ne vous ressemble plus. Mais certaines de ses pages apparaissent encore sur Google et vous apportent des appels. C'est ce qui fait hésiter beaucoup d'artisans, de commerçants et de TPE à Rueil-Malmaison, à Paris et en Île-de-France : refaire le site, oui, mais sans casser ce qui fonctionne.

Une refonte de site internet ne fait pas perdre le référencement quand chaque ancienne adresse est redirigée vers la nouvelle, que les contenus qui reçoivent du trafic sont conservés et que la réindexation est vérifiée après la mise en ligne. Cet article détaille cette méthode dans l'ordre : inventaire, redirections, contenus à garder, migration depuis Wix, WordPress ou Shopify, prix, délai et contrôles après le lancement.

[[sommaire]]

![Refonte de site internet : chaque ancienne adresse redirigée vers la nouvelle page, pour garder ses positions Google](/images/blog/refonte-site-internet-sans-perdre-referencement.png)

## Pourquoi une refonte peut-elle faire perdre des positions Google ?

Une refonte fait perdre des positions quand les adresses des pages changent sans redirection : Google tombe sur des pages introuvables et retire de ses résultats ce qu'il avait mémorisé. C'est la cause la plus fréquente, et la plus facile à éviter.

Concrètement, votre ancienne page « nos-prestations.html » devient « /services ». Si rien ne relie l'une à l'autre, les visiteurs venus de Google tombent sur une erreur, les liens posés par des annuaires ne mènent plus nulle part, et la nouvelle page repart de zéro. D'autres causes s'ajoutent souvent :
- des titres réécrits sans les mots que vos clients tapent ;
- des textes supprimés parce qu'ils faisaient « trop long » sur la maquette ;
- un site plus lent que l'ancien, ou un fichier robots qui bloque encore l'exploration.

Tout cela se traite avant le basculement. Si vous vous demandez d'abord si votre site a besoin d'une refonte, notre article sur [le bon moment pour refaire son site web](/blog/refonte-site-web-quand-comment) liste les signaux à observer.

## Par quoi commencer : l'inventaire des pages à conserver

La première étape consiste à lister toutes les pages du site actuel et à repérer celles qui reçoivent des visites depuis Google. Sans cet inventaire, on ne sait pas quoi protéger.

> La règle : on ne touche à rien tant que la liste des pages qui reçoivent du trafic n'est pas faite.

Trois sources gratuites suffisent :
1. La Search Console : le rapport « Pages » donne les adresses connues de Google, le rapport « Performances » celles qui reçoivent des clics.
2. Google Analytics, ou les statistiques de votre hébergeur : les pages les plus vues sur les derniers mois.
3. Une exploration du site, avec un outil de crawl ou le plan du site, pour ne rater aucune page oubliée.

Le résultat tient dans un tableur : une ligne par adresse, avec le trafic reçu, le titre actuel et la décision (garder, fusionner, supprimer). Pour un plombier des Hauts-de-Seine ou un restaurant de Rueil-Malmaison, l'accueil, une ou deux pages de prestations et la page contact concentrent le plus souvent l'essentiel du trafic. Ce tableur devient ensuite le plan de redirections.

## Comment poser les redirections sans en oublier ?

Chaque ancienne adresse doit renvoyer de façon permanente, par une redirection 301, vers la page du nouveau site qui traite le même sujet. C'est ce qui transfère à la nouvelle page ce que Google savait de l'ancienne.

Quelques règles évitent les erreurs classiques :
- rediriger page par page, vers l'équivalent le plus proche, et non tout vers l'accueil ;
- garder les mêmes adresses quand c'est possible : si « /contact » existe déjà, inutile de la renommer ;
- traiter aussi les images et les PDF référencés, comme une plaquette ou un menu ;
- rediriger une page supprimée vers sa catégorie, ou la laisser en erreur 404 si elle n'avait ni trafic ni liens entrants.

Les redirections se posent avant la mise en ligne, puis se testent une par une depuis le tableur. Vérifiez aussi le passage de http vers https, et du domaine avec et sans « www » : tout doit mener à une seule version du site. Notre guide sur [le fichier robots.txt et le sitemap XML](/blog/generateur-robots-txt-sitemap-xml) complète cette étape.

## Que garder du site actuel : contenus, titres, avis et nom de domaine

Une refonte réussie conserve ce qui a construit le référencement du site : son nom de domaine, ses textes utiles, ses titres et ses avis clients. Le design change, la matière reste.

Le nom de domaine d'abord : le changer pendant une refonte cumule deux migrations en une. Sauf changement de nom d'entreprise, vous le gardez. Les textes ensuite : une page de prestation qui se positionne depuis des années contient des formulations que vos clients tapent réellement. On la réécrit pour le téléphone, on la complète, mais on ne la remplace pas par trois lignes d'accroche. Les titres et les descriptions suivent la même logique : à reprendre quand ils fonctionnent, à corriger quand ils sont vides ou en double, comme l'explique notre article sur [les balises meta title et description](/blog/balises-meta-optimiser-seo).

Enfin, vos avis clients, vos photos de chantiers ou de plats, vos réalisations : ce sont les éléments qui font appeler. Exportez-les avant de fermer l'ancien outil, puis remettez-les près des boutons de contact.

## Mon site est sur Wix, WordPress ou Shopify : comment migrer ?

Un site conçu sur Wix, WordPress, Shopify ou un outil d'agence se migre en exportant ses contenus, en reconstruisant les pages sur une base moderne et rapide, puis en repointant le nom de domaine. Le principe est le même quel que soit l'outil de départ.

Ce qui change, ce sont les détails :
- Wix génère des adresses à relever une à une, et les images se récupèrent souvent à la main ;
- WordPress exporte textes et médias, mais les extensions accumulées ne suivent pas : c'est l'occasion de faire le tri ;
- Shopify ou WooCommerce demandent de reprendre produits, clients et commandes, avec une attention particulière aux adresses des fiches produit, qui portent souvent le trafic d'une boutique.

Vous gardez vos accès à l'ancien outil tant que vous le souhaitez. Une boutique se traite comme un projet à part entière : notre page [site e-commerce](/services/sites-web/site-ecommerce) et notre guide pour [créer une boutique en ligne quand on est une TPE](/blog/creer-boutique-en-ligne-guide-tpe) détaillent ce qui est repris.

## Combien coûte une refonte de site internet ?

Chez ConvertiLab, la refonte d'un site vitrine coûte 690 €, prix fixe écrit avant de commencer, avec paiement étalé possible et sans abonnement. La refonte d'une boutique en ligne démarre à 1 490 €, avec un délai écrit dans le devis.

Ce prix comprend l'audit de l'existant, le design sur mesure conçu pour le téléphone d'abord, la reprise de vos contenus, les redirections, les titres et le plan du site, le formulaire relié à un CRM, l'hébergement et le certificat de sécurité, puis une formation et les corrections après la mise en ligne.

Pour situer : un site vitrine neuf coûte 890 € (notre [guide du site vitrine professionnel](/blog/site-vitrine-professionnel-guide-complet) détaille ce qu'il comprend) et une landing page 490 €. La refonte revient moins cher parce qu'elle s'appuie sur l'existant. Pour gagner du trafic sur des requêtes disputées, elle se combine avec le [forfait SEO mensuel dès 500 €/mois](/services/seo/referencement), sur six mois minimum. Vous pouvez aussi [estimer le prix de votre site en deux minutes](/estimation-prix-site-web) avec notre outil gratuit.

## Combien de temps dure une refonte, et que vérifier après la mise en ligne ?

Une refonte de site vitrine est livrée en 2 semaines après validation de la maquette, et votre site actuel reste en ligne jusqu'au basculement. Les contrôles qui suivent comptent autant que la construction.

Le déroulé :
1. Un premier appel et l'audit de l'existant : trafic, vitesse, lecture mobile, chemin vers la demande.
2. Sous 48 h, un devis fixe et une maquette gratuite de la future page d'accueil.
3. Semaine 1 : design et contenus, sur un espace séparé.
4. Semaine 2 : redirections, titres, plan du site, tests sur mobile, mise en ligne.

Après le lancement, quatre vérifications : le plan du site est envoyé dans la Search Console et les pages principales sont réindexées ; les anciennes adresses répondent par une redirection, sans erreur ; la vitesse mobile est au moins aussi bonne qu'avant, à [mesurer avec notre test de vitesse gratuit](/speed-check) ; le formulaire et le numéro cliquable fonctionnent, avec un envoi test.

Les positions peuvent bouger quelques semaines, le temps que Google explore le nouveau site. Une page importante qui disparaît, en revanche, doit alerter : notre article sur [l'indexation Google](/blog/indexation-google-accelerer) explique quoi faire.

## Ce que fait ConvertiLab

Notre [prestation de refonte de site internet](/services/sites-web/refonte-site) commence par un audit offert de votre site actuel, avec un avis honnête : si un simple rafraîchissement suffit, nous vous le disons. La refonte d'un site vitrine coûte 690 €, prix fixe écrit sur le devis, livrée en 2 semaines après validation de la maquette. Les redirections sont posées avant la mise en ligne, la réindexation vérifiée après, et vous restez propriétaire du domaine, de l'hébergement et des contenus. Cette prestation fait partie de notre pôle [création de site internet à Rueil-Malmaison et Paris](/services/sites-web), qui couvre aussi le [site vitrine](/services/sites-web/site-vitrine), la [landing page](/services/sites-web/landing-page) et l'[application web sur mesure](/services/sites-web/application-web). Deux outils gratuits pour mesurer votre point de départ : [vérifier le SEO de votre site actuel](/seo-check) et [tester son design](/design-score).

## Questions fréquentes

### Vais-je perdre mon référencement Google pendant la refonte ?

Pas si elle est préparée. Les pages qui reçoivent du trafic sont listées avant les travaux, chaque ancienne adresse est redirigée vers la nouvelle, et la réindexation est contrôlée dans la Search Console après la mise en ligne. Personne ne peut garantir qu'une position ne bougera jamais, mais ce travail évite les pertes d'une refonte faite sans plan de redirections.

### Combien coûte une refonte de site internet ?

La refonte d'un site vitrine coûte 690 € chez ConvertiLab, avec paiement étalé possible et sans abonnement. La refonte d'un site e-commerce démarre à 1 490 €, avec un délai écrit dans le devis. Le prix est fixe, posé par écrit avant de commencer, et l'audit de l'existant est offert.

### Mon site actuel reste-t-il en ligne pendant les travaux ?

Oui. Le nouveau site se construit sur un espace séparé, invisible du public. Votre site actuel reste consultable et continue d'apporter des appels jusqu'au basculement, qui prend quelques minutes une fois le nouveau site validé et les redirections vérifiées. Vos clients ne voient jamais de page « en travaux ».

### Refonte ou nouveau site : comment trancher ?

Si votre site a des pages référencées, des contenus et des avis, la refonte les conserve et coûte moins cher qu'un site neuf. S'il n'a que deux pages sans trafic, ou tourne sur un outil que vous voulez quitter, un site vitrine neuf à 890 € est souvent plus simple. L'audit gratuit tranche dès le premier appel.

### Pourrai-je modifier le site moi-même après la refonte ?

Oui. Une session de formation est comprise dans le prix : changer un texte, une photo, un avis, des horaires, ajouter une page. Vous n'avez plus besoin d'un développeur pour une mise à jour courante. Nous restons joignables pour le reste, et les corrections après la mise en ligne sont incluses.

Refaire son site sans perdre son référencement tient à trois gestes : lister les pages qui comptent, rediriger chaque ancienne adresse, vérifier la réindexation après la mise en ligne. Si votre site a vieilli mais garde des pages qui travaillent pour vous, notre [refonte de site internet à Paris et Rueil-Malmaison](/services/sites-web/refonte-site) les préserve. [Écrivez-nous](/contact) : nous répondons sous 24 h. Et si vous partez de zéro, notre [guide de la création de site internet pour une TPE](/blog/creation-site-internet-tpe-guide-complet) est le bon point de départ.`,
};
