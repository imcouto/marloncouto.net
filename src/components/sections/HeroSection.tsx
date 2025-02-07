import { Button } from '@/components/ui/button.tsx';
import { placeholderUrl } from '@/helpers/data.ts';
import { Github, Linkedin, Mail } from 'lucide-react';
import type { PropsWithChildren } from 'react';

export default function HeroSection({
  devName,
  imageUrl,
  heroDescription,
  hasChildren,
  children,
}: PropsWithChildren<{
  devName: string;
  imageUrl: string;
  heroDescription: string;
  hasChildren?: boolean;
}>) {
  return (
    <section
      id='about'
      className='py-20 md:py-32 flex flex-col md:flex-row items-center'
    >
      <div className='md:w-1/2 mb-8 md:mb-0'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
          Olá, eu sou {devName}
        </h1>
        <p className='text-xl mb-6'>{heroDescription}</p>
        <div className='flex space-x-4'>
          <Button
            variant='outline'
            size='icon'
          >
            <Github className='h-5 w-5' />
          </Button>
          <Button
            variant='outline'
            size='icon'
          >
            <Linkedin className='h-5 w-5' />
          </Button>
          <Button
            variant='outline'
            size='icon'
          >
            {/* TODO: this button open the contact form modal */}
            <Mail className='h-5 w-5' />
          </Button>
        </div>
      </div>
      <div className='md:w-1/2 flex justify-center'>
        {hasChildren ? (
          children
        ) : (
          <img
            src={imageUrl ? imageUrl : `${placeholderUrl}/300`}
            alt={devName}
            width={300}
            height={300}
            className='rounded-full'
            loading='lazy'
          />
        )}
      </div>
    </section>
  );
}
