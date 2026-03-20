import React, { useRef } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { BookOpen, Users, Award, Heart, ArrowRight, Star } from 'lucide-react';
import { mockAchievements, mockTestimonials } from '../mock';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

/* ── helpers ────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
});

const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* Numbers stripped of "+" for CountUp */
const parseNum = (str) => parseInt(String(str).replace(/\D/g, ''), 10) || 0;
const hasSuffix = (str) => String(str).includes('+');

/* ── component ──────────────────────────────────────────── */
const HomePage = () => {
  const navigate = useNavigate();

  const featRef  = useRef(null);
  const achRef   = useRef(null);
  const ctaRef   = useRef(null);
  const testRef  = useRef(null);

  const featInView = useInView(featRef,  { once: true, margin: '-80px' });
  const achInView  = useInView(achRef,   { once: true, margin: '-80px' });
  const ctaInView  = useInView(ctaRef,   { once: true, margin: '-80px' });
  const testInView = useInView(testRef,  { once: true, margin: '-80px' });

  const features = [
    {
      icon: BookOpen,
      title: 'Metode Tilawati',
      description: "Pembelajaran Al-Qur'an dengan metode yang terbukti efektif dan terstruktur",
      color: '#dcfce7',
    },
    {
      icon: Users,
      title: 'Pengajar Bersertifikat',
      description: 'Ustadz dan ustadzah berpengalaman dengan sertifikasi metode Tilawati',
      color: '#fef9c3',
    },
    {
      icon: Award,
      title: 'Program Terstruktur',
      description: 'Kurikulum lengkap dari dasar hingga mahir dengan evaluasi berkala',
      color: '#ffe4e6',
    },
    {
      icon: Heart,
      title: 'Pembinaan Karakter',
      description: 'Fokus pada pengembangan akhlak mulia dan nilai-nilai Islam',
      color: '#e0f2fe',
    },
  ];

  return (
    <div className="home-page">

      {/* ── HERO ── */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* bg overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/90 via-green-900/80 to-green-800/70 z-[1]" />

        {/* bg image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1643429096345-9de0d2ab7e7c?crop=entropy&cs=srgb&fm=jpg&q=85)' }}
        />

        {/* decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-3xl z-[1]" />
        <div className="absolute bottom-1/3 left-1/5 w-96 h-96 rounded-full bg-green-400/10 blur-3xl z-[1]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">

            {/* badge */}
            <motion.div {...fadeUp(0)} className="mb-6">
              <div className="hero-badge">
                Pusat Pendidikan Al-Qur&apos;an
              </div>
            </motion.div>

            {/* title */}
            <motion.h1
              {...fadeUp(0.15)}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
            >
              Belajar Al-Qur&apos;an dengan{' '}
              <span className="text-[#D4AF37]">Metode Tilawati</span>
            </motion.h1>

            {/* subtitle */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto"
            >
              Pusat pendidikan Al-Qur&apos;an yang berfokus pada bacaan tartil, tajwid,
              dan pembinaan karakter Islami
            </motion.p>

            {/* buttons */}
            <motion.div
              {...fadeUp(0.45)}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Button
                size="lg"
                className="group bg-[#D4AF37] hover:bg-[#f0d97a] text-white hover:text-[#0d4a2a] font-semibold px-8 py-6 text-base rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(212,175,55,0.5)]"
                onClick={() => navigate('/contact')}
              >
                Daftar Sekarang
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="secondary-button px-8 py-6 text-base rounded-xl hover:bg-[#D4AF37]/20 hover:border-[#D4AF37] hover:text-[#f0d97a] transition-all duration-300"
                onClick={() => navigate('/programs')}
              >
                Lihat Program
              </Button>
            </motion.div>

          </div>
        </div>

        {/* wave */}
        <div className="hero-wave absolute bottom-0 left-0 w-full" />
      </section>

      {/* ── FEATURES ── */}
      <section ref={featRef} className="features-section py-24">
        <div className="container mx-auto px-4">

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={featInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Keunggulan Kami</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
              Mengapa Memilih TEC AN-NAHL?
            </h2>
            <div className="section-divider"><span>✦</span></div>
            <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">
              Keunggulan yang membuat kami berbeda dan dipercaya selama lebih dari 15 tahun
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            animate={featInView ? 'animate' : 'initial'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={cardVariant}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Card className="feature-card text-center group cursor-pointer h-full border border-transparent hover:border-[#D4AF37]/40 hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] transition-all duration-300">
                    <CardHeader>
                      <div
                        className="feature-icon-wrap transition-all duration-300 group-hover:scale-110"
                        style={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}cc)` }}
                      >
                        <feature.icon className="w-7 h-7 text-green-700 transition-all group-hover:text-white" />
                      </div>
                      <CardTitle className="text-lg mt-2 group-hover:text-green-800 transition-colors">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section ref={achRef} className="achievements-section py-24">
        <div className="container mx-auto px-4">

          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={achInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Pencapaian Kami</span>
            <h2 className="text-4xl font-bold text-white mt-1">
              Dipercaya Ribuan Santri
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            animate={achInView ? 'animate' : 'initial'}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {mockAchievements.map((ach) => (
              <motion.div key={ach.id} variants={cardVariant}>
                <div className="achievement-item text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-1">
                    {achInView && (
                      <CountUp
                        end={parseNum(ach.number)}
                        duration={3}
                        separator=","
                      />
                    )}
                    {hasSuffix(ach.number) && (
                      <span className="achievement-suffix">+</span>
                    )}
                  </div>
                  <div className="text-white/70 text-sm font-medium tracking-wide uppercase">
                    {ach.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── TESTIMONIAL PREVIEW ── */}
      <section ref={testRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">

          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={testInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Kata Mereka</span>
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mt-1">
              Testimoni Santri & Wali
            </h2>
            <div className="section-divider"><span>✦</span></div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            animate={testInView ? 'animate' : 'initial'}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {mockTestimonials.slice(0, 2).map((t) => (
              <motion.div key={t.id} variants={cardVariant}>
                <Card className="testimonial-card h-full">
                  <CardHeader>
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 star-icon" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="testimonial-text mb-4">"{t.text}"</p>
                    <div className="testimonial-author">
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-gray-400">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="group border-2 border-green-700 text-green-700 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_6px_24px_rgba(212,175,55,0.35)] hover:scale-105"
              onClick={() => navigate('/testimonials')}
            >
              Lihat Semua Testimoni
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} className="cta-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-card rounded-2xl overflow-hidden relative">
              <div className="relative z-10 py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Siap Memulai Perjalanan Anda?
                  </h2>
                  <p className="text-white/75 text-lg">
                    Bergabunglah dengan ribuan santri yang telah memperbaiki bacaan Al-Qur&apos;an mereka
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#b8962e] text-white px-10 py-6 text-base font-semibold rounded-xl shadow-lg shrink-0 hover:scale-105 transition-transform"
                  onClick={() => navigate('/contact')}
                >
                  Daftar Sekarang <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
