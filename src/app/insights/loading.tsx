import { InsightsSkeletonGrid } from "@/components/insights/Skeletons";

export default function InsightsLoading() {
  return (
    <main className="flex-1 bg-ink pt-28 pb-16 md:pt-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-10 h-10 w-48 animate-pulse rounded bg-white/[0.06]" />
        <div className="mb-4 h-14 w-full max-w-xl animate-pulse rounded bg-white/[0.06]" />
        <div className="mb-12 h-5 w-full max-w-lg animate-pulse rounded bg-white/[0.04]" />
        <InsightsSkeletonGrid />
      </div>
    </main>
  );
}
