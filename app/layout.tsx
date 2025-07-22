import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { CookieConsent } from "@/components/cookie-consent";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "1-800-Grab-Bars - Professional Home Safety Installations",
  description:
    "Professional grab bar, railing, and stairlift installations. Fast, friendly, and reliable service across the Greater Toronto Area.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Sentry Error Monitoring */}
        <Script
          src="https://browser.sentry-cdn.com/7.92.0/bundle.tracing.replay.min.js"
          strategy="afterInteractive"
        />
        <Script id="sentry-init" strategy="afterInteractive">
          {`
            Sentry.init({
              dsn: 'https://your-sentry-dsn@sentry.io/project-id', // <-- Replace with your Sentry DSN
              integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
              tracesSampleRate: 1.0,
              replaysSessionSampleRate: 0.1,
              replaysOnErrorSampleRate: 1.0,
            });
          `}
        </Script>
        {/* Bing Webmaster Tools Verification */}
        <meta name="msvalidate.01" content="BING_VERIFICATION_CODE" />{" "}
        {/* <-- Replace with your Bing verification code */}
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" // <-- Replace with your GA4 Measurement ID
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX'); // <-- Replace with your GA4 Measurement ID
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX'); // <-- Replace with your GTM Container ID
          `}
        </Script>
        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'XXXXXXXXXXXXXXX'); // <-- Replace with your Facebook Pixel ID
            fbq('track', 'PageView');
          `}
        </Script>
        {/* Hotjar Tracking Code */}
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:1234567,hjsv:6}; // <-- Replace 1234567 with your Hotjar Site ID
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
        <title>Safe Home Installers | Toronto & GTA Home Safety Experts</title>
        <meta
          name="description"
          content="Professional grab bar, railing, and home safety installations in Toronto & GTA. Fast, friendly, and trusted by thousands. Book your visit today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicon-64x64.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="/favicon-256x256.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Safe Home Installers | Toronto & GTA Home Safety Experts"
        />
        <meta
          property="og:description"
          content="Professional grab bar, railing, and home safety installations in Toronto & GTA. Fast, friendly, and trusted by thousands. Book your visit today!"
        />
        <meta property="og:image" content="/placeholder.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />{" "}
        {/* <-- Update with your real domain */}
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Safe Home Installers | Toronto & GTA Home Safety Experts"
        />
        <meta
          name="twitter:description"
          content="Professional grab bar, railing, and home safety installations in Toronto & GTA. Fast, friendly, and trusted by thousands. Book your visit today!"
        />
        <meta name="twitter:image" content="/placeholder.jpg" />
      </head>
      <body>
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
