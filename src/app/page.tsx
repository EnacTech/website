import Image from 'next/image';
import enacPop from '@/assets/enac-pop.gif';
import MotionDiv from '@/components/MotionDiv';
import Slider from '@/components/Slider';

export default function Home() {
  return (
    <>
      <MotionDiv style='appear'>
        <div className='flex min-h-screen flex-col items-center justify-center bg-slate-700 py-2'>
          <Image src={enacPop} alt='Enactus NSUT' className='' />
        </div>
        <h1 className='text-enactus-yellow'>Archive</h1>
      </MotionDiv>
      <Slider />
    </>
  );
}
