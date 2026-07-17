import PageTransition from '@/components/ui/PageTransition';
import Button from '@/components/ui/Button';
import { TextReveal } from '@/components/ui/Reveal';

export default function NotFound() {
  return (
    <PageTransition>
      <section className="relative flex min-h-svh items-center overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-glow blur-3xl" />
        <div className="container relative text-center">
          <h1 className="text-display-lg font-semibold tracking-tightest text-gradient">
            <TextReveal text="404" />
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-black">
            This route drifted off the network. Let's get you back on the path.
          </p>
          <div className="mt-10 flex justify-center">
            <Button to="/" variant="primary" size="lg" arrow>
              Return home
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
