import { SITE } from "@/lib/constants";

interface ServiceDetailProps {
  name: string;
  description: string;
  url: string;
  price?: string;
  image?: string;
}

export default function ServiceDetailSchema({ name, description, url, price, image }: ServiceDetailProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": `${SITE.url}${url}`,
    "provider": {
      "@type": "ProfessionalService",
      "name": SITE.name,
      "url": SITE.url,
      "telephone": SITE.phone,
      "email": SITE.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1 Rue du 4 Septembre",
        "addressLocality": "Rueil-Malmaison",
        "postalCode": "92500",
        "addressRegion": "Ile-de-France",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.8769,
        "longitude": 2.1894
      },
      "priceRange": "$$"
    },
    "areaServed": [
      { "@type": "City", "name": "Paris" },
      { "@type": "AdministrativeArea", "name": "Ile-de-France" },
      { "@type": "Country", "name": "France" }
    ],
    "serviceType": name
  };

  if (price) {
    schema.offers = {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    };
  }

  if (image) {
    schema.image = image;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
