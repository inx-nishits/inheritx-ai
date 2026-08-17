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
  async redirects() {
    return [
      {
        source: "/resources/insights",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/resources/insights/:path*",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/path/evaluating",
        destination: "/path/head-of-ai",
        permanent: true,
      },
      ...agencyInsightCategories.map((slug) => ({
        source: `/insights/category/${slug}`,
        destination: "/insights",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
