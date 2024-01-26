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
      <nav className='absolute left-0 right-0 top-0 z-[101] flex h-[12vh] w-full items-center justify-between bg-enactus-grey px-6 text-white md:hidden'>
        <div className='h-[8vh] cursor-pointer'>
          <Image src={Logo} alt='Logo' className='h-full w-auto' />
        </div>
        <div className='cursor-pointer' onClick={() => setOpen(!open)}>
          {!open ? <Menu size='28' /> : <X size='28' />}
        </div>
      </nav>
      <div
        className={`absolute left-0 w-full bg-[#383838] pb-8 text-white transition-all duration-500 ease-in md:hidden ${
          open
            ? 'top-[12vh] z-[100] opacity-100'
            : 'pointer-events-none -top-96 opacity-0'
        }`}>
        {navigation.map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            className={`block px-8 py-4 text-lg hover:text-enactus-chrome ${
              path === '/' && fullPath === '/'
                ? 'text-enactus-yellow'
                : fullPath.startsWith(path) && path !== '/'
                  ? 'text-enactus-yellow'
                  : 'font-extralight'
            }`}>
            {name}
          </Link>
        ))}
      </div>
    </>
  );
}
