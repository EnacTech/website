import Image from 'next/image';
import Logo from '@/assets/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Link from 'next/link';

export default function Footer(): JSX.Element {
  return (
    <div className='flex w-full flex-col items-center justify-around bg-enactus-grey px-6 pb-8 text-white sm:px-16 md:flex-row md:px-12 lg:px-24'>
      <Link
        href='/'
        className='flex w-full cursor-pointer items-center justify-center py-6 md:w-3/5 md:mr-6 lg:w-2/6 lg:mr-8'>
        <Image src={Logo} alt='Logo' className='h-auto w-4/5' />
      </Link>
      <div className='w-full py-4 md:w-3/5 lg:w-3/6'>
        <h2 className='py-2'>
          <span className='text-enactus-yellow'>En</span>trepreneurial
        </h2>
        <p className='pb-4 text-sm leading-tight lg:text-base'>
          Having the perspective to see an opportunity and the talent to create
          value from that opportunity.
        </p>
        <h2 className='py-2'>
          <span className='text-enactus-yellow'>Act</span>ion
        </h2>
        <p className='pb-4 text-sm leading-tight lg:text-base'>
          The willingness to do something and the commitment to see it through
          even when the outcome is not guaranteed.
        </p>
        <h2 className='py-2'>
          <span className='text-enactus-yellow'>Us</span>
        </h2>
        <p className='pb-4 text-sm leading-tight lg:text-base'>
          A group of people who see themselves connected in some important way;
          individuals that are part of a greater whole.
        </p>
      </div>
      <div className='w-full py-4 md:w-2/5 md:ml-6 lg:w-2/6 lg:ml-8'>
        <h2 className='py-2 text-center text-enactus-yellow md:text-left'>
          Connect With Us
        </h2>
        <p className='pb-2 text-center text-sm leading-tight md:text-left lg:text-base'>
          Join the conversation and connect with us on our social media handles.
        </p>
        <div className='flex items-center justify-around py-6 sm:px-16 md:px-0'>
          <Link href='' target='_blank'>
            <InstagramIcon className='inline h-10 w-10 cursor-pointer transition-colors duration-150 ease-in hover:text-instagram md:h-8 md:w-8 lg:h-12 lg:w-12' />
          </Link>
          <Link href='' target='_blank'>
            <LinkedInIcon className='inline h-10 w-10 cursor-pointer transition-colors duration-150 ease-in hover:text-linkedin md:h-8 md:w-8 lg:h-12 lg:w-12' />
          </Link>
          <Link href='' target='_blank'>
            <YouTubeIcon className='inline h-10 w-10 cursor-pointer transition-colors duration-150 ease-in hover:text-youtube md:h-8 md:w-8 lg:h-12 lg:w-12' />
          </Link>
          <Link href='' target='_blank'>
            <EmailRoundedIcon className='inline h-10 w-10 cursor-pointer transition-colors duration-150 ease-in hover:text-enactus-yellow md:h-8 md:w-8 lg:h-12 lg:w-12' />
          </Link>
        </div>
      </div>
    </div>
  );
}
