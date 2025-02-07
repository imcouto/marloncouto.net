import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { NewsItem } from '@/types/NewsItem'
import { ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'

const mockNewsData: NewsItem[] = [
  {
    title: 'Nova IA revoluciona o desenvolvimento de software',
    url: 'https://example.com/news1',
    source: 'Tech Daily',
  },
  {
    title: 'Startup brasileira recebe investimento milionário',
    url: 'https://example.com/news2',
    source: 'Startup News',
  },
  {
    title: '5G chega a mais cidades no Brasil',
    url: 'https://example.com/news3',
    source: 'Telecom Today',
  },
]

export default function TechNewsWidget() {
  const [newsData, setNewsData] = useState<NewsItem[] | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setNewsData(mockNewsData)
    }, 1000)
  }, [])

  if (!newsData) {
    return (
      <Card className='w-full max-w-sm mx-auto'>
        <CardContent>Carregando...</CardContent>
      </Card>
    )
  }

  return (
    <Card className='w-full max-w-sm mx-auto'>
      <CardHeader>
        <CardTitle>Notícias de Tecnologia</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className='space-y-4'>
          {newsData.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-start hover:text-primary transition-colors'
              >
                <ExternalLink className='w-4 h-4 mr-2 mt-1 flex-shrink-0' />
                <div>
                  <div className='font-medium'>{item.title}</div>
                  <div className='text-sm text-muted-foreground'>
                    {item.source}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
