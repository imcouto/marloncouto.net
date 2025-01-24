import { Button } from '@/components/ui/button.tsx'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function HeroSection({
  devName,
  placeholderUrl,
  heroDescription,
}: {
  devName: string
  placeholderUrl: string
  heroDescription: string
}) {
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
            <Mail className='h-5 w-5' />
          </Button>
        </div>
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <img
          src={`${placeholderUrl}/300`}
          alt={devName}
          width={300}
          height={300}
          className='rounded-full'
        />
      </div>
    </section>
  )
}
