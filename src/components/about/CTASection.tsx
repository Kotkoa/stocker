import { aboutCTA } from "@/data/about"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          {aboutCTA.heading}
        </h2>
        <p className="mt-4 text-muted">{aboutCTA.description}</p>
        <a
          href={aboutCTA.buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          {aboutCTA.buttonText}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
          </svg>
        </a>
      </div>
    </section>
  )
}
