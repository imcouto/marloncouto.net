import { Button } from '@/components/ui/button.tsx';

export default function ContactForm() {
  return (
    <>
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
    </>
  );
}
