import { Link } from 'react-router-dom';

/**
 * Link or anchor with the expanding ripple from button.css.
 * Uses `--full` so the effect covers the entire row, not just the center.
 */
export default function RippleLink({
  to,
  href,
  children,
  className = '',
  variant = 'teal',
  full = true,
  onClick,
  ...props
}) {
  const rippleClass = [
    'hover-ripple',
    variant === 'teal' ? 'hover-ripple--teal' : '',
    full ? 'hover-ripple--full' : '',
    'rounded-md px-2 py-1 text-sm text-black',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const label = <span className="hover-ripple__label">{children}</span>;

  if (to) {
    return (
      <Link to={to} className={rippleClass} onClick={onClick} {...props}>
        {label}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={rippleClass} onClick={onClick} {...props}>
        {label}
      </a>
    );
  }

  return (
    <button type="button" className={rippleClass} onClick={onClick} {...props}>
      {label}
    </button>
  );
}
