import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ServiceCard({ icon, title, description, items, index = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="group border border-brand-border bg-white p-10 md:p-12 hover:shadow-lg transition-all duration-500"
    >
      {/* Icon */}
      <div className="w-10 h-10 mb-10 text-brand-platinum group-hover:text-brand-black transition-colors duration-400">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-serif text-2xl font-normal text-brand-black mb-5">
        {title}
      </h3>

      {/* Description */}
      <p className="text-brand-silver text-sm leading-loose mb-8">
        {description}
      </p>

      {/* Bullet items */}
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-brand-silver">
            <span className="w-4 h-px bg-brand-platinum flex-shrink-0 group-hover:bg-brand-black transition-colors duration-300" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
