import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';
import { useState } from 'react';

export function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  // console.log('isOpen :>> ', isOpen);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='ml-4'
        >
          <Mail className='h-5 w-5' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Entre em Contato</DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para entrar em contato comigo.
            Responderei o mais breve possível.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className='space-y-4'
        >
          <div>
            <Label htmlFor='name'>Nome</Label>
            <Input
              id='name'
              required
            />
          </div>

          <div>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              required
            />
          </div>

          <div>
            <Label htmlFor='message'>Mensagem</Label>
            <Textarea
              id='message'
              required
            />
          </div>

          <Button
            type='submit'
            className='w-full'
          >
            Enviar Mensagem
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
