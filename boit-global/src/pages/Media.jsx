import { media } from '@/data/content';
import PageTransition from '@/components/ui/PageTransition';
import PageHero from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';

export default function Media() {
  return (
    <PageTransition>
      <PageHero eyebrow={media.hero.eyebrow} title={media.hero.title} subtitle={media.hero.subtitle} />

      <section className="relative py-16 md:py-24">
        <div className="container">
          <Reveal>
            <div className="glass flex flex-col items-start gap-4 rounded-2xl p-10 md:p-14">
              <span className="flex h-2 w-2 rounded-full bg-electric-500 shadow-glow" />
              <h2 className="font-display text-2xl font-medium tracking-tight text-black md:text-3xl">
                Insights are on the way.
              </h2>
              <p className="max-w-xl leading-relaxed text-black">
                Articles, whitepapers, and event coverage will be published here and served
                dynamically from the content API.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
