"use client";

import { useEffect, useState } from "react";

type Status = "open" | "closing" | "closed";

const hours = [
  { open: 12, close: 24 },
  { open: 12, close: 24 },
  { open: 12, close: 24 },
  { open: 12, close: 24 },
  { open: 12, close: 26 },
  { open: 12, close: 26 },
  { open: 12, close: 21 },
];

function getStatus(): Status {
  const now = new Date();
  const day = now.getDay();
  const h = now.getHours() + now.getMinutes() / 60;
  const { open, close } = hours[day];
  if (h >= open && h < close - 1) return "open";
  if (h >= close - 1 && h < close) return "closing";
  return "closed";
}

export default function OpenStatus() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    setStatus(getStatus());
    const id = setInterval(() => setStatus(getStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;

  if (status === "open") {
    return <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">● Open Now</span>;
  }
  if (status === "closing") {
    return <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400">● Closing Soon</span>;
  }
  return <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">● Closed</span>;
}
