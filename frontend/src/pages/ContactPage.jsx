import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { MapPin, Phone, Mail, MessageCircle, Loader2, Baby, Users, UserCheck, CheckCircle2 } from 'lucide-react';
import { toast } from '../components/ui/sonner';
import axios from 'axios';
import { motion } from 'framer-motion';
import { mockPrograms } from '../mock';

const API = 'http://127.0.0.1:8000/api';

const programIcons = [Baby, Users, UserCheck];

const programAccents = [
  { bg: 'bg-emerald-50', border: 'border-emerald-400', icon: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700' },
  { bg: 'bg-blue-50',    border: 'border-blue-400',    icon: 'text-blue-600',    badge: 'bg-blue-100 text-blue-700'       },
  { bg: 'bg-amber-50',   border: 'border-[#D4AF37]',   icon: 'text-amber-600',   badge: 'bg-amber-100 text-amber-700'     },
];

const programValues = ['anak', 'akhwat', 'akhi'];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', age: '', program: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.program) {
      toast.error('Silakan pilih program terlebih dahulu.');
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(`${API}/registrations`, { ...formData, age: Number(formData.age) });
      toast.success('Pendaftaran berhasil! Kami akan menghubungi Anda.');
      setFormData({ name: '', phone: '', email: '', age: '', program: '', message: '' });
    } catch {
      toast.error('Gagal mengirim data. Coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Halo TEC AN-NAHL 👋\n\nSaya ingin mendaftar program pembelajaran Al-Qur\'an.\n\nNama: \nUsia: \nProgram yang diminati: \n\nMohon informasinya lebih lanjut 🙏'
    );
    window.open(`https://wa.me/6285775526387?text=${message}`, '_blank');
  };

  const contactItems = [
    { icon: MapPin, label: 'Alamat',  lines: ['Jl. Arwana 2 No.11', 'Babelan, Bekasi'] },
    { icon: Phone,  label: 'Telepon', lines: ['+62 857-7552-6387']                       },
    { icon: Mail,   label: 'Email',   lines: ['TEC.ANNAHL@GMAIL.COM']                    },
  ];

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="page-hero py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="section-eyebrow"
            >
              Bergabung Bersama Kami
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mt-2 mb-6 text-white"
            >
              Hubungi Kami
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Isi formulir pendaftaran di bawah ini untuk bergabung bersama kami
            </motion.p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

            {/* LEFT — CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-5"
            >
              <Card className="content-card overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-green-700 to-[#D4AF37]" />
                <CardHeader>
                  <CardTitle className="text-xl text-green-800">Informasi Kontak</CardTitle>
                  <CardDescription>Hubungi kami langsung melalui:</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  {contactItems.map(({ icon: Icon, label, lines }) => (
                    <div key={label} className="flex gap-4">
                      <div className="info-icon-wrap">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{label}</p>
                        {lines.map((l, i) => (
                          <p key={i} className="text-gray-500 text-sm">{l}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-2">
                    <Button
                      className="w-full whatsapp-btn"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Hubungi via WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Jam Operasional */}
              <Card className="content-card">
                <CardContent className="pt-5 pb-5">
                  <h3 className="font-semibold text-green-800 mb-3">🕐 Jam Operasional</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Senin – Jumat</span>
                      <span className="font-medium text-gray-800">07.00 – 21.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabtu – Minggu</span>
                      <span className="font-medium text-gray-800">07.00 – 17.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* RIGHT — FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <Card className="content-card overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#D4AF37] to-green-700" />
                <CardHeader>
                  <CardTitle className="text-xl text-green-800">Formulir Pendaftaran</CardTitle>
                  <CardDescription>Isi data di bawah ini, kami akan segera menghubungi Anda</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-gray-700">Nama Lengkap *</Label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Masukkan nama lengkap"
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-gray-700">No. Telepon *</Label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="08xxxxxxxxxx"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-gray-700">Email</Label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="email@contoh.com"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-gray-700">Usia *</Label>
                        <Input
                          type="number"
                          value={formData.age}
                          onChange={(e) => handleChange('age', e.target.value)}
                          placeholder="Usia santri"
                          min="1"
                          required
                        />
                      </div>
                    </div>

                    {/* PROGRAM SELECTOR */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">Pilih Program *</Label>
                      <p className="text-xs text-gray-400">Klik salah satu program di bawah ini</p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                        {mockPrograms.map((program, index) => {
                          const Icon       = programIcons[index];
                          const accent     = programAccents[index];
                          const value      = programValues[index];
                          const isSelected = formData.program === value;

                          return (
                            <motion.div
                              key={program.id}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                            >
                              <button
                                type="button"
                                onClick={() => handleChange('program', value)}
                                className={`
                                  w-full text-left rounded-xl border-2 p-4 transition-all duration-200 relative
                                  ${isSelected
                                    ? `${accent.bg} ${accent.border} shadow-md`
                                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                                  }
                                `}
                              >
                                {isSelected && (
                                  <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: 'spring', stiffness: 400 }}
                                    className="absolute top-2 right-2"
                                  >
                                    <CheckCircle2 className={`w-5 h-5 ${accent.icon}`} />
                                  </motion.div>
                                )}
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${isSelected ? accent.bg : 'bg-gray-50'}`}>
                                  <Icon className={`w-5 h-5 ${isSelected ? accent.icon : 'text-gray-400'}`} />
                                </div>
                                <p className={`font-semibold text-sm mb-2 leading-snug ${isSelected ? 'text-gray-900' : 'text-gray-600'}`}>
                                  {program.title}
                                </p>
                                <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${isSelected ? accent.badge : 'bg-gray-100 text-gray-500'}`}>
                                  {program.ageGroup}
                                </span>
                              </button>
                            </motion.div>
                          );
                        })}
                      </div>

                      {!formData.program && (
                        <p className="text-xs text-gray-400 italic mt-1">* Wajib memilih salah satu program</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium text-gray-700">Pesan / Pertanyaan</Label>
                      <Textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full submit-btn py-3 rounded-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Mengirim...
                        </>
                      ) : (
                        'Kirim Pendaftaran'
                      )}
                    </Button>

                  </form>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
