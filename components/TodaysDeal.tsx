"use client";

const deals = [
  { day: "MON", deal: "Half Price Hotdogs", detail: "50% off all day", emoji: "🌭" },
  { day: "TUE", deal: "Taco Tuesday", detail: "3 Tacos for $8 — save $2.50", emoji: "🌮" },
  { day: "WED", deal: "99¢ Wings", detail: "Bone-in or boneless", emoji: "🍗" },
  { day: "THU", deal: "Free 3pc Mozzie", detail: "With any burger purchase", emoji: "🧀" },
  { day: "FRI", deal: "Free Fries", detail: "With any food purchase", emoji: "🍟" },
  { day: "SAT", deal: "Family Meal Deal", detail: "24pc Bone-In + Large Fries + 6pc Mozz Sticks — $49", emoji: "👨‍👩‍👧‍👦" },
  { day: "SUN", deal: "Breakfast Sandwich $5.99", detail: "All day long", emoji: "🥪" },
];

export default function TodaysDeal() {
  const todayIndex = new Date().getDay();
  const dealIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <p className="text-red-500 text-xs uppercase tracking-widest mb-2 text-center">Something delicious. Every day.</p>
      <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10 text-center">Daily Deals</h2>
      <div className="space-y-3">
        {deals.map(({ day, deal, detail, emoji }, i) => {
          const isToday = i === dealIndex;
          return (
            <div
              key={day}
              className={`flex items-center gap-4 rounded-xl px-5 py-4 border transition-all ${
                isToday
                  ? "bg-red-600 border-red-500 shadow-lg shadow-red-900/40 scale-[1.02]"
                  : "bg-neutral-900 border-neutral-800"
              }`}
            >
              <span className={`font-black text-xs w-10 shrink-0 ${isToday ? "text-white" : "text-red-500"}`}>
                {day}
              </span>
              <span className="text-xl shrink-0">{emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="font-black text-white">{deal}</p>
                <p className={`text-sm truncate ${isToday ? "text-red-100" : "text-neutral-400"}`}>{detail}</p>
              </div>
              {isToday && (
                <span className="shrink-0 bg-white text-red-600 text-[10px] font-black uppercase px-2 py-1 rounded-full">
                  Today
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
