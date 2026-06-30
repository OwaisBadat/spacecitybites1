import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space City Bites",
  description: "Houston's favorite spot for great food",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-neutral-950 text-white">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="text-center py-8 text-neutral-500 text-sm border-t border-neutral-800">
          &copy; {new Date().getFullYear()} Space City Bites &middot; Houston, TX
        </footer>
      </body>
    </html>
  );
}
