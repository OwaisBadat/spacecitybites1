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
    default: "Space City Bites | Houston Restaurant",
    template: "%s | Space City Bites",
  },
  description:
    "Space City Bites — bold flavors born in Houston. Burgers, brisket, tacos, and more. Order online or visit us today.",
  keywords: ["Houston restaurant", "Space City Bites", "Houston food", "burgers Houston", "brisket Houston"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://spacecitybites.com"),
  openGraph: {
    type: "website",
    siteName: "Space City Bites",
    title: "Space City Bites | Houston Restaurant",
    description: "Bold flavors born in Houston. Come hungry, leave happy.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space City Bites | Houston Restaurant",
    description: "Bold flavors born in Houston. Come hungry, leave happy.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-neutral-950 text-white">
        <GoogleAnalytics />
        <MetaPixel />
        <TikTokPixel />
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="text-center py-8 text-neutral-500 text-sm border-t border-neutral-800">
          &copy; {new Date().getFullYear()} Space City Bites &middot; Houston, TX
        </footer>
      </body>
    </html>
  );
}
