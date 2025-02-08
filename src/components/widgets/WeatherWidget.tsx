import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { WeatherData } from '@/types/index.ts';
import { Cloud, CloudRain, Snowflake, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const weatherIcons = {
  sunny: Sun,
  cloudy: Cloud,
  rainy: CloudRain,
  snowy: Snowflake,
};

const mockWeatherData: WeatherData = {
  temperature: 22,
  condition: 'sunny',
  location: 'São Paulo, BR',
};

// TODO: make a request to the server to get the data
export function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setWeatherData(mockWeatherData);
    }, 1000);
  }, []);

  if (!weatherData) {
    return (
      <Card className='w-full max-w-sm mx-auto'>
        <CardContent>Carregando...</CardContent>
      </Card>
    );
  }

  const WeatherIcon = weatherIcons[weatherData.condition];

  console.log('weatherData :>> ', weatherData);

  return (
    <Card className='w-full max-w-sm mx-auto'>
      <CardHeader>
        <CardTitle className='flex justify-between items-center'>
          <span>Clima Atual</span>
          <WeatherIcon className='w-8 h-8' />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-4xl font-bold mb-2'>
          {weatherData.temperature}°C
        </div>
        <div className='text-muted-foreground'>{weatherData.location}</div>
      </CardContent>
    </Card>
  );
}
