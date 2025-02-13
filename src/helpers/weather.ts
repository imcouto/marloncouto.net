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
    // console.log('geo :>> ', geo);

    const { data } = await axios.post(
      '/api/weather',
      {
        geo,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
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
