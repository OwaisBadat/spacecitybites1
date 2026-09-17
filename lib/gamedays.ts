// Houston Texans 2026 season — game days.
// On these dates the "Game Day 99¢ Wings" special shows in addition to the
// regular daily deal. Dates are the local (Central time) calendar day of each
// game. Add or remove dates here to control when the special runs.
// Format: YYYY-MM-DD (America/Chicago).
export const GAME_DAYS: string[] = [
  "2026-09-20", // Wk2  vs Bengals
  "2026-09-27", // Wk3  at Colts
  "2026-10-04", // Wk4  vs Cowboys
  "2026-10-11", // Wk5  at Titans
  "2026-10-18", // Wk6  at Jaguars (London)
  "2026-10-25", // Wk7  vs Giants
  "2026-11-08", // Wk9  at Chargers
  "2026-11-15", // Wk10 at Browns
  "2026-11-19", // Wk11 vs Colts (Thu)
  "2026-11-29", // Wk12 vs Ravens
  "2026-12-06", // Wk13 at Steelers
  "2026-12-13", // Wk14 at Commanders
  "2026-12-20", // Wk15 vs Jaguars
  "2026-12-24", // Wk16 at Eagles (Thu)
  "2027-01-04", // Wk17 at Packers (Mon)
  "2027-01-10", // Wk18 vs Titans
];

// Today's date as YYYY-MM-DD in Houston (Central) time, regardless of server/viewer TZ.
function houstonToday(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function isGameDay(now: Date = new Date()): boolean {
  return GAME_DAYS.includes(houstonToday(now));
}
