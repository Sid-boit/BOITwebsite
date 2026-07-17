import { useState } from 'react';
import { contact } from '@/data/content';
import PageTransition from '@/components/ui/PageTransition';
import PageHero from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

function Field({ label, name, type = 'text', textarea = false, required = true }) {
  const shared =
    'peer w-full border-0 border-b border-line-strong bg-transparent pb-3 pt-6 text-black placeholder-transparent transition-colors duration-300 focus:border-electric-500 focus:outline-none focus:ring-0';
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={name} name={name} rows={4} placeholder={label} required={required} className={shared} />
      ) : (
        <input id={name} name={name} type={type} placeholder={label} required={required} className={shared} />
      )}
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-0 top-0 text-xs uppercase tracking-breathe text-black transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-0 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-breathe peer-focus:text-electric-600"
      >
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  // NOTE: wire this to the Node/Express API later. For now it optimistically
  // shows the success state without a network call.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageTransition>
      <PageHero eyebrow={contact.hero.eyebrow} title={contact.hero.title} subtitle={contact.hero.subtitle} />

      <section className="relative py-16 md:py-24">
        <div className="container grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="space-y-8">
              <div>
                <span className="eyebrow mb-4">Direct</span>
                <a href="mailto:hello@boitglobal.com" className="block font-display text-xl text-black transition-colors hover:text-electric-600">
                  hello@boitglobal.com
                </a>
              </div>
              <div className="hairline" />
              <p className="max-w-sm text-sm leading-relaxed text-black">
                We operate as an extension of your team. Share your goals and we'll respond within
                one business day.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {sent ? (
              <div className="glass flex flex-col items-start gap-4 rounded-2xl p-10">
                <span className="flex h-2 w-2 rounded-full bg-electric-500 shadow-glow" />
                <h3 className="font-display text-2xl text-black">Message received.</h3>
                <p className="text-black">Thanks for reaching out — our team will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-10">
                <div className="grid gap-10 sm:grid-cols-2">
                  <Field label="Full name" name="name" />
                  <Field label="Work email" name="email" type="email" />
                </div>
                <div className="grid gap-10 sm:grid-cols-2">
                  <Field label="Company" name="company" required={false} />
                  <Field label="Phone" name="phone" type="tel" required={false} />
                </div>
                <Field label="How can we help?" name="message" textarea />
                <div>
                  <Button type="submit" variant="primary" size="lg" arrow>
                    Send message
                  </Button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
