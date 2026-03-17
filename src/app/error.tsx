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
        <h1 className="text-2xl font-semibold text-foreground">
          Something went wrong
        </h1>
        <p className="mt-4 text-muted">Please try again</p>
        <button
          onClick={reset}
          className="mt-8 inline-flex text-sm font-medium text-foreground border-b border-foreground pb-1 hover:text-muted transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
