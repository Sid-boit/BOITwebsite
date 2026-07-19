import { useState } from 'react';
import { Play } from 'lucide-react';
import { media } from '@/data/content';
import PageTransition from '@/components/ui/PageTransition';
import PageHero from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import HighlightText from '@/components/ui/HighlightText';

export default function Media() {
  const [playing, setPlaying] = useState(false);
  const { featuredVideo, featuredArticle, events } = media;
  const thumb = `https://img.youtube.com/vi/${featuredVideo.youtubeId}/maxresdefault.jpg`;

  return (
    <PageTransition>
      <PageHero eyebrow={media.hero.eyebrow} title={media.hero.title} subtitle={media.hero.subtitle} />

      <section className="relative py-16 md:py-24">
        <div className="container space-y-16 md:space-y-20">
          {/* Featured YouTube */}
          <Reveal>
            <div>
              <p className="eyebrow mb-6">Featured video</p>
              <div className="overflow-hidden rounded-2xl border border-line bg-black shadow-sm">
                {playing ? (
                  <div className="aspect-video w-full">
                    <iframe
                      title={featuredVideo.title}
                      src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}?autoplay=1&rel=0`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="group relative block w-full text-left"
                    aria-label={`Play ${featuredVideo.title}`}
                  >
                    <img
                      src={thumb}
                      alt={featuredVideo.title}
                      className="aspect-video w-full object-cover"
                    />
                    <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" />
                    <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform duration-300 group-hover:scale-105 md:h-20 md:w-20">
                      <Play className="ml-1 h-7 w-7 fill-current md:h-8 md:w-8" />
                    </span>
                  </button>
                )}
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold text-black md:text-2xl">
                {featuredVideo.title}
              </h2>
            </div>
          </Reveal>

          {/* Featured article */}
          <Reveal>
            <a
              href={featuredArticle.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-line bg-white p-8 transition-colors hover:border-electric-400 md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-electric-600">
                {featuredArticle.source}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-black transition-colors group-hover:text-electric-600 md:text-3xl">
                {featuredArticle.title}
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed">
                <HighlightText text={featuredArticle.summary} />
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-black">
                Read article
                <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </span>
            </a>
          </Reveal>

          {/* Events / LinkedIn */}
          <div>
            <Reveal>
              <p className="eyebrow mb-8">Events & updates</p>
            </Reveal>
            <div className="divide-y divide-line border-y border-line">
              {events.map((event, i) => (
                <Reveal key={event.id} delay={i * 0.03}>
                  <a
                    href={event.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-surface-100/60"
                  >
                    <div className="flex items-start gap-4 md:gap-6">
                      <span className="font-display text-sm tabular-nums text-electric-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-black/50">
                          LinkedIn
                        </p>
                        <p className="mt-1 font-display text-base font-medium text-black transition-colors group-hover:text-electric-600 md:text-lg">
                          Latest from BOIT Global
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 text-black transition-transform group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
