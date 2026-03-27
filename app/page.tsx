'use client';

import {
  BRAND_NAME,
  TAGLINE,
  TESTIMONIALS,
  TRUST_BADGES,
} from '@/lib/constants';
import { motion } from 'motion/react';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

const featuredProductImages = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  src: `/Products/product-${index + 1}.jpg`,
}));

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/sports/1920/1080?blur=2"
            alt="Hero Background"
            fill
            className="object-cover brightness-[0.22]"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,17,28,0.72),rgba(10,17,28,0.9))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,130,200,0.18),transparent_34%)]" />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mx-auto mb-8 w-32 rounded-full bg-black/95 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/15 sm:w-40 md:mb-10 md:w-52 lg:w-60">
                <div className="relative aspect-square overflow-hidden rounded-full">
                  <Image
                    src="/brand/logo-1.jpg"
                    alt={BRAND_NAME}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 208px, 240px"
                    priority
                  />
                </div>
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-white/70 md:text-base">
                {BRAND_NAME}
              </p>
              <h1 className="mb-5 text-4xl font-black leading-tight text-primary md:text-5xl lg:text-6xl">
                የአሸናፊዎች ምርጫ
              </h1>
              <p className="mx-auto mb-3 max-w-2xl text-xl font-semibold text-white md:text-2xl">
                Custom Sportswear for Teams, Schools, and Organizations
              </p>
              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
                {TAGLINE} Premium uniforms, T-shirts, and tracksuits crafted for clubs,
                schools, and organizations across Ethiopia.
              </p>
              <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0">
                <Button href="/products" size="lg" className="w-full sm:w-auto group">
                  View Products
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-white/50 md:block"
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2">
            <div className="h-1.5 w-1.5 rounded-full bg-white" />
          </div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="border-b border-gray-100 bg-white py-12">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_BADGES.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 rounded-xl p-4 transition-colors duration-300 hover:bg-gray-50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <badge.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-accent">{badge.title}</h3>
                  <p className="text-sm leading-snug text-gray-500">{badge.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Video Showcase */}
      <section className="relative overflow-hidden bg-accent text-white section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,130,200,0.22),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_28%)]" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <Badge className="mb-5 border-white/15 bg-white/10 text-white uppercase tracking-[0.26em]">
              In Motion
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              See OMEGA In Action
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              A quick look at our craftsmanship, garments, and production quality
              through real video highlights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              {
                src: '/videos/home-1.mp4',
                title: 'Production Highlight',
              },
              {
                src: '/videos/home-2.mp4',
                title: 'Sportswear Showcase',
              },
            ].map((video, index) => (
              <motion.div
                key={video.src}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20"
              >
                <div className="relative aspect-[16/10] bg-black">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="border-t border-white/10 px-5 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
                    {video.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Preview */}
      <section className="bg-gray-50 section-padding">
        <Container>
          <SectionHeading
            title="Featured Products"
            subtitle="A quick look at some of our recent sportswear pieces. Explore the full collection on the Products page."
            centered
          />

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {featuredProductImages.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <Image
                    src={product.src}
                    alt={`Featured product ${product.id}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/products" variant="outline" size="lg">
              View All Products
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose OMEGA */}
      <section className="relative overflow-hidden bg-white section-padding">
        <div className="absolute top-0 right-0 h-full w-1/3 translate-x-1/2 -skew-x-12 transform bg-primary/5" />

        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title="Why Choose OMEGA Sportswear?"
                subtitle="We don't just make clothes; we craft identities for winners."
                className="mb-8"
              />

              <div className="space-y-8">
                {[
                  {
                    title: 'Unmatched Quality',
                    desc: 'We use only the finest fabrics that withstand the rigors of intense sports and daily wear.',
                  },
                  {
                    title: 'Durability Guaranteed',
                    desc: 'Our garments are built to last, with reinforced stitching and high-performance materials.',
                  },
                  {
                    title: 'Full Customization',
                    desc: 'From logo placement to custom color schemes, we bring your unique vision to life.',
                  },
                  {
                    title: 'Consistent Supply',
                    desc: 'Reliable manufacturing capacity to ensure you never run out of stock for your team.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-bold text-accent">{item.title}</h4>
                      <p className="leading-relaxed text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button href="/about" variant="primary">
                  Learn More About Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/factory/800/1000"
                  alt="OMEGA Production"
                  width={800}
                  height={1000}
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 z-20 hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-xl md:block">
                <div className="flex items-center space-x-6">
                  <div>
                    <p className="text-4xl font-bold text-primary">10k+</p>
                    <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                      Units Monthly
                    </p>
                  </div>
                  <div className="h-12 w-px bg-gray-200" />
                  <div>
                    <p className="text-4xl font-bold text-primary">500+</p>
                    <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Simple Process Section */}
      <section className="bg-accent text-white section-padding">
        <Container>
          <SectionHeading
            title="How We Work"
            subtitle="Our streamlined process ensures you get the perfect sportswear every time."
            centered
            className="text-white"
          />

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="absolute left-0 top-1/2 z-0 hidden h-0.5 w-full -translate-y-1/2 bg-primary/20 md:block" />

            {[
              {
                step: '01',
                title: 'Consult',
                desc: 'We discuss your needs, style, and branding requirements.',
              },
              {
                step: '02',
                title: 'Design',
                desc: 'Our team creates custom mockups for your approval.',
              },
              {
                step: '03',
                title: 'Produce',
                desc: 'Precision manufacturing using high-quality materials.',
              },
              {
                step: '04',
                title: 'Deliver',
                desc: 'Fast and reliable delivery to your doorstep.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 rounded-2xl border border-white/10 bg-accent p-8 text-center transition-colors duration-300 hover:border-primary/50"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold shadow-lg shadow-primary/20">
                  {item.step}
                </div>
                <h4 className="mb-3 text-xl font-bold">{item.title}</h4>
                <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-white section-padding">
        <Container>
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Trusted by Ethiopia's leading sport clubs, schools, and organizations."
            centered
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-3xl border border-gray-100 bg-gray-50 p-8"
              >
                <div className="absolute right-8 top-8 text-primary/20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H3.017V21H5.017Z" />
                  </svg>
                </div>
                <p className="mb-8 italic leading-relaxed text-gray-600">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-accent">{testimonial.name}</h5>
                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-white/10" />

        <Container className="relative z-10">
          <div className="flex flex-col items-center justify-between text-center lg:flex-row lg:text-left">
            <div className="mb-10 lg:mb-0 lg:mr-10">
              <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Ready to Gear Up Your Team?
              </h2>
              <p className="max-w-2xl text-lg text-white/80 md:text-xl">
                Join hundreds of winning organizations who trust OMEGA for their
                sportswear needs. Get a custom quote today.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button href="/contact" size="lg" variant="secondary" className="w-full sm:w-auto">
                Get a Quote
              </Button>
              <Button
                href="/gallery"
                size="lg"
                variant="outline"
                className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
              >
                View Gallery
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
