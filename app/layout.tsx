import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MetaPixel from "@/components/analytics/MetaPixel";
import TikTokPixel from "@/components/analytics/TikTokPixel";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Space City Bites | Halal Street Food Houston",
    template: "%s | Space City Bites",
  },
  description:
    "Space City Bites — 100% Halal street food in Houston, TX. 50 wing flavors, burgers, tacos, loaded fries and more. Big Cravings. Bigger Bites.",
  keywords: ["halal Houston", "Space City Bites", "halal wings Houston", "Houston street food", "halal restaurant Houston"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://spacecitybites.com"),
  openGraph: {
    type: "website",
    siteName: "Space City Bites",
    title: "Space City Bites | Halal Street Food Houston",
    description: "100% Halal. Big Cravings. Bigger Bites. 50 wing flavors.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space City Bites | Halal Street Food Houston",
    description: "100% Halal. Big Cravings. Bigger Bites. 50 wing flavors.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white">
        <GoogleAnalytics />
        <MetaPixel />
        <TikTokPixel />
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="text-center py-8 text-neutral-600 text-xs border-t border-neutral-800 bg-black">
          <p className="font-bold text-neutral-400 mb-1">SPACE CITY BITES</p>
          <p>3729 W Alabama St Unit C · Houston, TX 77027 · (713) 621-3128</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} Space City Bites · 100% Halal</p>
        </footer>
      </body>
    </html>
  );
}
