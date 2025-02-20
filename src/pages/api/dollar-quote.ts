import { HOUR } from '@/helpers/constants.ts';
import { ServerCache } from '@/helpers/server-cache.ts';
import type { APIRoute } from 'astro';
import axios from 'axios';

const cache = new ServerCache(6 * HOUR);

export const GET: APIRoute = async () => {
  const cachedData = cache.get('dollarQuote');
  if (cachedData) {
    // console.log('cachedData :>> ', cachedData);
    return new Response(JSON.stringify({ dollarQuote: cachedData }), {
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  try {
    const { data } = await axios.get(
      'https://economia.awesomeapi.com.br/json/last/USD-BRL',
    );
    // console.log('data :>> ', data);

    const dollarQuote = {
      currency: data.USDBRL.code,
      quote: parseFloat(data.USDBRL.high),
      variation: data.USDBRL.varBid,
      lastUpdate: data.USDBRL.create_date,
    };

    cache.set('dollarQuote', dollarQuote);

    return new Response(JSON.stringify({ dollarQuote }), {
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Error fetching dollar quote' }),
      {
        headers: {
          'content-type': 'application/json',
        },
        status: 500,
      },
    );
  }
};
