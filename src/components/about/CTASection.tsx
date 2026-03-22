import { aboutCTA } from "@/data/about"

export function CTASection() {
  return (
    <section className="bg-bg-alt py-[clamp(80px,10vw,130px)]">
      <div className="mx-auto max-w-2xl px-[clamp(20px,4vw,40px)] text-center">
        <p className="mb-4.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          Get Started
        </p>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.2]">
          {aboutCTA.heading.split(" ").slice(0, 3).join(" ")}{" "}
          <em className="font-normal italic text-accent">
            {aboutCTA.heading.split(" ").slice(3).join(" ")}
          </em>
        </h2>
        <p className="mt-5 text-base leading-[1.8] text-muted">
          {aboutCTA.description}
        </p>
        <a
          href={aboutCTA.buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full border-[1.5px] border-foreground bg-foreground px-6.5 py-3.5 text-sm font-semibold tracking-[0.02em] text-background transition-all duration-350 ease-warm hover:bg-charcoal-soft hover:border-charcoal-soft hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(61,56,51,0.18)]"
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
            aria-hidden="true"
          >
            <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
          </svg>
        </a>
      </div>
    </section>
  )
}
