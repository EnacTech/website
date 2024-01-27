import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Enactus NSUT',
  description:
    'Enactus NSUT is a community of students, academics and business leaders committed to using the power of entrepreneurial action to transform lives and shape a better and more sustainable world.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
