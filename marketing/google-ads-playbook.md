# Space City Bites — Marketing & Google Ads Playbook

Living reference for the site's marketing setup: conversion tracking, the Google Ads
Search campaign, the Performance Max campaign, Google Business Profile, and reviews.

_Last updated: 2026-07-23_

---

## 1. Current state (at a glance)

| Channel | Status | Notes |
|---|---|---|
| Website | Live | `https://www.spacecitybiteshtx.com` (Vercel, Next.js) |
| Ordering | Clover | `https://wings-87-alabama-street-houston.cloveronline.com` |
| Conversion tracking | Live | Order Now clicks → Google Ads (verified) |
| Search campaign | Launched | "Search – Halal Wings", $10/day, learning |
| Performance Max | Running | "New Deal Every Day", $15.20/day, ~$60/conv (calls) |
| Google Business Profile | Active | Website + socials added; keep growing reviews |
| Analytics | Live | Vercel Analytics + GA4 + Meta/TikTok pixels |

---

## 2. Conversion tracking (DONE)

Order completes on **Clover** (external), so the trackable conversion is the
**"Order Now" click** that sends a customer to Clover.

- **Conversion action:** `Order Now Click` (category: Begin checkout)
- **Google Ads Conversion ID:** `AW-18234106664`
- **Conversion label:** `ZnwzCL7awdUcEKjG2fZD`
- **Vercel env vars** (Production + Preview):
  - `NEXT_PUBLIC_GOOGLE_ADS_ID=AW-18234106664`
  - `NEXT_PUBLIC_GOOGLE_ADS_ORDER_LABEL=ZnwzCL7awdUcEKjG2fZD`
- **Code:** `lib/analytics.ts` (`reportOrderClick`) fires on every Order Now button
  (hero, menu, about, nav, mobile nav, floating bar, deal page). `components/analytics/GoogleAnalytics.tsx`
  loads gtag. CSP in `next.config.ts` allows Google Ads domains.

_These IDs are public (they appear in the browser) — not secrets._

**Verify:** DevTools console `typeof gtag` → `"function"`. Google Ads status flips
"Inactive" → "Recording" a few hours after real ad traffic clicks Order Now.

---

## 3. Search campaign — "Search – Halal Wings"

The primary campaign. High-intent, tightly controlled, lean budget.

### Settings
- **Type:** Search · **Objective:** Sales · **Goal:** Order Now Click (Begin checkout)
- **Bidding:** Maximize Clicks, max CPC **$2.00** (raise to $2.50 if impressions stay ~0)
- **Networks:** Google Search only (Search Partners OFF, Display OFF)
- **Location:** 5 mi radius around 3729 W Alabama St, Houston TX 77027 · Presence only
- **Language:** English · **Budget:** $10/day
- **AI Max:** Final URL expansion OFF, search-term matching = your keywords only
- **Final URL:** `https://www.spacecitybiteshtx.com/menu`

### Keywords (phrase match)
```
"halal wings houston"
"halal chicken wings near me"
"halal wings near me"
"best halal wings houston"
"halal food near me"
"halal restaurant houston"
"halal food houston"
"halal takeout near me"
```

### Headlines (15)
```
Halal Wings in Houston
100% Halal Street Food
50 Wing Flavors
Halal Burgers in Houston
Halal Tacos in Houston
Order Halal Wings Online
Halal Takeout Near You
Fresh Made-to-Order Wings
Buffalo to Mango Habanero
Big Cravings Bigger Bites
Open Late in Houston
Wings, Burgers & Tacos
Halal Food Near Me
Houston's Halal Wing Spot
Halal Restaurant Houston
```

### Descriptions (4)
```
100% halal wings, burgers & tacos made fresh to order. 50 flavors. Order online now.
Houston's favorite halal street food. Pickup or delivery. Big cravings, bigger bites.
50 wing flavors from Buffalo to Mango Habanero. 100% halal. Order for pickup today.
Fresh, made-to-order halal food in Houston. Open late. Order online for fast pickup.
```

### Sitelinks
```
Full Menu     → /menu    → 50 wing flavors & more      → Halal burgers, tacos, fries
Today's Deal  → /deal    → New deal every day          → Save on today's special
Find Us       → /contact → 3729 W Alabama St, Houston   → Open late 7 days a week
Order Online  → Clover   → Pickup or delivery          → 100% halal, made to order
```
_(Re-check these saved — they may have been lost in a rebuild. Add via Assets → Sitelinks.)_

### Callouts
```
100% Halal · 50 Wing Flavors · Open Late · Pickup & Delivery · Made Fresh to Order · Halal Street Food
```

### Negative keywords
```
recipe · recipes · jobs · hiring · grocery · frozen · costco · butcher · halal meat · how to make
```

