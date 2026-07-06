"use client";

import { useEffect } from "react";

export default function InstagramFeed() {
  useEffect(() => {
    if (document.getElementById("behold-script")) return;
    const s = document.createElement("script");
    s.id = "behold-script";
    s.type = "module";
    s.src = "https://w.behold.so/widget.js";
    document.head.appendChild(s);
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-900 to-neutral-950 py-16 px-4 sm:px-6 text-center">
      <p className="text-blue-400 text-xs uppercase tracking-widest mb-2">Follow the vibe</p>
      <a
        href="https://instagram.com/space_city_bites"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl sm:text-3xl font-black text-white hover:text-blue-400 transition-colors"
      >
        @space_city_bites
      </a>
      <p className="text-blue-300/50 text-sm mt-2 mb-8">Instagram</p>

      <div className="max-w-5xl mx-auto">
        <div data-behold-id="mwMCJlShiIs6EwtMEKmt"></div>
      </div>
    </section>
  );
}
