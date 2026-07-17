import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const STORAGE_KEY = 'boit-cookie-consent';

/**
 * First-visit cookie consent banner.
 * Customise / Reject All / Accept All — choice persisted in localStorage.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customising, setCustomising] = useState(false);
  const [prefs, setPrefs] = useState({
    necessary: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const persist = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {
      /* ignore */
    }
    setVisible(false);
    setCustomising(false);
  };

  const acceptAll = () =>
    persist({
      status: 'accepted',
      necessary: true,
      analytics: true,
      marketing: true,
      at: Date.now(),
    });

  const rejectAll = () =>
    persist({
      status: 'rejected',
      necessary: true,
      analytics: false,
      marketing: false,
      at: Date.now(),
    });

  const saveCustom = () =>
    persist({
      status: 'custom',
      ...prefs,
      necessary: true,
      at: Date.now(),
    });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-desc"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-[120] p-4 md:p-6"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-white p-5 shadow-card md:p-6">
            <h2
              id="cookie-consent-title"
              className="font-display text-lg font-semibold text-black md:text-xl"
            >
              We value your privacy
            </h2>
            <p
              id="cookie-consent-desc"
              className="mt-2 text-sm leading-relaxed text-black/80"
            >
              We use cookies to enhance your browsing experience, serve personalised
              ads or content, and analyse our traffic. By clicking &quot;Accept All&quot;,
              you consent to our use of cookies.
            </p>

            {customising && (
              <div className="mt-4 space-y-3 rounded-xl border border-line bg-[#f7fefe] p-4">
                <label className="flex items-center justify-between gap-4 text-sm text-black">
                  <span>
                    <span className="font-medium">Necessary</span>
                    <span className="mt-0.5 block text-xs text-black/60">
                      Required for the site to function. Always on.
                    </span>
                  </span>
                  <input type="checkbox" checked disabled className="h-4 w-4 accent-electric-500" />
                </label>
                <label className="flex items-center justify-between gap-4 text-sm text-black">
                  <span>
                    <span className="font-medium">Analytics</span>
                    <span className="mt-0.5 block text-xs text-black/60">
                      Helps us understand how the site is used.
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    checked={prefs.analytics}
                    onChange={(e) =>
                      setPrefs((p) => ({ ...p, analytics: e.target.checked }))
                    }
                    className="h-4 w-4 accent-electric-500"
                  />
                </label>
                <label className="flex items-center justify-between gap-4 text-sm text-black">
                  <span>
                    <span className="font-medium">Marketing</span>
                    <span className="mt-0.5 block text-xs text-black/60">
                      Used for personalised ads or content.
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    checked={prefs.marketing}
                    onChange={(e) =>
                      setPrefs((p) => ({ ...p, marketing: e.target.checked }))
                    }
                    className="h-4 w-4 accent-electric-500"
                  />
                </label>
              </div>
            )}

            <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
              {customising ? (
                <Button type="button" variant="primary" size="md" onClick={saveCustom}>
                  Save preferences
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="ghost"
                  size="md"
                  onClick={() => setCustomising(true)}
                >
                  Customise
                </Button>
              )}
              <Button type="button" variant="ghost" size="md" onClick={rejectAll}>
                Reject All
              </Button>
              <Button type="button" variant="primary" size="md" onClick={acceptAll}>
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
