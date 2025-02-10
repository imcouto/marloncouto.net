import { Card, CardContent } from '@/components/ui/card.tsx';

export function LoadingCard({ _class = '' }: { _class?: string }) {
  console.log('Loading...');

  return (
    <>
      <Card className={`w-full max-w-sm mx-auto ${_class}`}>
        <CardContent>Carregando...</CardContent>
      </Card>
    </>
  );
}
