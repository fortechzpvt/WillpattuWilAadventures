import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wilpattu Safari Tours | Private Leopard Safari, Sri Lanka",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Book a private, solo-guided Wilpattu National Park safari with 13-year master tracker Tharaka Rathnayaka. Leopards, sloth bears, elephants & 200+ bird species — no group tours, no middlemen.",
  keywords: [
    "Wilpattu safari",
    "Wilpattu National Park safari",
    "private safari Sri Lanka",
    "leopard safari Sri Lanka",
    "Wilpattu jeep safari",
    "Wilpattu safari price",
    "wildlife guide Sri Lanka",
    "Tharaka Rathnayaka",
    "Wilpattu bird watching",
    "Wilpattu bungalow booking",
    "Wilpattu vs Yala",
  ],
  authors: [{ name: "Tharaka Rathnayaka — Wilpattu Wild Adventures" }],
  creator: "Wilpattu Wild Adventures",
  publisher: "Wilpattu Wild Adventures",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Wilpattu Safari Tours | Private Leopard Safari, Sri Lanka",
    description:
      "Private, solo-guided Wilpattu National Park safaris with a 13-year master tracker. Leopards, sloth bears, elephants and 200+ bird species.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: "Wilpattu National Park wildlife safari landscape",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wilpattu Safari Tours | Private Leopard Safari, Sri Lanka",
    description:
      "Private, solo-guided Wilpattu National Park safaris with a 13-year master tracker. Leopards, sloth bears, elephants and 200+ bird species.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE_NAME,
  image: OG_IMAGE,
  url: SITE_URL,
  telephone: "+94773118295",
  priceRange: "$$",
  description:
    "Private, solo-guided wildlife safaris inside Wilpattu National Park, Sri Lanka, led personally by 13-year master tracker Tharaka Rathnayaka.",
  areaServed: {
    "@type": "Place",
    name: "Wilpattu National Park, North Western Province, Sri Lanka",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wilpattu National Park",
    addressRegion: "North Western Province",
    addressCountry: "LK",
  },
  founder: {
    "@type": "Person",
    name: "Tharaka Rathnayaka",
    jobTitle: "Master Tracker & Safari Guide",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://raw.githubusercontent.com; media-src 'self' https://raw.githubusercontent.com; frame-src https://maps.google.com https://www.google.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Inter:wght@300;400;500;600&display=swap"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="bg-cream text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
