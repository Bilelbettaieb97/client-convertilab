import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE, DEFAULT_OG_IMAGE } from "@/lib/constants";
import { GoogleAnalytics, GoogleTagManager, MetaPixel, GTMNoscript, MetaPixelNoscript } from "@/components/Analytics";
import { Toaster } from "@/components/ui/sonner";
import { ChatWidget } from "@/components/chatbot";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieBanner from "@/components/cookies/CookieBanner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
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
        {/* Google Consent Mode v2 — initialise par defaut tout en "denied" (RGPD)
            strategy="afterInteractive" safe because GA/GTM/Meta Pixel are lazyOnload */}
        <Script id="google-consent-mode" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'functionality_storage': 'denied',
              'personalization_storage': 'denied',
              'security_storage': 'granted',
              'wait_for_update': 500
            });
            // Restaurer le consentement précédent depuis localStorage
            try {
              var stored = localStorage.getItem('convertilab_consent');
              if (stored) {
                var c = JSON.parse(stored);
                gtag('consent', 'update', {
                  'analytics_storage': c.analytics ? 'granted' : 'denied',
                  'ad_storage': c.marketing ? 'granted' : 'denied',
                  'ad_user_data': c.marketing ? 'granted' : 'denied',
                  'ad_personalization': c.marketing ? 'granted' : 'denied',
                  'functionality_storage': c.preferences ? 'granted' : 'denied',
                  'personalization_storage': c.preferences ? 'granted' : 'denied'
                });
              }
            } catch (e) {}
          `}
        </Script>
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
        <ChatWidget />
        <CookieBanner />
      </body>
    </html>
  );
}
