import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Image from 'next/image';

export default function Slider() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Image src='' alt='' />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
