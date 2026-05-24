import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useLanguage from '../../hooks/useLanguage';
import Button from '../ui/Button';

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: t.nav.servicios, href: '#servicios' },
    { label: t.nav.sobreMi,   href: '#sobre-mi' },
    { label: t.nav.contacto,  href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-brand-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* ── Logo ── */}
        <a
          href="#inicio"
          className="flex flex-col leading-none select-none group"
          aria-label="Cristina Carmona Molino — inicio"
        >
          <span className="font-serif text-[22px] font-semibold text-brand-black tracking-tight">
            CCM
          </span>
          <span className="text-[8px] font-sans font-normal tracking-[0.28em] uppercase text-brand-silver mt-px">
            Cristina Carmona Molino
          </span>
        </a>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[11px] uppercase tracking-[0.22em] text-brand-silver hover:text-brand-black transition-colors duration-200 font-sans"
            >
              {label}
            </a>
          ))}
        </div>

        {/* ── Desktop right controls ── */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={toggleLang}
            aria-label={`Switch to ${lang === 'es' ? 'English' : 'Español'}`}
            className="text-[11px] tracking-[0.22em] uppercase font-sans text-brand-silver hover:text-brand-black transition-colors duration-200"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <Button variant="primary" size="sm" as="a" href="#contacto">
            {t.nav.consulta}
          </Button>
        </div>

        {/* ── Mobile controls ── */}
        <div className="flex md:hidden items-center gap-5">
          <button
            onClick={toggleLang}
            aria-label={`Switch to ${lang === 'es' ? 'English' : 'Español'}`}
            className="text-[11px] tracking-[0.22em] uppercase font-sans text-brand-silver hover:text-brand-black transition-colors duration-200"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            className="p-1 text-brand-black"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            className="md:hidden overflow-hidden bg-white/97 backdrop-blur-md border-t border-brand-border"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-7">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[11px] uppercase tracking-[0.22em] text-brand-silver hover:text-brand-black transition-colors duration-200 font-sans"
                >
                  {label}
                </a>
              ))}
              <div className="pt-2 border-t border-brand-border">
                <Button
                  variant="primary"
                  size="sm"
                  as="a"
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="self-start"
                >
                  {t.nav.consulta}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
