"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between px-6 py-2 border-b border-neutral-800 sticky top-0 bg-black/95 backdrop-blur z-10">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Space City Bites"
          width={56}
          height={56}
          className="rounded-full"
          priority
        />
        <div className="flex flex-col leading-none">
          <span className="text-base font-black tracking-tight text-white">SPACE CITY <span className="text-red-500">BITES</span></span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">Halal Street Food</span>
        </div>
      </Link>
      <div className="flex items-center gap-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm font-bold uppercase tracking-wider transition-colors ${
              pathname === href ? "text-red-500" : "text-neutral-400 hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
        <a
          href="https://www.ubereats.com/store/space-city-bites/BEvV1p9CQxucnTUn6EpVHw"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full transition-colors"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}
