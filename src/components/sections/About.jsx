import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import useLanguage from '../../hooks/useLanguage';
import SectionHeader from '../ui/SectionHeader';

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="sobre-mi" className="py-28 bg-brand-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* ── Left — Photo placeholder ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.95, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            {/* Photo frame */}
            <div className="relative z-10 aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 bg-brand-platinum flex items-center justify-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-silver/60">
                Fotografía
              </span>
            </div>
            {/* Decorative offset border */}
            <div
              className="absolute border border-brand-border"
              style={{
                top: '20px',
                left: '20px',
                right: '-20px',
                bottom: '-20px',
                zIndex: 0,
                maxWidth: 'calc(384px + 20px)',
              }}
              aria-hidden
            />
          </motion.div>

          {/* ── Right — Bio & credentials ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.95, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:pt-4"
          >
            <SectionHeader
              overline={t.about.subtitulo}
              title={t.about.titulo}
            />

            <p className="text-brand-silver text-base leading-[1.9] mb-6">
              {t.about.bio1}
            </p>
            <p className="text-brand-silver text-base leading-[1.9] mb-14">
              {t.about.bio2}
            </p>

            {/* Credentials */}
            <div className="space-y-0">
              {t.about.credenciales.map((cred, i) => (
                <div
                  key={i}
                  className="py-6 border-t border-brand-border first:border-t-0"
                >
                  <p className="text-sm font-medium text-brand-black tracking-wide mb-1">
                    {cred.titulo}
                  </p>
                  <p className="text-[12px] text-brand-silver tracking-wide">
                    {cred.detalle}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
