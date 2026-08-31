import type { Metadata } from "next";
import { Manrope, Geist } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mavyax.com"),
  title: {
    default: "Mavyax — AI & Technology Transformation",
    template: "%s | Mavyax",
  },
  description:
    "Mavyax develops intelligent AI solutions and transforms core technology infrastructure for modern enterprises.",
  keywords: [
    "AI Development",
    "Business IT Transformation",
    "Artificial Intelligence Solutions",
    "Enterprise AI Integration",
    "Legacy System Modernization",
    "Mavyax",
  ],
  authors: [{ name: "Mavyax Tech Private Limited" }],
  creator: "Mavyax Tech Private Limited",
  publisher: "Mavyax Tech Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://mavyax.com",
  },
  openGraph: {
    title: "Mavyax — AI & Technology Transformation",
    description:
      "Mavyax develops intelligent AI solutions and transforms core technology infrastructure for modern enterprises.",
    url: "https://mavyax.com",
    siteName: "Mavyax",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mavyax — AI & Technology Transformation",
    description:
      "Mavyax develops intelligent AI solutions and transforms core technology infrastructure for modern enterprises.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mavyax Tech Private Limited",
  "url": "https://mavyax.com",
  "logo": "https://mavyax.com/images/image_0.jpg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8925687688",
    "contactType": "customer service",
    "email": "info@mavyax.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${manrope.variable} ${geist.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body-md bg-background text-on-surface antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
