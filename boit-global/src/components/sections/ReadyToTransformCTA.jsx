import { Reveal } from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import HighlightText from '@/components/ui/HighlightText';
import { readyToTransform } from '@/data/content';

export default function ReadyToTransformCTA() {
  return (
    <section className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="mb-4 font-display text-3xl font-bold text-black md:text-5xl">
            {readyToTransform.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed">
            <HighlightText text={readyToTransform.subtitle} />
          </p>
        </Reveal>

        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          {readyToTransform.items.map((item, i) => (
            <Reveal key={item.title} delay={0.2 + i * 0.1}>
              <div className="rounded-2xl border border-line bg-surface-100 p-6 text-left">
                <p className="mb-1 font-semibold text-black">{item.title}</p>
                <p className="text-sm leading-relaxed">
                  <HighlightText text={item.body} />
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <Button to="/contact" size="lg" arrow>
            Contact Us
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
