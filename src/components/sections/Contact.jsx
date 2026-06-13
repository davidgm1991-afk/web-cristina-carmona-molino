import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import useLanguage from '../../hooks/useLanguage';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

/* ── Inline contact info icons ─────────────────────── */

function EmailIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 3" />
    </svg>
  );
}

/* ── Form field component ──────────────────────────── */

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] uppercase tracking-[0.25em] text-brand-silver font-sans">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputBase =
  'bg-transparent border-b border-brand-border pb-3 pt-1 text-sm text-brand-black placeholder:text-brand-platinum focus:outline-none focus:border-brand-black transition-colors duration-200 font-sans';

/* ── Main component ────────────────────────────────── */

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const emptyForm = { nombre: '', email: '', telefono: '', area: '', mensaje: '' };
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.email.trim() || !form.mensaje.trim()) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    // Simulated async — replace with real integration (e.g. EmailJS / Formspree)
    setTimeout(() => {
      setStatus('success');
      setForm(emptyForm);
    }, 1600);
  };

  const infoItems = [
    { icon: <EmailIcon />, value: t.contact.info.email, href: `mailto:${t.contact.info.email}` },
    { icon: <PhoneIcon />, value: t.contact.info.telefono, href: `tel:${t.contact.info.telefono.replace(/\s/g, '')}` },
    { icon: <LocationIcon />, value: t.contact.info.direccion, href: null },
    { icon: <ClockIcon />, value: t.contact.info.horario, href: null },
  ];

  return (
    <section id="contacto" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          overline={t.contact.titulo}
          title={t.contact.subtitulo}
          subtitle={t.contact.descripcion}
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* ── Form ── */}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.25, 0.4, 0.25, 1] }}
            className="space-y-10"
          >
            <Field label={t.contact.form.nombre}>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Cristina García"
                autoComplete="name"
                className={inputBase}
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <Field label={t.contact.form.email}>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="correo@ejemplo.com"
                  autoComplete="email"
                  className={inputBase}
                />
              </Field>
              <Field label={t.contact.form.telefono}>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="+34 655 33 65 87"
                  autoComplete="tel"
                  className={inputBase}
                />
              </Field>
            </div>

            <Field label={t.contact.form.area}>
              <div className="relative">
                <select
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  className={`${inputBase} w-full appearance-none cursor-pointer pr-8`}
                >
                  <option value="" disabled>—</option>
                  {t.contact.form.areaOpciones.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <svg
                  className="absolute right-0 bottom-4 w-3.5 h-3.5 text-brand-silver pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </Field>

            <Field label={t.contact.form.mensaje}>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Describa brevemente su consulta…"
                rows={5}
                className={`${inputBase} resize-none`}
              />
            </Field>

            <div className="space-y-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === 'sending' || status === 'success'}
                className="disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? t.contact.form.enviando : t.contact.form.enviar}
              </Button>

              {status === 'success' && (
                <p className="text-sm text-brand-silver">{t.contact.form.exito}</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-500">{t.contact.form.errorReq}</p>
              )}
            </div>
          </motion.form>

          {/* ── Contact info panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:pt-2"
          >
            {/* Divider line */}
            <div className="w-8 h-px bg-brand-platinum mb-10" />

            <ul className="space-y-8">
              {infoItems.map(({ icon, value, href }, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="text-brand-platinum">{icon}</span>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-brand-silver hover:text-brand-black transition-colors duration-200"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-brand-silver">{value}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Tagline note */}
            <div className="mt-16 pt-10 border-t border-brand-border">
              <p className="text-[11px] uppercase tracking-[0.3em] text-brand-platinum leading-loose">
                Confidencialidad garantizada
                <br />
                en cada consulta.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
