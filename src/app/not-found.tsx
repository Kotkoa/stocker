import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-semibold text-foreground">404</h1>
        <p className="mt-4 text-lg text-muted">Page not found</p>
        <Link
          href="/"
          className="mt-8 inline-flex text-sm font-medium text-foreground border-b border-foreground pb-1 hover:text-muted transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
