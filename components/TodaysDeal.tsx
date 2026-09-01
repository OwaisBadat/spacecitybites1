"use client";

const deals = [
  { day: "MON", deal: "$4.99 Hot Dog", detail: "Loaded your way — all day", emoji: "🌭" },
  { day: "TUE", deal: "99¢ Tacos", detail: "Beef skirt steak street tacos", emoji: "🌮" },
  { day: "WED", deal: "99¢ Wings", detail: "Bone-in or boneless", emoji: "🍗" },
  { day: "THU", deal: "$4.99 Chicken Sandwich", detail: "The Cosmic Crispy — fried thigh, spicy mayo", emoji: "🐔" },
  { day: "FRI", deal: "$4.99 Classic Burger", detail: "The Classic Smash — all day", emoji: "🍔" },
  { day: "SAT", deal: "Free Large Fry", detail: "With any 24pc wings order", emoji: "🍟" },
  { day: "SUN", deal: "$4.99 Breakfast Sandwich", detail: "Egg, beef bacon & cheese — all day", emoji: "🥪" },
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
