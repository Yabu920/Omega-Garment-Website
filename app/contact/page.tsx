'use client';

import { 
  CONTACT_ADDRESS, 
  CONTACT_EMAIL, 
  CONTACT_MAP_URL,
  CONTACT_PHONE, 
  SOCIAL_LINKS, 
  WORKING_HOURS 
} from '@/lib/constants';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  CheckCircle2 
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useState } from 'react';

export default function ContactPage() {
  const contactMapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.4571719349565!2d38.48330471829172!3d7.05564744999005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b14ff5417d2d6f%3A0x55738773937e25fb!2sOmega%20Garment%20Hawassa!5e1!3m2!1sen!2set!4v1773889373735!5m2!1sen!2set';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const buildEmailPayload = () => {
    const subject = encodeURIComponent(`Inquiry from ${formData.name}: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );

    return { subject, body };
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { subject, body } = buildEmailPayload();
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleGmailSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { subject, body } = buildEmailPayload();
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${subject}&body=${body}`,
      '_blank'
    );
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  // const handleWhatsAppSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Construct WhatsApp message
  //   const text = encodeURIComponent(
  //     `*New Inquiry from OMEGA Website*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`
  //   );
    
  //   setTimeout(() => {
  //     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  //     setIsSubmitting(false);
  //     setIsSuccess(true);
  //   }, 1000);
  // };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-accent overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://picsum.photos/seed/contact/1920/1080?blur=5"
            alt="Contact Header"
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
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Have a question or ready to start your project? We're here to help you win.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info Block */}
            <div className="lg:col-span-1 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionHeading
                  title="Contact Details"
                  subtitle="Reach out to us through any of these channels."
                  className="mb-8"
                />
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <Phone size={24} className="text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-accent text-lg mb-1 uppercase tracking-wider">Phone</h4>
                      <p className="text-gray-600 font-medium">{CONTACT_PHONE}</p>
                      <p className="text-gray-400 text-sm">Mon-Sat, 8:30 AM - 6:30 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <Mail size={24} className="text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-accent text-lg mb-1 uppercase tracking-wider">Email</h4>
                      <p className="text-gray-600 font-medium">{CONTACT_EMAIL}</p>
                      <p className="text-gray-400 text-sm">We'll respond within 24 hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <MapPin size={24} className="text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-accent text-lg mb-1 uppercase tracking-wider">Address</h4>
                      <a
                        href={CONTACT_MAP_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-gray-600 transition-colors hover:text-primary"
                      >
                        {CONTACT_ADDRESS}
                      </a>
                      <p className="text-gray-400 text-sm">Tap the address to open directions.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <Clock size={24} className="text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-accent text-lg mb-1 uppercase tracking-wider">Working Hours</h4>
                      <p className="text-gray-600 font-medium">{WORKING_HOURS}</p>
                      <p className="text-gray-400 text-sm">Closed on Sundays & Public Holidays</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-gray-100">
                  <h4 className="font-bold text-accent mb-6 uppercase tracking-widest text-sm">Follow Us</h4>
                  <div className="flex items-center space-x-4">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group shadow-sm border border-gray-100"
                        aria-label={social.name}
                      >
                        <social.icon size={24} className="text-gray-400 group-hover:text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form Block */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-4xl border border-gray-100 bg-gray-50 p-8 shadow-sm md:p-12"
              >
                {/* Success Message Overlay */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-10 text-center"
                    >
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 size={48} className="text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-accent mb-4">Message Sent!</h3>
                      <p className="text-gray-600 max-w-sm mb-8">
                        Thank you for reaching out to OMEGA. We have received your inquiry and will get back to you shortly.
                      </p>
                      <Button onClick={() => setIsSuccess(false)} variant="outline">
                        Send Another Message
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <SectionHeading
                  title="Send Us a Message"
                  subtitle="Fill out the form below and choose your preferred email method."
                  className="mb-10"
                />

                <form className="space-y-6" onSubmit={handleEmailSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-accent uppercase tracking-widest">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Abebe Kebede"
                        className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-accent uppercase tracking-widest">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. abebe@example.com"
                        className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-accent uppercase tracking-widest">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +251 911 234 567"
                        className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-accent uppercase tracking-widest">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 appearance-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="Uniform Inquiry">Uniform Inquiry</option>
                        <option value="Bulk Order">Bulk Order</option>
                        <option value="Custom Design">Custom Design</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-accent uppercase tracking-widest">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 resize-none"
                    />
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto group"
                    >
                      <Send className="mr-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={20} />
                      Send via Email App
                    </Button>
                    <Button
                      type="button"
                      onClick={handleGmailSubmit}
                      disabled={isSubmitting}
                      variant="outline"
                      className="w-full sm:w-auto group"
                    >
                      <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                      Send via Gmail
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-16 md:py-20">
        <Container>
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-bold text-accent md:text-4xl">Our Location</h3>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Find OMEGA Sportswear directly on the map below.
            </p>
          </div>

          <div className="overflow-hidden rounded-4xl border border-gray-200 bg-white shadow-xl ring-1 ring-black/5">
            <iframe
              title="OMEGA Sportswear location map"
              src={contactMapEmbedUrl}
              className="h-[420px] w-full md:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <Container>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Winning Season?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Our team is standing by to help you design and produce the perfect sportswear for your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button href="/products" variant="secondary" size="lg" className="w-full sm:w-auto">
              View Catalog
            </Button>
            <Button href="/gallery" variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
              See Our Work
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
