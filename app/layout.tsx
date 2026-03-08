import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pensiunea Aybo | Cazare Premium în Agigea, Constanța",
  description:
    "Pensiunea Aybo oferă cazare modernă și confortabilă pe Str. Brizei Nr. 22, Agigea, cu vedere la lac. Apartamente premium cu facilități complete, lângă Constanța.",
  keywords:
    "pensiune agigea, cazare agigea, pensiunea aybo, cazare constanta, vedere lac",
  openGraph: {
    title: "Pensiunea Aybo | Cazare Premium în Agigea",
    description:
      "Cazare modernă cu vedere la lac în Agigea, lângă Constanța. Apartamente premium.",
    type: "website",
    locale: "ro_RO",
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
        className={`${playfair.variable} ${raleway.variable} antialiased grain`}
      >
        {children}
      </body>
    </html>
  );
}
