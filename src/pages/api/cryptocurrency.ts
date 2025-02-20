import { HOUR } from '@/helpers/constants.ts';
import { ServerCache } from '@/helpers/server-cache.ts';
import type { APIRoute } from 'astro';
import axios from 'axios';

const cache = new ServerCache(6 * HOUR);

export const GET: APIRoute = async () => {
  const cachedData = cache.get('cryptoData');
  if (cachedData) {
    // console.log('cachedData :>> ', cachedData);
    return new Response(JSON.stringify({ cryptoData: cachedData }), {
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  try {
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd&include_24hr_change=true',
    );
    // console.log('data :>> ', data);

    const cryptoData = [
      {
        name: 'bitcoin',
        price: data.bitcoin.usd,
        change: data.bitcoin.usd_24h_change,
      },
      {
        name: 'ethereum',
        price: data.ethereum.usd,
        change: data.ethereum.usd_24h_change,
      },
      {
        name: 'cardano',
        price: data.cardano.usd,
        change: data.cardano.usd_24h_change,
      },
    ];

    cache.set('cryptoData', cryptoData);

    return new Response(JSON.stringify({ cryptoData }), {
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: (error as any).message }), {
      status: 500,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
};
