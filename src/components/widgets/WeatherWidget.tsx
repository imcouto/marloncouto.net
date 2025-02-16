import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { weatherStore } from '@/stores/index.ts';

export function WeatherWidget() {
  const weatherData = weatherStore.get();

  if (!weatherData) {
    return null;
  }

  return (
    // TODO: show more info
    <Card
      className='w-full max-w-sm mx-auto'
      title={weatherData.condition}
    >
      <CardHeader>
        <CardTitle className='flex justify-between items-center relative'>
          <span>Clima Atual</span>
          <img
            className='w-20 h-20 absolute top-0 right-0'
            src={weatherData.icon}
            width={80}
            height={80}
            alt={weatherData.condition}
            loading='lazy'
          />
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
