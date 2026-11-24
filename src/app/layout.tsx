import type { Metadata, Viewport } from "next";
import {
  Cinzel_Decorative,
  Playfair_Display_SC,
  Great_Vibes,
  Cormorant_Garamond,
  Tiro_Devanagari_Hindi,
} from "next/font/google";
import "./globals.css";

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const playfairDisplaySC = Playfair_Display_SC({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair-sc",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const tiroDevanagari = Tiro_Devanagari_Hindi({
  weight: "400",
  subsets: ["devanagari", "latin"],
  variable: "--font-deva",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://wedding-invitation-pearl-eight.vercel.app"
  ),
  title: "Garvit (Rishabh) & Geetanjali (Varsha) | Invitation",
  description:
    "You are invited to the engagement of Garvit (Rishabh) & Geetanjali (Varsha) on 29 November 2026 in Delhi and their wedding on 14 December 2026 in Noida.",
  openGraph: {
    title: "Garvit (Rishabh) & Geetanjali (Varsha)",
    description:
      "Engagement on 29 November 2026 at Diamond Crown Banquet, Delhi. Wedding on 14 December 2026 at Diamond Crown Platinum Hall, Noida.",
    type: "website",
    locale: "en_IN",
    siteName: "Garvit (Rishabh) & Geetanjali (Varsha)",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garvit (Rishabh) & Geetanjali (Varsha)",
    description:
      "Engagement on 29 November 2026, Delhi. Wedding on 14 December 2026, Noida.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzelDecorative.variable} ${playfairDisplaySC.variable} ${greatVibes.variable} ${cormorantGaramond.variable} ${tiroDevanagari.variable} antialiased`}
    >
      <body className="h-full bg-[#1a0e04] overflow-hidden">{children}</body>
    </html>
  );
}
