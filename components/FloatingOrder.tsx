"use client";

export default function FloatingOrder() {
  return (
    <div className="sm:hidden fixed bottom-4 left-0 right-0 z-50 flex gap-2 px-4">
      <a
        href="tel:+17136213128"
        className="flex-1 bg-neutral-800 text-white text-center font-black uppercase tracking-wider py-4 rounded-full text-sm shadow-xl"
      >
        📞 Call
      </a>
      <a
        href="https://www.ubereats.com/store/space-city-bites/BEvV1p9CQxucnTUn6EpVHw"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[2] bg-red-600 text-white text-center font-black uppercase tracking-wider py-4 rounded-full text-sm shadow-xl shadow-red-900/40"
      >
        🛒 Order Now
      </a>
    </div>
  );
}
