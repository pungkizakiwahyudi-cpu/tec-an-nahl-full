import React, { useState } from 'react';
import { mockGallery } from '../mock';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Tag } from 'lucide-react';

const categoryLabels = {
  all:       'Semua',
  classroom: 'Kelas Belajar',
  event:     'Acara & Event',
  activity:  'Kegiatan',
  ibadah:    'Ibadah',
};

const GalleryPage = () => {
  const [selectedImage, setSelectedImage]   = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', ...new Set(mockGallery.map((g) => g.category))];
  const filtered   = activeCategory === 'all'
    ? mockGallery
    : mockGallery.filter((g) => g.category === activeCategory);

  return (
    <div className="gallery-page">

      {/* HERO */}
      <section className="page-hero py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="section-eyebrow"
            >
              Dokumentasi Kegiatan
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mt-2 mb-6 text-white"
            >
              Galeri Kegiatan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Dokumentasi kegiatan pembelajaran dan aktivitas santri di TEC AN-NAHL
            </motion.p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* FILTER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                  ${activeCategory === cat
                    ? 'bg-[#D4AF37] text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                `}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </motion.div>

          {/* GRID */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden" style={{ height: '240px' }}>
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-semibold text-sm">{image.title}</p>
                          <span className="inline-flex items-center gap-1 text-[#D4AF37] text-xs mt-1">
                            <Tag className="w-3 h-3" />
                            {categoryLabels[image.category] || image.category}
                          </span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <ZoomIn className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD BOTTOM */}
                  <div className="bg-white px-4 py-3 border border-t-0 border-gray-100 rounded-b-2xl">
                    <p className="font-semibold text-gray-800 text-sm">{image.title}</p>
                    <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">{image.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">Belum ada foto untuk kategori ini</p>
            </div>
          )}

        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)' }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Foto besar */}
              <div className="relative" style={{ maxHeight: '420px' }}>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full object-cover"
                  style={{ maxHeight: '420px' }}
                />
                {/* Tombol tutup */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                {/* Badge kategori */}
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center gap-1 bg-[#D4AF37] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3" />
                    {categoryLabels[selectedImage.category] || selectedImage.category}
                  </span>
                </div>
              </div>

              {/* Info kegiatan */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {selectedImage.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-xs text-gray-400">TEC AN-NAHL — Dokumentasi Kegiatan</p>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-xs font-semibold text-green-700 hover:text-green-900 transition-colors"
                  >
                    Tutup ✕
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default GalleryPage;
