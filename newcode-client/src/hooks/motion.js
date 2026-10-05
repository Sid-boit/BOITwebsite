/* Shared scroll/pointer motion utilities.
   A single IntersectionObserver drives every [data-reveal] / .split element on
   the page; a MutationObserver picks up nodes added by route changes. */

let io = null;
let mo = null;

function countUp(el) {
  const target = parseFloat(el.dataset.count);
  if (Number.isNaN(target)) return;
  const suffix = el.dataset.suffix || '';
  const t0 = performance.now();
  const dur = 1400;
  const step = (t) => {
    const p = Math.min(1, (t - t0) / dur);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * e) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  el.textContent = '0' + suffix;
  requestAnimationFrame(step);
}

function observe(root = document) {
  if (!io) return;
  root.querySelectorAll('[data-reveal],[data-split],[data-count]').forEach((el) => {
    if (el.dataset.observed) return;
    el.dataset.observed = '1';
    io.observe(el);
  });
}

export function startMotion() {
  if (io) return;

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.setAttribute('data-in', '1');
        if (e.target.dataset.count !== undefined) countUp(e.target);
        io.unobserve(e.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
  );

  observe();

  mo = new MutationObserver((records) => {
    records.forEach((r) => {
      r.addedNodes.forEach((n) => {
        if (n.nodeType !== 1) return;
        if (n.matches('[data-reveal],[data-split],[data-count]')) {
          if (!n.dataset.observed) {
            n.dataset.observed = '1';
            io.observe(n);
          }
        }
        observe(n);
      });
    });
  });
  mo.observe(document.body, { childList: true, subtree: true });
}

export function stopMotion() {
  if (io) io.disconnect();
  if (mo) mo.disconnect();
  io = null;
  mo = null;
}

/* Pointer-follow "magnetism" used on links and CTAs in the design. */
export function magnetize(el, strength = 12) {
  if (!el) return () => {};
  const onMove = (e) => {
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    el.style.transform = `translate(${(dx * strength).toFixed(2)}px, ${(
      dy *
      strength *
      0.75
    ).toFixed(2)}px)`;
  };
  const onLeave = () => {
    el.style.transform = 'translate(0,0)';
  };
  el.addEventListener('mousemove', onMove);
  el.addEventListener('mouseleave', onLeave);
  return () => {
    el.removeEventListener('mousemove', onMove);
    el.removeEventListener('mouseleave', onLeave);
  };
}

/* 3D tilt on hover, matching the design's [data-lift] cards. */
export function tilt(el, deg = 5) {
  if (!el) return () => {};
  const onMove = (e) => {
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    el.style.transform = `perspective(900px) rotateY(${(dx * deg).toFixed(
      2
    )}deg) rotateX(${(-dy * deg).toFixed(2)}deg) translateY(-7px)`;
  };
  const onLeave = () => {
    el.style.transform = '';
  };
  el.addEventListener('mousemove', onMove);
  el.addEventListener('mouseleave', onLeave);
  return () => {
    el.removeEventListener('mousemove', onMove);
    el.removeEventListener('mouseleave', onLeave);
  };
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
