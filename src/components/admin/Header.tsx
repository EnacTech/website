'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import Logo from '@/assets/logo.png';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Header() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className='flex w-full items-center justify-between border-b px-6 py-4 text-white md:flex-row md:px-12 lg:px-24'>
      <Image src={Logo} alt='Logo' className='h-[7.5vh] w-auto md:h-[10vh]' />
      <Button variant='destructive' onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
