"use client";

import { useState } from "react";

const EVENT_TYPES = [
  "Birthday Party",
  "Corporate / Office",
  "Wedding",
  "Game Day / Watch Party",
  "Graduation",
  "Community / Religious Event",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function CateringForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-700/40 bg-green-950/30 p-8 text-center">
        <p className="text-4xl mb-3">🎉</p>
        <h3 className="text-xl font-black uppercase text-white mb-2">Request Received!</h3>
        <p className="text-neutral-300 text-sm">
          Thanks for reaching out. Our team will get back to you within 24 hours to plan your event.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-red-400 hover:text-red-300 font-semibold"
        >
          Submit another request →
        </button>
      </div>
    );
  }

  const labelClass = "block text-[11px] uppercase tracking-widest text-neutral-400 mb-1.5 font-semibold";
  const inputClass =
    "w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Name *</label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone *</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="(713) 000-0000" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email *</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@email.com" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="eventDate" className={labelClass}>Event Date</label>
          <input id="eventDate" name="eventDate" type="date" className={inputClass} />
        </div>
        <div>
          <label htmlFor="guests" className={labelClass}>Estimated Guests</label>
          <input id="guests" name="guests" type="number" min="1" className={inputClass} placeholder="e.g. 40" />
        </div>
      </div>

      <div>
        <label htmlFor="eventType" className={labelClass}>Event Type</label>
        <select id="eventType" name="eventType" defaultValue="" className={inputClass}>
          <option value="" disabled>Select an event type…</option>
          {EVENT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="details" className={labelClass}>Event Details</label>
        <textarea
          id="details"
          name="details"
          rows={4}
          className={inputClass}
          placeholder="Tell us about your event — location, menu items you're interested in (wings, combos, etc.), budget, and anything else."
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-neutral-400 cursor-pointer">
        <input type="checkbox" name="marketingOptIn" value="yes" className="mt-1 accent-red-600 w-4 h-4" />
        <span>I&apos;d like to receive deals &amp; updates from Space City Bites.</span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-400 bg-red-950/30 border border-red-800/40 rounded-lg px-4 py-3">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-red-600 hover:bg-red-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black uppercase tracking-widest text-sm py-4 rounded-full transition-colors shadow-lg shadow-red-900/40"
      >
        {status === "submitting" ? "Sending…" : "Request Catering Quote"}
      </button>

      <p className="text-center text-xs text-neutral-600">
        Prefer to talk? Call us at{" "}
        <a href="tel:+17136213128" className="text-neutral-400 hover:text-white">(713) 621-3128</a>
      </p>
    </form>
  );
}
