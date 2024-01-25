'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/assets/logo.png';
import { navigation } from '@/app/constants';
import Link from 'next/link';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const fullPath = usePathname();
  return (
    <>
      <nav className='bg-enactus-grey h-[12vh] flex justify-between items-center text-white px-6 md:hidden absolute w-full top-0 left-0 right-0 z-[101]'>
        <div className='h-[8vh] cursor-pointer'>
          <Image src={Logo} alt='Logo' className='h-full w-auto' />
        </div>
        <div className='cursor-pointer' onClick={() => setOpen(!open)}>
          {!open ? <Menu size='28' /> : <X size='28' />}
        </div>
      </nav>
      <div
        className={`bg-[#383838] text-white absolute left-0 w-full transition-all ease-in duration-500 pb-8 md:hidden ${
          open
            ? 'top-[12vh] z-[100] opacity-100'
            : '-top-96 opacity-0 pointer-events-none'
        }`}
      >
        {navigation.map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            className={`block px-8 py-4 hover:text-enactus-chrome text-lg ${
              path === '/' && fullPath === '/'
                ? 'text-enactus-yellow'
                : fullPath.startsWith(path) && path !== '/'
                ? 'text-enactus-yellow'
                : 'font-extralight'
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </>
  );
}
