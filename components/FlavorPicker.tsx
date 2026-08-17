"use client";

import { useState } from "react";

type Flavor = { num: number; name: string };

const CATEGORIES: Record<string, (name: string) => boolean> = {
  All: () => true,
  Buffalo: (n) => n.toLowerCase().includes("buffalo"),
  BBQ: (n) => n.toLowerCase().includes("bbq"),
  Teriyaki: (n) => n.toLowerCase().includes("teriyaki"),
  "Lemon Pepper": (n) => n.toLowerCase().includes("lemon pepper"),
  Honey: (n) => n.toLowerCase().includes("honey"),
  Garlic: (n) => n.toLowerCase().includes("garlic"),
  Cajun: (n) => n.toLowerCase().includes("cajun"),
  Jerk: (n) => n.toLowerCase().includes("jerk"),
  "Dry Rub": (n) => n.toLowerCase().includes("dry rub"),
};

export default function FlavorPicker({ flavors }: { flavors: Flavor[] }) {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = flavors.filter((f) => {
    const matchesCategory = CATEGORIES[active](f.name);
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section>
      <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Choose Your Flavor</h2>
      <p className="text-neutral-400 text-sm mb-6">20+ flavors. Wet sauces & dry rubs. Mix and match up to 2.</p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search flavors..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:border-red-600 mb-4"
      />

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(CATEGORIES).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors ${
              active === cat
                ? "bg-red-600 text-white"
                : "bg-neutral-800 text-neutral-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Flavor grid */}
      {filtered.length === 0 ? (
        <p className="text-neutral-500 text-sm py-8 text-center">No flavors match your search.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {filtered.map(({ num, name }) => (
            <div
              key={num}
              className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 hover:border-red-800 transition-colors"
            >
              <span className="text-red-500 font-black text-xs w-5 shrink-0">{num}</span>
              <span className="text-neutral-200 text-sm">{name}</span>
            </div>
          ))}
        </div>
      )}
      <p className="text-neutral-600 text-xs mt-4">{filtered.length} of {flavors.length} flavors shown</p>
    </section>
  );
}
