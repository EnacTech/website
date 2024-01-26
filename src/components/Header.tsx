'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/constants';
import Logo from '@/assets/logo.png';

export default function Header() {
  const fullPath = usePathname();
  return (
    <nav className='hidden h-[12vh] w-full items-center justify-between bg-enactus-grey px-12 py-10 text-white md:flex lg:h-[15vh] lg:px-24'>
      <div className='h-[7.5vh] lg:h-[10vh]'>
        <Image src={Logo} alt='Logo' className='h-full w-auto' />
      </div>
      <div className='flex items-center text-white'>
        {navigation.map(({ name, path }) => {
          return (
            <Link
              key={name}
              href={path}
              className={`px-4 py-2 transition-colors hover:text-enactus-chrome lg:text-lg ${
                path === '/' && fullPath === '/'
                  ? 'font-base text-enactus-yellow'
                  : fullPath.startsWith(path) && path !== '/'
                    ? 'font-base text-enactus-yellow'
                    : 'font-extralight'
              }`}>
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
