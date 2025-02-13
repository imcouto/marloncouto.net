import { env } from '@/helpers/environment.ts';
import type { WeatherData } from '@/types/WeatherData.ts';
import axios from 'axios';

export const getWeather = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  try {
    const geo = `${latitude},${longitude}`;
    console.log('geo :>> ', geo);

    const key = env.WEATHER_API_KEY.toString();
    console.log('key :>> ', key);

    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/current.json?q=${geo}&lang=pt&key=${key}`,
    );
    // console.log('data :>> ', data);

    return {
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
      condition: data.current.condition.text,
      temperature: data.current.temp_c,
      icon: data.current.condition.icon,
    } as WeatherData;
  } catch (error) {
    console.error(error);
    throw new Error((error as any).message);
  }
};
