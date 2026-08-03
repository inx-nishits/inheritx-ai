import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

import { SmoothScroll } from "@/components/layout/SmoothScroll";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "InheritX — Enterprise AI Solutions",
  description:
    "InheritX builds custom AI agents, multi-agent systems, and computer vision for enterprises—with full IP ownership and private cloud deployment.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="bg-ink font-sans text-foreground"
        suppressHydrationWarning
      >
        <SmoothScroll>
          <div className="flex min-h-dvh flex-col">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
