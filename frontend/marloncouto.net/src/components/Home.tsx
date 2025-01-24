import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'

export default function Home() {
  const devName = 'Marlon Couto'
  const placeholderUrl = 'https://placehold.co'

  return (
    <div className='min-h-screen bg-background text-foreground'>
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

      <main className='container mx-auto px-4 pt-20'>
        {/* Hero Section */}
        <section
          id='about'
          className='py-20 md:py-32 flex flex-col md:flex-row items-center'
        >
          <div className='md:w-1/2 mb-8 md:mb-0'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
              Olá, eu sou {devName}
            </h1>
            <p className='text-xl mb-6'>
              Desenvolvedor Full-Stack apaixonado por criar soluções web
              inovadoras.
            </p>
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
              alt='Dev Name'
              width={300}
              height={300}
              className='rounded-full'
            />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id='projects'
          className='py-20'
        >
          <h2 className='text-3xl font-bold mb-8'>Projetos Destacados</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[1, 2, 3].map((project) => (
              <Card key={project}>
                <CardHeader>
                  <CardTitle>Projeto {project}</CardTitle>
                  <CardDescription>Breve descrição do projeto</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={`${placeholderUrl}/400x200`}
                    alt={`Projeto ${project}`}
                    width={400}
                    height={200}
                    className='rounded-md'
                  />
                </CardContent>
                <CardFooter>
                  <Button
                    variant='outline'
                    className='w-full'
                  >
                    Ver Detalhes
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section
          id='skills'
          className='py-20'
        >
          <h2 className='text-3xl font-bold mb-8'>Habilidades Técnicas</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {[
              'JavaScript',
              'React',
              'Node.js',
              'Python',
              'SQL',
              'Git',
              'Docker',
              'AWS',
            ].map((skill) => (
              <div
                key={skill}
                className='bg-secondary p-4 rounded-md text-center'
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
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
                <Button className='w-full'>Enviar Mensagem</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className='bg-secondary py-6'>
        <div className='container mx-auto px-4 text-center'>
          <p>&copy; 2024 {devName}. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
