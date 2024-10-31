import { NavHeader } from '@/components/nav-header';
import { HeroSection } from '@/components/hero-section';
import { Biography } from '@/components/biography';
import { Timeline } from '@/components/timeline';
import { Gallery } from '@/components/gallery';
import { Newsletter } from '@/components/newsletter';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavHeader />
      <HeroSection />
      <Biography />
      <Timeline />
      <Gallery />
      <Newsletter />
      <Footer />
    </main>
  );
}