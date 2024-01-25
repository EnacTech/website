'use client';

import Image from 'next/image';
import Link from 'next/link';
import { navigation } from '@/app/constants';
import Logo from '@/assets/logo.png';

export default function Header() {
  return (
    <nav className='bg-enactus-grey py-10 lg:px-24 px-12 lg:h-[15vh] h-[12vh] md:flex hidden justify-between items-center text-white'>
      <div className='lg:h-[10vh] h-[7.5vh]'>
        <Image src={Logo} alt='Logo' className='h-full w-auto' />
      </div>
      <div className='flex items-center text-white'>
        {navigation.map(({ name, path }) => {
          return (
            <Link
              key={name}
              href={path}
              className={`transition-colors hover:text-enactus-chrome px-4 py-2 lg:text-lg ${
                path === '/'
                  ? 'text-enactus-yellow font-base'
                  : 'font-extralight'
              }`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
