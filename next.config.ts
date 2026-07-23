import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://www.google.com https://connect.facebook.net https://analytics.tiktok.com https://w.behold.so",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://w.behold.so",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://www.googleadservices.com https://www.google.com https://google.com https://*.doubleclick.net https://pagead2.googlesyndication.com https://www.facebook.com https://analytics.tiktok.com https://behold.so https://w.behold.so https://feeds.behold.so",
      "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://www.googleadservices.com https://www.google.com https://google.com https://*.doubleclick.net https://www.facebook.com https://raw.githubusercontent.com https://behold.so https://*.behold.so https://cdninstagram.com https://*.cdninstagram.com https://*.fbcdn.net",
      "frame-src 'self' https://www.google.com https://maps.google.com https://www.tiktok.com https://www.instagram.com",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
