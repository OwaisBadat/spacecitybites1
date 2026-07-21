import Image from "next/image";
import CateringForm from "@/components/CateringForm";

export const metadata = {
  title: "Catering",
  description:
    "Cater your next event with Space City Bites — 100% Halal wings, burgers, and street food for parties, offices, and celebrations in Houston.",
  // Hidden from search until we're ready to launch this page publicly.
  robots: { index: false, follow: false },
};

export default function CateringPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 sm:py-40 overflow-hidden bg-black min-h-[400px]">
        <Image
          src="/Catering Card.PNG"
          alt=""
          fill
          className="object-cover object-center opacity-50"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-blue-400 text-xs uppercase tracking-[0.3em] mb-3 font-bold">100% Halal · Houston, TX</p>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-3 leading-none">Catering</h1>
          <p className="text-neutral-300 text-sm">Big cravings for your big events. Let&apos;s feed the whole crew.</p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-6 py-16 pb-24 sm:pb-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-3">Request a Quote</h2>
          <p className="text-neutral-400 text-sm max-w-md mx-auto">
            Parties, offices, weddings, game days — we cater it all. Tell us about your event and we&apos;ll get back
            to you within 24 hours.
          </p>
        </div>

        <CateringForm />
      </div>
    </div>
  );
}
