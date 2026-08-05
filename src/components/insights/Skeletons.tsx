export function InsightsSkeletonGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-soft"
        >
          <div className="aspect-[16/10] animate-pulse bg-white/[0.04]" />
          <div className="space-y-3 p-6">
            <div className="h-3 w-24 animate-pulse rounded bg-white/[0.06]" />
            <div className="h-6 w-full animate-pulse rounded bg-white/[0.06]" />
            <div className="h-6 w-2/3 animate-pulse rounded bg-white/[0.06]" />
            <div className="h-16 w-full animate-pulse rounded bg-white/[0.04]" />
          </div>
        </div>
      ))}
    </div>
  );
}
