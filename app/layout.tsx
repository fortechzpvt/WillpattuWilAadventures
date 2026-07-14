import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wilpattu Wild Adventures — Private Safari · Sri Lanka",
  description:
    "Private solo guided safari in Wilpattu National Park with master tracker Tharaka Rathnayaka. 13 years experience. Leopards, sloth bears, and rare birds.",
  keywords: [
    "Wilpattu safari",
    "private safari Sri Lanka",
    "leopard safari",
    "wildlife guide Sri Lanka",
    "Tharaka Rathnayaka",
    "Wilpattu National Park",
  ],
  authors: [{ name: "Tharaka Rathnayaka — Wilpattu Wild Adventures" }],
  openGraph: {
    title: "Wilpattu Wild Adventures — Private Safari",
    description:
      "Bespoke Wilpattu wildlife safaris guided by a master tracker with 13 years of exclusive Wilpattu experience.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
      </head>
      <body className="bg-cream text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
