import { aboutHero } from "@/data/about"

export function HeroSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src={aboutHero.image}
              alt={aboutHero.imageAlt}
              className="aspect-3/4 w-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-semibold sm:text-5xl">
              {aboutHero.heading}
            </h1>
            <p className="mt-3 text-lg text-muted">{aboutHero.subheading}</p>
            <p className="mt-6 leading-relaxed text-muted">
              {aboutHero.intro}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
