import type { APIRoute } from 'astro';
import axios from 'axios';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { geo } = await request.json();

    const key = import.meta.env?.WEATHER_API_KEY.toString();
    // console.log('key :>> ', key);

    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/current.json?q=${geo}&lang=pt&key=${key}`,
    );
    // console.log('data :>> ', data);

    return new Response(JSON.stringify(data), {
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Error fetching weather data' }),
      {
        status: 500,
        headers: {
          'content-type': 'application/json',
        },
      },
    );
  }
};
