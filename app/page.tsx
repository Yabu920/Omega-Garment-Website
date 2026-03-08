'use client';

import { 
  BRAND_NAME, 
  PRODUCT_CATEGORIES, 
  TAGLINE, 
  TESTIMONIALS, 
  TRUST_BADGES 
} from '@/lib/constants';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Trophy, 
  Users, 
  Truck, 
  ShieldCheck, 
  Zap, 
  Palette,
  ChevronRight
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/sports/1920/1080?blur=2"
            alt="Hero Background"
            fill
            className="object-cover brightness-[0.3]"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/80 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="primary" className="mb-6 uppercase tracking-widest px-4 py-2 text-sm">
                {TAGLINE}
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                Premium <span className="text-primary italic">Sportswear</span> For Every Champion
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                Custom-designed uniforms, T-shirts, and tracksuits for sport clubs, universities, schools, and offices across Ethiopia.
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button href="/products" size="lg" className="w-full sm:w-auto group">
                  View Products
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_BADGES.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <badge.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-accent mb-1">{badge.title}</h3>
                  <p className="text-sm text-gray-500 leading-snug">{badge.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Category Preview */}
      <section className="section-padding bg-gray-50">
        <Container>
          <SectionHeading
            title="Our Product Categories"
            subtitle="Explore our wide range of premium sportswear and garment solutions tailored for every need."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={`/categories/${category.id}.jpg`}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <category.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-300 line-clamp-2 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      {category.shortDescription}
                    </p>
                    <Link 
                      href="/products" 
                      className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-widest hover:text-white transition-colors duration-300"
                    >
                      Learn More <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/products" variant="outline" size="lg">
              View All Products & Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose OMEGA */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  { title: "Unmatched Quality", desc: "We use only the finest fabrics that withstand the rigors of intense sports and daily wear." },
                  { title: "Durability Guaranteed", desc: "Our garments are built to last, with reinforced stitching and high-performance materials." },
                  { title: "Full Customization", desc: "From logo placement to custom color schemes, we bring your unique vision to life." },
                  { title: "Consistent Supply", desc: "Reliable manufacturing capacity to ensure you never run out of stock for your team." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-accent text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
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
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/factory/800/1000"
                  alt="OMEGA Production"
                  width={800}
                  height={1000}
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Stats Overlay */}
              <div className="absolute -bottom-10 -left-10 z-20 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center space-x-6">
                  <div>
                    <p className="text-4xl font-bold text-primary">10k+</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Units Monthly</p>
                  </div>
                  <div className="w-px h-12 bg-gray-200" />
                  <div>
                    <p className="text-4xl font-bold text-primary">500+</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Happy Clients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Simple Process Section */}
      <section className="section-padding bg-accent text-white">
        <Container>
          <SectionHeading
            title="How We Work"
            subtitle="Our streamlined process ensures you get the perfect sportswear every time."
            centered
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 hidden md:block z-0" />
            
            {[
              { step: "01", title: "Consult", desc: "We discuss your needs, style, and branding requirements." },
              { step: "02", title: "Design", desc: "Our team creates custom mockups for your approval." },
              { step: "03", title: "Produce", desc: "Precision manufacturing using high-quality materials." },
              { step: "04", title: "Deliver", desc: "Fast and reliable delivery to your doorstep." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 bg-accent p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-primary/20">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Trusted by Ethiopia's leading sport clubs, schools, and organizations."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative"
              >
                <div className="absolute top-8 right-8 text-primary/20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H3.017V21H5.017Z" />
                  </svg>
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-accent">{testimonial.name}</h5>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
        
        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
            <div className="mb-10 lg:mb-0 lg:mr-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Gear Up Your Team?</h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                Join hundreds of winning organizations who trust OMEGA for their sportswear needs. Get a custom quote today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button href="/contact" size="lg" variant="secondary" className="w-full sm:w-auto">
                Get a Quote
              </Button>
              <Button href="/gallery" size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                View Gallery
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
