import ContactModal from '@/components/ContactModal.tsx';
import { Button } from '@/components/ui/button.tsx';
import { placeholderUrl } from '@/helpers/data.ts';
import { Github, Linkedin } from 'lucide-react';
import type { PropsWithChildren } from 'react';

export default function HeroSection({
  devName,
  imageUrl = `${placeholderUrl}/300`,
  heroDescription,
  children,
}: PropsWithChildren<{
  devName: string;
  imageUrl?: string;
  heroDescription: string;
}>) {
  console.log('heroDescription :>> ', heroDescription);
  console.log('imageUrl :>> ', imageUrl);

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
          <ContactModal />
          {/* <Button
            variant='outline'
            size='icon'
          >
            <Mail className='h-5 w-5' />
          </Button> */}
        </div>
      </div>
      <div className='md:w-1/2 flex justify-center'>
        {children ? (
          children
        ) : (
          <img
            src={imageUrl}
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
