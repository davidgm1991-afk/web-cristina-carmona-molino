import { motion } from 'framer-motion';
import useLanguage from '../../hooks/useLanguage';
import Button from '../ui/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.14,
      duration: 0.9,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-brand-offwhite flex flex-col justify-center overflow-hidden"
    >
      {/* ── Decorative vertical lines ── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div className="absolute top-0 right-[8%] w-px h-full bg-brand-border opacity-70" />
        <div className="absolute top-0 right-[28%] w-px h-full bg-brand-border opacity-30 hidden xl:block" />
      </div>

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-24">
        {/* Overline tagline */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-4 text-[10px] uppercase tracking-[0.38em] text-brand-silver mb-10"
        >
          <span className="inline-block w-8 h-px bg-brand-platinum" />
          {t.hero.tagline}
        </motion.p>

        {/* Main headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-serif font-normal text-brand-black leading-[1.04] mb-10
                     text-[clamp(2.6rem,6vw,5.5rem)] max-w-4xl"
        >
          {t.hero.headline1}
          <br />
          <em className="not-italic italic text-brand-silver">
            {t.hero.headline2}
          </em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-brand-silver text-base md:text-lg leading-relaxed max-w-md mb-14"
        >
          {t.hero.descripcion}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-4"
        >
          <Button variant="primary" size="lg" as="a" href="#contacto">
            {t.hero.cta1}
          </Button>
          <Button variant="secondary" size="lg" as="a" href="#servicios">
            {t.hero.cta2}
          </Button>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-6 md:left-12 flex flex-col items-center gap-3"
        aria-hidden
      >
        <div className="w-px h-14 bg-gradient-to-b from-brand-border to-transparent" />
        <span className="text-[9px] uppercase tracking-[0.3em] text-brand-platinum">
          scroll
        </span>
      </motion.div>
    </section>
  );
}
