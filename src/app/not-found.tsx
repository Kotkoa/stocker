import Link from "next/link"
import Script from "next/script"
import { Container } from "@/components/ui/Container"
import { getFeaturedProducts } from "@/lib/products"
import { ProductCard } from "@/components/product/ProductCard"

const redirectScript = `
(function() {
  var path = window.location.pathname;
  var postRedirects = [
    { match: /peonies/i, to: '/products/watercolour-peonies' },
    { match: /spring.*paris|paris.*spring|blooming.*paris/i, to: '/products/blooming-paris' },
    { match: /28.*floral|floral.*line.*art|bloom.*pattern/i, to: '/products/bloom-pattern-and-motifs' },
    { match: /wedding/i, to: '/products/wedding-invitation' },
    { match: /avocado/i, to: '/products/avocado-photo-bundle' },
    { match: /vintage.*floral.*pattern/i, to: '/products/vintage-floral-patterns' },
    { match: /provence|lavender.*flower/i, to: '/products/provence-lavender' },
    { match: /styled.*photo.*mockup|20.*styled/i, to: '/products/styled-photo-and-mockups' },
    { match: /lavender.*photo|100.*photo/i, to: '/products/lavender-photo-bundle' },
    { match: /roses.*hydrangea|hydrangea/i, to: '/products/sweet-roses-and-hydrangeas' },
    { match: /waterc/i, to: '/products/watercolour-peonies' },
  ];
  if (path.startsWith('/post/')) {
    for (var i = 0; i < postRedirects.length; i++) {
      if (postRedirects[i].match.test(path)) {
        window.location.replace(postRedirects[i].to);
        return;
      }
    }
    window.location.replace('/');
    return;
  }
  if (path.startsWith('/tagged/') || /^\\/page\\/\\d/.test(path)) {
    window.location.replace('/');
  }
})();
`

export default function NotFound() {
  const featured = getFeaturedProducts().slice(0, 4)

  return (
    <Container className="py-16">
      <Script id="tumblr-redirects" strategy="beforeInteractive">
        {redirectScript}
      </Script>

      <div className="text-center">
        <h1 className="text-6xl font-semibold text-foreground">404</h1>
        <p className="mt-4 text-lg text-muted">Page not found</p>
        <Link
          href="/"
          className="mt-8 inline-flex text-sm font-medium text-foreground border-b border-foreground pb-1 hover:text-muted transition-colors"
        >
          Go to gallery
        </Link>
      </div>

      {featured.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-semibold">Featured products</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard.Default
                key={product.slug}
                slug={product.slug}
                title={product.title}
                coverImage={product.coverImage}
                category={product.category}
              />
            ))}
          </div>
        </section>
      )}
    </Container>
  )
}
