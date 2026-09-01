import Image from "next/image";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Space City Bites — halal, hours, delivery, ordering, and more.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "Is Space City Bites 100% Halal?",
    a: "Yes. Every item on our menu is 100% Halal certified. We take this seriously — no exceptions.",
  },
  {
    q: "Do you offer delivery?",
    a: "Yes! You can order delivery through Uber Eats. We also accept call-ahead and walk-in orders.",
  },
  {
    q: "What are your hours?",
    a: "Monday–Thursday: 12pm–12am · Friday–Saturday: 12pm–2am · Sunday: 12pm–9pm.",
  },
  {
    q: "How many wing flavors do you have?",
    a: "20+ flavors — wet sauces and dry rubs. From classic Buffalo to Mango Habanero to Caribbean Jerk. You can pick up to 2 flavors per order.",
  },
  {
    q: "Where are you located?",
    a: "3729 W Alabama St, Unit C, Houston, TX 77027.",
  },
  {
    q: "Can I call ahead to order?",
    a: "Absolutely. Call us at (713) 621-3128 and we'll have your order ready when you arrive.",
  },
  {
    q: "Do you have vegetarian options?",
    a: "We have sides like French Fries, Onion Rings, and Mozzarella Sticks. Our menu is primarily meat-based — call us if you have specific dietary needs.",
  },
  {
    q: "What is the Saturday wings deal?",
    a: "Every Saturday, order 24 wings and get a Large Fry free. Perfect for feeding the whole crew.",
  },
  {
    q: "Do you have daily specials?",
    a: "Every day has a deal — $4.99 hot dogs on Monday, 99¢ Tacos on Tuesday, 99¢ wings on Wednesday, $4.99 chicken sandwich on Thursday, $4.99 classic burger on Friday, a free large fry with 24 wings on Saturday, and a $4.99 breakfast sandwich on Sunday. Check our homepage for today's deal.",
  },
  {
    q: "Is there parking?",
    a: "Yes, there is parking available at our location on W Alabama St.",
  },
];

export default function FAQPage() {
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
          <p className="text-blue-400 text-xs uppercase tracking-[0.3em] mb-3 font-bold">Got Questions?</p>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-3 leading-none">FAQ</h1>
          <p className="text-neutral-300 text-sm">Everything you need to know.</p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-6 py-16 pb-24 sm:pb-16">

      <div className="space-y-6">
        {faqs.map(({ q, a }) => (
          <div key={q} className="border-b border-neutral-800 pb-6">
            <h2 className="text-white font-bold mb-2">{q}</h2>
            <p className="text-neutral-400 text-sm leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-center">
        <p className="text-neutral-300 font-bold mb-1">Still have a question?</p>
        <p className="text-neutral-400 text-sm mb-4">Call us directly — we&apos;re happy to help.</p>
        <a
          href="tel:+17136213128"
          className="inline-block bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-wider px-6 py-3 rounded-full transition-colors"
        >
          (713) 621-3128
        </a>
      </div>
    </div>
    </div>
  );
}
