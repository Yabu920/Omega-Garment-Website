'use client';

import { 
  GALLERY_ITEMS, 
  PRODUCT_CATEGORIES 
} from '@/lib/constants';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Filter 
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [filteredItems, setFilteredItems] = useState(GALLERY_ITEMS);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(GALLERY_ITEMS);
    } else {
      setFilteredItems(GALLERY_ITEMS.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-accent overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://picsum.photos/seed/gallery/1920/1080?blur=5"
            alt="Gallery Header"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" className="mb-6 uppercase tracking-widest px-4 py-2 text-sm">
              Our Portfolio
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Work <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Explore our recent projects and see the quality of OMEGA sportswear in action.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="section-padding bg-white">
        <Container>
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                'px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border-2',
                activeCategory === 'all' 
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-white border-gray-100 text-gray-500 hover:border-primary/50 hover:text-primary'
              )}
            >
              All
            </button>
            {PRODUCT_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border-2',
                  activeCategory === category.id 
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-white border-gray-100 text-gray-500 hover:border-primary/50 hover:text-primary'
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Masonry-like Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-square rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Maximize2 size={24} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {item.title}
                    </h3>
                    <p className="text-primary text-xs font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {item.category.replace('-', ' ')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <Filter className="mx-auto text-gray-300 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-500 mb-2">No items found</h3>
              <p className="text-gray-400">We haven't added any items to this category yet. Check back soon!</p>
            </div>
          )}
        </Container>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-accent/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
              aria-label="Close lightbox"
            >
              <X size={40} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] hidden md:block"
              aria-label="Previous image"
            >
              <ChevronLeft size={60} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] hidden md:block"
              aria-label="Next image"
            >
              <ChevronRight size={60} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={filteredItems[selectedImageIndex].src}
                alt={filteredItems[selectedImageIndex].title}
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-bold mb-1">{filteredItems[selectedImageIndex].title}</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-sm">
                  {filteredItems[selectedImageIndex].category.replace('-', ' ')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <Container className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Love What You See?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Let's create something amazing for your team. Our designers are ready to help you stand out.
          </p>
          <Button href="/contact" size="lg" variant="secondary" className="group">
            Get Started Today
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </Container>
      </section>
    </div>
  );
}
