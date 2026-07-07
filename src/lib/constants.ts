export const SITE = {
  name: "ConvertiLab",
  url: "https://www.convertilab.com",
  email: "contact@convertilab.com",
  phone: "+33616477245",
  phoneDisplay: "06 16 47 72 45",
  address: "Rueil-Malmaison, Île-de-France",
  fullAddress: "Rueil-Malmaison, 92500, Île-de-France, France",
  calendly: "https://calendly.com/convertilab-5bsc/30min",
  social: {
    youtube: "https://www.youtube.com/@Convertilab",
    tiktok: "https://www.tiktok.com/@convertilab",
    instagram: "https://www.instagram.com/bilel_bettaieb.convertilab",
    linkedin: "https://www.linkedin.com/company/convertilab",
    facebook: "https://www.facebook.com/profile.php?id=61590285493991",
  },
  trustpilot: "https://fr.trustpilot.com/review/convertilab.com",
  googleMaps: "https://share.google/zUu6ZIAu3MyOCgPNa",
  reviews: {
    count: "15",
    rating: "4.9",
  },
  analytics: {
    ga: "G-N9NTVTE0R6",
    gtm: "GTM-5TDHTDHP",
    metaPixel: "1342588771159528",
    adsense: "ca-pub-5844925774606937",
  },
} as const;

export const PRICING = {
  vitrine: { from: 500, label: "à partir de 500€", monthly: "à partir de 39€/mois" },
  landing: { from: 500, label: "à partir de 500€", monthly: "à partir de 39€/mois" },
  ecommerce: { from: 800, label: "à partir de 800€", monthly: "à partir de 59€/mois" },
  application: { label: "Sur devis" },
  refonte: { from: 400, label: "à partir de 400€" },
} as const;

export const DEFAULT_OG_IMAGE = `${SITE.url}/og-image.png`;

export const STRUCTURED_DATA = {
  organization: {
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    sameAs: [...Object.values(SITE.social), SITE.trustpilot, SITE.googleMaps],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      availableLanguage: "French",
    },
  },
  localBusiness: {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rueil-Malmaison",
      postalCode: "92500",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.8769",
      longitude: "2.1894",
    },
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.reviews.rating,
      reviewCount: SITE.reviews.count,
      bestRating: "5",
    },
    areaServed: [
      { "@type": "City", name: "Paris" },
      { "@type": "City", name: "Rueil-Malmaison" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
      { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    founder: { "@type": "Person", "@id": `${SITE.url}/#bilel-bettaieb`, name: "Bilel Bettaieb" },
    foundingDate: "2024",
  },
} as const;
