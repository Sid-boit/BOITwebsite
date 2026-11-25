import React, { useEffect, useState } from 'react';
import { cookieConsent } from '../data/site';

const KEY = 'boit-cookie-prefs';

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [custom, setCustom] = useState(false);
  const [prefs, setPrefs] = useState({ necessary: true, analytics: false, marketing: false });

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const persist = (value) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(value));
    } catch {
      /* storage unavailable — the banner simply reappears next visit */
    }
    setShow(false);
  };

  // Lets other fixed UI (the floating widget on phones) step aside while the banner is up.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('cookie-pending', show);
    return () => root.classList.remove('cookie-pending');
  }, [show]);

  if (!show) return null;

  return (
    <div role="dialog" aria-label={cookieConsent.title} className="cookie">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <strong style={{ fontSize: 16, letterSpacing: '-.01em' }}>
          {cookieConsent.title}
        </strong>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--body-2)' }}>
          {cookieConsent.body}
        </p>

        {custom ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
            {cookieConsent.options.map((o) => (
              <label
                key={o.key}
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                  fontSize: 13.5,
                  color: 'var(--body)',
                }}
              >
                <input
                  type="checkbox"
                  checked={o.locked ? true : prefs[o.key]}
                  disabled={o.locked}
                  onChange={(e) => setPrefs((p) => ({ ...p, [o.key]: e.target.checked }))}
                  style={{ marginTop: 3 }}
                />
                <span>
                  <b style={{ fontWeight: 600 }}>{o.label}</b> — {o.body}
                </span>
              </label>
            ))}
          </div>
        ) : null}

        <div className="cookie__actions">
          {custom ? (
            <button className="btn btn--primary" onClick={() => persist(prefs)}>
              {cookieConsent.buttons.save}
            </button>
          ) : (
            <button className="btn btn--ghost" onClick={() => setCustom(true)}>
              {cookieConsent.buttons.customise}
            </button>
          )}
          <button
            className="btn btn--ghost"
            onClick={() => persist({ necessary: true, analytics: false, marketing: false })}
          >
            {cookieConsent.buttons.reject}
          </button>
          <button
            className="btn btn--primary"
            onClick={() => persist({ necessary: true, analytics: true, marketing: true })}
          >
            {cookieConsent.buttons.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
