import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import type { NavLink } from '@/types/NavLink.ts';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

export function SidebarComponent({ navLinks }: { navLinks: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const closeSidebar = () => setIsOpen(false);

  return (
    <Sheet
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='md:hidden'
          onClick={toggleSidebar}
        >
          <Menu className='h-6 w-6' />
          <span className='sr-only'>Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side='left'
        className='w-[300px] sm:w-[400px]'
      >
        <nav className='flex flex-col space-y-4 mt-8'>
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='text-lg hover:text-primary transition-colors'
              onClick={closeSidebar}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
