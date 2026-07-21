import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import FloatingOrder from "@/components/FloatingOrder";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.spacecitybiteshtx.com"),
  openGraph: {
    type: "website",
    siteName: "Space City Bites",
    title: "Space City Bites | Halal Street Food Houston",
    description: "100% Halal. Big Cravings. Bigger Bites. 50 wing flavors.",
    images: [{ url: "/Poster1.PNG" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space City Bites | Halal Street Food Houston",
    description: "100% Halal. Big Cravings. Bigger Bites. 50 wing flavors.",
    images: ["/Poster1.PNG"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Space City Bites",
  image: "https://raw.githubusercontent.com/OwaisBadat/spacecitybites1/3cb7bdd8e5f9852e037f839bf6740eafae7a6894/Circle%20Logo.PNG",
  url: "https://www.spacecitybiteshtx.com",
  telephone: "+17136213128",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3729 W Alabama St, Unit C",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77027",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.7387,
    longitude: -95.4172,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "12:00", closes: "00:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "12:00", closes: "02:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "12:00", closes: "21:00" },
  ],
  servesCuisine: ["Halal", "American", "Street Food", "Wings"],
  priceRange: "$",
  hasMenu: "https://www.spacecitybiteshtx.com/menu",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "50",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        <GoogleAnalytics />
        <MetaPixel />
        <TikTokPixel />
        <Nav />
        <FloatingOrder />
        <main className="flex-1">{children}</main>
        <footer className="text-center py-8 text-neutral-600 text-xs border-t border-neutral-800 bg-black">
          <p className="font-bold text-neutral-400 mb-1">SPACE CITY BITES</p>
          <p>3729 W Alabama St Unit C · Houston, TX 77027 · (713) 621-3128</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} Space City Bites · 100% Halal</p>
          <a
            href="https://g.page/r/CWrsJBfZH7BdEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-yellow-500 hover:text-yellow-400 transition-colors font-semibold"
          >
            ⭐ Leave us a Google Review
          </a>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
