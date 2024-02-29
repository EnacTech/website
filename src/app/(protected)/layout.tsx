import Header from '@/components/admin/Header';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }
  return (
    <html lang='en' className='dark'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
