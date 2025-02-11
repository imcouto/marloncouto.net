import type { APIRoute } from 'astro';
import axios from 'axios';

export const GET: APIRoute = async ({ request }) => {
  try {
    console.log('request :>> ', request);

    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd&include_24hr_change=true',
    );
    console.log('data :>> ', data);

    return new Response(
      JSON.stringify({
        cryptoData: [
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
        ],
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: (error as any).message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
