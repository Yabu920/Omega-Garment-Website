'use client';

import { 
  BRAND_NAME, 
  TAGLINE 
} from '@/lib/constants';
import { motion } from 'motion/react';
import Image from 'next/image';
import { 
  Trophy, 
  Users, 
  Target, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-accent overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://picsum.photos/seed/about/1920/1080?blur=5"
            alt="About Header"
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
              Our Story
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
              About <span className="text-primary">OMEGA</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Empowering Ethiopian athletes and organizations with premium, custom-crafted sportswear since our inception.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title="The OMEGA Journey"
                subtitle="From a small workshop to a leading sportswear supplier in Ethiopia."
                className="mb-8"
              />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  OMEGA Sportswear Garment was founded with a simple yet powerful vision: to provide high-quality, durable, and professionally designed sportswear that reflects the spirit of winners. 
                </p>
                <p>
                  We recognized a gap in the Ethiopian market for premium custom teamwear that could compete with international brands while remaining accessible to local clubs, schools, and organizations. 
                </p>
                <p>
                  Today, OMEGA is synonymous with quality and reliability. Our state-of-the-art production facility in Addis Ababa combines traditional craftsmanship with modern technology to deliver garments that help our clients perform at their best.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center space-x-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100">
                  <Trophy className="text-primary" size={24} />
                  <span className="font-bold text-accent">10+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100">
                  <Users className="text-primary" size={24} />
                  <span className="font-bold text-accent">500+ Teams Served</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="https://picsum.photos/seed/omega-story/800/1000"
                  alt="OMEGA Workshop"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full -z-10" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Our Mission", 
                desc: "To empower every athlete and organization in Ethiopia with high-performance, custom-designed sportswear that inspires confidence and excellence.",
                icon: Target,
                color: "bg-blue-500"
              },
              { 
                title: "Our Vision", 
                desc: "To be the premier sportswear brand in East Africa, recognized for our innovation, quality craftsmanship, and commitment to the sporting community.",
                icon: Trophy,
                color: "bg-primary"
              },
              { 
                title: "Our Values", 
                desc: "Integrity, Quality, Innovation, and Community. We believe in building lasting relationships through consistent excellence and reliable service.",
                icon: Heart,
                color: "bg-red-500"
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-8 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-accent mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <Image
                src="https://picsum.photos/seed/omega-offer/800/600"
                alt="Our Offerings"
                width={800}
                height={600}
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <SectionHeading
                title="What We Offer"
                subtitle="Comprehensive garment solutions for every sector."
                className="mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Custom Team Uniforms",
                  "School & University Wear",
                  "Corporate Office Attire",
                  "Bulk Promotional T-shirts",
                  "Professional Tracksuits",
                  "Specialized Sport Jackets",
                  "Custom Embroidery & Printing",
                  "Bespoke Design Consulting",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} className="text-primary" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button href="/products" className="group">
                  Explore Products
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Quality Promise */}
      <section className="section-padding bg-accent text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-primary/20">
              <ShieldCheck size={40} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Quality Promise</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              At OMEGA, quality is not just a standard; it's our obsession. We promise that every garment leaving our facility has been meticulously inspected for material integrity, stitching precision, and branding accuracy. If it's not perfect, it's not OMEGA.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-primary text-lg mb-2">Premium Fabrics</h4>
                <p className="text-sm text-gray-400">Sourced from the best suppliers for breathability and comfort.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-primary text-lg mb-2">Expert Tailoring</h4>
                <p className="text-sm text-gray-400">Skilled craftsmen with decades of experience in sportswear.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-primary text-lg mb-2">Durable Branding</h4>
                <p className="text-sm text-gray-400">Prints and embroidery that stay vibrant wash after wash.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
