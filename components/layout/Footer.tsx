'use client';

import { 
  BRAND_NAME, 
  CONTACT_ADDRESS, 
  CONTACT_EMAIL, 
  CONTACT_PHONE, 
  NAV_LINKS, 
  PRODUCT_CATEGORIES, 
  SOCIAL_LINKS, 
  TAGLINE, 
  WORKING_HOURS 
} from '@/lib/constants';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from '../ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-primary group-hover:scale-110 transition-transform duration-300">
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
                <span className="font-bold text-xl leading-none tracking-tight text-white">OMEGA</span>
                <span className="text-xs font-medium tracking-widest uppercase text-primary">Sportswear</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              {TAGLINE} - Premium sportswear and garment supplier in Ethiopia. Quality, durability, and custom branding for winners.
            </p>
            <div className="flex items-center space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon size={20} className="text-gray-400 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-primary">Quick Links</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-primary">Our Products</h3>
            <ul className="space-y-4">
              {PRODUCT_CATEGORIES.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-primary hover:text-white transition-colors duration-200 font-bold text-sm uppercase tracking-widest">
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-primary">Contact Info</h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <span className="text-gray-400 text-sm leading-relaxed">{CONTACT_ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-primary shrink-0" size={20} />
                <span className="text-gray-400 text-sm">{CONTACT_PHONE}</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-primary shrink-0" size={20} />
                <span className="text-gray-400 text-sm">{CONTACT_EMAIL}</span>
              </li>
              <li className="flex items-center space-x-4">
                <Clock className="text-primary shrink-0" size={20} />
                <span className="text-gray-400 text-sm">{WORKING_HOURS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © {currentYear} {BRAND_NAME}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-gray-500 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
