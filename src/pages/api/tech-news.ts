import { HOUR } from '@/helpers/constants.ts';
import { ServerCache } from '@/helpers/server-cache.ts';
import type { NewsItem } from '@/types/NewsItem.ts';
import type { APIRoute } from 'astro';
import Parser from 'rss-parser';

const cache = new ServerCache(6 * HOUR);

export const GET: APIRoute = async () => {
  const cachedData = cache.get('techNews');
  if (cachedData) {
    // console.log('cachedData :>> ', cachedData);
    return new Response(JSON.stringify({ newsData: cachedData }), {
      headers: { 'content-type': 'application/json' },
    });
  }

  try {
    const parser = new Parser();
    const url =
      'https://news.google.com/rss/headlines/section/topic/TECHNOLOGY?hl=pt-br&gl=BR&ceid=BR:pt';

    const feed = await parser.parseURL(url);
    // console.log('feed.items :>> ', feed.items);

    const newsData: NewsItem[] = feed.items.slice(0, 1).map((item: any) => ({
      title: item.title.split(' - ')[0],
      url: item.link,
      source: item.title.split(' - ')[1],
    }));
    // console.log('newsData :>> ', newsData);

    cache.set('techNews', newsData);

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
