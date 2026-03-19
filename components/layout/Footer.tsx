'use client';

import {
  BRAND_NAME,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_MAP_URL,
  CONTACT_PHONE,
  NAV_LINKS,
  PRODUCT_CATEGORIES,
  SOCIAL_LINKS,
  TAGLINE,
  WORKING_HOURS,
} from '@/lib/constants';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from '../ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent pb-10 pt-20 text-white">
      <Container>
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/brand/logo.jpg"
                  alt={BRAND_NAME}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://picsum.photos/seed/omega/100/100';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none tracking-tight text-white">
                  OMEGA
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-primary">
                  Sportswear
                </span>
              </div>
            </Link>

            <p className="max-w-xs leading-relaxed text-gray-400">
              {TAGLINE} - Premium sportswear and garment supplier in Ethiopia.
              Quality, durability, and custom branding for winners.
            </p>

            <div className="flex items-center space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:bg-primary"
                  aria-label={social.name}
                >
                  <social.icon
                    size={20}
                    className="text-gray-400 group-hover:text-white"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-primary">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    <span className="mr-3 h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-primary">
              Our Products
            </h3>
            <ul className="space-y-4">
              {PRODUCT_CATEGORIES.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link
                    href="/products"
                    className="group flex items-center text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    <span className="mr-3 h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-sm font-bold uppercase tracking-widest text-primary transition-colors duration-200 hover:text-white"
                >
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-primary">
              Contact Info
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4">
                <MapPin className="mt-1 shrink-0 text-primary" size={20} />
                <a
                  href={CONTACT_MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm leading-relaxed text-gray-400 transition-colors hover:text-white"
                >
                  {CONTACT_ADDRESS}
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="shrink-0 text-primary" size={20} />
                <span className="text-sm text-gray-400">{CONTACT_PHONE}</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="shrink-0 text-primary" size={20} />
                <span className="text-sm text-gray-400">{CONTACT_EMAIL}</span>
              </li>
              <li className="flex items-center space-x-4">
                <Clock className="shrink-0 text-primary" size={20} />
                <span className="text-sm text-gray-400">{WORKING_HOURS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between space-y-4 border-t border-white/5 pt-10 text-sm text-gray-500 md:flex-row md:space-y-0">
          <p>Copyright {currentYear} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
