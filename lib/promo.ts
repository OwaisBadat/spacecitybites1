// Weekend special: 99¢ wings, Fri 7/31 – Sun 8/2.
// Ends exactly at Sunday 8/2, 9:00pm Central (close of business).
// 9pm CDT (UTC-5) = 02:00 UTC the next day.
export const PROMO_END = new Date("2026-08-03T02:00:00Z");

export const PROMO = {
  emoji: "🍗",
  name: "99¢ Wings",
  detail: "All weekend long — bone-in or boneless",
  sub: "Fri–Sun only · ends Sunday 8/2",
  badge: "Weekend Special",
};

export function isPromoActive(now: number = Date.now()): boolean {
  return now < PROMO_END.getTime();
}
