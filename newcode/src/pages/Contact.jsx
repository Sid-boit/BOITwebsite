import React, { useState } from 'react';

import { contact, about } from '../data/site';
import PageHero from '../components/PageHero';
import Reveal from '../components/motion/Reveal';

/* Frontend-only: the form validates and shows the success state. Wire the
   submit handler to a backend endpoint when one exists. */
export default function Contact() {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({});

  const onChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: '100%',
    background: 'var(--surface)',
    border: '1px solid var(--line)',
    borderRadius: 12,
    padding: '14px 16px',
    fontSize: 15,
    fontFamily: 'var(--sans)',
    color: 'var(--ink)',
    outline: 'none',
  };

  return (
    <>
      <PageHero
        eyebrow={contact.hero.eyebrow}
        title={contact.hero.title}
        subtitle={contact.hero.subtitle}
      />

      <section className="section" style={{ paddingTop: 40 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,.7fr) minmax(0,1fr)',
            gap: 64,
            alignItems: 'start',
          }}
          data-stack="1"
        >
          {/* ---- direct contact + offices ---- */}
          <div style={{ position: 'sticky', top: 110 }}>
            <Reveal as="p" className="eyebrow">
              {contact.direct.eyebrow}
            </Reveal>
            <a
              href={`mailto:${contact.direct.email}`}
              style={{
                display: 'inline-block',
                margin: '16px 0 14px',
                fontSize: 'clamp(22px, 2.4vw, 32px)',
                fontWeight: 600,
                letterSpacing: '-.03em',
              }}
              className="underline"
            >
              {contact.direct.email}
            </a>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'var(--body)' }}>
              {contact.direct.body}
            </p>

            <div style={{ marginTop: 32 }}>
              <p className="eyebrow" style={{ marginBottom: 14 }}>
                Offices
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {about.locations.items.map((l) => (
                  <div
                    key={l.city}
                    style={{
                      display: 'flex',
                      gap: 10,
                      alignItems: 'baseline',
                      fontSize: 14,
                      color: 'var(--body-2)',
                    }}
                  >
                    <span aria-hidden="true">{l.flag}</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 500, minWidth: 96 }}>
                      {l.city}
                    </span>
                    <span>{l.company}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---- form ---- */}
          <div>
            {sent ? (
              <Reveal
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: 18,
                  padding: '56px 40px',
                  background: 'var(--surface)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: '50%',
                    background: 'rgba(18,223,182,.18)',
                    color: 'var(--accent)',
                    display: 'grid',
                    placeItems: 'center',
                    margin: '0 auto 18px',
                    fontSize: 22,
                  }}
                >
                  ✓
                </div>
                <h3 style={{ margin: 0, fontSize: 26, letterSpacing: '-.03em' }}>
                  {contact.success.title}
                </h3>
                <p
                  style={{
                    margin: '10px 0 0',
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    color: 'var(--body-2)',
                  }}
                >
                  {contact.success.body}
                </p>
              </Reveal>
            ) : (
              <form
                onSubmit={onSubmit}
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: 18,
                  padding: 32,
                  background: 'var(--surface)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
                  gap: 18,
                }}
                data-stack="1"
              >
                {contact.fields.map((f) => (
                  <label
                    key={f.name}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                      gridColumn: f.type === 'textarea' ? '1 / -1' : undefined,
                    }}
                  >
                    <span className="eyebrow">
                      {f.label}
                      {f.required ? ' *' : ''}
                    </span>
                    {f.type === 'textarea' ? (
                      <textarea
                        name={f.name}
                        required={f.required}
                        rows={5}
                        value={values[f.name] || ''}
                        onChange={onChange}
                        style={{ ...inputStyle, resize: 'vertical' }}
                      />
                    ) : (
                      <input
                        type={f.type}
                        name={f.name}
                        required={f.required}
                        value={values[f.name] || ''}
                        onChange={onChange}
                        style={inputStyle}
                      />
                    )}
                  </label>
                ))}

                <div style={{ gridColumn: '1 / -1' }}>
                  <button type="submit" className="btn btn--primary">
                    {contact.submit} <span>→</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
