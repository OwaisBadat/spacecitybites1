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
    <div className="max-w-3xl mx-auto">
      <p className="text-red-200 text-xs uppercase tracking-widest mb-2 text-center">Something delicious. Every day.</p>
      <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10 text-center text-white">Daily Deals</h2>
      <div className="space-y-3">
        {deals.map(({ day, deal, detail, emoji }, i) => {
          const isToday = i === dealIndex;
          return (
            <div
              key={day}
              className={`flex items-center gap-4 rounded-xl px-5 py-4 border transition-all ${
                isToday
                  ? "bg-white border-white shadow-xl scale-[1.02]"
                  : "bg-red-800/60 border-red-600/40 hover:bg-red-800/80"
              }`}
            >
              <span className={`font-black text-xs w-10 shrink-0 ${isToday ? "text-red-600" : "text-red-200"}`}>
                {day}
              </span>
              <span className="text-xl shrink-0">{emoji}</span>
              <div className="flex-1 min-w-0">
                <p className={`font-black ${isToday ? "text-red-700" : "text-white"}`}>{deal}</p>
                <p className={`text-sm truncate ${isToday ? "text-red-500" : "text-red-200"}`}>{detail}</p>
              </div>
              {isToday && (
                <span className="shrink-0 bg-red-600 text-white text-[10px] font-black uppercase px-2 py-1 rounded-full">
                  Today
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
