"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import OpenStatus from "@/components/OpenStatus";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-4 sm:px-6 py-2 border-b border-blue-900/40 sticky top-0 bg-black/95 backdrop-blur z-40">
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
          <div className="flex flex-col leading-none gap-1">
            <span className="text-base font-black tracking-tight text-white">SPACE CITY <span className="text-red-500">BITES</span></span>
            <OpenStatus />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5">
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
            href="https://wings-87-alabama-street-houston.cloveronline.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-500 text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full transition-colors"
          >
            Order Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[68px] bg-black z-30 flex flex-col px-6 pt-8 gap-5 overflow-y-auto pb-32">
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
          <div className="flex gap-3 mt-4">
            <a
              href="tel:+17136213128"
              className="flex-1 bg-neutral-800 text-white text-center font-black uppercase tracking-wider px-4 py-4 rounded-full"
            >
              📞 Call
            </a>
            <a
              href="https://wings-87-alabama-street-houston.cloveronline.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex-[2] bg-red-600 text-white text-center font-black uppercase tracking-wider px-4 py-4 rounded-full"
            >
              🛒 Order Now
            </a>
          </div>
          <div className="mt-4 text-neutral-500 text-sm border-t border-neutral-800 pt-4">
            <p>3729 W Alabama St, Unit C · Houston, TX</p>
            <p className="mt-1">Mon–Thu 12pm–12am · Fri–Sat 12pm–2am · Sun 12pm–9pm</p>
          </div>
        </div>
      )}
    </>
  );
}
