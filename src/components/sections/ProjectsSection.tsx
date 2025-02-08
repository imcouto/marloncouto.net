import { Button } from '@/components/ui/button.tsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { placeholderUrl } from '@/helpers/data.ts';
import type { RepositoryData } from '@/types/index.ts';
import axios from 'axios';
import { useEffect, useState } from 'react';

// TODO: implement this using GitHub API in client-side
export default function ProjectsSection() {
  const [projects, setProjects] = useState<RepositoryData[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.post('/api/github-data');
      if (!data.error) setProjects(data.projects);
    })();
  }, []);

  console.log('projects :>> ', projects);

  return (
    <section
      id='projects'
      className='py-20'
    >
      <h2 className='text-3xl font-bold mb-8'>Projetos Destacados</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* TODO: opens a modal with more info when project is clicked */}
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={
                  project.coverImage
                    ? project.coverImage
                    : `${placeholderUrl}/400x200`
                }
                alt={project.name}
                width={400}
                height={200}
                className='rounded-md'
                loading='lazy'
              />
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => window.open(project.htmlUrl, '_blank')}
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
  );
}
