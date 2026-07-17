import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Pill-shaped button matching the Vectr language: filled electric primary,
 * glass ghost secondary, and a subtle glow that blooms on hover.
 *
 * Renders as an internal <Link> (`to`), an external <a> (`href`), or a
 * native <button> depending on the props supplied.
 */
const VARIANTS = {
  primary:
    'bg-electric-500 text-black shadow-glow hover:bg-electric-600 hover:shadow-glow-soft',
  ghost:
    'border border-line-strong bg-white text-black hover:border-electric-400 hover:text-electric-600 hover:shadow-card',
  minimal:
    'text-black hover:text-black',
};

const SIZES = {
  sm: 'h-9 px-4 text-xs',
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  arrow = false,
  ...props
}) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50';
  const classes = `${base} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="transition-transform duration-300 ease-expo group-hover:translate-x-1">
          &rarr;
        </span>
      )}
    </>
  );

  const motionProps = {
    whileHover: { y: -1 },
    whileTap: { scale: 0.98 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link to={to} className={classes} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} {...motionProps} {...props}>
      {content}
    </motion.button>
  );
}
