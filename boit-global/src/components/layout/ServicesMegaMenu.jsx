import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Monitor, Layers, Code2, Briefcase } from 'lucide-react';
import { servicesNav, servicesTopBox } from '@/data/servicesNav';
import iso9001 from '@/assets/iso9001.png';
import iso27001 from '@/assets/iso27001.jpeg';
import logoImg from '@/assets/Logo-Boit-removebg-preview.png';
import RippleLink from '@/components/ui/RippleLink';

const ICONS = {
  monitor: Monitor,
  layers: Layers,
  code: Code2,
  briefcase: Briefcase,
};

const PANEL_VARIANTS = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
  },
};

function CategoryBlock({ cat, onNavigate }) {
  const categoryPath = `/services/${cat.slug}`;
  return (
    <div className="min-w-[11rem]">
      <Link
        to={categoryPath}
        onClick={onNavigate}
        className="hover-ripple hover-ripple--teal hover-ripple--full mb-2 block w-full rounded-md px-2 py-1.5 font-display text-sm font-semibold text-black md:text-[15px]"
      >
        <span className="hover-ripple__label whitespace-normal">{cat.title}</span>
      </Link>
      <ul>
        {cat.pages.map((page) => (
          <li key={page.slug}>
            <RippleLink
              to={`/services/${cat.slug}#${page.slug}`}
              onClick={onNavigate}
              className="rounded-md px-2 py-1 text-xs leading-snug text-black md:text-sm"
            >
              {page.navLabel}
            </RippleLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PillarPanel({ pillar, onNavigate }) {
  return (
    <div className="flex-1 px-5 py-5 md:px-8 md:py-6">
      <p className="mb-4 font-display text-xs font-semibold uppercase tracking-breathe text-black md:text-sm">
        {pillar.label}
      </p>
      <div className="grid grid-cols-3 gap-x-6 gap-y-2 lg:gap-x-10">
        {pillar.categories.map((cat) => (
          <CategoryBlock key={cat.slug} cat={cat} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}

function MegaMenuPanel({ open, onOpen, onClose, onNavigate }) {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <div
            className="fixed inset-x-0 top-16 z-[110] h-4 md:top-20"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            aria-hidden
          />
          <motion.div
            variants={PANEL_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-x-0 top-16 z-[110] md:top-20"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            <div className="px-3 md:px-5 lg:px-6">
              <div className="w-full overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                {/* Four service pillars — above Insurance / Banking */}
                <div className="border-b border-line bg-surface-100 px-4 py-3 md:px-6">
                  <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2">
                    {servicesTopBox.map((item) => {
                      const Icon = ICONS[item.icon] ?? Monitor;
                      return (
                        <li key={item.id}>
                          <Link
                            to={item.to}
                            onClick={onNavigate}
                            className="group flex items-center gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-white"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-electric-50 text-electric-700">
                              <Icon className="h-4 w-4" strokeWidth={1.75} />
                            </span>
                            <span className="font-display text-xs font-semibold leading-snug text-black md:text-[13px]">
                              {item.label}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="flex divide-x divide-line">
                  <PillarPanel pillar={servicesNav.insurance} onNavigate={onNavigate} />
                  <PillarPanel pillar={servicesNav.banking} onNavigate={onNavigate} />
                </div>

                {/* Brand + ISO badges — display only */}
                <div className="flex items-center justify-end gap-4 border-t border-line bg-white px-5 py-3 md:gap-5 md:px-8">
                  <img
                    src={logoImg}
                    alt="BOIT Global"
                    className="h-8 w-auto object-contain md:h-9"
                    draggable={false}
                  />
                  <img
                    src={iso9001}
                    alt="ISO 9001 Certified"
                    className="h-10 w-10 object-contain md:h-12 md:w-12"
                    draggable={false}
                  />
                  <img
                    src={iso27001}
                    alt="ISO 27001 Certified"
                    className="h-10 w-10 object-contain md:h-12 md:w-12"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default function ServicesMegaMenu({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 200);
  };

  const handleOpen = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const handleNavigate = () => {
    setOpen(false);
    onNavigate?.();
  };

  return (
    <div onMouseEnter={handleOpen} onMouseLeave={scheduleClose}>
      <NavLink
        to="/services"
        onClick={onNavigate}
        className={({ isActive }) =>
          `group relative flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
            isActive || open ? 'text-black' : 'text-black hover:text-black'
          }`
        }
      >
        {({ isActive }) => (
          <>
            Services
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-300 ${
                open ? 'rotate-180' : ''
              }`}
            />
            {(isActive || open) && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 -z-10 rounded-full bg-surface-200"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
          </>
        )}
      </NavLink>

      <MegaMenuPanel
        open={open}
        onOpen={handleOpen}
        onClose={scheduleClose}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

/** Mobile accordion for services sub-navigation. */
export function ServicesMobileNav({ onNavigate }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between py-3 font-display text-3xl font-medium tracking-tight text-black"
      >
        Services
        <ChevronDown
          className={`h-6 w-6 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden pl-2"
          >
            <div className="mb-6 space-y-1 border-b border-line pb-4">
              {servicesTopBox.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.to}
                  onClick={onNavigate}
                  className="block py-1.5 text-sm font-medium text-black"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {Object.entries(servicesNav).map(([key, pillar]) => (
              <div key={key} className="mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-black">
                  {pillar.label}
                </p>
                {pillar.categories.map((cat) => (
                  <div key={cat.slug} className="mb-4">
                    <NavLink
                      to={`/services/${cat.slug}`}
                      onClick={onNavigate}
                      className="block py-1 font-display text-lg font-semibold text-black"
                    >
                      {cat.title}
                    </NavLink>
                    <ul className="mt-1 space-y-1 pl-3">
                      {cat.pages.map((page) => (
                        <li key={page.slug}>
                          <NavLink
                            to={`/services/${cat.slug}#${page.slug}`}
                            onClick={onNavigate}
                            className="block py-1 text-sm text-black"
                          >
                            {page.navLabel}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
