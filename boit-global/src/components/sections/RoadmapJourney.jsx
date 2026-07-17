import { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { home } from '@/data/content';
import { Reveal, TextReveal } from '@/components/ui/Reveal';
import HighlightText from '@/components/ui/HighlightText';

/**
 * RoadmapJourney — a pinned, scroll-driven "journey through a city" for the
 * Implementation Roadmap, modeled on Vectr's roadmap:
 *
 *   • TWO synchronized tracks on a single scroll:
 *       1. A step list pinned to the BOTTOM-LEFT (active step expands).
 *       2. A CENTER isometric "city" of houses connected by a glowing line.
 *
 *   • The whole CITY moves, not the line: as you scroll, the entire scene
 *     (houses + connecting conduit) pans so the active house arrives at a
 *     fixed focus point in the middle of the screen. The connecting line
 *     travels house → house in varied directions (diagonal, then across).
 *
 *   • Each house is tied to a step number and has its own visual state
 *     (upcoming / active / done), with the active one glowing teal, floating,
 *     ringed, and sitting on an instantaneous dotted field.
 *
 * Built with SVG + Framer Motion only (no WebGL): a fixed viewBox is scaled to
 * cover the viewport, and a single <g> is translated to act as the camera.
 */

const STEPS = home.roadmap.steps;

// Fixed virtual coordinate space; scaled to cover the viewport via viewBox.
const VIEW_W = 1280;
const VIEW_H = 720;
// Where the "camera" focuses on screen (right of center so the left stays free
// for the step list + heading).
const FOCUS_X = 780;
const FOCUS_Y = 340;

// House placements laid out so the line weaves in different directions:
//   01 → 02  down-right (top-left to bottom-right)
//   02 → 03  across + up (left to right, curved)
//   03 → 04  down-right again
const HOUSES = [
  { x: 320, y: 250, size: 62, height: 78 },
  { x: 780, y: 520, size: 74, height: 128 },
  { x: 1240, y: 360, size: 66, height: 92 },
  { x: 1700, y: 610, size: 78, height: 150 },
];

const CAM_INPUT = HOUSES.map((_, i) => i / (HOUSES.length - 1));
const CAM_X = HOUSES.map((h) => h.x);
const CAM_Y = HOUSES.map((h) => h.y);

// Smooth, flowing conduit through the house centers.
function buildCityPath(houses) {
  if (houses.length < 2) return '';
  let d = `M ${houses[0].x} ${houses[0].y}`;
  for (let i = 1; i < houses.length; i++) {
    const p0 = houses[i - 1];
    const p1 = houses[i];
    const c1x = p0.x + (p1.x - p0.x) * 0.5;
    const c2x = p1.x - (p1.x - p0.x) * 0.5;
    d += ` C ${c1x} ${p0.y}, ${c2x} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  return d;
}

const CITY_PATH = buildCityPath(HOUSES);

/* ------------------------------ Isometric house --------------------------- */

function isoPoints(cx, cy, size, height) {
  const kx = size * 0.866; // cos(30deg)
  const ky = size * 0.5; // sin(30deg)
  const A = [cx, cy - ky]; // back
  const B = [cx + kx, cy]; // right
  const C = [cx, cy + ky]; // front
  const D = [cx - kx, cy]; // left
  const top = [A, B, C, D];
  const left = [D, C, [C[0], C[1] + height], [D[0], D[1] + height]];
  const right = [C, B, [B[0], B[1] + height], [C[0], C[1] + height]];
  return { top, left, right, front: C };
}

const toPoly = (pts) => pts.map((p) => p.join(',')).join(' ');

// Per-state fills for the three visible cube faces.
const FACE = {
  todo: { top: '#ecffff', left: '#d4faf8', right: '#b8f0eb', stroke: '#7ee8dc' },
  done: { top: '#a8f5ec', left: '#6eebdd', right: '#3de8d4', stroke: '#10ddc2' },
  active: { top: '#10ddc2', left: '#0bb59f', right: '#099a87', stroke: '#10ddc2' },
};

function House({ house, index, state }) {
  const { top, left, right, front } = isoPoints(house.x, house.y, house.size, house.height);
  const c = FACE[state];
  const isActive = state === 'active';

  return (
    <motion.g
      initial={false}
      animate={{ y: isActive ? -10 : 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
    >
      {/* Instantaneous dotted ground field beneath the active house. */}
      {isActive && <DottedGround cx={house.x} cy={house.y + house.height + 6} />}

      {/* Soft contact shadow. */}
      <ellipse
        cx={house.x}
        cy={house.y + house.height + house.size * 0.5}
        rx={house.size * 1.15}
        ry={house.size * 0.4}
        fill="#0b1220"
        opacity={isActive ? 0.14 : 0.07}
      />

      <polygon points={toPoly(right)} fill={c.right} stroke={c.stroke} strokeWidth={1} />
      <polygon points={toPoly(left)} fill={c.left} stroke={c.stroke} strokeWidth={1} />
      <polygon points={toPoly(top)} fill={c.top} stroke={c.stroke} strokeWidth={1} />

      {/* A little "window" strip on the front-left face for character. */}
      <polygon
        points={toPoly([
          [left[0][0] + 8, left[0][1] + 14],
          [left[1][0] - 8, left[1][1] + 14],
          [left[1][0] - 8, left[1][1] + 30],
          [left[0][0] + 8, left[0][1] + 30],
        ])}
        fill={isActive ? '#3de8d4' : '#ffffff'}
        opacity={isActive ? 0.5 : 0.35}
      />

      {/* Active house crown: glowing orb + pulse ring on the roof. */}
      {isActive && (
        <>
          <motion.circle
            cx={house.x}
            cy={top[0][1] - 4}
            r={7}
            fill="#0bb59f"
            animate={{ opacity: [0.9, 0.5, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx={house.x}
            cy={top[0][1] - 4}
            r={7}
            fill="none"
            stroke="#0bb59f"
            strokeWidth={1.5}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            style={{ transformOrigin: `${house.x}px ${top[0][1] - 4}px` }}
          />
        </>
      )}

      {/* Step number badge floating above the house. */}
      <g transform={`translate(${front[0]}, ${top[0][1] - 44})`}>
        <motion.g
          initial={false}
          animate={{ opacity: state === 'todo' ? 0.5 : 1, y: isActive ? -2 : 0 }}
        >
          <rect
            x={-16}
            y={-16}
            width={32}
            height={32}
            rx={9}
            fill={isActive ? '#10ddc2' : '#ffffff'}
            stroke={isActive ? '#10ddc2' : '#7ee8dc'}
            strokeWidth={1.5}
          />
          <text
            x={0}
            y={1}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="'Space Grotesk', sans-serif"
            fontSize={13}
            fontWeight="600"
            fill={isActive ? '#ffffff' : '#33695c'}
          >
            {String(index + 1).padStart(2, '0')}
          </text>
        </motion.g>
      </g>
    </motion.g>
  );
}

/* --------------------------- Dotted ground field -------------------------- */

function DottedGround({ cx, cy }) {
  const dots = [];
  const R = 130;
  const spacing = 16;
  for (let x = -R; x <= R; x += spacing) {
    for (let y = -R * 0.5; y <= R * 0.5; y += spacing * 0.6) {
      // Squash vertically for an iso-ground feel.
      const d = Math.hypot(x, y * 2);
      if (d > R) continue;
      const falloff = 1 - d / R;
      dots.push(
        <circle
          key={`${x}-${y}`}
          cx={cx + x}
          cy={cy + y}
          r={1.4}
          fill="#10ddc2"
          opacity={0.5 * falloff * falloff}
        />,
      );
    }
  }
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      {dots}
    </motion.g>
  );
}

/* --------------------------------- City ----------------------------------- */

function City({ scrollYProgress, activeIndex }) {
  const pathRef = useRef(null);
  const lengthRef = useRef(0);
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  // Camera: follow the polyline of house centers.
  const camX = useTransform(scrollYProgress, CAM_INPUT, CAM_X);
  const camY = useTransform(scrollYProgress, CAM_INPUT, CAM_Y);
  const gx = useTransform(camX, (x) => FOCUS_X - x);
  const gy = useTransform(camY, (y) => FOCUS_Y - y);
  const gxs = useSpring(gx, { stiffness: 90, damping: 24, mass: 0.4 });
  const gys = useSpring(gy, { stiffness: 90, damping: 24, mass: 0.4 });

  // Connecting line draws as you scroll.
  const draw = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  // Move the traveling pulse along the drawn tip (imperative, no re-render).
  useMotionValueEvent(draw, 'change', (v) => {
    const path = pathRef.current;
    if (!path) return;
    if (!lengthRef.current) lengthRef.current = path.getTotalLength();
    const pt = path.getPointAtLength(lengthRef.current * Math.max(0, Math.min(1, v)));
    dotRef.current?.setAttribute('cx', pt.x);
    dotRef.current?.setAttribute('cy', pt.y);
    glowRef.current?.setAttribute('cx', pt.x);
    glowRef.current?.setAttribute('cy', pt.y);
  });

  const stateFor = (i) => (i === activeIndex ? 'active' : i < activeIndex ? 'done' : 'todo');

  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Fixed focus reticle — stays centered while the city pans past it. */}
      <g opacity={0.5}>
        <circle cx={FOCUS_X} cy={FOCUS_Y} r={54} fill="none" stroke="#10ddc2" strokeWidth={1} strokeDasharray="3 6" />
        <circle cx={FOCUS_X} cy={FOCUS_Y} r={3} fill="#10ddc2" />
      </g>

      {/* The camera group: everything inside pans together. */}
      <motion.g style={{ x: gxs, y: gys }}>
        {/* Faint full conduit so the destinations are always hinted. */}
        <path d={CITY_PATH} fill="none" stroke="#b8f0eb" strokeWidth={3} strokeLinecap="round" />
        {/* Drawn (traveled) portion. */}
        <motion.path
          ref={pathRef}
          d={CITY_PATH}
          fill="none"
          stroke="#10ddc2"
          strokeWidth={3.5}
          strokeLinecap="round"
          style={{ pathLength: draw }}
        />
        {/* Traveling pulse at the tip. */}
        <circle ref={glowRef} r={12} fill="#10ddc2" opacity={0.25} />
        <circle ref={dotRef} r={5} fill="#10ddc2" />

        {HOUSES.map((house, i) => (
          <House key={i} house={house} index={i} state={stateFor(i)} />
        ))}
      </motion.g>
    </svg>
  );
}

/* ------------------------------- Step list -------------------------------- */

function StepList({ activeIndex }) {
  return (
    <div className="pointer-events-none absolute bottom-10 left-0 w-full px-6 md:bottom-14 lg:px-10">
      <div className="max-w-md">
        <ol className="space-y-1">
          {STEPS.map((step, i) => {
            const isActive = i === activeIndex;
            return (
              <li key={step.id}>
                <div className="flex items-start gap-4 py-1.5">
                  <span
                    className={`mt-0.5 font-display text-sm tabular-nums transition-colors duration-300 ${
                      isActive ? 'text-electric-500' : 'text-black'
                    }`}
                  >
                    {step.id}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`font-display font-medium tracking-tight transition-all duration-300 ${
                        isActive ? 'text-xl text-black md:text-2xl' : 'text-base text-black'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden text-sm leading-relaxed text-black"
                        >
                          <HighlightText
                            as="span"
                            text={step.body}
                            className="block pt-2 text-sm leading-relaxed"
                          />
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                {/* Progress hairline under each row. */}
                <span
                  className={`block h-px w-full origin-left transition-transform duration-500 ease-expo ${
                    i <= activeIndex ? 'scale-x-100 bg-electric-400' : 'scale-x-100 bg-line'
                  }`}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

/* --------------------------------- Section -------------------------------- */

export default function RoadmapJourney() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.round(v * (STEPS.length - 1));
    const clamped = Math.max(0, Math.min(STEPS.length - 1, idx));
    setActiveIndex((prev) => (prev === clamped ? prev : clamped));
  });

  return (
    // Tall scroll track (one viewport of scroll per step) drives the pinned scene.
    <section ref={sectionRef} className="relative" style={{ height: `${STEPS.length * 100}vh` }}>
      <div className="sticky top-0 h-svh overflow-hidden bg-[#f7fefe]">
        {/* The panning city */}
        <City scrollYProgress={scrollYProgress} activeIndex={activeIndex} />

        {/* Heading — top left */}
        <div className="pointer-events-none absolute left-0 top-0 w-full px-6 pt-28 md:pt-32 lg:px-10">
          <div className="max-w-md">
            <Reveal>
              <span className="eyebrow mb-5">{home.roadmap.eyebrow}</span>
            </Reveal>
            <h2 className="text-display-sm font-semibold tracking-tightest">
              <TextReveal text={home.roadmap.title} />
            </h2>
          </div>
        </div>

        {/* Step list — bottom left */}
        <StepList activeIndex={activeIndex} />
      </div>
    </section>
  );
}
