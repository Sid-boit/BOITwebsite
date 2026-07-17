import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { nav } from '@/data/content';
import Button from '@/components/ui/Button';
import BrandLogo from '@/components/ui/BrandLogo';
import ServicesMegaMenu, { ServicesMobileNav } from '@/components/layout/ServicesMegaMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24));

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMobile = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ease-expo ${
          scrolled ? 'border-b border-line bg-white/80 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="container flex h-16 items-center justify-between md:h-20">
          <BrandLogo />

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {nav.map((item) =>
              item.to === '/services' ? (
                <ServicesMegaMenu key={item.to} />
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                      isActive ? 'text-black' : 'text-black hover:text-black'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-full bg-surface-200"
                          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ),
            )}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button to="/contact" variant="primary" size="sm" arrow>
              Contact Us
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              className="h-0.5 w-6 rounded-full bg-black"
            />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-0.5 w-6 rounded-full bg-black" />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              className="h-0.5 w-6 rounded-full bg-black"
            />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-white/95 backdrop-blur-2xl md:hidden"
          >
            <div className="container flex min-h-full flex-col justify-center gap-2 pb-12 pt-20">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.to === '/services' ? (
                    <ServicesMobileNav onNavigate={closeMobile} />
                  ) : (
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={closeMobile}
                      className={({ isActive }) =>
                        `block py-3 font-display text-3xl font-medium tracking-tight ${
                          isActive ? 'text-electric-600' : 'text-black'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </motion.div>
              ))}
              <div className="mt-8">
                <Button to="/contact" variant="primary" size="lg" arrow onClick={closeMobile}>
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
