import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-40 overflow-hidden bg-neutral-900">
        {/* Gritty background texture via gradient layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-950/40 via-neutral-900 to-neutral-950" />
        <div className="relative z-10">
          <p className="text-orange-400 text-xs uppercase tracking-[0.3em] mb-4 font-medium">
            Houston Street Food
          </p>
          <h1 className="text-6xl sm:text-8xl font-black tracking-tight mb-4 leading-none">
            SPACE<br />CITY<br />BITES
          </h1>
          <p className="text-lg text-neutral-400 max-w-md mx-auto mb-10">
            Real flavors. No fluff. Houston&apos;s street food done right.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href="/menu"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-full transition-colors uppercase tracking-wider text-sm"
            >
              See the Menu
            </Link>
            <a
              href="https://www.ubereats.com/store/space-city-bites/BEvV1p9CQxucnTUn6EpVHw"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold px-8 py-4 rounded-full transition-colors uppercase tracking-wider text-sm"
            >
              Order on Uber Eats
            </a>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="grid grid-cols-1 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800 border-y border-neutral-800">
        {[
          { label: "Location", value: "3729 W Alabama St, Houston" },
          { label: "Hours", value: "Mon–Fri 11am–10pm" },
          { label: "Weekend", value: "Sat–Sun 10am–11pm" },
          { label: "Phone", value: "(713) 621-3128" },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center py-6 px-4 text-center">
            <span className="text-xs uppercase tracking-widest text-orange-400 mb-1">{label}</span>
            <span className="text-neutral-200 font-medium text-sm">{value}</span>
          </div>
        ))}
      </section>

      {/* About */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Our Story</h2>
        <p className="text-neutral-400 leading-relaxed">
          Space City Bites is Houston street food — bold, unapologetic, and made fresh every day.
          We&apos;re rooted in the flavors of one of the most diverse cities in the world.
          Come pull up at 3729 W Alabama and eat something real.
        </p>
      </section>

      {/* Social CTA */}
      <section className="border-t border-neutral-800 py-16 text-center">
        <p className="text-neutral-400 mb-4 text-sm uppercase tracking-widest">Follow the moves</p>
        <a
          href="https://instagram.com/space_city_bites"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-black text-orange-400 hover:text-orange-300 transition-colors"
        >
          @space_city_bites
        </a>
      </section>
    </div>
  );
}
