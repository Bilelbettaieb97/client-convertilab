export interface MentionsLegalesInput {
  companyType: "auto-entrepreneur" | "sarl" | "sas" | "eurl" | "association" | "autre";
  companyName: string;
  address: string;
  siret: string;
  directorName: string;
  companyEmail: string;
  phone?: string;
  host: "vercel" | "ovh" | "o2switch" | "ionos" | "autre";
  hostCustom?: string;
  hasCookiesAnalytics: boolean;
  hasCookiesMarketing: boolean;
  hasCookiesFunctional: boolean;
  hasContactForm: boolean;
  websiteUrl?: string;
}

export interface MentionsLegalesSection {
  title: string;
  content: string;
}

export interface MentionsLegalesResult {
  sections: MentionsLegalesSection[];
  fullText: string;
  generatedAt: string;
  companyName: string;
  companyType: string;
}

const HOST_INFO: Record<string, { name: string; address: string }> = {
  vercel: { name: "Vercel Inc.", address: "440 N Barranca Ave #4133, Covina, CA 91723, USA" },
  ovh: { name: "OVH SAS", address: "2 rue Kellermann, 59100 Roubaix, France" },
  o2switch: { name: "o2switch", address: "Chemin des Pardiaux, 63000 Clermont-Ferrand, France" },
  ionos: { name: "IONOS SARL", address: "7 place de la Gare, 57200 Sarreguemines, France" },
};

const COMPANY_TYPE_LABELS: Record<string, string> = {
  "auto-entrepreneur": "Auto-entrepreneur",
  sarl: "SARL",
  sas: "SAS",
  eurl: "EURL",
  association: "Association loi 1901",
  autre: "Autre",
};

