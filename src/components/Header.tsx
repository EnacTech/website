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
      <Link href='/' className=' h-[7.5vh] cursor-pointer lg:h-[10vh]'>
        <Image src={Logo} alt='Logo' className='h-full w-auto' />
      </Link>
      <div className='flex items-center text-white'>
        {navigation.map(({ name, path }) => {
          return (
            <Link
              key={name}
              href={path}
              className={`px-4 py-2 text-center transition-colors after:top-0 after:block after:h-[1.5px] after:bg-enactus-yellow after:transition-all after:duration-200 after:ease-in-out after:content-[''] hover:text-enactus-chrome lg:text-lg ${
                path === '/' && fullPath === '/'
                  ? 'font-base text-enactus-yellow after:w-full'
                  : fullPath.startsWith(path) && path !== '/'
                    ? 'font-base text-enactus-yellow after:w-full'
                    : 'font-extralight after:w-0'
              }`}>
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
