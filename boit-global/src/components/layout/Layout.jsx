import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import SquidCursor from '@/components/effects/SquidCursor';
import CookieConsent from '@/components/ui/CookieConsent';

/**
 * Global chrome shared by every route.
 * Do NOT put overflow-x:hidden or perspective on ancestors of the roadmap —
 * both break position:sticky for the pinned Implementation Roadmap.
 */
export default function Layout({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#f7fefe]">
      <SquidCursor />
      <ScrollProgress />
      <Navbar />
      <div className="relative z-0 flex-1 bg-[#f7fefe]">{children}</div>
      <Footer />
      <CookieConsent />
    </div>
  );
}