export function generateMentionsLegales(input: MentionsLegalesInput): MentionsLegalesResult {
  const now = new Date();
  const generatedAt = now.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const hostInfo = input.host === "autre"
    ? { name: input.hostCustom || "Hebergeur non precise", address: "Adresse non precisee" }
    : HOST_INFO[input.host];

  const companyTypeLabel = COMPANY_TYPE_LABELS[input.companyType] || input.companyType;
  const websiteUrl = input.websiteUrl || "Non precise";

  const sections: MentionsLegalesSection[] = [];

  // 1. Editeur du site
  sections.push({
    title: "Editeur du site",
    content: [
      `Le present site web${input.websiteUrl ? ` accessible a l'adresse ${input.websiteUrl}` : ""} est edite par :`,
      "",
      `Raison sociale : ${input.companyName}`,
      `Forme juridique : ${companyTypeLabel}`,
      `Adresse du siege social : ${input.address}`,
      `Numero SIRET : ${input.siret}`,
      `Directeur de la publication : ${input.directorName}`,
      `Email de contact : ${input.companyEmail}`,
      input.phone ? `Telephone : ${input.phone}` : "",
      input.websiteUrl ? `Site web : ${websiteUrl}` : "",
    ].filter(Boolean).join("\n"),
  });

  // 2. Hebergeur
  sections.push({
    title: "Hebergeur",
    content: [
      "Le site est heberge par :",
      "",
      `Nom : ${hostInfo.name}`,
      `Adresse : ${hostInfo.address}`,
    ].join("\n"),
  });

  // 3. Propriete intellectuelle
  sections.push({
    title: "Propriete intellectuelle",
    content: [
      `L'ensemble des contenus presents sur le site de ${input.companyName} (textes, images, graphismes, logo, icones, sons, logiciels, etc.) est protege par les lois francaises et internationales relatives a la propriete intellectuelle.`,
      "",
      "Toute reproduction, representation, modification, publication, adaptation de tout ou partie des elements du site, quel que soit le moyen ou le procede utilise, est interdite, sauf autorisation ecrite prealable de l'editeur.",
      "",
      `Toute exploitation non autorisee du site ou de l'un quelconque des elements qu'il contient sera consideree comme constitutive d'une contrefacon et poursuivie conformement aux dispositions des articles L.335-2 et suivants du Code de Propriete Intellectuelle.`,
    ].join("\n"),
  });

  // 4. Protection des donnees personnelles (RGPD)
  const dataCollected: string[] = [];
  if (input.hasContactForm) {
    dataCollected.push("Formulaire de contact : nom, prenom, adresse email, message, et eventuellement numero de telephone.");
  }
  if (input.hasCookiesAnalytics) {
    dataCollected.push("Cookies analytiques : donnees de navigation anonymisees (pages visitees, duree de visite, type de navigateur, etc.).");
  }
  if (input.hasCookiesMarketing) {
    dataCollected.push("Cookies marketing : donnees de suivi publicitaire pour personnaliser les annonces.");
  }

  sections.push({
    title: "Protection des donnees personnelles (RGPD)",
    content: [
      `Conformement au Reglement General sur la Protection des Donnees (RGPD - Reglement UE 2016/679) et a la loi Informatique et Libertes du 6 janvier 1978 modifiee, ${input.companyName} s'engage a proteger les donnees personnelles des utilisateurs de ce site.`,
      "",
      "Responsable du traitement :",
      `${input.directorName} — ${input.companyEmail}`,
      "",
      dataCollected.length > 0
        ? `Donnees collectees :\n${dataCollected.map(d => `- ${d}`).join("\n")}`
        : "Aucune donnee personnelle n'est collectee directement par ce site en dehors des cookies eventuels.",
      "",
      "Finalites du traitement :",
      input.hasContactForm ? "- Repondre aux demandes de contact" : "",
      input.hasCookiesAnalytics ? "- Analyser la frequentation du site" : "",
      input.hasCookiesMarketing ? "- Personnaliser les contenus publicitaires" : "",
      "- Ameliorer l'experience utilisateur",
      "",
      "Duree de conservation : les donnees personnelles sont conservees pour une duree maximale de 3 ans a compter du dernier contact.",
      "",
      "Droits des utilisateurs :",
      "Conformement au RGPD, vous disposez des droits suivants :",
      "- Droit d'acces a vos donnees personnelles",
      "- Droit de rectification",
      "- Droit a l'effacement (droit a l'oubli)",
      "- Droit a la limitation du traitement",
      "- Droit a la portabilite des donnees",
      "- Droit d'opposition",
      "",
      `Pour exercer ces droits, vous pouvez contacter : ${input.directorName} a l'adresse ${input.companyEmail}.`,
      "",
      "En cas de litige, vous pouvez adresser une reclamation aupres de la Commission Nationale de l'Informatique et des Libertes (CNIL) — www.cnil.fr.",
    ].filter(Boolean).join("\n"),
  });

  // 5. Cookies
  const cookieTypes: string[] = [];
  if (input.hasCookiesFunctional) {
    cookieTypes.push("Cookies fonctionnels : necessaires au bon fonctionnement du site (preferences utilisateur, session de connexion). Ces cookies ne necessitent pas de consentement prealable.");
  }
  if (input.hasCookiesAnalytics) {
    cookieTypes.push("Cookies analytiques : permettent de mesurer l'audience du site et d'analyser la frequentation (ex : Google Analytics, Plausible, Matomo). Ces cookies sont soumis a votre consentement.");
  }
  if (input.hasCookiesMarketing) {
    cookieTypes.push("Cookies marketing / publicitaires : utilises pour suivre les visiteurs sur les sites web et afficher des publicites personnalisees (ex : Facebook Pixel, Google Ads). Ces cookies sont soumis a votre consentement.");
  }

  sections.push({
    title: "Cookies",
    content: [
      "Lors de votre navigation sur ce site, des cookies peuvent etre deposes sur votre terminal (ordinateur, tablette, smartphone).",
      "",
      cookieTypes.length > 0
        ? `Types de cookies utilises :\n\n${cookieTypes.map(ct => `- ${ct}`).join("\n\n")}`
        : "Ce site n'utilise actuellement aucun cookie.",
      "",
      cookieTypes.length > 0
        ? [
            "Gestion des cookies :",
            "Vous pouvez a tout moment modifier vos preferences en matiere de cookies via les parametres de votre navigateur ou via le bandeau de consentement affiche lors de votre premiere visite.",
            "",
            "Pour en savoir plus sur les cookies et comment les gerer :",
            "- Chrome : chrome://settings/cookies",
            "- Firefox : about:preferences#privacy",
            "- Safari : Preferences > Confidentialite",
            "- Edge : edge://settings/privacy",
          ].join("\n")
        : "",
    ].filter(Boolean).join("\n"),
  });

  // 6. Responsabilite
  sections.push({
    title: "Limitation de responsabilite",
    content: [
      `${input.companyName} s'efforce d'assurer au mieux de ses possibilites l'exactitude et la mise a jour des informations diffusees sur ce site. Toutefois, ${input.companyName} ne peut garantir l'exactitude, la precision ou l'exhaustivite des informations mises a disposition.`,
      "",
      `${input.companyName} decline toute responsabilite :`,
      "- Pour toute imprecision, inexactitude ou omission portant sur des informations disponibles sur le site.",
      "- Pour tous dommages resultant d'une intrusion frauduleuse d'un tiers ayant entraine une modification des informations mises a disposition sur le site.",
      "- Et plus generalement, pour tous dommages, directs ou indirects, qu'elles qu'en soient les causes, origines, natures ou consequences, provenant de l'acces de quiconque au site ou de l'impossibilite d'y acceder.",
      "",
      "Les liens hypertextes presents sur le site et renvoyant vers d'autres sites internet ne sauraient engager la responsabilite de l'editeur quant au contenu de ces sites.",
    ].join("\n"),
  });

  // 7. Droit applicable
  sections.push({
    title: "Droit applicable et attribution de juridiction",
    content: [
      "Les presentes mentions legales sont regies par le droit francais. En cas de litige et a defaut de resolution amiable, les tribunaux francais seront seuls competents pour en connaitre.",
      "",
      `Pour toute question relative aux presentes mentions legales, vous pouvez nous contacter a l'adresse suivante : ${input.companyEmail}.`,
      "",
      `Derniere mise a jour : ${generatedAt}`,
    ].join("\n"),
  });

  // Build full text
  const fullText = sections
    .map(s => `${s.title.toUpperCase()}\n${"=".repeat(s.title.length)}\n\n${s.content}`)
    .join("\n\n\n");

  return {
    sections,
    fullText,
    generatedAt,
    companyName: input.companyName,
    companyType: companyTypeLabel,
  };
}
