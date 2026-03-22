import { aboutStory } from "@/data/about"

const steps = [
  { num: "01", title: "The Beginning", index: 0 },
  { num: "02", title: "Finding Watercolor", index: 1 },
  { num: "03", title: "Life in Motion", index: 2 },
] as const

export function StorySection() {
  return (
    <section className="bg-bg-alt py-[clamp(80px,10vw,130px)]">
      <div className="mx-auto max-w-max-width px-[clamp(20px,4vw,40px)]">
        <div className="max-w-145 mb-[clamp(48px,6vw,72px)]">
          <p className="mb-4.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            Our Journey
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.2]">
            {aboutStory.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border border-border -mt-px -ml-px p-10 bg-background transition-colors duration-300 hover:bg-bg-alt"
            >
              <span className="font-serif text-4xl italic text-birch-deep">
                {step.num}
              </span>
              <h3 className="mt-4 font-serif text-xl font-medium">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-muted">
                {aboutStory.paragraphs[step.index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
