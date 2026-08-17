/**
 * Hard rules for later CTA phases. If a change violates these, it is out of scope.
 */
export const CTA_RULES = [
  "One filled cyan control per viewport section (header persistence is allowed).",
  "Explore never uses the fill family.",
  "Assessment is ghost when it sits beside a strategy fill.",
  "Do not add a fourth contact intent.",
  "contactHref() always emits official intents — never architecture or workshop.",
  "IRA is an object CTA (avatar). Never a cyan pill. Bottom-right only.",
  "Do not add a sticky bottom conversion bar — it collides with IRA.",
  "Do not globalize the path floating CTA.",
  "Do not restyle MagneticButton as a new brand; families wrap existing chrome.",
  "Banned primary labels: Contact Us, Let's Talk, Get Started, Learn More, Book a Demo, Talk to Sales.",
  "Tap targets are at least 44px on mobile.",
  "Path floating CTA hides when the closing section is in view.",
] as const;
