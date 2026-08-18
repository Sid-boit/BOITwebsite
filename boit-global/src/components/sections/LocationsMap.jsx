import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { about } from '@/data/content';
import worldMap from '@/assets/country_image.png';
import worldMap2x from '@/assets/country_image@2x.png';
import dubaiImg from '@/assets/locations/dubai.png';
import malaysiaImg from '@/assets/locations/malaysia.png';
import indiaImg from '@/assets/locations/india.png';
import singaporeImg from '@/assets/locations/singapore.png';
import indonesiaImg from '@/assets/locations/indonesia.png';
import southAfricaImg from '@/assets/locations/south-africa.png';

const EASE = [0.16, 1, 0.3, 1];

const locationImages = {
  dubai: dubaiImg,
  malaysia: malaysiaImg,
  india: indiaImg,
  singapore: singaporeImg,
  indonesia: indonesiaImg,
  'south-africa': southAfricaImg,
};

function LocationTooltip({ loc }) {
  const photo = locationImages[loc.id] ?? null;

  return (
    <div className="w-72 max-w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-xl border border-line bg-white shadow-card">
      {photo ? (
        <img
          src={photo}
          alt={loc.name}
          className="h-28 w-full object-cover"
        />
      ) : (
        <div className="flex h-28 w-full items-center justify-center bg-gradient-to-br from-electric-50 via-electric-100 to-aqua-200">
          <span className="text-4xl" aria-hidden>
            {loc.flag}
          </span>
        </div>
      )}
      <div className="p-4">
        <div className="flex items-start gap-2">
          <span className="text-xl leading-none" aria-hidden>
            {loc.flag}
          </span>
          <div className="min-w-0">
            <p className="font-display text-base font-semibold text-black">{loc.name}</p>
            {loc.company && (
              <p className="mt-0.5 text-xs font-medium text-electric-700">{loc.company}</p>
            )}
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-navy-700">{loc.address}</p>
        <dl className="mt-3 space-y-1.5 text-sm">
          {loc.uen && (
            <div className="flex gap-2">
              <dt className="shrink-0 text-navy-400">UEN</dt>
              <dd className="text-black">{loc.uen}</dd>
            </div>
          )}
          {loc.phone && (
            <div className="flex gap-2">
              <dt className="shrink-0 text-navy-400">Phone</dt>
              <dd>
                <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="text-black hover:text-electric-700">
                  {loc.phone}
                </a>
              </dd>
            </div>
          )}
          {loc.email && (
            <div className="flex gap-2">
              <dt className="shrink-0 text-navy-400">Email</dt>
              <dd>
                <a href={`mailto:${loc.email}`} className="text-black hover:text-electric-700">
                  {loc.email}
                </a>
              </dd>
            </div>
          )}
          {loc.countryManager && (
            <div className="flex gap-2">
              <dt className="shrink-0 text-navy-400">Manager</dt>
              <dd className="text-black">{loc.countryManager}</dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}

function MapMarker({ loc, active, onActivate, onDeactivate }) {
  const below = loc.mapY < 42;
  const flipLeft = loc.mapX > 70;

  return (
    <button
      type="button"
      aria-label={`${loc.name} office`}
      aria-expanded={active}
      className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 outline-none"
      style={{ left: `${loc.mapX}%`, top: `${loc.mapY}%` }}
      onMouseEnter={() => onActivate(loc.id)}
      onMouseLeave={() => onDeactivate(loc.id)}
      onFocus={() => onActivate(loc.id)}
      onBlur={() => onDeactivate(loc.id)}
      onClick={() => onActivate(active ? null : loc.id)}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <span
          className={`absolute inset-0 rounded-full bg-electric-500/35 transition-transform duration-500 ${
            active ? 'scale-[2.6]' : 'scale-100 group-hover:scale-[2.2]'
          } animate-pulse-glow`}
        />
        <span
          className={`relative h-3 w-3 rounded-full border-2 border-white bg-electric-500 shadow-md transition-transform duration-300 ${
            active ? 'scale-125' : 'group-hover:scale-110'
          }`}
        />
      </span>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: below ? -6 : 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: below ? -4 : 4, scale: 0.96 }}
            transition={{ duration: 0.22, ease: EASE }}
            className={`pointer-events-none absolute z-20 ${
              below ? 'top-full mt-3' : 'bottom-full mb-3'
            } ${flipLeft ? 'right-0 translate-x-2' : 'left-0 -translate-x-2'}`}
          >
            <LocationTooltip loc={loc} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function LocationsMap() {
  const [activeId, setActiveId] = useState(null);
  const locations = about.locations;

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl"
        >
          <span className="eyebrow mb-4">Global presence</span>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-black md:text-4xl">
            Our offices worldwide
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-600 md:text-lg">
            Hover or tap a location to see company details, address, and contact information.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="relative mx-auto mt-10 max-w-[1024px] overflow-visible rounded-2xl border border-line bg-white/80 p-2 shadow-card md:mt-14 md:p-3"
        >
          <div className="relative w-full overflow-visible" style={{ aspectRatio: '1024 / 581' }}>
            <img
              src={worldMap2x}
              srcSet={`${worldMap} 1024w, ${worldMap2x} 2048w`}
              sizes="(max-width: 1024px) 100vw, 1024px"
              width={1024}
              height={581}
              alt="BOIT Global office locations world map"
              className="absolute inset-0 h-full w-full rounded-xl object-contain select-none"
              style={{ imageRendering: 'auto' }}
              decoding="async"
              draggable={false}
            />

            {locations.map((loc) => (
              <MapMarker
                key={loc.id}
                loc={loc}
                active={activeId === loc.id}
                onActivate={setActiveId}
                onDeactivate={(id) => setActiveId((cur) => (cur === id ? null : cur))}
              />
            ))}
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc, i) => {
            const photo = locationImages[loc.id] ?? null;
            return (
              <motion.button
                key={loc.id}
                type="button"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
                onMouseEnter={() => setActiveId(loc.id)}
                onMouseLeave={() => setActiveId((cur) => (cur === loc.id ? null : cur))}
                onClick={() => setActiveId(activeId === loc.id ? null : loc.id)}
                className={`overflow-hidden rounded-xl border text-left transition-colors duration-300 ${
                  activeId === loc.id
                    ? 'border-electric-400 bg-electric-50'
                    : 'border-line bg-white hover:border-electric-300 hover:bg-electric-50/50'
                }`}
              >
                {photo ? (
                  <img src={photo} alt="" className="h-28 w-full object-cover" />
                ) : (
                  <div className="flex h-20 w-full items-center justify-center bg-gradient-to-br from-electric-50 to-aqua-200">
                    <span className="text-3xl" aria-hidden>
                      {loc.flag}
                    </span>
                  </div>
                )}
                <div className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg" aria-hidden>
                      {loc.flag}
                    </span>
                    <span className="font-display text-base font-semibold text-black">{loc.name}</span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-electric-700">{loc.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600 line-clamp-2">{loc.address}</p>
                  {loc.phone && <p className="mt-2 text-xs text-navy-500">{loc.phone}</p>}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
