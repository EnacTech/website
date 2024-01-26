import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MobileMenu from '@/components/MobileMenu';
import Header from '@/components/Header';
import '../globals.css';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Enactus NSUT',
  description:
    'Enactus NSUT is a community of students, academics and business leaders committed to using the power of entrepreneurial action to transform lives and shape a better and more sustainable world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <MobileMenu />
        <div className='flex min-h-dvh flex-col justify-between md:min-h-[88vh] lg:min-h-[85vh]'>
          <div className='mt-[12vh] md:mt-0'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
