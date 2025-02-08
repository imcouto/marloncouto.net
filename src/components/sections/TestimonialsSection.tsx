import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Testimonial } from '@/types/Testimonial';

// TODO: this is a marquee component, it should be replaced with a infinite carousel
export default function TestimonialsSection({
  testimonials,
  imageUrl: placeholderUrl,
}: {
  testimonials: Testimonial[];
  imageUrl: string;
}) {
  console.log('testimonials :>> ', testimonials);

  return (
    <section
      id='testimonials'
      className='py-20'
    >
      <h2 className='text-3xl font-bold mb-8'>Depoimentos de Clientes</h2>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className='flex flex-col h-full'
          >
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
        ))}
      </div>
    </section>
  );
}
