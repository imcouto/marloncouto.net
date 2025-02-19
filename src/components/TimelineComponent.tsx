import type { TimelineItem } from '@/types/TimelineItem.ts';
import { Briefcase, School, Star } from 'lucide-react';
import reactVerticalTimeline from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const { VerticalTimeline, VerticalTimelineElement } = reactVerticalTimeline;

// TODO: better styling
export function TimelineComponent({
  timelineData,
}: {
  timelineData: TimelineItem[];
}) {
  return (
    <VerticalTimeline>
      {timelineData.map((item, index) => (
        <VerticalTimelineElement
          className={
            item.type === 'work'
              ? 'vertical-timeline-element--work'
              : 'vertical-timeline-element--education'
          }
          date={item.date}
          iconStyle={{ background: item.background, color: item.color }}
          icon={item.type === 'work' ? <Briefcase /> : <School />}
          key={index}
        >
          <h3 className='vertical-timeline-element-title'>{item.title}</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            {item.subtitle}
          </h4>
          <p>{item.description}</p>
        </VerticalTimelineElement>
      ))}

      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<Star />}
      />
    </VerticalTimeline>
  );
}
