import Image from "next/image";

export const metadata = {
  title: "About",
  description: "The story behind Space City Bites — 100% Halal street food born in Houston, TX.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 sm:py-40 overflow-hidden bg-black min-h-[400px]">
        <Image
          src="/Poster1.PNG"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-blue-400 text-xs uppercase tracking-[0.3em] mb-3 font-bold">Space City Bites · Houston, TX</p>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-3 leading-none">Our Story</h1>
          <p className="text-neutral-300 text-sm">Born in Houston. Built for the community.</p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-6 py-16 pb-24 sm:pb-16">

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
    </div>
  );
}
