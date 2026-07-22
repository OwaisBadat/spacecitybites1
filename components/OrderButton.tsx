"use client";

import { reportOrderClick } from "@/lib/analytics";

interface OrderButtonProps {
  location: string;
  className?: string;
  children: React.ReactNode;
}

export default function OrderButton({ location, className, children }: OrderButtonProps) {
  return (
    <a
      href="https://wings-87-alabama-street-houston.cloveronline.com"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => reportOrderClick(location)}
    >
      {children}
    </a>
  );
}
