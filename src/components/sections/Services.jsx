import useLanguage from '../../hooks/useLanguage';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from '../ui/ServiceCard';

/* ── Icons ─────────────────────────────────────────── */

function ScalesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
    >
      <path d="M12 3v18" />
      <path d="M5 21h14" />
      <path d="M3 8l9-5 9 5" />
      <path d="M3 8l3 7c.6 1.3 2 2 3 2s2.4-.7 3-2l3-7" />
      <path d="M9 8l3 7 3-7" />
    </svg>
  );
}

function TaxIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="12" y2="17" />
      <line x1="9" y1="9" x2="10" y2="9" />
    </svg>
  );
}

/* ── Component ─────────────────────────────────────── */

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <ScalesIcon />,
      title: t.services.civil.nombre,
      description: t.services.civil.descripcion,
      items: t.services.civil.items,
    },
    {
      icon: <TaxIcon />,
      title: t.services.fiscal.nombre,
      description: t.services.fiscal.descripcion,
      items: t.services.fiscal.items,
    },
  ];

  return (
    <section id="servicios" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          overline={t.services.subtitulo}
          title={t.services.titulo}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} index={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
