import ContactSection from '@/components/ContactSection.tsx'
import FooterComponent from '@/components/FooterComponent.tsx'
import HeroSection from '@/components/HeroSection.tsx'
import NavbarComponent from '@/components/NavbarComponent.tsx'
import ProjectsSection from '@/components/ProjectsSection.tsx'
import SkillsSection from '@/components/SkillsSection.tsx'

export default function HomeComponent() {
  const devName = 'Marlon Couto'
  const placeholderUrl = 'https://placehold.co'
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'Git',
    'Docker',
    'AWS',
  ]
  const projects = [1, 2, 3]

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <NavbarComponent devName={devName} />
      <main className='container mx-auto px-4 pt-20'>
        <HeroSection
          devName={devName}
          placeholderUrl={placeholderUrl}
        />
        <ProjectsSection
          placeholderUrl={placeholderUrl}
          projects={projects}
        />
        <SkillsSection skills={skills} />
        <ContactSection />
      </main>
      <FooterComponent devName={devName} />
    </div>
  )
}
