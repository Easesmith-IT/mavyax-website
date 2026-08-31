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
  title: "Mavyax — AI & Technology Transformation",
  description:
    "Mavyax develops intelligent solutions and transforms the technology behind how businesses operate, compete and grow.",
  openGraph: {
    title: "Mavyax — AI & Technology Transformation",
    description:
      "Mavyax develops intelligent solutions and transforms the technology behind how businesses operate, compete and grow.",
    type: "website",
  },
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
      </head>
      <body className="font-body-md bg-background text-on-surface antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
