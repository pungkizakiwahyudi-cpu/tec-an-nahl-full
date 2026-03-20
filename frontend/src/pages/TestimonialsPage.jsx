import React from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Star, Quote } from 'lucide-react';
import { mockTestimonials } from '../mock';
import { motion } from 'framer-motion';

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page">

      {/* HERO */}
      <section className="page-hero py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
              className="section-eyebrow"
            >
              Kata Mereka
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mt-2 mb-6 text-white"
            >
              Testimoni
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Apa kata mereka yang telah merasakan pembelajaran di TEC AN-NAHL
            </motion.p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="section-eyebrow">Pengalaman Nyata</span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mt-1">
              Cerita Santri &amp; Wali
            </h2>
            <div className="section-divider mt-3"><span>✦</span></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {mockTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <Card className="testimonial-card h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 star-icon" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <p className="testimonial-text text-base mb-6">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="testimonial-author flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-green-700 font-bold text-sm shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="quote-section py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Card className="quote-card">
              <CardContent className="py-12 px-8 md:px-16">
                <div className="quote-mark text-6xl mb-6">﷽</div>
                <blockquote className="text-xl md:text-2xl font-semibold text-white mb-6 leading-relaxed">
                  &ldquo;Sebaik-baik kalian adalah yang mempelajari Al-Qur&apos;an dan mengajarkannya&rdquo;
                </blockquote>
                <cite className="text-[#D4AF37] text-base not-italic font-medium">
                  — HR. Bukhari
                </cite>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default TestimonialsPage;
