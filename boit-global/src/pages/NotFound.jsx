import PageTransition from '@/components/ui/PageTransition';
import Button from '@/components/ui/Button';
import { TextReveal } from '@/components/ui/Reveal';

export default function NotFound() {
  return (
    <PageTransition>
      <section className="relative flex min-h-svh items-center overflow-hidden bg-[#f7fefe]">
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
