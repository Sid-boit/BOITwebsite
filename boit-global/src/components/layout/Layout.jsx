import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import SquidCursor from '@/components/effects/SquidCursor';

/**
 * Global chrome shared by every route: the cursor-follow "squid" background
 * layer, the scroll-progress bar, the transparent blur-backdrop navigation,
 * page content, and the footer/CTA.
 *
 * The squid sits at a negative z-index so it renders above the page's white
 * background but beneath all (positioned) content.
 */
export default function Layout({ children }) {
  return (
    <div className="relative isolate flex min-h-screen flex-col">
      <SquidCursor />
      <ScrollProgress />
      <Navbar />
      <div className="relative z-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
}
