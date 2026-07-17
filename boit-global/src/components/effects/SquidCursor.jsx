import { useEffect, useRef } from 'react';

/**
 * SquidCursor — a translucent, multi-tentacled "squid" that tracks the cursor,
 * rendered on a full-viewport 2D canvas that sits behind all page content.
 *
 * Three coordinated layers, all keyed to the pointer:
 *   1. Tentacles  — several flowing trailing chains in soft teal/aqua tones
 *                   that lag + swirl around the cursor (the squid's arms).
 *   2. Core node  — a soft glowing node that eases toward the cursor (the head).
 *   3. Dotted field — an INSTANTANEOUS dense dot grid drawn each frame at the
 *                   exact cursor position, fading out with radius. Because it's
 *                   re-derived from the live pointer every frame (no easing), it
 *                   snaps to the cursor immediately, distinct from the flowing
 *                   trails.
 *
 * Implementation notes:
 *   - Pure Canvas 2D (crisp dotted field, cheap trails, no WebGL context cost).
 *   - Refs only — never triggers React re-renders.
 *   - pointer-events-none + behind content (negative z), so it never interferes.
 *   - Disabled under prefers-reduced-motion.
 */

const TENTACLE_COUNT = 7;
const SEGMENTS = 26; // points per tentacle
const SEG_EASE = 0.32; // chain follow stiffness

// Soft teal / aqua palette (r,g,b) for the arms + core — matches the brand accent.
const PALETTE = [
  [16, 221, 194], // bright teal (brand)
  [61, 232, 212], // mid teal
  [126, 235, 221], // aqua
  [180, 245, 238], // pale aqua
];

const CORE_INNER = '16, 221, 194';
const CORE_OUTER = '126, 235, 221';
const DOT_COLOR = '16, 221, 194';

// Dotted field configuration.
const DOT_SPACING = 13;
const DOT_RADIUS = 96; // px influence radius around the cursor
const DOT_SIZE = 1.35;

export default function SquidCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Live pointer (snaps instantly) + eased core (lags slightly).
    const pointer = { x: width / 2, y: height / 2 };
    const core = { x: width / 2, y: height / 2 };
    let active = false; // becomes true after first movement

    // Each tentacle: a chain of points + a phase for its swirl.
    const tentacles = Array.from({ length: TENTACLE_COUNT }, (_, t) => ({
      angle: (t / TENTACLE_COUNT) * Math.PI * 2,
      phase: Math.random() * Math.PI * 2,
      speed: 0.6 + Math.random() * 0.8,
      orbit: 26 + Math.random() * 34,
      color: PALETTE[t % PALETTE.length],
      points: Array.from({ length: SEGMENTS }, () => ({ x: pointer.x, y: pointer.y })),
    }));

    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      active = true;
    };
    const onTouch = (e) => {
      if (e.touches[0]) {
        pointer.x = e.touches[0].clientX;
        pointer.y = e.touches[0].clientY;
        active = true;
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('resize', resize);

    let raf = 0;
    let time = 0;

    const drawTentacle = (tentacle) => {
      const { points, color } = tentacle;
      // Anchor swirls around the eased core so arms splay + flow.
      const anchorX = core.x + Math.cos(tentacle.angle + time * tentacle.speed) * tentacle.orbit;
      const anchorY = core.y + Math.sin(tentacle.angle + time * tentacle.speed) * tentacle.orbit;

      // Lead point eases to the anchor, the rest follow the leader (soft rope).
      points[0].x += (anchorX - points[0].x) * SEG_EASE;
      points[0].y += (anchorY - points[0].y) * SEG_EASE;
      for (let i = 1; i < points.length; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * SEG_EASE;
        points[i].y += (points[i - 1].y - points[i].y) * SEG_EASE;
      }

      // Draw as a tapering, fading smooth stroke.
      const [r, g, b] = color;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      for (let i = 1; i < points.length; i++) {
        const p = i / points.length;
        ctx.beginPath();
        ctx.moveTo(points[i - 1].x, points[i - 1].y);
        const midX = (points[i - 1].x + points[i].x) / 2;
        const midY = (points[i - 1].y + points[i].y) / 2;
        ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, midX, midY);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.24 * (1 - p)})`;
        ctx.lineWidth = 3.2 * (1 - p) + 0.3;
        ctx.stroke();
      }
    };

    const drawCore = () => {
      const glow = ctx.createRadialGradient(core.x, core.y, 0, core.x, core.y, 46);
      glow.addColorStop(0, `rgba(${CORE_INNER}, 0.5)`);
      glow.addColorStop(0.4, `rgba(${CORE_OUTER}, 0.28)`);
      glow.addColorStop(1, `rgba(${CORE_OUTER}, 0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(core.x, core.y, 46, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.beginPath();
      ctx.arc(core.x, core.y, 3, 0, Math.PI * 2);
      ctx.fill();
    };

    // Instantaneous dense dotted field snapped to the live pointer.
    const drawDottedField = () => {
      const startX = Math.floor((pointer.x - DOT_RADIUS) / DOT_SPACING) * DOT_SPACING;
      const startY = Math.floor((pointer.y - DOT_RADIUS) / DOT_SPACING) * DOT_SPACING;
      const r2 = DOT_RADIUS * DOT_RADIUS;

      for (let x = startX; x <= pointer.x + DOT_RADIUS; x += DOT_SPACING) {
        for (let y = startY; y <= pointer.y + DOT_RADIUS; y += DOT_SPACING) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > r2) continue;
          const falloff = 1 - Math.sqrt(d2) / DOT_RADIUS;
          ctx.fillStyle = `rgba(${DOT_COLOR}, ${0.55 * falloff * falloff})`;
          ctx.beginPath();
          ctx.arc(x, y, DOT_SIZE, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Ease the core toward the live pointer.
      core.x += (pointer.x - core.x) * 0.18;
      core.y += (pointer.y - core.y) * 0.18;

      if (active) {
        ctx.globalCompositeOperation = 'source-over';
        tentacles.forEach(drawTentacle);
        drawCore();
        drawDottedField();
      }

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[40] h-full w-full"
    />
  );
}
