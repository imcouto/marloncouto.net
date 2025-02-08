import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { DollarQuoteData } from '@/types/index.ts';
import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const mockDollarData: DollarQuoteData = {
  currency: 'USD',
  quote: 5.03,
  variation: -0.45,
  lastUpdate: '2023-06-15T14:30:00Z',
};

// TODO: make a request to the server to get the data
export function DollarQuoteWidget() {
  const [dollarData, setDollarData] = useState<DollarQuoteData | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setDollarData(mockDollarData);
    }, 1000);
  }, []);

  if (!dollarData) {
    return (
      <Card className='w-full max-w-sm mx-auto'>
        <CardContent>Carregando...</CardContent>
      </Card>
    );
  }

  const formattedDate = new Date(dollarData.lastUpdate).toLocaleString(
    'pt-BR',
    {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    },
  );

  console.log('dollarData :>> ', dollarData);

  return (
    <Card className='w-full max-w-sm mx-auto'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between'>
          <span>Cotação do Dólar</span>
          <DollarSign className='w-6 h-6' />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex items-center justify-between mb-4'>
          <div className='text-4xl font-bold'>
            R$ {dollarData.quote.toFixed(2)}
          </div>
          <div
            className={`flex items-center ${
              dollarData.variation >= 0 ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {dollarData.variation >= 0 ? (
              <TrendingUp className='w-5 h-5 mr-1' />
            ) : (
              <TrendingDown className='w-5 h-5 mr-1' />
            )}
            <span>{Math.abs(dollarData.variation).toFixed(2)}%</span>
          </div>
        </div>
        <div className='text-sm text-muted-foreground'>
          Última atualização: {formattedDate}
        </div>
      </CardContent>
    </Card>
  );
}
