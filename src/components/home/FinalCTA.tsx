"use client";

import { CtaClosingStage } from "@/components/cta/CtaClosingStage";
import { TextReveal } from "@/components/ui/Reveal";
import { VisualFrame } from "@/components/ui/VisualFrame";
import { contactHref } from "@/lib/cta";

export function FinalCTA() {
  return (
    <CtaClosingStage
      id="contact"
      location="home.final"
      eyebrow="Start your AI transformation"
      title={
        <TextReveal
          text="Ready to industrialize enterprise AI?"
          className="font-display text-[2rem] leading-[1.15] text-white md:text-6xl lg:justify-start lg:text-6xl"
        />
      }
      description="Book an AI strategy call with an architect. We’ll pressure-test your use case, say honestly whether AI is the right move, and outline a delivery roadmap—NDA and Diligence Pack materials available for qualified opportunities."
      primary={{
        label: "Book an AI strategy call",
        href: contactHref("strategy"),
      }}
      secondary={{
        label: "Request AI assessment",
        href: contactHref("assessment"),
      }}
      links={[
        { label: "Security / diligence", href: contactHref("security") },
        { label: "Security FAQ", href: "/resources/security-faq" },
        { label: "Diligence Pack", href: "/resources/diligence-pack" },
        { label: "Case Studies", href: "/case-studies" },
      ]}
      media={
        <VisualFrame
          src="/images/actual/actual-transformation.jpg"
          alt="Enterprise leaders beginning an AI transformation"
          className="absolute inset-0"
          priority
        />
      }
    />
  );
}
