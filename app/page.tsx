import Link from "next/link";
import Image from "next/image";
import TodaysDeal from "@/components/TodaysDeal";
import ReviewsStrip from "@/components/ReviewsStrip";
import InstagramFeed from "@/components/InstagramFeed";

const featured = [
  { name: "12 Bone-In Wings", desc: "Pick 2 flavors from 50 options", price: "$24.70", tag: "Best Seller", img: "/Iceman Wings.PNG" },
  { name: "Iceman Burger", desc: "Two hot beef patties, cheese, beef bacon, egg", price: "$4.99", tag: "Fan Fav", img: "/Iceman Burger.PNG" },
  { name: "Iceman Hot Dog", desc: "Marinated beef hot dog loaded your way", price: "$9.99", tag: "Must Try", img: "/Iceman HotDog.PNG" },
  { name: "Biscoff Pudding", desc: "Decadent, creamy, luscious", price: "$3.97", tag: "Popular", img: null },
];

export default function Home() {
  return (
    <div className="pb-24 sm:pb-0">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 sm:py-48 overflow-hidden bg-black min-h-[600px]">
        <Image
          src="/Iceman Wings.PNG"
          alt="Space City Bites signature wings"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-red-500 text-xs uppercase tracking-[0.3em] mb-4 font-bold">
            ★ 100% Halal · Houston, TX ★
          </p>
          <h1 className="text-5xl sm:text-8xl font-black tracking-tight mb-3 leading-none">
            <span className="text-white">SPACE CITY</span><br />
            <span className="text-red-500">BITES</span>
          </h1>
          <p className="text-lg sm:text-xl text-white font-bold mt-4 mb-1">Big Cravings. Bigger Bites.</p>
          <p className="text-neutral-400 mb-8 text-sm">50 Wing Flavors · Halal Street Food · Open Late</p>
          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href="https://www.ubereats.com/store/space-city-bites/BEvV1p9CQxucnTUn6EpVHw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-500 text-white font-black px-8 py-4 rounded-full transition-colors uppercase tracking-wider text-sm shadow-lg shadow-red-900/40"
            >
              Order on Uber Eats
            </a>
            <Link
              href="/menu"
              className="border-2 border-white/20 hover:border-white/50 text-white font-black px-8 py-4 rounded-full transition-colors uppercase tracking-wider text-sm"
            >
              See Menu
            </Link>
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
          <div key={label} className="flex flex-col items-center py-4 px-3 text-center">
            <span className="text-[10px] uppercase tracking-widest text-red-500 mb-1">{label}</span>
            <span className="text-neutral-200 font-semibold text-xs sm:text-sm">{value}</span>
          </div>
        ))}
      </section>

      {/* Today's Deal — dynamic */}
      <TodaysDeal />

      {/* Featured Items */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <p className="text-red-500 text-xs uppercase tracking-widest mb-2 text-center">Most Ordered</p>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10 text-center">Fan Favorites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featured.map(({ name, desc, price, tag, img }) => (
            <div key={name} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-red-800 transition-colors">
              {img && (
                <div className="relative h-48 w-full">
                  <Image src={img} alt={name} fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
                </div>
              )}
              <div className="p-5 flex justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full mb-2 inline-block">{tag}</span>
                  <p className="font-black text-white text-lg leading-tight">{name}</p>
                  <p className="text-neutral-400 text-sm mt-1">{desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-red-400 font-black text-lg">{price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/menu"
            className="inline-block border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-black uppercase tracking-wider px-8 py-3 rounded-full transition-colors text-sm"
          >
            Full Menu →
          </Link>
        </div>
      </section>

      {/* Google Reviews strip */}
      <ReviewsStrip />

      {/* Loyalty teaser */}
      <section className="border-t border-neutral-800 bg-neutral-950 py-16 px-4 sm:px-6 text-center">
        <p className="text-red-500 text-xs uppercase tracking-widest mb-2">Coming Soon</p>
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3">SCB Rewards</h2>
        <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
          Every bite earns points. Stack them up for free wings, deals, and exclusive drops. Loyalty program launching soon — follow us to be first.
        </p>
        <a
          href="https://instagram.com/space_city_bites"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-black uppercase tracking-wider px-6 py-3 rounded-full transition-colors text-sm"
        >
          Follow for Updates
        </a>
      </section>

      {/* Instagram feed */}
      <InstagramFeed />
    </div>
  );
}
