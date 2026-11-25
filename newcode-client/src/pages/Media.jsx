import React, { useRef, useState } from 'react';
import { media } from '../data/site';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import GlassPanel from '../components/GlassPanel';
import Reveal from '../components/motion/Reveal';
import SplitText from '../components/motion/SplitText';
import useTiltPanels from '../hooks/useTiltPanels';
import '../styles/brand-surfaces.css';
import './Media.css';

const postImages = import.meta.glob('../assets/media/linkedin-*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

function postImage(name) {
  const match = Object.entries(postImages).find(([path]) =>
    new RegExp(`/${name}\\.(png|jpe?g|webp)$`, 'i').test(path),
  );
  return match?.[1] ?? null;
}

function VideoEmbed({ video }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          width: '100%',
          aspectRatio: '16 / 9',
          border: 0,
          borderRadius: 18,
          display: 'block',
        }}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${video.title}`}
      className="media-video-btn"
      style={{
        background: `#000 url(https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg) center/cover no-repeat`,
      }}
    >
      <span className="media-video-btn__veil">
        <span className="media-video-btn__play">▶</span>
      </span>
    </button>
  );
}

export default function Media() {
  const { hero, video, article, events } = media;
  const rootRef = useRef(null);
  useTiltPanels(rootRef, []);

  return (
    <div className="brand-page media-page" ref={rootRef}>
      <PageHero wash eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      <section
        className="brand-section brand-wash"
        style={{ paddingTop: 40, paddingLeft: 'var(--gutter)', paddingRight: 'var(--gutter)' }}
      >
        <div className="media-feature" data-stack="1">
          <div>
            <Reveal as="p" className="eyebrow" style={{ marginBottom: 16 }}>
              {video.label}
            </Reveal>
            <VideoEmbed video={video} />
            <h3
              style={{
                margin: '20px 0 0',
                fontSize: 22,
                letterSpacing: '-.025em',
                fontWeight: 600,
              }}
            >
              {video.title}
            </h3>
            <a
              href={video.url}
              target="_blank"
              rel="noreferrer noopener"
              className="link-arrow"
              style={{ marginTop: 10 }}
            >
              Watch on YouTube <span>→</span>
            </a>
          </div>

          <Reveal delay={2}>
            <GlassPanel
              accent
              className="media-article media-article--tone-violet"
              style={{
                padding: 30,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                height: '100%',
              }}
            >
              <div className="tag eyebrow eyebrow--accent">{article.source}</div>
              <h3 style={{ margin: 0, fontSize: 22, lineHeight: 1.25, letterSpacing: '-.02em' }}>
                {article.title}
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--body-2)' }}>
                {article.summary}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer noopener"
                className="link-arrow"
                style={{ marginTop: 'auto' }}
              >
                {article.linkLabel} <span>→</span>
              </a>
            </GlassPanel>
          </Reveal>
        </div>
      </section>

      <section className="brand-section brand-band">
        <div className="shell" style={{ padding: '0 var(--gutter)' }}>
          <Reveal as="p" className="eyebrow">
            {events.label}
          </Reveal>
          <SplitText
            as="h2"
            text="Latest from the team."
            className="h2"
            style={{ margin: '22px 0 40px' }}
          />

          <div className="media-grid">
            {events.posts.map((post, i) => {
              const image = postImage(post.image);
              const number = String(i + 1).padStart(2, '0');

              return (
                <Reveal
                  key={post.url}
                  delay={(i % 4) + 1}
                  as="a"
                  href={post.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`media-card brand-panel brand-panel--accent lift media-card--tone-${i % 2 === 0 ? 'violet' : 'teal'}`}
                  aria-label={`${events.rowLabel} update ${number}`}
                >
                  <span className="media-card__shot">
                    {image ? (
                      <img src={image} alt="" />
                    ) : (
                      <span className="media-card__empty">
                        <span className="eyebrow eyebrow--accent">{events.rowLabel}</span>
                        <span className="media-card__file">{post.image}</span>
                      </span>
                    )}
                  </span>
                  <span className="media-card__meta">
                    <span className="eyebrow">{number}</span>
                    <span className="eyebrow eyebrow--accent">{events.rowLabel}</span>
                    <span className="media-card__arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Media"
        title="Want to talk to our team?"
        body="For press enquiries and partnership conversations, reach out any time."
        buttons={[
          { label: 'Demo', to: '/contact', primary: true },
          { label: 'Case studies', to: '/case-studies' },
        ]}
      />
    </div>
  );
}
