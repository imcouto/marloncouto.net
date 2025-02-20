import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { placeholderUrl } from '@/lib/data';
import type { Testimonial } from '@/types/Testimonial.ts';
import Slider from 'react-slick';

export function TestimonialSlider({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 12_000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1_024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div
          className='px-2'
          key={index}
        >
          <Card className='flex flex-col h-full'>
            <CardHeader>
              <div className='flex items-center space-x-4'>
                <img
                  src={testimonial.avatar || `${placeholderUrl}/50`}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className='rounded-full'
                  loading='lazy'
                />
                <div>
                  <CardTitle className='text-lg'>{testimonial.name}</CardTitle>
                  <p className='text-sm text-muted-foreground'>
                    {testimonial.position} em {testimonial.company}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className='flex-grow'>
              <p className='italic'>&ldquo;{testimonial.testimonial}&rdquo;</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </Slider>
  );
}
