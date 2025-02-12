import { env } from '@/helpers/environment.ts';
import type { WeatherData } from '@/types/WeatherData.ts';
import axios from 'axios';

export const getWeather = async ({ latitude, longitude }: any) => {
  try {
    const SP = { latitude: -23.5475, longitude: -46.6361 };
    const geo = (latitude && longitude) ?? SP;

    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/current.json?q=${geo.latitude},${geo.longitude}&lang=pt&key=${env.WEATHER_API_KEY.toString()}`,
    );
    console.log('data :>> ', data);

    return {
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
      condition: data.current.condition.text,
      temperature: data.current.temp_c,
      icon: data.current.condition.icon,
    } as WeatherData;
  } catch (error) {
    throw new Error((error as any).message);
  }
};
