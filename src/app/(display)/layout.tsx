import MobileMenu from '@/components/MobileMenu';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
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
