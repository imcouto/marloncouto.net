import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { WeatherData } from '@/types/WeatherData.ts';
import axios from 'axios';
import useSWR from 'swr';

const fetchWeather = async (geo: string) => {
  const { data } = await axios.post(
    '/api/weather',
    { geo },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );

  return {
    name: data.location.name,
    region: data.location.region,
    country: data.location.country,
    condition: data.current.condition.text,
    temperature: data.current.temp_c,
    icon: data.current.condition.icon,
  } as WeatherData;
};

export function WeatherWidget() {
  const { data, error } = useSWR('weather', async () => {
    return new Promise<WeatherData>((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by this browser.'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const geo = `${position.coords.latitude},${position.coords.longitude}`;
          fetchWeather(geo).then(resolve).catch(reject);
        },
        (err) => reject(new Error(err.message)),
      );
    });
  });

  if (!data) return <div>Loading...</div>;
  if (error) return <div className='text-red-500'>{error.message}</div>;

  return (
    <Card
      className='w-full max-w-sm mx-auto'
      title={data.condition}
    >
      <CardHeader>
        <CardTitle className='flex justify-between items-center relative'>
          <span>Clima Atual</span>
          <img
            className='w-20 h-20 absolute top-0 right-0'
            src={data.icon}
            width={80}
            height={80}
            alt={data.condition}
            loading='lazy'
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-4xl font-bold mb-2'>{data.temperature}°C</div>
        <div className='text-muted-foreground'>
          {`${data.name}, ${data.region}`}
        </div>
      </CardContent>
    </Card>
  );
}
