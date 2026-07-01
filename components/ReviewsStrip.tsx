import Image from "next/image";

const reviews = [
  { text: "Best wings in Houston, period. 50 flavors and every one slaps.", author: "Ahmad K.", stars: 5 },
  { text: "Halal, fresh, and open late. This spot is everything.", author: "Mariam S.", stars: 5 },
  { text: "Street tacos for $2.50?? Unreal. I come every week.", author: "Carlos R.", stars: 5 },
  { text: "The Biscoff pudding alone is worth the trip. Incredible spot.", author: "Fatima A.", stars: 5 },
  { text: "Family meal deal on Saturday is insane value. Fed the whole crew for $49.", author: "James T.", stars: 5 },
];

export default function ReviewsStrip() {
  return (
    <section className="relative py-16 px-4 sm:px-6 overflow-hidden">
      <Image
        src="/Iceman HotDog.PNG"
        alt=""
        fill
        className="object-cover object-center opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-neutral-950/90 to-black/80" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-yellow-400 text-lg">★★★★★</span>
          <span className="text-white font-black text-xl">4.8</span>
          <span className="text-neutral-400 text-sm">on Google</span>
        </div>
        <p className="text-red-500 text-xs uppercase tracking-widest text-center mb-10">What Customers Are Saying</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {reviews.slice(0, 3).map(({ text, author }) => (
            <div key={author} className="bg-black/60 border border-neutral-700 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-yellow-400 text-sm mb-3">★★★★★</p>
              <p className="text-neutral-200 text-sm leading-relaxed mb-3">&ldquo;{text}&rdquo;</p>
              <p className="text-neutral-400 text-xs font-bold">— {author}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a
            href="https://maps.google.com/?q=Space+City+Bites+Houston"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-400 hover:text-white transition-colors"
          >
            Leave us a review on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
