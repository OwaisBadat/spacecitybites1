export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Space City Bites — halal, hours, delivery, ordering, and more.",
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
    a: "50 flavors — wet sauces and dry rubs. From classic Buffalo to Mango Habanero to Caribbean Jerk. You can pick up to 2 flavors per order.",
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
    q: "What is the Saturday Family Meal Deal?",
    a: "Every Saturday: 24pc Bone-In Wings + Large Fries + 6pc Mozzarella Sticks for just $49. Perfect for feeding the whole crew.",
  },
  {
    q: "Do you have daily specials?",
    a: "Every day has a deal — half price hotdogs on Monday, Taco Tuesday, 99¢ wings on Wednesday, free fries on Friday, and more. Check our homepage for today's deal.",
  },
  {
    q: "Is there parking?",
    a: "Yes, there is parking available at our location on W Alabama St.",
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 pb-24 sm:pb-16">
      <h1 className="text-4xl font-black uppercase tracking-tight mb-2">FAQ</h1>
      <p className="text-neutral-400 mb-12">Everything you need to know.</p>

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
  );
}
