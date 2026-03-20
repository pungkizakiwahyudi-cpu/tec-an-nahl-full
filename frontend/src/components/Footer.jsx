import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import logo from '../assets/logo/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/',             label: 'Beranda'     },
    { to: '/about',        label: 'Tentang Kami' },
    { to: '/programs',     label: 'Program'     },
    { to: '/gallery',      label: 'Galeri'      },
    { to: '/testimonials', label: 'Testimoni'   },
    { to: '/contact',      label: 'Kontak'      },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* BRAND */}
            <div className="lg:col-span-1">
              {/* Logo + Nama */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={logo}
                  alt="TEC AN-NAHL Logo"
                  className="h-14 w-14 object-contain rounded-full border-2 border-[#D4AF37]/30"
                />
                <div>
                  <h3 className="footer-title mb-0">TEC AN-NAHL</h3>
                  <p className="text-white/40 text-[10px] tracking-widest uppercase">
                    Tilawati Education Center
                  </p>
                </div>
              </div>
              <p className="footer-text">
                Pusat pendidikan Al-Qur&apos;an dengan metode Tilawati. Menghasilkan generasi
                Qur&apos;ani berakhlak mulia dan bermanfaat bagi umat.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="footer-title">Navigasi</h3>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="footer-title">Kontak</h3>
              <ul className="footer-contact">
                <li>
                  <MapPin className="w-4 h-4" />
                  <span>Jl. Arwana 2 No.11 RT.03 RW.050 Babelan, Bekasi</span>
                </li>
                <li>
                  <Phone className="w-4 h-4" />
                  <span>+62 857-7552-6387</span>
                </li>
                <li>
                  <Mail className="w-4 h-4" />
                  <span>TEC.ANNAHL@GMAIL.COM</span>
                </li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className="footer-title">Ikuti Kami</h3>
              <p className="footer-text mb-5">
                Dapatkan update kegiatan dan informasi terbaru kami
              </p>
              <div className="footer-social">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/tecannahl_official/" className="social-icon" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="social-icon" aria-label="Youtube">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-white/40 text-xs">
            © {currentYear} TEC AN-NAHL. All rights reserved. Developed with ❤️ for a better generation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
