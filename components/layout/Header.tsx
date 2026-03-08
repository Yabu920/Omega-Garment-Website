'use client';

import { BRAND_NAME, NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/Container';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border-2 border-primary group-hover:scale-110 transition-transform duration-300">
            <Image
              src="/brand/logo.jpg"
              alt={BRAND_NAME}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              // Fallback for missing logo
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://picsum.photos/seed/omega/100/100';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              'font-bold text-lg md:text-xl leading-none tracking-tight transition-colors duration-300',
              isScrolled ? 'text-accent' : 'text-accent md:text-white'
            )}>
              OMEGA
            </span>
            {/* <span className={cn(
              'text-[10px] md:text-xs font-medium tracking-widest uppercase transition-colors duration-300',
              isScrolled ? 'text-primary' : 'text-primary md:text-primary-light'
            )}>
              Sportswear
            </span> */}
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:text-primary relative py-2',
                  isActive 
                    ? 'text-primary' 
                    : isScrolled ? 'text-accent' : 'text-white'
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            'md:hidden p-2 rounded-lg transition-colors duration-300',
            isScrolled ? 'text-accent hover:bg-gray-100' : 'text-white hover:bg-white/10'
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6"
          >
            <nav className="flex flex-col space-y-6">
              {NAV_LINKS.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'text-2xl font-bold uppercase tracking-wider transition-colors duration-300',
                        isActive ? 'text-primary' : 'text-accent hover:text-primary'
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            
            <div className="mt-12 pt-12 border-t border-gray-100">
              <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-4">Contact Us</p>
              <p className="text-accent font-bold text-lg mb-2">+251 911 234 567</p>
              <p className="text-accent font-medium">info@omegasportswear.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
