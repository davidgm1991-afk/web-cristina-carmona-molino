/**
 * Button — reusable CTA component
 * Accepts `as` prop to render as <a> or <button> (default: button)
 * Variants: primary | secondary | ghost
 * Sizes:    sm | md | lg
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Tag = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-sans tracking-[0.2em] uppercase text-xs transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:ring-offset-2';

  const variants = {
    primary:
      'bg-brand-black text-white border border-brand-black hover:bg-brand-silver hover:border-brand-silver',
    secondary:
      'bg-transparent text-brand-black border border-brand-black hover:bg-brand-black hover:text-white',
    ghost:
      'bg-transparent text-brand-silver border border-transparent hover:text-brand-black hover:border-b-brand-black underline-offset-4',
  };

  const sizes = {
    sm: 'px-6 py-3',
    md: 'px-8 py-4',
    lg: 'px-10 py-4',
  };

  return (
    <Tag
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
