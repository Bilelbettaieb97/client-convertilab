import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE, DEFAULT_OG_IMAGE } from "@/lib/constants";
import { GoogleAnalytics, GoogleTagManager, MetaPixel, GTMNoscript, MetaPixelNoscript } from "@/components/Analytics";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Agence Web Paris & Île-de-France | SEO & Ads | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: "Agence web à Paris & Rueil-Malmaison : création site internet, SEO, Google Ads, Meta Ads. +50 clients, +280% de CA moyen. Devis gratuit.",
  keywords: ["agence web Paris", "création site internet", "SEO Paris", "Google Ads Île-de-France", "agence digitale Rueil-Malmaison", "marketing digital Paris"],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.name,
    title: `Agence Web Paris & Île-de-France | SEO & Ads | ${SITE.name}`,
    description: "Agence web à Paris & Rueil-Malmaison : création site internet, SEO, Google Ads, Meta Ads. +50 clients, +280% de CA moyen. Devis gratuit.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Agence Web Paris & Île-de-France | SEO & Ads | ${SITE.name}`,
    description: "Agence web à Paris & Rueil-Malmaison : création site internet, SEO, Google Ads, Meta Ads. +50 clients, +280% de CA moyen. Devis gratuit.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: SITE.url,
    languages: {
      "fr": SITE.url,
      "x-default": SITE.url,
    },
  },
  other: {
    "geo.region": "FR-IDF",
    "geo.placename": "Rueil-Malmaison",
    "ICBM": "48.8769, 2.1894",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="500x500" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#9333ea" />
        <meta name="msapplication-TileColor" content="#9333ea" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:text-purple-600 focus:font-semibold">
          Aller au contenu principal
        </a>
        <GTMNoscript />
        <MetaPixelNoscript />
        <main id="main-content">
          {children}
        </main>
        <Toaster />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
        <GoogleTagManager />
        <MetaPixel />
      </body>
    </html>
  );
}
