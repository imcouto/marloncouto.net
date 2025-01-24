import { Button } from '@/components/ui/button.tsx'
import { Menu } from 'lucide-react'

export default function NavbarComponent({ devName }: { devName: string }) {
  return (
    <>
      {/* Navbar */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm'>
        <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
          <a
            href='/'
            className='text-xl font-bold'
          >
            {devName}
          </a>
          <div className='hidden md:flex space-x-4'>
            <a
              href='#about'
              className='hover:text-primary transition-colors'
            >
              Sobre
            </a>
            <a
              href='#projects'
              className='hover:text-primary transition-colors'
            >
              Projetos
            </a>
            <a
              href='#skills'
              className='hover:text-primary transition-colors'
            >
              Habilidades
            </a>
            <a
              href='#contact'
              className='hover:text-primary transition-colors'
            >
              Contato
            </a>
          </div>
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
          >
            <Menu className='h-6 w-6' />
          </Button>
        </div>
      </nav>
    </>
  )
}
