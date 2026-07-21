import Link from "next/link";
import Image from "next/image";
import TodaysDeal from "@/components/TodaysDeal";
import ReviewsStrip from "@/components/ReviewsStrip";
import InstagramFeed from "@/components/InstagramFeed";
import OrderButton from "@/components/OrderButton";

const featured = [
  { name: "12 Bone-In Wings", desc: "Pick 2 flavors from 50 options", price: "$18.99", tag: "Best Seller", img: "/Iceman Wings.PNG" },
  { name: "Iceman Burger", desc: "Two hot beef patties, cheese, beef bacon, egg", price: "$15.99", tag: "Fan Fav", img: "/Iceman Burger.PNG" },
  { name: "Iceman Hot Dog", desc: "Marinated beef hot dog loaded your way", price: "$9.99", tag: "Must Try", img: "/Iceman HotDog.PNG" },
  { name: "Biscoff Pudding", desc: "Decadent, creamy, luscious", price: "$3.97", tag: "Popular", img: "/Biscoff Pudding.jpg" },
];

export default function Home() {
  return (
    <div className="pb-24 sm:pb-0">

      {/* ── SECTION 1: HERO — Iceman Wings bg ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 sm:py-48 overflow-hidden bg-black min-h-[600px]">
        <Image
          src="/Iceman Wings.PNG"
          alt="Space City Bites signature wings"
          fill
          className="object-cover object-center opacity-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-red-950/30" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-blue-400 text-xs uppercase tracking-[0.3em] mb-4 font-bold">
            ★ 100% Halal · Houston, TX ★
          </p>
          <h1 className="text-5xl sm:text-8xl font-black tracking-tight mb-3 leading-none">
            <span className="text-white">SPACE CITY</span><br />
            <span className="text-red-500">BITES</span>
          </h1>
          <p className="text-lg sm:text-xl text-white font-bold mt-4 mb-1">Big Cravings. Bigger Bites.</p>
          <p className="text-blue-200/70 mb-8 text-sm">50 Wing Flavors · Halal Street Food · Open Late</p>
          <div className="flex gap-3 flex-wrap justify-center">
            <OrderButton
              location="homepage_hero"
              className="bg-red-600 hover:bg-red-500 text-white font-black px-8 py-4 rounded-full transition-colors uppercase tracking-wider text-sm shadow-lg shadow-red-900/40"
            >
              Order Now
            </OrderButton>
            <Link
              href="/menu"
              className="border-2 border-blue-400/50 hover:border-blue-400 text-white font-black px-8 py-4 rounded-full transition-colors uppercase tracking-wider text-sm"
            >
              See Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: INFO STRIP — solid blue-900 ── */}
      <section className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-blue-800/60 border-y border-blue-800/60 bg-blue-900">
        {[
          { label: "Location", value: "3729 W Alabama St, Unit C" },
          { label: "Mon – Thu", value: "12pm – 12am" },
          { label: "Fri – Sat", value: "12pm – 2am" },
          { label: "Sunday", value: "12pm – 9pm" },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center py-5 px-3 text-center">
            <span className="text-[10px] uppercase tracking-widest text-blue-400 mb-1">{label}</span>
            <span className="text-white font-semibold text-xs sm:text-sm">{value}</span>
          </div>
        ))}
      </section>

      {/* ── SECTION 3: TODAY'S DEAL — bold red block ── */}
      <section className="bg-red-600 py-16 px-4 sm:px-6">
        <TodaysDeal />
      </section>

      {/* ── SECTION 4: FAN FAVORITES — Poster1 logo art as texture ── */}
      <section className="relative py-16 px-4 sm:px-6 overflow-hidden bg-neutral-900">
        <Image
          src="/Poster1.PNG"
          alt=""
          fill
          className="object-cover object-center opacity-[0.12]"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-blue-400 text-xs uppercase tracking-widest mb-2 text-center">Most Ordered</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10 text-center">Fan Favorites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featured.map(({ name, desc, price, tag, img }) => (
              <div key={name} className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden hover:border-blue-800 transition-colors backdrop-blur-sm">
                {img && (
                  <div className="relative h-48 w-full">
                    <Image src={img} alt={name} fill className="object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
                  </div>
                )}
                <div className="p-5 flex justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full mb-2 inline-block">{tag}</span>
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
        </div>
      </section>

      {/* ── SECTION 5: REVIEWS — Iceman HotDog blurred bg ── */}
      <ReviewsStrip />

      {/* ── SECTION 6: LOYALTY — Iceman Burger full-bleed bg ── */}
      <section className="relative py-24 px-4 sm:px-6 text-center overflow-hidden">
        <Image
          src="/Iceman Burger.PNG"
          alt=""
          fill
          className="object-cover object-center opacity-65"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="relative z-10 max-w-lg mx-auto">
          <p className="text-blue-400 text-xs uppercase tracking-widest mb-2">Coming Soon</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4 text-white">SCB Rewards</h2>
          <p className="text-neutral-300 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Every bite earns points. Stack them up for free wings, deals, and exclusive drops. Loyalty program launching soon — follow us to be first.
          </p>
          <a
            href="https://instagram.com/space_city_bites"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-wider px-8 py-4 rounded-full transition-colors text-sm shadow-lg shadow-blue-900/40"
          >
            Follow for Updates
          </a>
        </div>
      </section>

      {/* ── SECTION 7: INSTAGRAM — blue-950 → black bookend ── */}
      <InstagramFeed />

    </div>
  );
}
