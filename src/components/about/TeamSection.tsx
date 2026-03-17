export function TeamSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/team.jpg"
              alt="Andrey & Olesia — Kotkoa Studio"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">About Us</h2>
            <p className="mt-6 leading-relaxed text-muted">
              We are Andrey and Olesia, the creative duo behind Kotkoa Studio.
              Based in Europe, we create beautiful digital assets inspired by
              nature, vintage aesthetics, and everyday beauty.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Our collections include hand-painted watercolor illustrations,
              seamless floral patterns, curated photo bundles, and elegant
              mockups — all crafted with care for designers, creatives, and small
              businesses.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Every piece in our portfolio is made with attention to detail and
              love for the craft. We believe great design starts with authentic,
              high-quality resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
