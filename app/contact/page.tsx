export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Find Us</h1>
      <p className="text-neutral-400 mb-12">We&apos;d love to see you in person.</p>

      <div className="grid sm:grid-cols-2 gap-10 mb-12">
        <div>
          <h2 className="text-xs uppercase tracking-widest text-orange-400 mb-3">Location</h2>
          <p className="text-neutral-200">123 Main Street</p>
          <p className="text-neutral-200">Houston, TX 77001</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-widest text-orange-400 mb-3">Hours</h2>
          <p className="text-neutral-200">Monday – Friday: 11am – 10pm</p>
          <p className="text-neutral-200">Saturday – Sunday: 10am – 11pm</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-widest text-orange-400 mb-3">Phone</h2>
          <a href="tel:+17135550000" className="text-neutral-200 hover:text-white transition-colors">
            (713) 555-0000
          </a>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-widest text-orange-400 mb-3">Email</h2>
          <a href="mailto:hello@spacecitybites.com" className="text-neutral-200 hover:text-white transition-colors">
            hello@spacecitybites.com
          </a>
        </div>
      </div>

      <div className="rounded-xl bg-neutral-800 h-64 flex items-center justify-center text-neutral-500 text-sm">
        Map coming soon
      </div>
    </div>
  );
}
