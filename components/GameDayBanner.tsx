"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isSeasonActive } from "@/lib/gamedays";

export default function GameDayBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(isSeasonActive());
  }, []);

  if (!show) return null;

  return (
    <Link
      href="/deal"
      aria-label="Texans game day special: 99¢ wings every time the Texans play"
      className="relative z-50 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 border-b-2 border-blue-500/50 px-4 py-3 text-center transition-transform hover:scale-[1.01]"
      style={{
        background:
          "radial-gradient(120% 200% at 12% 50%, rgba(29,143,232,0.35), transparent 55%), #0b0f18",
      }}
    >
      <span className="text-2xl drop-shadow-[0_0_10px_rgba(29,143,232,0.6)]">🏈</span>
      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-300">
        Texans Game Day · All Season
      </span>
      <span className="text-sm sm:text-base font-black text-white">
        <span className="text-red-500">99¢ Wings</span> every time the Texans play
      </span>
      <span className="hidden sm:inline text-xs font-black uppercase tracking-wider text-white/60">
        Bone-in or boneless →
      </span>
    </Link>
  );
}
