"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { reportOrderClick } from "@/lib/analytics";
import { PROMO, isPromoActive } from "@/lib/promo";

const promoDeal = {
  day: "This Weekend",
  emoji: PROMO.emoji,
  name: PROMO.name,
  detail: PROMO.detail,
  sub: PROMO.sub,
};

const deals = [
  { day: "Sunday",    emoji: "🥪", name: "Breakfast Sandwich $5.99",  detail: "All day long",                     sub: "Brioche or butter croissant" },
  { day: "Monday",    emoji: "🌭", name: "Half Price Hotdogs",         detail: "50% off all hotdogs",              sub: "All day long" },
  { day: "Tuesday",   emoji: "🌮", name: "Taco Tuesday",               detail: "3 Tacos for $8",                   sub: "Save $2.50 — all day" },
  { day: "Wednesday", emoji: "🍗", name: "99¢ Wings",                  detail: "Bone-in or boneless",              sub: "The best deal in Houston" },
  { day: "Thursday",  emoji: "🧀", name: "Free 3pc Mozzie",            detail: "With any burger purchase",         sub: "Mozzarella sticks on us" },
  { day: "Friday",    emoji: "🍟", name: "Free Fries",                 detail: "With any food purchase",           sub: "Every Friday, all day" },
  { day: "Saturday",  emoji: "👨‍👩‍👧‍👦", name: "Family Meal Deal",           detail: "24pc Wings + Fries + Mozz — $49", sub: "Feed the whole crew" },
];

export default function DealPage() {
  const [deal, setDeal] = useState(deals[0]);

  useEffect(() => {
    // During the weekend special, show it instead of the normal daily deal.
    // Auto-reverts once the promo expires (Sun 8/2 9pm Central).
    setDeal(isPromoActive() ? promoDeal : deals[new Date().getDay()]);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 gap-6 bg-black overflow-hidden">
      {/* Page background — Poster1 skyline */}
      <Image
        src="/Poster1.PNG"
        alt=""
        fill
        className="object-cover opacity-40"
        style={{ objectPosition: "center 20%" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <p className="relative z-10 text-neutral-400 text-[11px] uppercase tracking-widest font-semibold">Today&apos;s Deal · Space City Bites</p>

      {/* Story card */}
      <div
        className="relative z-10 w-full max-w-[390px] rounded-3xl overflow-hidden shadow-2xl"
        style={{ aspectRatio: "9/16", background: "linear-gradient(160deg, #1a0a0a 0%, #1c1c2e 50%, #0a1a2e 100%)" }}
      >
        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(227,30,36,0.35) 0%, transparent 65%), radial-gradient(ellipse 60% 40% at 85% 15%, rgba(29,143,232,0.25) 0%, transparent 60%)" }} />

        <div className="relative z-10 h-full flex flex-col items-center justify-between p-10">

          {/* Top */}
          <div className="text-center w-full">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/70">Space City Bites</span>
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
            </div>
            <span className="inline-block bg-red-600 text-white text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-3 shadow-lg shadow-red-900/50">
              {deal.day}
            </span>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-300">Deal of the Day</p>
          </div>

          {/* Middle */}
          <div className="text-center flex flex-col items-center gap-4 flex-1 justify-center">
            <div className="text-8xl leading-none" style={{ filter: "drop-shadow(0 0 32px rgba(227,30,36,0.7))" }}>
              {deal.emoji}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black uppercase leading-none tracking-tight text-white text-balance">
              {deal.name}
            </h1>
            <p className="text-yellow-300 font-bold text-lg">{deal.detail}</p>
            <p className="text-white/60 text-sm">{deal.sub}</p>
          </div>

          {/* Bottom */}
          <div className="w-full flex flex-col items-center gap-4">
            <a
              href="https://wings-87-alabama-street-houston.cloveronline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-red-600 hover:bg-red-500 text-white text-center font-black uppercase tracking-widest text-sm py-5 rounded-full transition-colors shadow-lg shadow-red-900/50"
              onClick={() => reportOrderClick(`deal_page_${deal.day}`)}
            >
              Order Now →
            </a>
            <p className="text-white/50 text-[11px] uppercase tracking-widest font-bold">
              100% Halal · 3729 W Alabama St · Houston
            </p>
          </div>

        </div>
      </div>

      <p className="relative z-10 text-neutral-400 text-xs text-center">
        New deal every day · Open until {deal.day === "Friday" || deal.day === "Saturday" ? "2am" : deal.day === "Sunday" ? "9pm" : "12am"}
      </p>
    </div>
  );
}
