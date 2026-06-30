import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4">
          Space City Bites
        </h1>
        <p className="text-xl text-neutral-400 max-w-xl mb-8">
          Bold flavors born in Houston. Come hungry, leave happy.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/menu"
            className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            View Menu
          </Link>
          <Link
            href="/contact"
            className="border border-neutral-600 hover:border-neutral-400 text-neutral-300 font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Find Us
          </Link>
        </div>
      </section>

      {/* Info strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800 border-y border-neutral-800">
        {[
          { label: "Hours", value: "Mon–Sun · 11am – 10pm" },
          { label: "Location", value: "Houston, TX" },
          { label: "Order", value: "Coming soon" },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center py-8 px-4 text-center">
            <span className="text-xs uppercase tracking-widest text-orange-400 mb-1">{label}</span>
            <span className="text-neutral-200 font-medium">{value}</span>
          </div>
        ))}
      </section>

      {/* About blurb */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-neutral-400 leading-relaxed">
          Space City Bites started with a simple idea: serve the food we love to the city we love.
          Houston is one of the most diverse cities in the world, and our menu reflects that —
          big, bold, and always made fresh.
        </p>
      </section>
    </div>
  );
}
