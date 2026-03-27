import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import Image from 'next/image';

const productImages = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  src: `/Products/product-${index + 1}.jpg`,
}));

export default function ProductsPage() {
  return (
    <div className="pt-20 bg-white">
      <section className="bg-accent py-20 md:py-24">
        <Container className="text-center">
          <Badge variant="primary" className="mb-5 uppercase tracking-[0.3em]">
            Our Products
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Product <span className="text-primary">Collection</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            A simplified visual catalog focused on the garments themselves, with
            clean presentation and minimal copy.
          </p>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:gap-6">
            {productImages.map((product) => (
              <article key={product.id} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-100 shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <Image
                    src={product.src}
                    alt={`Product ${product.id}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
