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
      weight: "600 700",
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

const defaultTitle = "InheritX | AI-native enterprise partner";
const defaultDescription =
  "InheritX builds production enterprise AI you own, deployed in your environment, with full IP handover so your teams can operate the system.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s",
  },
  description: defaultDescription,
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
        alt: "InheritX - AI-native enterprise technology partner",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "InheritX",
  url: SITE_URL,
  logo: `${SITE_URL}/images/actual/actual-lead-capabilities.jpg`,
  description:
    "InheritX is an AI-native enterprise partner, production AI in your VPC, full IP ownership, and systems your teams operate after handover.",
  sameAs: [
    "https://www.linkedin.com/company/inheritx-solutions-pvt-ltd/",
    "https://x.com/inheritx",
    "https://www.facebook.com/InheritxSolutions/",
    "https://www.instagram.com/inheritxsolutions/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91 8487006480",
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91 8160047106",
      contactType: "career",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "InheritX",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/insights?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "InheritX Solutions & Services",
  itemListElement: [
    {
      "@type": "Service",
      name: "AI & Machine Learning Engineering",
      provider: { "@type": "Organization", name: "InheritX", url: SITE_URL },
    },
    {
      "@type": "Service",
      name: "Enterprise Agentic Automation",
      provider: { "@type": "Organization", name: "InheritX", url: SITE_URL },
    },
    {
      "@type": "Service",
      name: "Custom Software & Web Development",
      provider: { "@type": "Organization", name: "InheritX", url: SITE_URL },
    },
    {
      "@type": "Service",
      name: "Mobile Application Development",
      provider: { "@type": "Organization", name: "InheritX", url: SITE_URL },
    },
    {
      "@type": "Service",
      name: "Cloud Architecture & DevOps",
      provider: { "@type": "Organization", name: "InheritX", url: SITE_URL },
    },
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "InheritX Technologies",
  image: `${SITE_URL}/images/actual/actual-lead-capabilities.jpg`,
  url: SITE_URL,
  telephone: "+91 8487006480",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/inheritx-solutions-pvt-ltd/",
    "https://x.com/inheritx",
    "https://www.facebook.com/InheritxSolutions/",
    "https://www.instagram.com/inheritxsolutions/",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
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
