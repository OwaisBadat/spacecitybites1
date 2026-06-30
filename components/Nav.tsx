"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-4 sm:px-6 py-2 border-b border-neutral-800 sticky top-0 bg-black/95 backdrop-blur z-40">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="https://raw.githubusercontent.com/OwaisBadat/spacecitybites1/3cb7bdd8e5f9852e037f839bf6740eafae7a6894/Circle%20Logo.PNG"
            alt="Space City Bites"
            width={52}
            height={52}
            className="rounded-full"
            priority
            unoptimized
          />
          <div className="flex flex-col leading-none">
            <span className="text-base font-black tracking-tight text-white">SPACE CITY <span className="text-red-500">BITES</span></span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-500">Halal Street Food</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
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
            className="bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full transition-colors"
          >
            Order Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {open && (
        <div className="sm:hidden fixed inset-0 top-[68px] bg-black z-30 flex flex-col px-6 pt-8 gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-2xl font-black uppercase tracking-wider ${
                pathname === href ? "text-red-500" : "text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://www.ubereats.com/store/space-city-bites/BEvV1p9CQxucnTUn6EpVHw"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 bg-red-600 text-white text-center font-black uppercase tracking-wider px-6 py-4 rounded-full text-lg"
          >
            Order Now on Uber Eats
          </a>
          <div className="mt-4 text-neutral-500 text-sm">
            <p>(713) 621-3128</p>
            <p>3729 W Alabama St, Unit C</p>
          </div>
        </div>
      )}
    </>
  );
}
