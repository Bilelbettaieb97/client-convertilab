import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev uniquement (ignoré en production) : autorise l'ouverture du serveur local
  // depuis un téléphone du même réseau Wi-Fi (http://192.168.1.4:4650). Sans cette
  // ligne, Next 16 répond 403 aux chunks demandés depuis une autre origine que localhost.
  allowedDevOrigins: ["192.168.1.4"],
  poweredByHeader: false,
  compress: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-select",
      "@radix-ui/react-tabs",
      "@radix-ui/react-toast",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      // Doublon de /blog/design-web-tendances-2026 (même sujet, 0 impression en 90 jours) :
      // l'article de 2024 est retiré et fusionné, l'URL redirige vers celui qui se positionne.
      {
        source: "/blog/tendances-web-design-2024",
        destination: "/blog/design-web-tendances-2026",
        permanent: true,
      },
      // Le hub /etude-de-cas renvoyait un 404 alors que le sitemap le référence :
      // on le redirige vers /portfolio (le vrai hub des réalisations) pour aligner
      // sitemap et architecture, et éviter les "Découverte, non indexée" en amont.
      {
        // L'offre a 300 EUR a ete retiree le 06/09/2026 : elle ancrait sous le
        // nouveau palier d'entree a 490 EUR. La page etait indexee, on redirige
        // plutot que de laisser un 404.
        source: "/offre-speciale",
        destination: "/prix",
        permanent: true,
      },
      {
        source: "/etude-de-cas",
        destination: "/portfolio",
        permanent: true,
      },
      // /creation-site-internet/[ville] cannibalise /agence-web/[ville] (mêmes
      // villes, offre identique). Search Console confirme : ces pages sont
      // "URL inconnue de Google" (zéro trafic), donc on consolide sans risque
      // vers /agence-web pour renforcer un seul jeu de pages locales.
      {
        source: "/creation-site-internet/:ville",
        destination: "/agence-web/:ville",
        permanent: true,
      },
      {
        source: "/creation-site-internet",
        destination: "/agence-web",
        permanent: true,
      },
      // Audit du 18/09/2026 : les 80 pages /agence-web/[secteur]/[ville] (gabarit à
      // deux variables, 13 clics en 90 jours, cas client inventé) sont consolidées
      // sur la page ville ; les 6 villes sans aucune impression en 90 jours sont
      // renvoyées vers le hub. Les données restent dans cities.ts et sectors.ts.
      {
        source: "/agence-web/:secteur(artisan|boulangerie|coach|coiffeur|electricien|immobilier|plombier|restaurant)/:ville",
        destination: "/agence-web/:ville",
        permanent: true,
      },
      {
        source: "/agence-web/:ville(neuilly-sur-seine|versailles|toulon|perpignan|saint-denis|asnieres-sur-seine)",
        destination: "/agence-web",
        permanent: true,
      },
      // convertilab.fr sert le même site que .com sans redirection :
      // Google crawle et indexe les deux domaines en doublon.
      // 301 vers .com pour consolider tous les signaux SEO sur un seul domaine.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.convertilab.fr" }],
        destination: "https://www.convertilab.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "convertilab.fr" }],
        destination: "https://www.convertilab.com/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // La présentation commerciale (deck slide-par-slide) est un HTML statique
      // dans /public. On la sert à l'URL propre /presentation.
      { source: "/presentation", destination: "/presentation.html" },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            // CSP appliquée depuis le 18/09/2026 : la politique a été validée en
            // report-only sur 42 pages de production (Playwright, cookies acceptés,
            // chat ouvert) ; la seule violation était /presentation (Google Fonts),
            // ajouté ci-dessous. Pour revenir en observation : remettre la clé
            // "Content-Security-Policy-Report-Only".
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // GTM/GA4, Meta Pixel, AdSense, Vercel Analytics/Speed Insights
              // googleads.g.doubleclick.net : script de conversion Google Ads chargé par gtag
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://va.vercel-scripts.com",
              // Google Fonts : uniquement le deck statique /presentation
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data: https://fonts.gstatic.com",
              // Supabase (formulaires), GA4 (collecte UE sur region1.google-analytics.com), Google Ads
              // (ccm/collect sur pagead2.googlesyndication.com), GTM, Meta (tracking), Vercel (vitals)
              // Mesuré en production le 18/09/2026 avec cookies acceptés : GA4 collecte sur
              // region1.analytics.google.com, Google Ads sur www.google.com/ccm et /rmkt,
              // ad.doubleclick.net et googleads.g.doubleclick.net.
              //
              // Correction du 23/09/2026 : la note « le pixel fonctionne sans les
              // passerelles Meta » était fausse. Mesuré sur la production, il ne
              // fonctionnait pas du tout.
              // googleadservices.com : la conversion Google Ads part par là depuis
              // la nouvelle balise gtag. Sans lui, « conversion » et « generate_lead »
              // étaient refusés en silence depuis le 18/09 : plus aucune conversion
              // remontée dans Google Ads.
              //
              // *.on.aws et *.run.app : passerelle d'évènements de Meta. Le pixel ne
              // poste plus sur www.facebook.com/tr mais sur un sous-domaine aléatoire
              // de cette passerelle (« /events?cee=no »). Les bloquer revenait à
              // éteindre le pixel : mesuré le 23/09, un fbq('track','Lead') ne
              // produisait aucune requête réseau. C'est large, et c'est le prix à
              // payer pour mesurer les conversions Meta ; à revoir si Meta publie
              // un domaine fixe.
              "connect-src 'self' https://*.supabase.co https://*.google-analytics.com https://*.analytics.google.com https://analytics.google.com https://stats.g.doubleclick.net https://ad.doubleclick.net https://googleads.g.doubleclick.net https://www.google.com https://www.google.fr https://www.googleadservices.com https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.facebook.com https://*.on.aws https://*.run.app https://vitals.vercel-insights.com",
              // Google Maps embed (pages villes), GTM preview, Calendly
              "frame-src 'self' https://www.google.com https://www.googletagmanager.com https://calendly.com https://td.doubleclick.net https://googleads.g.doubleclick.net https://www.facebook.com",
              "object-src 'none'",
              "base-uri 'self'",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
      // Cache long des ressources statiques : production uniquement. En développement,
      // les chunks Turbopack gardent le même nom d'un redémarrage à l'autre : avec
      // « immutable », le navigateur conservait pendant un an l'ancien CSS et l'ancien
      // JS (rechargement normal compris), d'où des pages qui semblaient ne jamais changer
      // et des erreurs d'hydratation. Une image remplacée sous le même nom restait
      // aussi invisible. Seul un rechargement forcé (Cmd+Maj+R) contournait le cache.
      ...(process.env.NODE_ENV === "production" ? CACHE_LONG : []),
    ];
  },
};

/** Un an, immuable : uniquement pour les ressources dont l'URL change avec le contenu. */
const CACHE_LONG = [
  "/:path*.(jpg|jpeg|png|webp|avif|gif|ico|svg|woff|woff2|ttf|eot)",
  "/images/:path*",
  "/fonts/:path*",
  "/_next/static/:path*",
].map((source) => ({
  source,
  headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
}));

export default nextConfig;
