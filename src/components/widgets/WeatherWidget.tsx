import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getWeather } from '@/helpers/weather.ts';
import type { WeatherData } from '@/types/WeatherData.ts';
import { useEffect, useState } from 'react';

export function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);

      // Check if the browser supports the Geolocation API
      if (navigator.geolocation) {
        // Request the current location
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        console.warn('Geolocation is not supported by this browser.');
      }

      function showPosition(position: any) {
        const latitude = position.coords.latitude;
        // console.log('Latitude: ' + latitude);

        const longitude = position.coords.longitude;
        // console.log('Longitude: ' + longitude);

        fetchWeather({ latitude, longitude });
      }

      function showError(error: any) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError('User denied the request for Geolocation.');
            break;
          case error.POSITION_UNAVAILABLE:
            setError('Location information is unavailable.');
            break;
          case error.TIMEOUT:
            setError('The request to get user location timed out.');
            break;
          case error.UNKNOWN_ERROR:
            setError('An unknown error occurred.');
            break;
        }
      }

      async function fetchWeather({
        latitude,
        longitude,
      }: {
        latitude: number;
        longitude: number;
      }) {
        const weather = await getWeather({ latitude, longitude });
        // console.log('weather :>> ', weather);
        setWeatherData(weather);
      }
    } catch (error) {
      setError((error as any).message);
    } finally {
      setLoading(false);
    }
  }, []);

  // console.log('weatherData :>> ', weatherData);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card
      className='w-full max-w-sm mx-auto'
      title={weatherData?.condition}
    >
      <CardHeader>
        <CardTitle className='flex justify-between items-center relative'>
          <span>Clima Atual</span>
          <img
            className='w-20 h-20 absolute top-0 right-0'
            src={weatherData?.icon}
            width={80}
            height={80}
            alt={weatherData?.condition}
            loading='lazy'
          />
        </CardTitle>
      </CardHeader>
      {error ? (
        <p className='text-red-500'>{error}</p>
      ) : (
        <CardContent>
          <div className='text-4xl font-bold mb-2'>
            {weatherData?.temperature}°C
          </div>
          <div className='text-muted-foreground'>
            {`${weatherData?.name}, ${weatherData?.region}`}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
