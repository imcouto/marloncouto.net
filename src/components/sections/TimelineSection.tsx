import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import type { TimelineItem } from '@/types/index.ts';

// TODO: a better timeline
export function TimelineSection({
  timelineData,
}: {
  timelineData: TimelineItem[];
}) {
  console.log('timelineData :>> ', timelineData);

  return (
    <section
      id='timeline'
      className='py-20'
    >
      <h2 className='text-3xl font-bold mb-8'>Minha Trajetória Profissional</h2>
      <div className='space-y-8'>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row'
          >
            <div className='md:w-1/4'>
              <Card>
                <CardHeader className='text-center'>
                  <CardTitle>{item.year}</CardTitle>
                </CardHeader>
              </Card>
            </div>
            <div className='md:w-3/4 mt-4 md:mt-0 md:ml-6 relative'>
              <div className='absolute top-0 left-0 h-full w-px bg-border md:-left-3'></div>
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
