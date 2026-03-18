import { aboutStory } from '@/data/about'

export function StorySection() {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">
          {aboutStory.heading}
        </h2>
        {aboutStory.paragraphs.map((paragraph, index) => (
          <p key={index} className="mt-6 leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
