import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BRAND_NAME, TAGLINE } from '@/lib/constants';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://omegasportswear.com'),
  title: {
    default: `${BRAND_NAME} | ${TAGLINE}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: 'Premium sportswear and garment supplier in Ethiopia. Custom uniforms, T-shirts, tracksuits, and corporate wear for teams, schools, and offices.',
  keywords: ['sportswear Ethiopia', 'custom uniforms Addis Ababa', 'garment supplier Ethiopia', 'teamwear', 'school uniforms', 'corporate wear'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://omegasportswear.com',
    siteName: BRAND_NAME,
    title: BRAND_NAME,
    description: 'Winners Choice! Premium sportswear and garment supplier in Ethiopia.',
    images: [
      {
        url: '/brand/logo.jpg',
        width: 1200,
        height: 630,
        alt: BRAND_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: BRAND_NAME,
    description: 'Winners Choice! Premium sportswear and garment supplier in Ethiopia.',
    images: ['/brand/logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
