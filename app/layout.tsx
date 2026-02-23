import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa Ereditata a Reggio Emilia? Valutazione Gratuita | Diba",
  description: "Casa ereditata da successione? Ti aiutiamo a capire quanto vale e cosa conviene fare. Valutazione gratuita entro 24 ore, anche in comproprietà tra eredi.",
  icons: {
    icon: [{ url: "/assets/favicon.png", type: "image/png" }],
    shortcut: [{ url: "/assets/favicon.png" }],
    apple: [{ url: "/assets/favicon.png" }],
  },
  alternates: {
    canonical: "https://venderecasa.reggioemilia.it/valutazione-gratuita-eredita",
  },
  openGraph: {
    type: "website",
    url: "https://venderecasa.reggioemilia.it/valutazione-gratuita-eredita",
    title: "Hai Ereditato una Casa a Reggio Emilia? Valutazione Gratuita | Diba Servizi Immobiliari",
    description: "Casa ereditata da successione? Ti aiutiamo a capire quanto vale e cosa conviene fare. Valutazione gratuita entro 24 ore.",
    images: [{ url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16610013443"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16610013443');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "RealEstateAgent"],
              "name": "Diba Servizi Immobiliari",
              "image": "https://venderecasa.reggioemilia.it/assets/logo.png",
              "telephone": "3274911031",
              "url": "https://venderecasa.reggioemilia.it/vendere-casa-ereditata-da-successione",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via Vittorio Veneto, 3/D",
                "addressLocality": "Reggio Emilia",
                "postalCode": "42121",
                "addressCountry": "IT"
              },
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              }
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
