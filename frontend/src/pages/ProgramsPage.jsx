import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Clock, Users, Calendar, CheckCircle2 } from 'lucide-react';
import { mockPrograms } from '../mock';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const programImages = [
  'https://images.unsplash.com/photo-1662492753260-e71f45146ba9?w=600&q=80',
  'https://images.unsplash.com/photo-1627790497727-41fb43f961be?w=600&q=80',
  'https://images.unsplash.com/photo-1495846192701-65d0d48e66fe?w=600&q=80',
];

const ProgramsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="programs-page">

      {/* HERO */}
      <section className="page-hero py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
              className="section-eyebrow"
            >
              Pilih Program Anda
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mt-2 mb-6 text-white"
            >
              Program Pembelajaran
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Program untuk segala usia dengan metode pembelajaran yang disesuaikan
            </motion.p>
          </div>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {mockPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
              >
                <Card className="program-card hover-lift h-full flex flex-col">
                  {/* image */}
                  <div
                    className="program-image"
                    style={{ backgroundImage: `url(${programImages[index]})` }}
                  />

                  <CardHeader>
                    <CardTitle className="text-xl text-green-800">{program.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed pt-1">
                      {program.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3 flex-1">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                        <Users className="w-4 h-4 text-green-700" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Usia: </span>
                        {program.ageGroup}
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Calendar className="w-4 h-4 text-green-700" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Jadwal: </span>
                        {program.schedule}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-green-700" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Durasi: </span>
                        {program.duration}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button
                      className="w-full cta-button text-white font-semibold"
                      onClick={() => navigate('/contact')}
                    >
                      Daftar Program Ini
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="py-20 info-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="content-card">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-green-800">
                  Informasi Tambahan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-600">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg text-green-800 mb-3">Fasilitas Pembelajaran:</h3>
                    <ul className="space-y-2">
                      {[
                        'Ruang kelas ber-AC yang nyaman',
                        "Al-Qur'an dan buku panduan Tilawati",
                        'Perpustakaan Islami',
                        'Musholla untuk praktik ibadah',
                        'Area parkir yang luas',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-green-800 mb-3">Sistem Pembelajaran:</h3>
                    <ul className="space-y-2">
                      {[
                        'Klasikal, maks. 15 santri per kelas',
                        'Evaluasi berkala setiap 3 bulan',
                        'Rapor perkembangan santri',
                        'Konsultasi rutin dengan orang tua',
                        'Wisuda bagi santri yang telah menyelesaikan jilid',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 p-5 rounded-xl border-l-4 border-[#D4AF37]">
                  <p className="font-semibold text-amber-900 mb-1">📌 Catatan Penting</p>
                  <p className="text-sm text-amber-800">
                    Pendaftaran dibuka sepanjang tahun. Kelas baru dimulai setiap awal bulan.
                    Untuk informasi lebih lanjut, silakan hubungi kami.
                  </p>
                </div>

              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ProgramsPage;
