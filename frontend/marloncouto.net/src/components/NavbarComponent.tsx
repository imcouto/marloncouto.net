import { Button } from '@/components/ui/button.tsx'
import type { NavLink } from '@/types/NavLink'
import { Menu } from 'lucide-react'

export default function NavbarComponent({
  devName,
  navLinks,
}: {
  devName: string
  navLinks: NavLink[]
}) {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm'>
      <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
        <a
          href='/'
          className='text-xl font-bold'
        >
          {devName}
        </a>
        <div className='hidden md:flex space-x-4'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='hover:text-primary transition-colors'
            >
              {link.label}
            </a>
          ))}
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
  )
}
