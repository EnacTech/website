import Header from '@/components/admin/Header';

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
