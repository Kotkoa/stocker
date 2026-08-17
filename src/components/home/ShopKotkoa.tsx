import {
  ShopAllLink,
  ShopCollectionCard,
} from '@/components/home/ShopCollectionLinks'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { siteConfig } from '@/data/site'
import { getPopulatedShopCollections } from '@/data/shopCollections'

export function ShopKotkoa() {
  const collections = getPopulatedShopCollections()

  return (
    <section id="shop" className="bg-bg-alt py-[clamp(80px,10vw,130px)]">
      <div className="mx-auto max-w-max-width px-[clamp(20px,4vw,40px)]">
        <SectionHeader
          kicker="Kotkoa Shop of Botanical Art"
          title={
            <>
              Botanical <em>Style</em> for everyday use
            </>
          }
          deck="Welcome to our little corner of botanical art. Each piece begins with original Kotkoa artwork, created by Andrey & Olesia to bring warmth, color, and a touch of nature into everyday life."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => (
            <ShopCollectionCard
              key={collection.handle}
              handle={collection.handle}
              name={collection.name}
              url={collection.url}
              image={collection.image}
              imageAlt={collection.imageAlt}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ShopAllLink url={`${siteConfig.shopUrl}/collections/all`} />
        </div>
      </div>
    </section>
  )
}
