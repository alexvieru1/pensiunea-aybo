import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pensiuneaaybo.ro"),
  title: {
    default: "Pensiunea Aybo | Cazare Agigea, Constanța",
    template: "%s | Pensiunea Aybo",
  },
  description:
    "Pensiunea Aybo — cazare confortabilă în Agigea, lângă Eforie Nord. Camere cu aer condiționat, parcare gratuită, piscină și acces facil la plajă.",
  keywords: [
    "pensiune Agigea",
    "cazare Agigea",
    "cazare Eforie Nord",
    "pensiune litoralul romanesc",
    "Pensiunea Aybo",
    "hotel Agigea",
  ],
  authors: [{ name: "Pensiunea Aybo" }],
  openGraph: {
    title: "Pensiunea Aybo | Cazare Agigea, Constanța",
    description:
      "Un loc liniștit aproape de mare — camere confortabile, grădină și acces facil la plajă.",
    url: "https://pensiuneaaybo.ro",
    siteName: "Pensiunea Aybo",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/images/1.webp",
        width: 1200,
        height: 630,
        alt: "Pensiunea Aybo - Cazare Agigea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pensiunea Aybo | Cazare Agigea",
    description:
      "Cazare confortabilă în Agigea, lângă Eforie Nord. Piscină, parcare, mic dejun.",
    images: ["/images/1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Pensiunea Aybo",
              description:
                "Cazare confortabilă în Agigea, lângă Eforie Nord.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Str. Brizei 22",
                addressLocality: "Agigea",
                postalCode: "907015",
                addressCountry: "RO",
              },
              telephone: "+40785203576",
              priceRange: "199-399 RON",
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Wi-Fi gratuit",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Parcare gratuită",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Piscină",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Aer condiționat",
                },
              ],
            }),
          }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
