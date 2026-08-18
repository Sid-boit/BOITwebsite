import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { productsNav, productsTopBar } from '@/data/productsNav';
import RippleLink from '@/components/ui/RippleLink';
import iso9001 from '@/assets/iso9001.png';
import iso27001 from '@/assets/iso27001.jpeg';
import logoImg from '@/assets/Logo-Boit-removebg-preview.png';

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

function PillarColumn({ pillar, onNavigate }) {
  return (
    <div className="flex-1 px-5 py-5 md:px-8 md:py-6">
      <Link
        to={`/product/${pillar.slug}`}
        onClick={onNavigate}
        className="hover-ripple hover-ripple--teal hover-ripple--full mb-4 block w-full rounded-md px-2 py-1.5"
      >
        <span className="hover-ripple__label font-display text-xs font-semibold uppercase tracking-breathe text-black md:text-sm">
          {pillar.label}
        </span>
      </Link>
      <ul className="space-y-3">
        {pillar.pages.map((page) => (
          <li key={page.slug}>
            <RippleLink
              to={`/product/${pillar.slug}#${page.slug}`}
              onClick={onNavigate}
              className="rounded-md px-2 py-1 text-xs leading-snug text-black md:text-sm"
            >
              {page.navLabel}
            </RippleLink>
            <ul className="mt-1 space-y-0.5 pl-4">
              {page.features.map((f) => (
                <li key={f.title} className="text-[11px] leading-snug text-black/55 md:text-xs">
                  {f.title}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
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
                {/* AI capabilities strip — above Insurance / Banking */}
                <div className="border-b border-line bg-surface-100 px-4 py-3 md:px-6">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-black/50">
                      AI Capabilities
                    </p>
                    <Link
                      to="/product/capabilities"
                      onClick={onNavigate}
                      className="text-[10px] font-semibold uppercase tracking-widest text-electric-600 hover:text-electric-700"
                    >
                      View all →
                    </Link>
                  </div>
                  <ul className="flex flex-wrap gap-1.5">
                    {productsTopBar.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={item.to}
                          onClick={onNavigate}
                          className="inline-block rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-medium text-black transition-colors hover:border-electric-400 hover:bg-electric-50 md:text-xs"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex divide-x divide-line">
                  <PillarColumn pillar={productsNav.insurance} onNavigate={onNavigate} />
                  <PillarColumn pillar={productsNav.banking} onNavigate={onNavigate} />
                </div>

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

export default function ProductsMegaMenu({ onNavigate }) {
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
        to="/product"
        onClick={onNavigate}
        className={({ isActive }) =>
          `group relative flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
            isActive || open ? 'text-black' : 'text-black hover:text-black'
          }`
        }
      >
        {({ isActive }) => (
          <>
            Product
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

export function ProductsMobileNav({ onNavigate }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between py-3 font-display text-3xl font-medium tracking-tight text-black"
      >
        Product
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
              <NavLink
                to="/product/capabilities"
                onClick={onNavigate}
                className="block py-1.5 font-display text-lg font-semibold text-black"
              >
                AI Capabilities
              </NavLink>
              {productsTopBar.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.to}
                  onClick={onNavigate}
                  className="block py-1 text-sm text-black"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {Object.values(productsNav).map((pillar) => (
              <div key={pillar.slug} className="mb-6">
                <NavLink
                  to={`/product/${pillar.slug}`}
                  onClick={onNavigate}
                  className="mb-2 block font-display text-lg font-semibold text-black"
                >
                  {pillar.label}
                </NavLink>
                <ul className="space-y-1 pl-3">
                  {pillar.pages.map((page) => (
                    <li key={page.slug}>
                      <NavLink
                        to={`/product/${pillar.slug}#${page.slug}`}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
