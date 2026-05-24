import useLanguage from '../../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.servicios, href: '#servicios' },
    { label: t.nav.sobreMi,   href: '#sobre-mi' },
    { label: t.nav.contacto,  href: '#contacto' },
  ];

  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-white/10">
          {/* Column 1 — Branding */}
          <div>
            <p className="font-serif text-2xl font-semibold mb-2 text-white">
              CCM
            </p>
            <p className="text-[9px] tracking-[0.28em] uppercase text-white/50 mb-1">
              Cristina Carmona Molino
            </p>
            <p className="text-[9px] tracking-[0.2em] uppercase text-white/30 mt-3">
              {t.footer.tagline}
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/30 mb-7">
              {t.footer.navegacion}
            </p>
            <ul className="space-y-4">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Direct contact */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/30 mb-7">
              {t.footer.contactoDirecto}
            </p>
            <ul className="space-y-4 text-sm text-white/50">
              <li>
                <a
                  href={`mailto:${t.contact.info.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {t.contact.info.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t.contact.info.telefono.replace(/\s/g, '')}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {t.contact.info.telefono}
                </a>
              </li>
              <li>{t.contact.info.direccion}</li>
              <li>{t.contact.info.horario}</li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[11px] text-white/25">{t.footer.derechos}</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[11px] text-white/25 hover:text-white/60 transition-colors duration-200"
            >
              {t.footer.aviso}
            </a>
            <a
              href="#"
              className="text-[11px] text-white/25 hover:text-white/60 transition-colors duration-200"
            >
              {t.footer.privacidad}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
