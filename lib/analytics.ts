import { track } from "@vercel/analytics";

const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID; // e.g. "AW-123456789"
const ORDER_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_ORDER_LABEL; // conversion label

type Gtag = (command: string, action: string, params?: Record<string, unknown>) => void;

/**
 * Report an "Order Now" click. Fires:
 *  - Vercel Analytics custom event (always)
 *  - Google Ads conversion (only when NEXT_PUBLIC_GOOGLE_ADS_ID and
 *    NEXT_PUBLIC_GOOGLE_ADS_ORDER_LABEL are set — otherwise a no-op)
 *
 * The order itself completes on Clover (an external site), so the click to
 * Clover is our conversion signal.
 */
export function reportOrderClick(location: string) {
  track("order_click", { location });

  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (gtag && ADS_ID && ORDER_LABEL) {
    gtag("event", "conversion", { send_to: `${ADS_ID}/${ORDER_LABEL}` });
  }
}
