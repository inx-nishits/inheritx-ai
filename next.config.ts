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

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
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
