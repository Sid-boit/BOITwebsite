import { Reveal } from '@/components/ui/Reveal';
import { statsBar } from '@/data/content';

export default function StatsBar() {
  return (
    <section className="border-y border-line bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-5">
          {statsBar.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div>
                <p className="mb-2 font-display text-4xl font-bold text-electric-500 md:text-5xl">
                  {stat.value}
                  {stat.suffix ?? ''}
                </p>
                <p className="font-sans text-sm text-black">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
