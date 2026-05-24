/**
 * SectionHeader — consistent header for each section
 * Props: overline, title, subtitle, center (bool), light (bool — for dark bg)
 */
export default function SectionHeader({
  overline,
  title,
  subtitle,
  center = false,
  light = false,
}) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      {overline && (
        <p
          className={`text-[10px] uppercase tracking-[0.35em] mb-5 flex items-center gap-4 ${
            center ? 'justify-center' : ''
          } ${light ? 'text-white/50' : 'text-brand-silver'}`}
        >
          <span
            className={`inline-block w-6 h-px ${
              light ? 'bg-white/30' : 'bg-brand-platinum'
            }`}
          />
          {overline}
        </p>
      )}
      <h2
        className={`font-serif text-4xl md:text-5xl font-normal leading-[1.1] ${
          light ? 'text-white' : 'text-brand-black'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed max-w-xl ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-white/60' : 'text-brand-silver'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
