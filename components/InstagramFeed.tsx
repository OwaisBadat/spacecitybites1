"use client";

export default function InstagramFeed() {
  return (
    <section className="bg-gradient-to-b from-blue-950 to-black py-16 px-4 sm:px-6 text-center">
      <p className="text-blue-400 text-xs uppercase tracking-widest mb-2">Follow the vibe</p>
      <a
        href="https://instagram.com/space_city_bites"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl sm:text-3xl font-black text-white hover:text-blue-400 transition-colors"
      >
        @space_city_bites
      </a>
      <p className="text-blue-300/50 text-sm mt-2 mb-8">Instagram · TikTok</p>

      <div className="max-w-4xl mx-auto">
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div
          className="elfsight-app-placeholder bg-blue-950/50 border border-blue-900/40 rounded-2xl p-10 text-blue-300/50 text-sm"
          data-elfsight-app-lazy
        >
          <p className="mb-2 text-lg">📸</p>
          <p>Instagram feed coming soon.</p>
          <p className="text-xs mt-1">Connect at <span className="text-blue-400">elfsight.com</span> to embed your latest posts.</p>
        </div>
      </div>
    </section>
  );
}
