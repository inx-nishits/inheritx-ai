/**
 * Five visual families. Phase 2 components should import these class contracts.
 * Do not restyle MagneticButton in Phase 1 — these strings document current chrome.
 *
 * Rule: one strong cyan fill per viewport section. Families differ by
 * intensity, tint, border, and hierarchy — cyan for convert, white/ink
 * for the alternate official intent. Explore never uses `fill`.
 */

export const CTA_FAMILIES = [
  "fill",
  "tint",
  "ghost",
  "text",
  "object",
] as const;

export type CtaFamilyId = (typeof CTA_FAMILIES)[number];

export const ctaFamilyMeta = {
  fill: {
    id: "fill",
    name: "Filled pill",
    purpose: "The one conversion action in a viewport",
    useFor: "P0 strategy call, page-job convert",
    neverUseFor: "Explore, read more, view all, IRA",
    shape: "pill (rounded-full)",
    size: "min-h-12, px-6 to px-8",
    icon: "Optional ArrowUpRight; header uses a white arrow disc",
    color:
      "Strategy: bg-cyan text-white; Assessment: bg-white text-ink; hover inverts",
    background: "None — the button is the accent",
  },
  tint: {
    id: "tint",
    name: "Tinted outline",
    purpose: "Proof / next-best action beside a fill",
    useFor: "See production outcomes, Review case studies",
    neverUseFor: "A second P0 convert competing with fill",
    shape: "pill",
    size: "min-h-12, px-5 to px-6",
    icon: "Arrow or → in cyan",
    color:
      "border-cyan/45 bg-cyan/10 text-white; hover border-cyan/70 bg-cyan/20",
    background: "Transparent / cyan wash",
  },
  ghost: {
    id: "ghost",
    name: "Muted fill",
    purpose: "Alternate official intent (usually assessment)",
    useFor: "Request AI assessment, diligence when not primary",
    neverUseFor: "Hero primary, explore",
    shape: "pill",
    size: "min-h-12, px-6",
    icon: "None by default",
    color:
      "On ink: white fill, ink type. On paper: ink fill, white type. Hover to cyan.",
    background: "None",
  },
  text: {
    id: "text",
    name: "Text + arrow",
    purpose: "Low-commitment exploration and related links",
    useFor: "Explore this solution, Security FAQ, related pages",
    neverUseFor: "Booking a call",
    shape: "no chrome",
    size: "min-h-12, text-sm",
    icon: "ArrowUpRight required",
    color: "text-white/70 hover:text-white; arrow white/45",
    background: "None",
  },
  object: {
    id: "object",
    name: "Special object",
    purpose: "Non-button CTAs: chip, band, form, IRA, floating assist",
    useFor: "Agent Bank chip, conversion band, contact form, IRA, path floater",
    neverUseFor: "Cloning the header pill",
    shape: "varies by object",
    size: "varies",
    icon: "Object-specific (Bot, avatar, none)",
    color: "Inherit family of the inner control; object itself is the frame",
    background: "Chip / band / widget — not a new accent color",
  },
} as const satisfies Record<
  CtaFamilyId,
  {
    id: CtaFamilyId;
    name: string;
    purpose: string;
    useFor: string;
    neverUseFor: string;
    shape: string;
    size: string;
    icon: string;
    color: string;
    background: string;
  }
>;

/**
 * Additive Tailwind contracts for Phase 2.
 * `fill.magnetic` is appended to MagneticButton's base pill classes.
 * `fill.header` is the full Header control (not MagneticButton).
 */
export const ctaFamilyClasses = {
  fill: {
    magnetic:
      "cta-primary min-h-12 justify-center px-6 py-3 text-sm text-white",
    magneticHero:
      "cta-primary min-h-12 shrink-0 justify-center whitespace-nowrap px-7 py-3.5 text-white shadow-[0_0_32px_rgba(0,190,212,0.22)] sm:px-8",
    assessment:
      "min-h-12 justify-center bg-white px-6 py-3 text-sm text-ink hover:bg-cyan hover:text-white",
    assessmentHero:
      "min-h-12 shrink-0 justify-center whitespace-nowrap bg-white px-7 py-3.5 text-ink shadow-[0_0_24px_rgba(255,255,255,0.12)] hover:bg-cyan hover:text-white sm:px-8",
    header:
      "cta-primary group relative inline-flex min-h-11 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border border-cyan pl-4 pr-3.5 text-[12px] font-semibold tracking-wide text-white shadow-[0_0_24px_rgba(0,190,212,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:text-[13px]",
  },
  tint: "inline-flex min-h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-cyan/45 bg-cyan/10 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,190,212,0.1)] transition-colors hover:border-cyan/70 hover:bg-cyan/20 sm:px-6",
  ghost:
    "inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white px-6 text-sm font-medium text-ink transition-colors hover:border-cyan hover:bg-cyan hover:text-white",
  ghostStrategy:
    "inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-cyan/50 bg-cyan/10 px-6 text-sm font-medium text-white transition-colors hover:border-cyan hover:bg-cyan/20 hover:text-white",
  ghostOnPaper:
    "inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-ink px-6 text-sm font-medium text-white transition-colors hover:border-cyan hover:bg-cyan hover:text-white",
  text: "group inline-flex min-h-12 items-center justify-center gap-2 px-1 text-sm font-medium text-white/70 transition-colors hover:text-white",
  object: {
    chip: "group inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] py-1.5 pr-4 pl-1.5 shadow-[0_0_24px_rgba(0,190,212,0.08)] transition-colors hover:border-cyan/45 hover:bg-cyan/10 sm:gap-3 sm:pr-5",
    band: "flex flex-col gap-6 rounded-[1.5rem] border border-cyan/25 bg-cyan/[0.06] p-6 md:flex-row md:items-end md:justify-between md:p-8 lg:gap-10",
    floating:
      "pointer-events-auto flex max-w-md items-center gap-3 rounded-full border border-cyan/30 bg-ink/90 p-1.5 pl-4 shadow-[0_16px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:pl-5",
  },
} as const;

export const CTA_TAP_MIN_PX = 44;

export type CtaPairSecondaryFamily = "tint" | "ghost" | "text";

/**
 * Pick the secondary chrome for a hero/closer pair.
 * Contact alternate intent → ghost. Proof destinations → tint.
 * Explore stays text.
 */
export function ctaPairSecondaryFamily(
  _primaryHref: string | undefined,
  secondaryHref: string | undefined,
): CtaPairSecondaryFamily {
  if (!secondaryHref) return "text";
  if (secondaryHref.includes("/contact")) return "ghost";
  if (
    secondaryHref.includes("/case-studies") ||
    secondaryHref.startsWith("#cases") ||
    secondaryHref === "#grid"
  ) {
    return "tint";
  }
  return "text";
}
