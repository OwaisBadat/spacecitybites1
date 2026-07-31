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
      className="promo-glow relative z-50 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-gradient-to-r from-red-600 to-red-700 border-y-2 border-blue-500/70 px-4 py-3 text-center text-white transition-transform hover:scale-[1.005]"
    >
      <span className="font-black uppercase text-sm tracking-tight drop-shadow">
        🔥 <span className="text-yellow-300">99¢</span> Wings — All Weekend Long
      </span>
      <span className="font-semibold uppercase text-xs tracking-wide opacity-90">
        Fri–Sun · Ends 8/2
      </span>
      <span className="bg-white text-red-700 font-black uppercase text-xs tracking-wide px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_14px_rgba(255,255,255,0.5)]">
        Order Now →
      </span>
    </Link>
  );
}
