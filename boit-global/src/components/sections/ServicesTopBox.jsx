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
 * Green top banner shared across all service detail pages.
 * Matches the four core BOIT service pillars from the reference design.
 */
export default function ServicesTopBox() {
  return (
    <section className="border-b border-[#0d5a32] bg-[#136c3c]">
      <div className="container py-6 md:py-8">
        <ul className="grid gap-1 md:gap-0">
          {servicesTopBox.map((item) => {
            const Icon = ICONS[item.icon] ?? Monitor;
            return (
              <li key={item.id}>
                <Link
                  to={item.to}
                  className="hover-ripple hover-ripple--teal hover-ripple--full group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 transition-colors duration-300 hover:text-white md:px-6 md:py-4"
                >
                  <span className="hover-ripple__label flex w-full items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition-colors group-hover:bg-white/20">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="font-display text-sm font-semibold text-white md:text-base">
                      {item.label}
                    </span>
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
