import { Reveal } from '@/components/ui/Reveal';
import { clientLogos } from '@/data/clientLogos';

export default function ClientsMarquee() {
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-electric-500">
            Trusted By
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl font-bold text-black md:text-4xl">
            Esteemed Clients
          </h2>
        </Reveal>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent md:w-24" />

        <div className="flex w-max animate-marquee">
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="mx-3 flex h-24 w-44 flex-shrink-0 items-center justify-center rounded-xl border border-line bg-white px-6 py-4 transition-shadow duration-300 hover:shadow-card md:h-28 md:w-52"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-14 max-w-full object-contain md:max-h-16"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
