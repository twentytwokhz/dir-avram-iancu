import { Metadata } from 'next';
import { Resources } from '@/components/resources-content';
import { NavHeader } from '@/components/nav-header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Avram Iancu - Historical Resources',
  description: 'Explore historical documents, images, and research materials about Avram Iancu and the Romanian Revolution of 1848-1849.',
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <NavHeader />
      <Resources />
      <Footer />
    </main>
  );
}