"use client";

import { useEffect, useState } from "react";

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
    setDeal(deals[new Date().getDay()]);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] flex flex-col items-center justify-center px-4 py-12 gap-6">
      <p className="text-neutral-600 text-[10px] uppercase tracking-widest">Today&apos;s Deal · Space City Bites</p>

      {/* Story card */}
      <div className="relative w-full max-w-[390px] rounded-3xl overflow-hidden bg-[#0f0f0f] shadow-2xl"
        style={{ aspectRatio: "9/16" }}>

        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(227,30,36,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 30% at 80% 10%, rgba(29,143,232,0.12) 0%, transparent 60%)"
          }} />
        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="relative z-10 h-full flex flex-col items-center justify-between p-10">

          {/* Top */}
          <div className="text-center w-full">
            <div className="flex items-center justify-center gap-2 mb-7">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Space City Bites</span>
              <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
            </div>
            <span className="inline-block bg-red-600 text-white text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">
              {deal.day}
            </span>
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400">Deal of the Day</p>
          </div>

          {/* Middle */}
          <div className="text-center flex flex-col items-center gap-3 flex-1 justify-center">
            <div className="text-7xl leading-none" style={{ filter: "drop-shadow(0 0 24px rgba(227,30,36,0.5))" }}>
              {deal.emoji}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black uppercase leading-none tracking-tight text-white text-balance">
              {deal.name}
            </h1>
            <p className="text-yellow-400 font-bold text-base">{deal.detail}</p>
            <p className="text-white/40 text-sm">{deal.sub}</p>
          </div>

          {/* Bottom */}
          <div className="w-full flex flex-col items-center gap-4">
            <a
              href="https://wings-87-alabama-street-houston.cloveronline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-red-600 hover:bg-red-500 text-white text-center font-black uppercase tracking-widest text-sm py-5 rounded-full transition-colors shadow-lg shadow-red-900/40"
            >
              Order Now →
            </a>
            <p className="text-white/25 text-[10px] uppercase tracking-widest font-bold">
              100% Halal · 3729 W Alabama St · Houston
            </p>
          </div>

        </div>
      </div>

      <p className="text-neutral-700 text-[11px] text-center">
        New deal every day · Open until {deal.day === "Friday" || deal.day === "Saturday" ? "2am" : deal.day === "Sunday" ? "9pm" : "12am"}
      </p>
    </div>
  );
}
