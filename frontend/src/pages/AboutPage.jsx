import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Target, Eye, BookOpen, CheckCircle2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] },
});

const AboutPage = () => {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="page-hero py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              {...fadeUp(0)}
              className="section-eyebrow"
            >
              Mengenal Kami
            </motion.span>
            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl md:text-6xl font-bold mt-2 mb-6 text-white"
            >
              Tentang TEC AN-NAHL
            </motion.h1>
            <motion.p {...fadeUp(0.2)} className="text-xl text-white/80">
              Pusat pendidikan Al-Qur&apos;an yang berkomitmen menghasilkan generasi
              Qur&apos;ani berakhlak mulia
            </motion.p>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeUp(0)}>
              <span className="section-eyebrow">Perjalanan Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 mt-1">
                Sejarah TEC AN-NAHL
              </h2>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <Card className="content-card">
                <CardContent className="space-y-5 text-gray-600 leading-relaxed pt-6 text-base md:text-lg">
                  <p>
                    <strong className="text-green-800">TEC AN-NAHL</strong> (Tilawati Education Center An-Nahl)
                    didirikan dengan visi mulia untuk menjadi pusat pendidikan Al-Qur&apos;an yang unggul. Berawal
                    dari kepedulian terhadap pentingnya pembelajaran Al-Qur&apos;an yang berkualitas, kami memulai
                    perjalanan pada tahun <strong>2009</strong>.
                  </p>
                  <p>
                    Nama <em>"An-Nahl"</em> diambil dari Surat An-Nahl yang berarti "Lebah". Seperti lebah yang
                    menghasilkan madu yang bermanfaat, kami berkomitmen menghasilkan lulusan yang bermanfaat bagi
                    masyarakat dengan bekal Al-Qur&apos;an dan akhlak mulia.
                  </p>
                  <p>
                    Selama lebih dari <strong>15 tahun</strong>, kami telah melayani ribuan santri dari berbagai
                    kalangan usia. Metode Tilawati yang kami terapkan terbukti efektif dalam membantu santri
                    menguasai bacaan Al-Qur&apos;an dengan tartil dan benar.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TILAWATI METHOD */}
      <section className="py-20 tilawati-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <motion.div {...fadeUp(0)} className="mb-8">
              <span className="section-eyebrow">Metode Pembelajaran</span>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <Card className="content-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-green-700" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl text-green-800">
                      Metode Tilawati
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5 text-gray-600 text-base md:text-lg">
                  <p>
                    Metode Tilawati adalah metode pembelajaran Al-Qur&apos;an yang sistematis dan terstruktur.
                    Dikembangkan oleh para ahli pendidikan Al-Qur&apos;an, metode ini telah terbukti efektif di
                    berbagai lembaga pendidikan Al-Qur&apos;an di Indonesia.
                  </p>

                  <div>
                    <h3 className="font-semibold text-lg text-green-800 mb-3">Keunggulan Metode Tilawati:</h3>
                    <ul className="space-y-2">
                      {[
                        'Pembelajaran bertahap dari dasar hingga mahir',
                        'Penekanan pada ketepatan makhraj dan sifat huruf',
                        'Sistem evaluasi yang terukur dan objektif',
                        'Pendekatan klasikal yang efektif dan efisien',
                        'Materi pembelajaran yang standar dan terstruktur',
                        'Pengajar yang tersertifikasi dan kompeten',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Dengan metode ini, santri tidak hanya belajar membaca Al-Qur&apos;an, tetapi juga memahami
                    tajwid dengan baik sehingga dapat membaca dengan tartil sesuai kaidah yang benar.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">

          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <span className="section-eyebrow">Arah & Tujuan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mt-1">
              Visi &amp; Misi Kami
            </h2>
            <div className="section-divider mt-3"><span>✦</span></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* VISION */}
            <motion.div {...fadeUp(0.1)}>
              <Card className="hover-lift h-full bg-gradient-to-br from-green-900 to-green-700 border-none">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Eye className="w-7 h-7 text-[#D4AF37]" />
                    <CardTitle className="text-2xl text-white">Visi</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-base leading-relaxed">
                    Menjadi pusat pendidikan Al-Qur&apos;an terdepan yang menghasilkan generasi Qur&apos;ani
                    berakhlak mulia, cerdas, dan bermanfaat bagi umat.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* MISSION */}
            <motion.div {...fadeUp(0.2)}>
              <Card className="hover-lift h-full bg-gradient-to-br from-[#b8962e] to-[#D4AF37] border-none">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Target className="w-7 h-7 text-white" />
                    <CardTitle className="text-2xl text-white">Misi</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      'Menyelenggarakan pendidikan Al-Qur\'an berkualitas',
                      'Membina akhlak mulia sesuai nilai-nilai Islam',
                      'Mengembangkan metode pembelajaran yang efektif',
                      'Mencetak pengajar Al-Qur\'an yang kompeten',
                      'Membangun lingkungan Islami yang kondusif',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/90 text-sm">
                        <span className="text-white/60 mt-0.5">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
