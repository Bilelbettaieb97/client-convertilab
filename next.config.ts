import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
            // CSP en mode Report-Only : n'applique AUCUN blocage, log seulement
            // les violations dans la console navigateur. Une fois la policy
            // validée en prod (aucune violation légitime), la passer en
            // Content-Security-Policy pour l'appliquer réellement.
            key: "Content-Security-Policy-Report-Only",
            value: [
              "default-src 'self'",
              // GTM/GA4, Meta Pixel, AdSense, Vercel Analytics/Speed Insights
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://pagead2.googlesyndication.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              // Supabase (formulaires), GA4/Meta (tracking), Vercel (vitals)
              "connect-src 'self' https://*.supabase.co https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.facebook.com https://vitals.vercel-insights.com",
              // Google Maps embed (pages villes), GTM preview, Calendly
              "frame-src 'self' https://www.google.com https://www.googletagmanager.com https://calendly.com https://td.doubleclick.net",
              "object-src 'none'",
              "base-uri 'self'",
            ].join("; "),
          },
        ],
      },
      // Long-term caching for static assets
      {
        source: "/:path*.(jpg|jpeg|png|webp|avif|gif|ico|svg|woff|woff2|ttf|eot)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
