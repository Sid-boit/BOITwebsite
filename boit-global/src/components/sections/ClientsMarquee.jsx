import { Reveal } from '@/components/ui/Reveal';
import { clients } from '@/data/content';

export default function ClientsMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-electric-500 mb-3">
            Trusted By
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-black">
            Esteemed Clients
          </h2>
        </Reveal>
      </div>

      <div className="relative">
        <div className="flex w-max animate-marquee">
          {doubled.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="mx-3 flex-shrink-0 flex items-center justify-center rounded-xl border border-line bg-white px-10 py-6 transition-colors duration-300 hover:bg-surface-100"
            >
              <span className="font-display text-2xl text-black hover:text-black transition-colors duration-300 whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
