/**
 * Shared light-section atmosphere: soft paper tint, check grid, cyan glows.
 * Use only on paper / light sections — never on dark (ink) sections.
 */
export function PaperAtmosphere() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-ink/[0.05]" />
      <div className="editorial-grid-light pointer-events-none absolute inset-0 opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[70%] -translate-x-1/2 rounded-full bg-cyan/[0.14] blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 right-[-10%] h-64 w-64 rounded-full bg-cyan/[0.1] blur-[100px]"
      />
    </>
  );
}
