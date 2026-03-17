import { Hero } from "@/components/home/Hero"
import { Gallery } from "@/components/gallery/Gallery"

export default function Home() {
  return (
    <>
      <Hero />
      <section id="gallery" className="py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Our Collection</h2>
          <Gallery.Filter />
          <div className="mt-10">
            <Gallery.Grid />
          </div>
        </div>
      </section>
    </>
  )
}
