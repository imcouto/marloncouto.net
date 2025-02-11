import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { placeholderUrl } from '@/helpers/data.ts';
import type { RepositoryData } from '@/types/RepositoryData.ts';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

export function ProjectDetails({ project }: { project: RepositoryData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='w-full'
        >
          Ver Detalhes
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[625px]'>
        <DialogHeader>
          <DialogTitle>{project.name}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className='mt-4'>
          <img
            src={project.coverImage || `${placeholderUrl}/600x300`}
            alt={project.name}
            width={600}
            height={300}
            className='rounded-md object-cover w-full'
          />
          <div className='mt-4 flex flex-wrap gap-2'>
            {project.topics?.map((tech, index) => (
              <Badge
                key={index}
                variant='secondary'
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className='mt-6 flex justify-between'>
            {project.homepage && (
              <Button asChild>
                <a
                  href={project.homepage}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <ExternalLink className='mr-2 h-4 w-4' /> Demo
                </a>
              </Button>
            )}
            <Button
              variant='outline'
              asChild
            >
              <a
                href={project.htmlUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github className='mr-2 h-4 w-4' /> Código Fonte
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
