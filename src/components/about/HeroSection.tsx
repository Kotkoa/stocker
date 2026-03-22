import { aboutHero } from "@/data/about"

export function HeroSection() {
  return (
    <section className="pt-17 py-[clamp(80px,10vw,130px)]">
      <div className="mx-auto max-w-max-width px-[clamp(20px,4vw,40px)]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[14px]">
            <img
              src={aboutHero.image}
              alt={aboutHero.imageAlt}
              className="aspect-3/4 w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-4.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Our Story
            </p>
            <h1 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.2]">
              {aboutHero.heading}
            </h1>
            <p className="mt-3 font-serif text-lg italic text-accent">
              {aboutHero.subheading}
            </p>
            <p className="mt-6 leading-[1.8] text-muted">
              {aboutHero.intro}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
