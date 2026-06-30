export const metadata = {
  title: "About",
  description: "The story behind Space City Bites — 100% Halal street food born in Houston, TX.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 pb-24 sm:pb-16">
      <h1 className="text-4xl font-black uppercase tracking-tight mb-2">Our Story</h1>
      <p className="text-red-500 text-xs uppercase tracking-widest mb-12">Space City Bites · Houston, TX</p>

      <div className="space-y-6 text-neutral-300 leading-relaxed">
        <p>
          Space City Bites was born in Houston — one of the most diverse, food-obsessed cities in the world.
          We started with a simple mission: serve bold, craveable street food that&apos;s 100% Halal,
          made fresh every day, and priced so anyone can pull up and eat well.
        </p>
        <p>
          Houston deserved a wing spot with real flavor — not just a handful of sauces, but a full lineup.
          We built a menu of <strong className="text-white">50 flavors</strong>, from classic Buffalo to Garlic
          Mango Habanero to Caribbean Jerk, because why limit yourself?
        </p>
        <p>
          Everything we serve is <strong className="text-white">100% Halal certified</strong>. That&apos;s not
          a marketing line — it&apos;s a commitment to our community and our values.
        </p>
        <p>
          We&apos;re at <strong className="text-white">3729 W Alabama St, Unit C</strong> — come through,
          call ahead, or order online. However you roll, we&apos;re ready.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4">
        {[
          { label: "100%", sub: "Halal Certified" },
          { label: "50", sub: "Wing Flavors" },
          { label: "7", sub: "Daily Deals" },
          { label: "Late", sub: "Open Until 2am Fri & Sat" },
        ].map(({ label, sub }) => (
          <div key={sub} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 text-center">
            <p className="text-red-500 font-black text-2xl">{label}</p>
            <p className="text-neutral-400 text-xs mt-1">{sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://www.ubereats.com/store/space-city-bites/BEvV1p9CQxucnTUn6EpVHw"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full transition-colors"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}
