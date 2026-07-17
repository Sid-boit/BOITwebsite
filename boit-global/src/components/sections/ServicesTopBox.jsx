import { Link } from 'react-router-dom';
import { Monitor, Layers, Code2, Briefcase } from 'lucide-react';
import { servicesTopBox } from '@/data/servicesNav';

const ICONS = {
  monitor: Monitor,
  layers: Layers,
  code: Code2,
  briefcase: Briefcase,
};

/**
 * Dark-green top banner shared across all service detail pages.
 * Sits BELOW the fixed navbar (pt-16 / md:pt-20 clears nav height).
 */
export default function ServicesTopBox() {
  return (
    <section className="relative z-0 border-b border-[#0d5a32] bg-[#136c3c] pt-16 md:pt-20">
      <div className="container py-5 md:py-6">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {servicesTopBox.map((item) => {
            const Icon = ICONS[item.icon] ?? Monitor;
            return (
              <li key={item.id}>
                <Link
                  to={item.to}
                  className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors duration-300 hover:bg-white/10 md:px-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition-colors group-hover:bg-white/20">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-xs font-semibold leading-snug text-white md:text-sm">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
