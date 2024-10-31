import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Avram Iancu - Romanian Revolutionary Leader',
  description: 'Discover the legacy of Avram Iancu, the legendary Romanian revolutionary leader of the 1848-1849 Transylvanian uprising.',
  keywords: ['Avram Iancu', 'Romanian Revolution', 'Transylvania', '1848', 'Romanian History'],
  authors: [{ name: 'Florin Bobis' }],
  openGraph: {
    title: 'Avram Iancu - Romanian Revolutionary Leader',
    description: 'Discover the legacy of Avram Iancu, the legendary Romanian revolutionary leader.',
    images: ['/hero-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}