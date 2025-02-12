import type { APIRoute } from 'astro';
import axios from 'axios';

export const GET: APIRoute = async () => {
  try {
    const { data } = await axios.get(
      'https://economia.awesomeapi.com.br/json/last/USD-BRL',
    );
    console.log('data :>> ', data);

    return new Response(
      JSON.stringify({
        dollarQuote: {
          currency: data.USDBRL.code,
          quote: parseFloat(data.USDBRL.high),
          variation: data.USDBRL.varBid,
          lastUpdate: data.USDBRL.create_date,
        },
      }),
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );
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
