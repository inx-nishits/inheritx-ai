import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
