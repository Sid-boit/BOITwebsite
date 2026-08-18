import React, { useEffect, useRef } from 'react';

/* Trailing ring cursor that swells over interactive targets. Desktop only. */
export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    const dot = ref.current;
    if (!dot) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let tx = -100;
    let ty = -100;
    let x = -100;
    let y = -100;
    let big = false;
    let raf = 0;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      const over = e.target && e.target.closest && e.target.closest('a,button,[data-magnetic]');
      if (!!over !== big) {
        big = !!over;
        dot.style.width = big ? '58px' : '34px';
        dot.style.height = big ? '58px' : '34px';
        dot.style.background = big ? 'rgba(18,223,182,.18)' : 'transparent';
      }
    };

    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      const s = dot.offsetWidth / 2;
      dot.style.transform = `translate(${x - s}px, ${y - s}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    tick();

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-hide-sm="1"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 34,
        height: 34,
        border: '1px solid rgba(10,175,142,.55)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-100px,-100px)',
        transition: 'width .25s ease, height .25s ease, background .25s ease',
        mixBlendMode: 'multiply',
      }}
    />
  );
}
