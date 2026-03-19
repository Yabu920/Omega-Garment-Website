'use client';

import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const galleryItems = [
  '/gallery/pic-1.jpg',
  '/gallery/pic-2.jpg',
  '/gallery/pic-3.jpg',
  '/gallery/pic-4.jpg',
  '/gallery/pic-5.jpg',
  '/gallery/pic-6.jpg',
  '/gallery/pic-7.jpg',
  '/gallery/pic-8.jpg',
  '/gallery/pic-9.jpg',
  '/gallery/pic-10.jpg',
  '/gallery/pic-11.jpg',
  '/gallery/pic-12.jpg',
  '/gallery/pic-13.jpg',
  '/gallery/pic-14.jpg',
  '/gallery/pic-15.jpg',
  '/gallery/pic-16.jpg',
  '/gallery/pic-17.jpg',
  '/gallery/pic-18.jpg',
  '/gallery/pic-19.jpg',
  '/gallery/pic-20.jpg',
  '/gallery/pic-21.jpg',
  '/gallery/pic-22.jpg',
  '/gallery/pic-23.jpg',
  '/gallery/pic-24.jpg',
  '/gallery/pic-25.jpg',
];

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    document.body.style.overflow = selectedImageIndex !== null ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImageIndex]);

  useEffect(() => {
    if (selectedImageIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImageIndex(null);
      }

      if (event.key === 'ArrowRight') {
        setSelectedImageIndex((current) =>
          current === null ? null : (current + 1) % galleryItems.length
        );
      }

      if (event.key === 'ArrowLeft') {
        setSelectedImageIndex((current) =>
          current === null
            ? null
            : (current - 1 + galleryItems.length) % galleryItems.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const activeImage =
    selectedImageIndex !== null ? galleryItems[selectedImageIndex] : null;

  return (
    <div className="pt-20 bg-white">
      <section className="bg-accent py-20 md:py-24">
        <Container className="text-center">
          <Badge variant="primary" className="mb-5 uppercase tracking-[0.3em]">
            Gallery
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Recent <span className="text-primary">Work</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            One streamlined gallery with the latest apparel photography and no
            category filters competing for attention.
          </p>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {galleryItems.map((src, index) => (
              <motion.button
                key={src}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: (index % 8) * 0.04 }}
                className="group relative overflow-hidden rounded-[1.75rem] bg-gray-100 text-left shadow-sm ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => setSelectedImageIndex(index)}
                aria-label={`Open gallery image ${index + 1}`}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={src}
                    alt={`OMEGA gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-accent/95 backdrop-blur-md"
          >
            <div className="flex h-full items-center justify-center p-4 md:p-8">
              <button
                type="button"
                onClick={() => setSelectedImageIndex(null)}
                className="absolute right-4 top-4 z-[100] inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8 md:top-8"
                aria-label="Close gallery image"
              >
                <X size={26} />
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedImageIndex((current) =>
                    current === null
                      ? null
                      : (current - 1 + galleryItems.length) % galleryItems.length
                  )
                }
                className="absolute left-3 top-1/2 z-[100] hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:inline-flex"
                aria-label="Previous gallery image"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedImageIndex((current) =>
                    current === null ? null : (current + 1) % galleryItems.length
                  )
                }
                className="absolute right-3 top-1/2 z-[100] hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:inline-flex"
                aria-label="Next gallery image"
              >
                <ChevronRight size={24} />
              </button>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-5xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-4xl bg-black shadow-2xl">
                  <Image
                    src={activeImage}
                    alt={
                      selectedImageIndex !== null
                        ? `OMEGA gallery image ${selectedImageIndex + 1}`
                        : 'OMEGA gallery image'
                    }
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
