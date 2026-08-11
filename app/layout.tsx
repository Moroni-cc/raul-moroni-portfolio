import type { Metadata } from "next";
import { Playfair_Display, Hanken_Grotesk, Geist } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-hanken",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raúl Moroni — Frontend Developer",
  description:
    "Portafolio profesional de Raúl Moroni, Frontend Developer especializado en React, Next.js y experiencias web de alto rendimiento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${hankenGrotesk.variable} ${geist.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-background font-body text-on-background antialiased">
        <div className="light-leak top-[-10%] left-[-10%]" aria-hidden="true" />
        <div className="light-leak bottom-[-10%] right-[-10%]" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
