export function Hero() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
          Creative Design Studio
        </h1>
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mt-6">
          Watercolor illustrations, floral patterns, photo bundles & mockups for
          your creative projects
        </p>
        <div className="mt-10">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            Browse Collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
