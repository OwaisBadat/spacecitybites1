// 99¢ wings — ALL AUGUST special (every day, Aug 1–31 2026).
// Ends at close of business Sun/Mon Aug 31 → expires midnight Central Sept 1.
// Midnight CDT (UTC-5) = 05:00 UTC.
export const PROMO_END = new Date("2026-09-01T05:00:00Z");

export const PROMO = {
  emoji: "🍗",
  name: "99¢ Wings",
  detail: "All month long — bone-in or boneless",
  sub: "Every day in August · ends 8/31",
  badge: "August Special",
};

export function isPromoActive(now: number = Date.now()): boolean {
  return now < PROMO_END.getTime();
}
