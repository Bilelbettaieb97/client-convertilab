export const SITE = {
  name: "ConvertiLab",
  url: "https://convertilab.com",
  email: "contact@convertilab.com",
  phone: "+33616477245",
  phoneDisplay: "06 16 47 72 45",
  address: "Rueil-Malmaison, Île-de-France",
  fullAddress: "Rueil-Malmaison, 92500, Île-de-France, France",
  calendly: "https://calendly.com/convertilab-5bsc/30min",
  social: {
    youtube: "https://www.youtube.com/@Convertilab",
    tiktok: "https://www.tiktok.com/@convertilab",
    instagram: "https://www.instagram.com/convertilab/",
    linkedin: "https://linkedin.com/in/bettaieb-bilel/",
    facebook: "https://www.facebook.com/Convertilab/",
  },
  analytics: {
    ga: "G-N9NTVTE0R6",
    gtm: "GTM-5TDHTDHP",
    metaPixel: "1413733970752208",
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
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    sameAs: Object.values(SITE.social),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      availableLanguage: "French",
    },
  },
  localBusiness: {
    "@type": "LocalBusiness",
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
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
    },
  },
} as const;
