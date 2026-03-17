import { Hero } from "@/components/home/Hero"
import { Gallery } from "@/components/gallery/Gallery"
import { TrustSection } from "@/components/home/TrustSection"

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="gallery" className="py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <Gallery.Filter />
          <div className="mt-10">
            <Gallery.Grid />
          </div>
        </div>
      </section>
      <TrustSection />
    </main>
  )
}
