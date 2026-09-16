import {
  CalendarCheck,
  ClipboardList,
  FileText,
  Inbox,
  MessageCircle,
  PenLine,
  ScanText,
  Send,
  Star,
  type LucideIcon,
} from "lucide-react";

/**
 * Cas pratiques de la page « Intégration IA », filtrables par métier.
 * Aucun gain chiffré inventé : « remplace » décrit ce que la tâche coûte
 * aujourd'hui, en ordre de grandeur, jamais un résultat promis.
 * Importé par le composant client CasPratiques (les icônes lucide sont des
 * fonctions : elles ne peuvent pas transiter d'un composant serveur vers un
 * composant client par les props).
 */

export type SecteurSlug = "artisan" | "commerce" | "restaurant" | "cabinet" | "ecommerce" | "association";

export const SECTEURS: readonly { slug: SecteurSlug; label: string }[] = [
  { slug: "artisan", label: "Artisan" },
  { slug: "commerce", label: "Commerce" },
  { slug: "restaurant", label: "Restaurant" },
  { slug: "cabinet", label: "Cabinet" },
  { slug: "ecommerce", label: "E-commerce" },
  { slug: "association", label: "Association" },
];

export interface CasPratique {
  icon: LucideIcon;
  /** Libellé court de la tâche, affiché en étiquette (« Devis », « Avis Google »). */
  tache: string;
  titre: string;
  texte: string;
  /** Ce que la tâche coûte aujourd'hui en temps : un ordre de grandeur, jamais un résultat promis. */
  remplace: string;
  secteurs: SecteurSlug[];
}

export const CAS_PRATIQUES: readonly CasPratique[] = [
  {
    icon: FileText,
    tache: "Devis",
    titre: "Répondre aux demandes de devis reçues la nuit",
    texte:
      "Une demande arrive à 23 h : Claude la lit, pose les questions qui manquent et prépare une réponse dans votre ton, envoyée ou soumise à votre validation. Vos devis sont ainsi automatisés sans attendre le matin.",
    remplace: "La demi-heure du matin passée à répondre, et le prospect parti chez un concurrent plus rapide.",
    secteurs: ["artisan", "commerce", "cabinet"],
  },
  {
    icon: Star,
    tache: "Avis Google",
    titre: "Répondre aux avis Google",
    texte: "Chaque nouvel avis reçoit une réponse personnalisée, positive ou négative. Vous validez d'un clic.",
    remplace: "Dix minutes par avis, et les avis restés sans réponse depuis des mois.",
    secteurs: ["commerce", "restaurant", "cabinet", "artisan"],
  },
  {
    icon: Send,
    tache: "Relances",
    titre: "Relancer vos clients et vos devis en attente",
    texte:
      "Devis sans réponse, facture en retard, client silencieux : les relances partent au bon moment et s'arrêtent dès que la personne répond.",
    remplace: "Le fichier de suivi que personne ne rouvre et les relances oubliées.",
    secteurs: ["artisan", "cabinet", "ecommerce", "association"],
  },
  {
    icon: CalendarCheck,
    tache: "Rendez-vous",
    titre: "Prendre les rendez-vous et les réservations",
    texte: "L'IA propose des créneaux depuis votre agenda, confirme, envoie le rappel et gère les déplacements.",
    remplace: "Les allers-retours par téléphone ou SMS pour caler une heure.",
    secteurs: ["cabinet", "restaurant", "artisan"],
  },
  {
    icon: MessageCircle,
    tache: "Messages",
    titre: "Répondre aux messages Instagram, Facebook et du site",
    texte:
      "Horaires, disponibilités, questions fréquentes, demandes d'inscription : les réponses simples partent seules, les autres vous sont transmises avec un brouillon.",
    remplace: "Les messages lus le soir sur le téléphone, et ceux restés sans réponse.",
    secteurs: ["restaurant", "commerce", "association"],
  },
  {
    icon: PenLine,
    tache: "Rédaction",
    titre: "Rédiger fiches produits, articles et emails",
    texte:
      "À partir de vos notes ou d'un ancien texte, Claude rédige fiches produits, articles ou emails dans votre vocabulaire.",
    remplace: "Les soirées passées à écrire, ou les textes jamais publiés faute de temps.",
    secteurs: ["ecommerce", "commerce", "association"],
  },
  {
    icon: Inbox,
    tache: "Emails",
    titre: "Trier et résumer vos emails",
    texte:
      "Chaque matin, un résumé classé : ce qui demande une action, ce qui peut attendre, ce qui est traité, avec un brouillon pour les demandes simples.",
    remplace: "Le premier quart d'heure de lecture et les emails importants noyés.",
    secteurs: ["cabinet", "association", "ecommerce"],
  },
  {
    icon: ClipboardList,
    tache: "Comptes rendus",
    titre: "Rédiger les comptes rendus",
    texte:
      "Après une réunion ou un chantier, un compte rendu structuré est produit depuis vos notes vocales et envoyé aux bonnes personnes.",
    remplace: "La rédaction du soir, souvent repoussée, et les décisions oubliées.",
    secteurs: ["cabinet", "artisan", "association"],
  },
  {
    icon: ScanText,
    tache: "Documents",
    titre: "Extraire les données de vos documents",
    texte:
      "Factures fournisseurs, bons de commande, formulaires papier : les informations utiles sont extraites et envoyées dans votre logiciel.",
    remplace: "La ressaisie à la main, ligne par ligne, et ses fautes de frappe.",
    secteurs: ["commerce", "ecommerce", "cabinet", "artisan"],
  },
];
