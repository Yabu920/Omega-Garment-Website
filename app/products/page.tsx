'use client';

import { 
  FAQ_ITEMS, 
  PRODUCT_CATEGORIES 
} from '@/lib/constants';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Palette, 
  Printer, 
  Scissors, 
  Layers, 
  ArrowRight 
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useState } from 'react';

export default function ProductsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-accent overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://picsum.photos/seed/products/1920/1080?blur=5"
            alt="Products Header"
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
              Our Catalog
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Products & <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive range of high-performance sportswear and professional garment solutions.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Product Categories Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col md:flex-row bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src={`/categories/${category.id}.jpg`}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <category.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-accent mb-4">{category.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.shortDescription}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {category.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center space-x-3 text-sm font-medium text-gray-700">
                          <CheckCircle2 size={16} className="text-primary shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button href="/contact" variant="outline" size="sm" className="w-full sm:w-auto">
                    Inquire Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Customization Section */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/5 skew-x-12 transform -translate-x-1/2" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title="Full Customization"
                subtitle="Your team, your brand, your identity. We bring it to life."
                className="mb-8"
              />
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                At OMEGA, we understand that your sportswear is more than just clothing; it's a representation of your team's spirit and values. Our advanced customization techniques ensure your branding is sharp, durable, and professional.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Screen Printing", desc: "Vibrant, durable prints for large volume orders.", icon: Printer },
                  { title: "Embroidery", desc: "Premium, high-stitch count for a professional look.", icon: Scissors },
                  { title: "Sublimation", desc: "Full-color, edge-to-edge designs that never fade.", icon: Palette },
                  { title: "Heat Transfer", desc: "Perfect for individual names and numbers.", icon: Layers },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-accent mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Button href="/contact" className="group">
                  Get a Custom Quote
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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
              {/* <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-square bg-white">
                <Image
                  src="https://picsum.photos/seed/design/800/800"
                  alt="Customization Process"
                  fill
                  className="object-contain p-4"
                  referrerPolicy="no-referrer"
                />
              </div> */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold mb-1">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Custom Designs</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about ordering from OMEGA."
              centered
            />
            
            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="text-lg font-bold text-accent pr-8">{faq.question}</span>
                    <div className="shrink-0 text-primary">
                      {openFaqIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-200 pt-6">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://picsum.photos/seed/cta/1920/1080?blur=5"
            alt="CTA Background"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <Container className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            We specialize in custom garment solutions. Contact our team to discuss your unique requirements.
          </p>
          <Button href="/contact" size="lg" className="group">
            Start a Conversation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </Container>
      </section>
    </div>
  );
}
