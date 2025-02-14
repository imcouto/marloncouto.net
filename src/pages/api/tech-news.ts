import type { NewsItem } from '@/types/NewsItem.ts';
import type { APIRoute } from 'astro';
// @ts-ignore
import { getNews, TOPIC, TOPICS_TECHNOLOGY } from 'google-news-json';

// TODO: request news from Google News API using axios instead of google-news-json
export const GET: APIRoute = async () => {
  try {
    const data = await getNews(TOPIC, TOPICS_TECHNOLOGY, 'pt-br');
    // console.log('data :>> ', data.items[0]);

    const newsData: NewsItem[] = data.items.slice(0, 1).map(
      (item: any) =>
        ({
          title: item.title,
          url: item.link,
          source: item.source.text,
        }) as NewsItem,
    );
    // console.log('newsData :>> ', newsData);

    return new Response(JSON.stringify({ newsData }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
};
