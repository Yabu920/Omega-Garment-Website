'use client';

import {
  BRAND_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  NAV_LINKS,
} from '@/lib/constants';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Container } from '../ui/Container';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const useLightHeader = isScrolled || isMobileMenuOpen || pathname !== '/';

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
          useLightHeader
            ? 'border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-xl'
            : 'border-white/10 bg-accent/92 shadow-lg shadow-accent/10 backdrop-blur-md'
        )}
      >
        <Container className="flex h-20 items-center gap-4 lg:gap-10">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-1 shadow-lg ring-1 ring-black/5 md:h-16 md:w-16">
              <span className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="/brand/logo-3.jpg"
                  alt={BRAND_NAME}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 56px, 64px"
                  priority
                />
              </span>
            </span>

            <span className="min-w-0">
              <span
                className={cn(
                  'block text-lg font-black leading-none tracking-[0.2em] md:text-xl',
                  useLightHeader ? 'text-accent' : 'text-white'
                )}
              >
                OMEGA
              </span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.34em] text-primary md:text-xs">
                የአሸናፊዎች ምርጫ
              </span>
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-end gap-4 lg:flex xl:gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-2 py-2 text-[13px] font-semibold uppercase tracking-[0.24em] transition-colors duration-200 xl:text-sm',
                    isActive
                      ? 'text-primary'
                      : useLightHeader
                        ? 'text-accent hover:text-primary'
                        : 'text-white hover:text-primary'
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="desktop-nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className={cn(
              'ml-auto inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors lg:hidden',
              useLightHeader
                ? 'text-accent hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            )}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-20 z-40 bg-accent/45 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              className="border-t border-gray-200 bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Container className="flex max-h-[calc(100svh-5rem)] flex-col gap-8 overflow-y-auto py-6">
                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                          'rounded-2xl border px-5 py-4 text-base font-semibold uppercase tracking-[0.18em] transition-colors',
                          isActive
                            ? 'border-primary bg-primary text-white'
                            : 'border-gray-200 text-accent hover:border-primary/40 hover:text-primary'
                        )}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>

                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-500">
                    Contact
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-base font-semibold text-accent">{CONTACT_PHONE}</p>
                    <p className="text-sm text-gray-600">{CONTACT_EMAIL}</p>
                  </div>
                </div>
              </Container>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
