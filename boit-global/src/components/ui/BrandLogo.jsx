import { Link } from 'react-router-dom';
import logoImg from '@/assets/Logo-Boit-removebg-preview.png';

export default function BrandLogo({ className = '' }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2 ${className}`}
      aria-label="BOIT Global home"
    >
      <img
        src={logoImg}
        alt="boIT"
        className="h-9 w-auto transition-opacity duration-300 group-hover:opacity-90 md:h-10"
      />
      <span className="font-display text-sm font-semibold uppercase tracking-breathe text-black">
        Global
      </span>
    </Link>
  );
}
