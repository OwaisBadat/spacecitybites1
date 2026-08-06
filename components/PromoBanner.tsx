"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isPromoActive } from "@/lib/promo";

export default function PromoBanner() {
  // Checked client-side so it auto-expires without a redeploy, and to avoid
  // hydration mismatch (render nothing on the server, decide after mount).
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(isPromoActive());
  }, []);

  if (!show) return null;

  return (
    <Link
      href="/deal"
      className="promo-glow relative z-50 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 bg-gradient-to-r from-red-600 to-red-700 border-y-[3px] border-blue-400 px-4 py-5 text-center text-white transition-transform hover:scale-[1.01]"
    >
      <span className="font-black uppercase text-base sm:text-xl tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
        🔥 <span className="text-yellow-300 drop-shadow-[0_0_12px_rgba(255,225,77,0.8)]">99¢</span> Wings — All Month Long
      </span>
      <span className="font-bold uppercase text-xs sm:text-sm tracking-wide opacity-95">
        Every Day in August
      </span>
      <span className="bg-white text-red-700 font-black uppercase text-xs sm:text-sm tracking-wide px-5 py-2.5 rounded-full whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.6)]">
        Order Now →
      </span>
    </Link>
  );
}
