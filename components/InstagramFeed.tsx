"use client";

export default function InstagramFeed() {
  return (
    <section className="border-t border-neutral-800 py-16 px-4 sm:px-6 text-center">
      <p className="text-red-500 text-xs uppercase tracking-widest mb-2">Follow the vibe</p>
      <a
        href="https://instagram.com/space_city_bites"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl sm:text-3xl font-black text-white hover:text-red-400 transition-colors"
      >
        @space_city_bites
      </a>
      <p className="text-neutral-500 text-sm mt-2 mb-8">Instagram · TikTok</p>

      {/* Elfsight Instagram widget — free tier, replace APP_ID once configured at elfsight.com */}
      <div className="max-w-4xl mx-auto">
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div
          className="elfsight-app-placeholder bg-neutral-900 border border-neutral-800 rounded-2xl p-10 text-neutral-500 text-sm"
          data-elfsight-app-lazy
        >
          <p className="mb-2 text-lg">📸</p>
          <p>Instagram feed coming soon.</p>
          <p className="text-xs mt-1">Connect at <span className="text-red-400">elfsight.com</span> to embed your latest posts.</p>
        </div>
      </div>
    </section>
  );
}
