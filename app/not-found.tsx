import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { BRAND_NAME } from '@/lib/constants';
import { SearchX } from 'lucide-react';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="bg-gray-50 pt-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,130,200,0.12),transparent_32%)]" />

        <Container className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center justify-center py-16">
          <div className="w-full max-w-3xl rounded-4xl border border-gray-200 bg-white/90 p-8 text-center shadow-2xl shadow-black/5 backdrop-blur-sm md:p-12">
            <div className="mx-auto mb-8 w-24 rounded-full bg-accent p-3 shadow-lg ring-1 ring-black/5 md:w-28">
              <div className="relative aspect-square overflow-hidden rounded-full">
                <Image
                  src="/brand/logo.jpg"
                  alt={BRAND_NAME}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
            </div>

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary md:h-18 md:w-18">
              <SearchX size={34} />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Error 404
            </p>
            <h1 className="mb-4 text-4xl font-black tracking-tight text-accent md:text-6xl">
              Page Not Found
            </h1>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              The page you are looking for does not exist, may have moved, or is no
              longer available. Let&apos;s get you back to the main site.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/" variant="primary" size="lg" className="w-full sm:w-auto">
                Back to Home
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
