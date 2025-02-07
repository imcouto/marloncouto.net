import { Button } from '@/components/ui/button.tsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';

// TODO: contact form is a modal and is multi step
export default function ContactSection() {
  return (
    <section
      id='contact'
      className='py-20'
    >
      <h2 className='text-3xl font-bold mb-8'>Entre em Contato</h2>
      <Card>
        <CardHeader>
          <CardTitle>Envie uma mensagem</CardTitle>
          <CardDescription>
            Ficarei feliz em conversar sobre oportunidades de trabalho ou
            colaborações.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className='space-y-4'>
            <input
              type='text'
              placeholder='Nome'
              className='w-full p-2 rounded-md border'
            />
            <input
              type='email'
              placeholder='Email'
              className='w-full p-2 rounded-md border'
            />
            <textarea
              placeholder='Mensagem'
              rows={4}
              className='w-full p-2 rounded-md border'
            ></textarea>
            {/* TODO: make a request to the server */}
            <Button className='w-full'>Enviar Mensagem</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
