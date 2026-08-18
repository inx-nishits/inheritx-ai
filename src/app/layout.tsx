import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";

import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { IRAChatCTA } from "@/components/ira/IRAChatCTA";
import { GtmBoot } from "@/components/analytics/GtmBoot";
import { CookieConsentBanner } from "@/components/consent/CookieConsentBanner";
import { SITE_URL } from "@/lib/site";

import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = "InheritX — AI-Native Enterprise Partner";
const defaultDescription =
  "InheritX is an AI-native enterprise technology partner—AI/ML engineering, Generative AI, Agentic AI, and AI DevOps—deployed in your private cloud with full IP ownership.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s",
  },
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "InheritX",
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    images: [
      {
        url: "/images/actual/actual-lead-capabilities.jpg",
        width: 1200,
        height: 630,
        alt: "InheritX — AI-native enterprise technology partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/actual/actual-lead-capabilities.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        className="bg-ink font-sans text-foreground"
        suppressHydrationWarning
      >
        <GtmBoot />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-cyan focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <div id="main-content" className="flex min-h-dvh flex-col">
            {children}
          </div>
          <IRAChatCTA />
        </SmoothScroll>
        <CookieConsentBanner />
      </body>
    </html>
  );
}
