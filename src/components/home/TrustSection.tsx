import { MarketplaceLinks } from '@/components/layout/MarketplaceLinks'

export function TrustSection() {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-8 text-sm font-medium uppercase tracking-wider text-muted">
          Available on
        </p>
        <div className="flex justify-center">
          <MarketplaceLinks iconSize={32} />
        </div>
      </div>
    </section>
  )
}
