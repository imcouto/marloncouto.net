import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    return new Response(
      JSON.stringify({ weatherData: 'Hello from the API!' }),
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
