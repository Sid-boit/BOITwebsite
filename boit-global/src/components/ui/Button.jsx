import { Link } from 'react-router-dom';

/**
 * Shared CTA button with Calypso teal hover (circle wipe + label flip).
 * Renders as <Link>, <a>, or <button> depending on props.
 */
const VARIANT_CLASS = {
  primary: 'button--calypso--primary',
  ghost: 'button--calypso--ghost',
  minimal: 'button--calypso--minimal',
};

const SIZE_CLASS = {
  sm: 'button--calypso--sm',
  md: 'button--calypso--md',
  lg: 'button--calypso--lg',
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  arrow = false,
  type = 'button',
  ...props
}) {
  const classes = [
    'button--calypso',
    VARIANT_CLASS[variant] ?? VARIANT_CLASS.primary,
    SIZE_CLASS[size] ?? SIZE_CLASS.md,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <span className="button__label">
      <span>{children}</span>
      {arrow && <span aria-hidden>&rarr;</span>}
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
