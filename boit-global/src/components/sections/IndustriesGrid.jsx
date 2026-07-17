import { Reveal } from '@/components/ui/Reveal';
import HighlightText from '@/components/ui/HighlightText';
import { industries } from '@/data/content';
import { Cpu, Factory, Landmark, ShieldCheck, HeartPulse } from 'lucide-react';

const icons = [Cpu, Factory, Landmark, ShieldCheck, HeartPulse];

const images = [
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function IndustriesGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-electric-500 mb-3 text-center">
            Industries
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Industries We Serve
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, i) => {
            const Icon = icons[i];
            return (
              <Reveal
                key={industry.title}
                delay={i * 0.1}
                className={`${i === 0 ? 'lg:col-span-2' : ''}`}
              >
                <div className="group relative h-80 overflow-hidden rounded-2xl border border-line bg-white">
                  <img
                    src={images[i]}
                    alt={industry.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <Icon className="text-electric-500" size={22} />
                      <h3 className="font-display text-xl font-semibold text-black">
                        {industry.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed">
                      <HighlightText text={industry.desc} />
                    </p>
                    <div className="mt-4 h-1 w-12 rounded-full bg-electric-500 transition-all duration-300 group-hover:w-24" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
