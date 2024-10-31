import { Metadata } from 'next';
import { Biography } from '@/components/biography-content';
import { NavHeader } from '@/components/nav-header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Avram Iancu - Biography | Romanian Revolutionary Leader',
  description: 'Detailed biography of Avram Iancu, the legendary Romanian revolutionary leader who fought for freedom and justice in Transylvania.',
};

export default function BiographyPage() {
  return (
    <main className="min-h-screen">
      <NavHeader />
      <Biography />
      <Footer />
    </main>
  );
}