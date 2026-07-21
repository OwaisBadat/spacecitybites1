import { NextResponse } from "next/server";

/**
 * Catering inquiry endpoint.
 *
 * STATUS: stub — validates input and returns success, but does NOT yet
 * persist the lead or notify the team. This page is intentionally unlinked
 * and noindex'd until the backend below is wired up.
 *
 * TO ACTIVATE (once accounts exist):
 *  1. Supabase — save the lead:
 *       import { createClient } from "@supabase/supabase-js";
 *       const supabase = createClient(
 *         process.env.SUPABASE_URL!,
 *         process.env.SUPABASE_SERVICE_ROLE_KEY!
 *       );
 *       await supabase.from("catering_leads").insert({
 *         name, email, phone, event_date: eventDate, guests,
 *         event_type: eventType, details, marketing_opt_in: marketingOptIn === "yes",
 *       });
 *
 *  2. Resend — notify the team:
 *       import { Resend } from "resend";
 *       const resend = new Resend(process.env.RESEND_API_KEY!);
 *       await resend.emails.send({
 *         from: "Catering <catering@spacecitybiteshtx.com>",
 *         to: process.env.CATERING_NOTIFY_EMAILS!.split(","),
 *         subject: `New catering inquiry — ${name}`,
 *         html: `...lead details...`,
 *       });
 */

interface CateringPayload {
  name?: string;
  email?: string;
  phone?: string;
  eventDate?: string;
  guests?: string;
  eventType?: string;
  details?: string;
  marketingOptIn?: string;
}

export async function POST(req: Request) {
  let data: CateringPayload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone } = data;

  if (!name?.trim() || !email?.trim() || !phone?.trim()) {
    return NextResponse.json({ error: "Name, email, and phone are required." }, { status: 400 });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // TODO: persist to Supabase + notify team via Resend (see header comment).
  console.log("Catering inquiry received (not yet persisted):", data);

  return NextResponse.json({ ok: true });
}
