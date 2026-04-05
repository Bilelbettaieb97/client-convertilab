"use client";

import Script from "next/script";
import { SITE } from "@/lib/constants";

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE.analytics.ga}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${SITE.analytics.ga}');
          window.gtagSendEvent = function(url) {
            gtag('event', 'ads_conversion_Envoi_de_formulaire_pou_1', {
              'event_callback': function() { if (typeof url === 'string') window.location = url; },
              'event_timeout': 2000
            });
            return false;
          };
          window.trackFormConversion = function() {
            gtag('event', 'ads_conversion_Envoi_de_formulaire_pou_1', {});
          };
        `}
      </Script>
    </>
  );
}

export function GoogleTagManager() {
  return (
    <Script id="gtm" strategy="lazyOnload">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${SITE.analytics.gtm}');
      `}
    </Script>
  );
}

export function MetaPixel() {
  return (
    <Script id="meta-pixel" strategy="lazyOnload">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${SITE.analytics.metaPixel}');
        fbq('track', 'PageView');
      `}
    </Script>
  );
}

export function GTMNoscript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${SITE.analytics.gtm}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

export function MetaPixelNoscript() {
  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${SITE.analytics.metaPixel}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
