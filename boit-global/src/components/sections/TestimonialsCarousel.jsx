import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import HighlightText from '@/components/ui/HighlightText';
import { testimonials } from '@/data/content';

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="border-y border-line bg-surface-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="mb-4 font-display text-3xl font-bold text-black md:text-4xl">
                Customers Talk About Us
              </h2>
              <p className="text-lg text-black">
                <span className="font-display text-4xl font-bold text-electric-500">15+</span>{' '}
                Clients Happy
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div className="flex min-h-[260px] flex-col justify-between rounded-2xl border border-line bg-white p-8 shadow-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mb-6 text-lg leading-relaxed text-black">
                    &ldquo;
                    <HighlightText text={testimonials[index].quote} />
                    &rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-500 font-bold text-sm text-black">
                      {testimonials[index].initials}
                    </div>
                    <span className="font-medium text-black">{testimonials[index].company}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      i === index ? 'bg-electric-500' : 'bg-line-strong'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-black transition-colors hover:border-electric-400 hover:bg-white"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-black transition-colors hover:border-electric-400 hover:bg-white"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
