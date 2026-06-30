export const metadata = {
  title: "Find Us",
  description: "Visit Space City Bites at 3729 W Alabama St Unit C, Houston TX 77027. Call (713) 621-3128.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black uppercase tracking-tight mb-2">Find Us</h1>
      <p className="text-neutral-400 mb-12">Pull up. We&apos;re ready.</p>

      <div className="grid sm:grid-cols-2 gap-10 mb-12">
        <div>
          <h2 className="text-xs uppercase tracking-widest text-red-500 mb-3">Location</h2>
          <p className="text-neutral-200">3729 W Alabama St, Unit C</p>
          <p className="text-neutral-200">Houston, TX 77027</p>
          <a
            href="https://maps.google.com/?q=3729+W+Alabama+St+Unit+C+Houston+TX+77027"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm text-red-400 hover:text-red-300 transition-colors"
          >
            Get Directions →
          </a>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-widest text-red-500 mb-3">Hours</h2>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-400">Mon – Thu</span>
              <span className="text-neutral-200 font-medium">12pm – 12am</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-400">Fri – Sat</span>
              <span className="text-neutral-200 font-medium">12pm – 2am</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-400">Sunday</span>
              <span className="text-neutral-200 font-medium">12pm – 9pm</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-widest text-red-500 mb-3">Phone</h2>
          <a href="tel:+17136213128" className="text-neutral-200 hover:text-white transition-colors text-lg font-bold">
            (713) 621-3128
          </a>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-widest text-red-500 mb-3">Follow Us</h2>
          <a
            href="https://instagram.com/space_city_bites"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-neutral-200 hover:text-white transition-colors"
          >
            Instagram: @space_city_bites
          </a>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden h-72 border border-neutral-800">
        <iframe
          title="Space City Bites location"
          src="https://maps.google.com/maps?q=3729+W+Alabama+St+Unit+C,Houston,TX+77027&output=embed"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
