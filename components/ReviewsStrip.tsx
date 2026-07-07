const reviews = [
  { text: "Best wings in Houston, period. 50 flavors and every one slaps. I've been back 4 times this month alone.", author: "Ahmad K." },
  { text: "Halal, fresh, and open late. This spot is everything. The buffalo wings are unreal and the staff always hooks it up.", author: "Mariam S." },
  { text: "Street tacos for $2.50?? Unreal. I come every week. Best kept secret in Houston — not for long though!", author: "Carlos R." },
];

export default function ReviewsStrip() {
  return (
    <section className="bg-neutral-950 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black uppercase text-red-500 mb-10">Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {reviews.map(({ text, author }) => (
            <div
              key={author}
              className="border border-neutral-700 rounded-2xl p-8 flex flex-col items-center text-center gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1 text-red-500 text-2xl">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>

              {/* Review text */}
              <p className="text-white text-base leading-relaxed flex-1">
                &ldquo;{text}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-16 border-t border-neutral-600" />

              {/* Author */}
              <div>
                <p className="text-white font-bold text-sm">{author}</p>
                <p className="text-neutral-400 text-xs mt-0.5">Google Reviews.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://g.page/r/CWrsJBfZH7BdEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-yellow-500 hover:text-yellow-400 transition-colors font-semibold"
          >
            ⭐ Leave us a Google Review →
          </a>
        </div>
      </div>
    </section>
  );
}
