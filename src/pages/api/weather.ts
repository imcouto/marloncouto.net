import { env } from '@/helpers/environment.ts';
import type { APIRoute } from 'astro';
import axios from 'axios';

export const GET: APIRoute = async () => {
  try {
    const SP = '-23.5475,-46.6361';
    const geolocation = SP;

    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/current.json?q=${geolocation}&lang=pt&key=${env.WEATHER_API_KEY}`,
    );
    // console.log('data :>> ', data);

    return new Response(
      JSON.stringify({
        weatherData: {
          name: data.location.name,
          region: data.location.region,
          country: data.location.country,
          condition: data.current.condition.text,
          temperature: data.current.temp_c,
          icon: data.current.condition.icon,
        },
      }),
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as any).message }), {
      status: 500,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
};
