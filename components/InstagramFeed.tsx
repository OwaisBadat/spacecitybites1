"use client";

import { useEffect, useRef } from "react";

export default function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Append the widget target div to the DOM first
    const widgetDiv = document.createElement("div");
    widgetDiv.setAttribute("data-behold-id", "mwMCJlShiIs6EwtMEKmt");
    containerRef.current.appendChild(widgetDiv);

    // Then load the Behold script so it finds the div
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
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

      <div ref={containerRef} className="max-w-5xl mx-auto" />
    </section>
  );
}
