import { Hero } from "@/components/home/Hero"
import { FAQSection } from "@/components/home/FAQSection"
import { Gallery } from "@/components/gallery/Gallery"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { getFaqJsonLd } from "@/lib/metadata"

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqJsonLd()),
        }}
      />
      <Hero />
      <section id="gallery" className="py-[clamp(80px,10vw,130px)]">
        <div className="mx-auto max-w-max-width px-[clamp(20px,4vw,40px)]">
          <SectionHeader
            kicker="Our Collection"
            title={<>Carefully crafted <em>digital assets</em></>}
            deck="Watercolor illustrations, seamless patterns, photo bundles, and mockups — all hand-painted and ready for your next project."
          />
          <Gallery.Filter />
          <div className="mt-10">
            <Gallery.Grid />
          </div>
        </div>
      </section>
      <FAQSection />
    </>
  )
}
