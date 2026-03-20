import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo/logo.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileMenu(false); }, [location.pathname]);

  const navLinks = [
    { path: '/',             label: 'Beranda'   },
    { path: '/about',        label: 'Tentang'   },
    { path: '/programs',     label: 'Program'   },
    { path: '/gallery',      label: 'Galeri'    },
    { path: '/testimonials', label: 'Testimoni' },
    { path: '/contact',      label: 'Kontak'    },
  ];

  const isHome   = location.pathname === '/';
  const isActive = (path) => location.pathname === path;

  const headerBg    = isScrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent';
  const linkColor   = isScrolled || !isHome ? 'text-gray-700' : 'text-white/90';
  const menuIconColor = isScrolled || !isHome ? 'text-gray-700' : 'text-white';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerBg} py-2 md:py-3`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="TEC AN-NAHL Logo"
            className="h-12 w-12 object-contain rounded-full"
          />
          <div className="flex flex-col leading-none">
            <span className={`text-lg md:text-xl font-bold font-['Playfair_Display'] text-[#D4AF37]`}>
              TEC AN-NAHL
            </span>
            <span className={`text-[10px] tracking-widest uppercase ${isScrolled || !isHome ? 'text-gray-400' : 'text-white/60'}`}>
              Tilawati Education Center
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors duration-200 nav-underline-gold
                ${isActive(link.path) ? 'text-[#D4AF37] active' : linkColor}
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <Button className="bg-[#D4AF37] hover:bg-[#f0d97a] hover:text-[#0d4a2a] text-white font-semibold px-6 py-2 rounded-lg shadow transition-all hover:scale-105">
              Daftar Sekarang
            </Button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={`lg:hidden p-1 rounded-md transition ${menuIconColor}`}
          onClick={() => setMobileMenu(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="flex flex-col px-6 py-5 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 border-b border-gray-100 text-sm font-medium transition-colors
                    ${isActive(link.path) ? 'text-[#D4AF37] font-semibold' : 'text-gray-700 hover:text-[#D4AF37]'}
                  `}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="mt-4">
                <Button className="w-full bg-[#D4AF37] hover:bg-[#b8962e] text-white font-semibold rounded-lg">
                  Daftar Sekarang
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
