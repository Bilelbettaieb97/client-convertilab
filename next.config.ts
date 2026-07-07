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
        source: "/etude-de-cas",
        destination: "/portfolio",
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
