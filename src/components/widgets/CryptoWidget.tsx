import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { CryptoData } from '@/types/index.ts';
import { Bitcoin, DollarSign, EclipseIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const cryptoIcons: { [key: string]: React.ElementType } = {
  BTC: Bitcoin,
  ETH: EclipseIcon,
  ADA: DollarSign,
};

const mockCryptoData: CryptoData[] = [
  { name: 'Bitcoin', symbol: 'BTC', price: 50000, change24h: 2.5 },
  { name: 'Ethereum', symbol: 'ETH', price: 3000, change24h: -1.2 },
  { name: 'Cardano', symbol: 'ADA', price: 1.5, change24h: 0.8 },
];

// TODO: make a request to the server to get the data
export function CryptoWidget() {
  const [cryptoData, setCryptoData] = useState<CryptoData[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setCryptoData(mockCryptoData);
    }, 1000);
  }, []);

  if (!cryptoData) {
    return (
      <Card className='w-full max-w-sm mx-auto'>
        <CardContent>Carregando...</CardContent>
      </Card>
    );
  }

  console.log('cryptoData :>> ', cryptoData);

  return (
    <Card className='w-full max-w-sm mx-auto'>
      <CardHeader>
        <CardTitle>Cotações de Criptomoedas</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className='space-y-4'>
          {cryptoData.map((crypto) => {
            const Icon = cryptoIcons[crypto.symbol] || DollarSign;
            return (
              <li
                key={crypto.symbol}
                className='flex items-center justify-between'
              >
                <div className='flex items-center'>
                  <Icon className='w-6 h-6 mr-2' />
                  <span>{crypto.name}</span>
                </div>
                <div className='text-right'>
                  <div className='font-bold'>
                    ${crypto.price.toLocaleString()}
                  </div>
                  <div
                    className={
                      crypto.change24h >= 0 ? 'text-green-500' : 'text-red-500'
                    }
                  >
                    {crypto.change24h > 0 ? '+' : ''}
                    {crypto.change24h.toFixed(2)}%
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