### Ad schedule (Central Time — matches open hours + 1hr lead-in + late-night)
Set at: Campaign → Audiences, keywords & content → Ad schedule.
```
Mon–Fri     11:00 AM – 12:00 AM
Saturday    12:00 AM – 2:00 AM   (Fri-night spillover)
Saturday    11:00 AM – 12:00 AM
Sunday      12:00 AM – 2:00 AM   (Sat-night spillover)
Sunday      11:00 AM – 9:00 PM
```
Revisit in ~2 weeks using the Day & hour report to daypart on real data.

---

## 4. Performance Max — "New Deal Every Day"

- Budget $15.20/day · Bidding: Maximize Conversions
- Historically optimized for **phone calls** at **~$60.87/conversion** — too expensive.
- Goal changed to **Begin checkout** (Order Now Click), but PMax is a black box
  spreading spend across Display/YouTube.

**Decision timeline:**
1. **Now:** keep running for ad coverage (Search still under review). If $25/day total
   is too much, drop PMax budget to ~$8/day.
2. **~1 week:** compare Cost/conv between Search and PMax in the Campaigns view.
3. **Then:** pause the loser. Likely pause PMax if Search beats $60/order.

---

## 5. Week-1 game plan (Search campaign)

**Golden rule: don't touch it daily.** Let the bid strategy learn ~2 weeks.

- **First 24–48h:** confirm ads are **Eligible** (not Disapproved). Complete advertiser
  verification if prompted. Zeros are normal until ads are approved.
- **Week 1:** watch the **Search terms report** (Audiences, keywords & content → Search
  terms). Add negatives for irrelevant queries. Don't overreact to small numbers.
- **~2 weeks / after ~15+ conversions:** switch bidding Maximize Clicks → Maximize
  Conversions. Review search terms. Compare vs PMax. Consider Phase 2 general keywords.

### Phase 2 keywords (add later, watch cost — will be pricier/lower-intent)
```
"chicken wings near me" · "wings near me" · "late night food houston" · "wing delivery houston" · "best wings houston"
```

---

## 6. Ignore Google's "Recommendations" (mostly)

Google's Recommendations tab is a sales tool. On a lean budget, decline almost all:
- ❌ Maximize conversions / target CPA — no order data yet
- ❌ Add new keywords (their broad suggestions) — off-target
- ❌ Opt into Search Partner Network — lower quality
- ❌ Use Display Expansion — re-adds Display you removed
- ❌ Update Google tags on Shopify — you're not on Shopify (mis-fire)
- ✅ Only act on: sitelinks missing (add manually, don't auto-apply)

**A lower optimization score with a tight campaign beats 100% while bleeding budget.**

---

## 7. Social media links (Instagram / TikTok Stories)

Match the link to the content; prefer site links (measurable) over Clover-direct.

| Story content | Link |
|---|---|
| Today's deal | `/deal` (auto-updates, screenshot-friendly, Order Now → Clover) |
| Menu / flavor showcase | `/menu` |
| Pure "order now" impulse | Clover direct (fewest taps) |
| Permanent bio link | `/menu` (hub) |

**Pro tip — track social traffic with UTM tags** so you can see in Vercel/GA4 how
many visits + Order Now clicks come from each channel:
```
https://www.spacecitybiteshtx.com/deal?utm_source=instagram&utm_medium=story
https://www.spacecitybiteshtx.com/deal?utm_source=tiktok&utm_medium=bio
```

---

## 8. Google Business Profile & reviews

GBP often out-earns paid ads for a local restaurant. Keep it strong.

- ✅ Website added: `https://www.spacecitybiteshtx.com`
- ✅ Socials: IG `@space_city_bites`, TikTok `@spacecitybites`
- ✅ Clover menu link added
- **Address:** 3729 W Alabama St, Unit C, Houston, TX 77027 (keep identical everywhere — NAP consistency)
- **Review link:** `https://g.page/r/CWrsJBfZH7BdEBM/review`
- **To do:** upload 15–20 food photos; print the QR review card for the counter;
  ask happy customers at the moment of delight; respond to every review.
- **Short closures:** use "Special hours" (mark day closed), NOT "Temporarily closed"
  (that suppresses ranking for days).

---

## 9. Key links & IDs

| Item | Value |
|---|---|
| Site | https://www.spacecitybiteshtx.com |
| Clover ordering | https://wings-87-alabama-street-houston.cloveronline.com |
| Google review | https://g.page/r/CWrsJBfZH7BdEBM/review |
| Instagram | https://instagram.com/space_city_bites |
| TikTok | https://www.tiktok.com/@spacecitybites |
| Behold IG feed ID | mwMCJlShiIs6EwtMEKmt |
| Google Ads Conversion ID | AW-18234106664 |
| Google Ads label | ZnwzCL7awdUcEKjG2fZD |
| Phone | (713) 621-3128 |
