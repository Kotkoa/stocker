'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-2xl font-medium text-foreground">
          Something went wrong
        </h1>
        <p className="mt-4 text-muted">Please try again</p>
        <button
          onClick={reset}
          className="mt-8 inline-flex items-center gap-2 rounded-full border-[1.5px] border-border bg-transparent px-6.5 py-3.5 text-sm font-semibold tracking-[0.02em] text-foreground transition-all duration-350 ease-warm hover:bg-birch hover:border-birch-deep hover:-translate-y-0.5"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
