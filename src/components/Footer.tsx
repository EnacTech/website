import Image from 'next/image';
import Logo from '@/assets/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

export default function Footer(): JSX.Element {
  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('clicked');
  };
  return (
    <div className='flex w-full flex-col items-center justify-around bg-enactus-grey px-6 pb-8 text-white md:flex-row md:px-12 lg:px-24'>
      <div className='w-full md:w-3/5 lg:w-2/6'>
        <Image src={Logo} alt='Logo' className='h-auto w-4/5' />
      </div>
      <div className='w-full md:w-3/5 lg:w-3/6'>
        <h2>
          <span className='text-enactus-yellow'>En</span>trepreneurial
        </h2>
        <p>
          Having the perspective to see an opportunity and the talent to create
          value from that opportunity.
        </p>
        <h2>
          <span className='text-enactus-yellow'>Act</span>ion
        </h2>
        <p>
          The willingness to do something and the commitment to see it through
          even when the outcome is not guaranteed.
        </p>
        <h2>
          <span className='text-enactus-yellow'>Us</span>
        </h2>
        <p>
          A group of people who see themselves connected in some important way;
          individuals that are part of a greater whole.
        </p>
      </div>
      <div className='w-full md:w-3/5 lg:w-3/6'>
        <h2 className='text-enactus-yellow'>Connect With Us</h2>
        <p>
          Join the conversation and connect with us on our social media handles.
        </p>
        <div>
          <InstagramIcon className='inline h-8 w-8' />
          <LinkedInIcon className='inline h-8 w-8' />
          <YouTubeIcon className='inline h-8 w-8' />
          <EmailRoundedIcon className='inline h-8 w-8' />
        </div>
      </div>
    </div>
  );
}
