import { Button } from '@/components/ui/button.tsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'

export default function ProjectsSection({
  placeholderUrl,
  projects,
}: {
  placeholderUrl: string
  projects: number[] | string[]
}) {
  return (
    <>
      {/* Projects Section */}
      <section
        id='projects'
        className='py-20'
      >
        <h2 className='text-3xl font-bold mb-8'>Projetos Destacados</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project) => (
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
    </>
  )
}
