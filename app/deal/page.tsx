"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { reportOrderClick } from "@/lib/analytics";

const deals = [
  { day: "Sunday",    emoji: "🥪", name: "Breakfast Sandwich $5.99",  detail: "All day long",                     sub: "Brioche or butter croissant" },
  { day: "Monday",    emoji: "🌭", name: "Half Price Hotdogs",         detail: "50% off all hotdogs",              sub: "All day long" },
  { day: "Tuesday",   emoji: "🌮", name: "Taco Tuesday",               detail: "3 Tacos for $8",                   sub: "Save $2.50 — all day" },
  { day: "Wednesday", emoji: "🍗", name: "99¢ Wings",                  detail: "Bone-in or boneless",              sub: "The best deal in Houston" },
  { day: "Thursday",  emoji: "🧀", name: "Free 3pc Mozzie",            detail: "With any burger purchase",         sub: "Mozzarella sticks on us" },
  { day: "Friday",    emoji: "🍟", name: "Free Fries",                 detail: "With any food purchase",           sub: "Every Friday, all day" },
  { day: "Saturday",  emoji: "👨‍👩‍👧‍👦", name: "Family Meal Deal",           detail: "24pc Wings + Fries + Mozz — $49", sub: "Feed the whole crew" },
];

type CardProps = {
  variant: "day" | "special";
  badge: string;
  emoji?: string;
  img?: string;
  name: string;
  detail: string;
  sub: string;
};

function DealCard({ variant, badge, emoji, img, name, detail, sub }: CardProps) {
  const glow =
    variant === "day"
      ? "border-blue-500 shadow-[0_0_30px_rgba(29,143,232,0.45),0_0_55px_rgba(29,143,232,0.20)]"
      : "border-red-600 shadow-[0_0_30px_rgba(227,30,36,0.45),0_0_55px_rgba(227,30,36,0.20)]";
  const badgeClass =
    variant === "day"
      ? "bg-blue-500/20 text-blue-300"
      : "bg-red-600 text-white shadow-lg shadow-red-900/50";

  return (
    <div
      className={`relative overflow-hidden rounded-[22px] border-2 ${glow} bg-gradient-to-b from-[#12131a] to-[#0b0f18] p-6 flex flex-col items-center text-center gap-3`}
    >
      <span className={`text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full ${badgeClass}`}>
        {badge}
      </span>
      {img ? (
        <div
          className="relative w-24 h-24 rounded-full overflow-hidden border-[3px] border-white/15"
          style={{ boxShadow: "0 0 26px rgba(227,30,36,0.6)" }}
        >
          <Image src={img} alt={name} fill className="object-cover" />
        </div>
      ) : (
        <div className="text-6xl leading-none" style={{ filter: "drop-shadow(0 0 18px rgba(227,30,36,0.5))" }}>
          {emoji}
        </div>
      )}
      <h2 className="text-2xl font-black uppercase leading-none tracking-tight text-white text-balance">{name}</h2>
      <p className="text-yellow-300 font-bold text-sm">{detail}</p>
      <p className="text-white/55 text-xs">{sub}</p>
    </div>
  );
}

export default function DealPage() {
  const [daily, setDaily] = useState(deals[0]);

  useEffect(() => {
    setDaily(deals[new Date().getDay()]);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-black overflow-hidden">
      {/* Page background — skyline */}
      <Image
        src="/Poster1.PNG"
        alt=""
        fill
        className="object-cover opacity-30"
        style={{ objectPosition: "center 20%" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center gap-7">
        {/* Heading */}
        <div className="text-center">
          <p className="text-blue-300 text-[11px] font-bold uppercase tracking-[0.25em]">Space City Bites · Houston</p>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1.5">Today&apos;s Deal</h1>
        </div>

        {/* Card */}
        <div className="w-full grid gap-4 max-w-sm">
          <DealCard
            variant="day"
            badge={`Today · ${daily.day}`}
            emoji={daily.emoji}
            name={daily.name}
            detail={daily.detail}
            sub={daily.sub}
          />
        </div>

        {/* One Order Now button */}
        <a
          href="https://wings-87-alabama-street-houston.cloveronline.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => reportOrderClick("deal_page")}
          className="block w-full max-w-md bg-red-600 hover:bg-red-500 text-white text-center font-black uppercase tracking-widest text-sm py-5 rounded-full transition-colors shadow-lg shadow-red-900/50"
        >
          Order Now →
        </a>

        <p className="text-white/50 text-[11px] uppercase tracking-widest font-bold text-center">
          100% Halal · 3729 W Alabama St · Houston
        </p>
      </div>
    </div>
  );
}
