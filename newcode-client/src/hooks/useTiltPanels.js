import { useEffect } from 'react';
import { prefersReducedMotion, tilt } from './motion';

/* Attach 3D tilt/zoom to glass/home panels and About cards under a root ref. */
export default function useTiltPanels(rootRef, deps = []) {
  useEffect(() => {
    if (!rootRef.current || prefersReducedMotion()) return undefined;
    const panels = rootRef.current.querySelectorAll(
      '.brand-panel, .home-panel, .leader-card, .cert-pair article, .deck-hover__card',
    );
    const cleanups = [...panels].map((el) => tilt(el, 6, 1.04));
    return () => cleanups.forEach((fn) => fn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
