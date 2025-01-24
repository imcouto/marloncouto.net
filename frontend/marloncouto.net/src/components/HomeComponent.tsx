import ContactSection from '@/components/ContactSection.tsx'
import FooterComponent from '@/components/FooterComponent.tsx'
import HeroSection from '@/components/HeroSection.tsx'
import NavbarComponent from '@/components/NavbarComponent.tsx'
import ProjectsSection from '@/components/ProjectsSection.tsx'
import SkillsSection from '@/components/SkillsSection.tsx'
import TestimonialsSection from '@/components/TestimonialsSection.tsx'
import TimelineSection from '@/components/TimelineSection.tsx'
import {
  devName,
  heroDescription,
  navLinks,
  placeholderUrl,
  projects,
  skills,
  testimonials,
  timelineData,
} from '@/helpers/data.ts'

export default function HomeComponent() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <NavbarComponent
        devName={devName}
        navLinks={navLinks}
      />
      <main className='container mx-auto px-4 pt-20'>
        <HeroSection
          devName={devName}
          placeholderUrl={placeholderUrl}
          heroDescription={heroDescription}
        />
        <TimelineSection timelineData={timelineData} />
        <ProjectsSection
          placeholderUrl={placeholderUrl}
          projects={projects}
        />
        <SkillsSection skills={skills} />
        <TestimonialsSection
          testimonials={testimonials}
          placeholderUrl={placeholderUrl}
        />
        <ContactSection />
      </main>
      <FooterComponent devName={devName} />
    </div>
  )
}
