import Link from "next/link";

const dailyDeals = [
  { day: "MON", deal: "Half Price Hotdogs", detail: "50% off all day" },
  { day: "TUE", deal: "Taco Tuesday", detail: "3 Tacos for $8 — save $2.50" },
  { day: "WED", deal: "99¢ Wings", detail: "Bone-in or boneless" },
  { day: "THU", deal: "Free 3pc Mozzie", detail: "With any burger purchase" },
  { day: "FRI", deal: "Free Fries", detail: "With any food purchase" },
  { day: "SAT", deal: "Family Meal Deal", detail: "24pc Bone-In + Large Fries + 6pc Mozz Sticks — $49" },
  { day: "SUN", deal: "Breakfast Sandwich $5.99", detail: "All day long" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-40 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/60 via-black to-black" />
        <div className="relative z-10">
          <p className="text-red-500 text-xs uppercase tracking-[0.3em] mb-4 font-bold">
            ★ 100% Halal Street Food · Houston, TX ★
          </p>
          <h1 className="text-6xl sm:text-8xl font-black tracking-tight mb-2 leading-none">
            <span className="text-white">SPACE CITY</span><br />
            <span className="text-red-500">BITES</span>
          </h1>
          <p className="text-xl text-white font-bold mt-4 mb-2">
            Big Cravings. Bigger Bites.
          </p>
          <p className="text-neutral-400 mb-10">100% Halal. 100% Flavor.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href="/menu"
              className="bg-red-600 hover:bg-red-500 text-white font-black px-8 py-4 rounded-full transition-colors uppercase tracking-wider text-sm"
            >
              See the Menu
            </Link>
            <a
              href="https://www.ubereats.com/store/space-city-bites/BEvV1p9CQxucnTUn6EpVHw"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-black px-8 py-4 rounded-full transition-colors uppercase tracking-wider text-sm"
            >
              Order on Uber Eats
            </a>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-neutral-800 border-y border-neutral-800 bg-neutral-950">
        {[
          { label: "Location", value: "3729 W Alabama St, Unit C" },
          { label: "Mon – Thu", value: "12pm – 12am" },
          { label: "Fri – Sat", value: "12pm – 2am" },
          { label: "Sunday", value: "12pm – 9pm" },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center py-5 px-3 text-center">
            <span className="text-[10px] uppercase tracking-widest text-red-500 mb-1">{label}</span>
            <span className="text-neutral-200 font-semibold text-sm">{value}</span>
          </div>
        ))}
      </section>

      {/* Daily Deals */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-red-500 text-xs uppercase tracking-widest mb-2 text-center">Something delicious. Every day.</p>
        <h2 className="text-4xl font-black uppercase tracking-tight mb-10 text-center">Daily Deals</h2>
        <div className="space-y-3">
          {dailyDeals.map(({ day, deal, detail }) => (
            <div key={day} className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-xl px-5 py-4">
              <span className="text-red-500 font-black text-sm w-10 shrink-0">{day}</span>
              <div>
                <p className="font-bold text-white">{deal}</p>
                <p className="text-sm text-neutral-400">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Halal badge + CTA */}
      <section className="border-t border-neutral-800 bg-neutral-950 py-16 text-center px-6">
        <div className="flex justify-center gap-8 mb-10 flex-wrap">
          {["100% Halal", "Bold Flavors", "Made Fresh", "Out of This World"].map((badge) => (
            <div key={badge} className="text-center">
              <span className="text-xs uppercase tracking-widest text-red-500 font-bold">{badge}</span>
            </div>
          ))}
        </div>
        <a
          href="https://instagram.com/space_city_bites"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-black text-white hover:text-red-400 transition-colors"
        >
          @space_city_bites
        </a>
        <p className="text-neutral-500 text-sm mt-2">Follow us on Instagram &amp; TikTok</p>
      </section>
    </div>
  );
}
