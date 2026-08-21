import type { NextConfig } from "next";

const agencyInsightCategories = [
  "amazon-web-technology",
  "android-application-development",
  "angular-application-development",
  "angular-js-development",
  "app-store-optimization",
  "database",
  "digital-marketing",
  "firebase-web-technology",
  "flutter-application-development",
  "ios-app-developer-guide",
  "ios-app-development",
  "iphone-mobile-application-development",
  "mobile",
  "mobile-application-development",
  "node-js-development",
  "on-demand-app-development",
  "on-demand-mobile-apps",
  "press-release",
  "react-application-development",
  "shopify-development",
  "software-development",
  "uncategorized",
  "wearable-application-development",
  "web-design",
  "web-development",
  "wordpress-website-development",
  "xamarin-app-development",
] as const;

// Content-Security-Policy
// 'unsafe-inline' for scripts is required by Next.js inline chunks and GTM.
// 'unsafe-eval' is development-only: React uses eval() for debug callstacks.
// Production never includes 'unsafe-eval' — GTM operates without it.
// img-src includes wpadmin.inheritx.com and www.inheritx.com for WP images.
// frame-src allows the IRA chatbot (*.vercel.app as interim; replace with
// production IRA host once NEXT_PUBLIC_IRA_CHAT_URL is set).
// connect-src allows Resend, Upstash, WP API, and GTM endpoints.
const isDev = process.env.NODE_ENV !== "production";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${
    process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""
  } https://www.googletagmanager.com https://www.google-analytics.com`,
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "img-src 'self' data: blob: https://wpadmin.inheritx.com https://www.inheritx.com https://inheritx.com https://www.googletagmanager.com https://www.google-analytics.com",
  "media-src 'self'",
  "frame-src https://www.googletagmanager.com https://*.vercel.app",
  "connect-src 'self' https://wpadmin.inheritx.com https://api.resend.com https://*.upstash.io https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wpadmin.inheritx.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "www.inheritx.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "inheritx.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy careers page URL from old site
      { source: "/join-our-team", destination: "/careers", permanent: true },
      { source: "/join-our-team/:path*", destination: "/careers", permanent: true },
      // Legacy blog/insights URLs
      { source: "/resources/insights", destination: "/insights", permanent: true },
      { source: "/resources/insights/:path*", destination: "/insights", permanent: true },
      // Legacy evaluating path
      { source: "/path/evaluating", destination: "/path/head-of-ai", permanent: true },
      // Legacy top-level URLs from old inheritx.com site
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:path*", destination: "/insights", permanent: true },
      { source: "/services", destination: "/solutions", permanent: true },
      { source: "/services/:path*", destination: "/solutions", permanent: true },
      { source: "/about", destination: "/company", permanent: true },
      { source: "/about/:path*", destination: "/company", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      // Legacy agency blog category slugs → insights index
      ...agencyInsightCategories.map((slug) => ({
        source: `/insights/category/${slug}`,
        destination: "/insights",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
