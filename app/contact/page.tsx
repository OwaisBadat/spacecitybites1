export const metadata = {
  title: "Find Us",
  description: "Visit Space City Bites at 3729 W Alabama St, Houston TX. Street food done right.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Find Us</h1>
      <p className="text-neutral-400 mb-12">Pull up. We&apos;re ready.</p>

      <div className="grid sm:grid-cols-2 gap-10 mb-12">
        <div>
          <h2 className="text-xs uppercase tracking-widest text-orange-400 mb-3">Location</h2>
          <p className="text-neutral-200">3729 W Alabama St Unit C</p>
          <p className="text-neutral-200">Houston, TX 77027</p>
          <a
            href="https://maps.google.com/?q=3729+W+Alabama+St+Unit+C+Houston+TX+77027"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm text-orange-400 hover:text-orange-300 transition-colors"
          >
            Get Directions →
          </a>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-widest text-orange-400 mb-3">Hours</h2>
          <p className="text-neutral-200">Monday – Friday: 11am – 10pm</p>
          <p className="text-neutral-200">Saturday – Sunday: 10am – 11pm</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-widest text-orange-400 mb-3">Phone</h2>
          <a href="tel:+17136213128" className="text-neutral-200 hover:text-white transition-colors">
            (713) 621-3128
          </a>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-widest text-orange-400 mb-3">Follow Us</h2>
          <a
            href="https://instagram.com/space_city_bites"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-200 hover:text-white transition-colors"
          >
            @space_city_bites
          </a>
        </div>
      </div>

      {/* Google Maps embed */}
      <div className="rounded-xl overflow-hidden h-72 border border-neutral-800">
        <iframe
          title="Space City Bites location"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-placeholder&q=3729+W+Alabama+St+Unit+C,Houston,TX+77027"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="text-xs text-neutral-600 mt-2">
        * Add a Google Maps API key in your env vars to enable the live map.
      </p>
    </div>
  );
}
