import type { NavLink } from '@/types/NavLink'
import type { Testimonial } from '@/types/Testimonial'
import type { TimelineItem } from '@/types/TimelineItem'

export const devName = 'Marlon Couto'

export const placeholderUrl = 'https://placehold.co'

export const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'SQL',
  'Git',
  'Docker',
  'AWS',
]

export const projects = [1, 2, 3]

export const timelineData: TimelineItem[] = [
  {
    year: '2023',
    title: 'Desenvolvedor Full-Stack Sênior',
    description:
      'Liderança de equipe e desenvolvimento de aplicações web escaláveis.',
  },
  {
    year: '2021',
    title: 'Desenvolvedor Full-Stack Pleno',
    description:
      'Foco em arquitetura de microsserviços e otimização de performance.',
  },
  {
    year: '2019',
    title: 'Desenvolvedor Front-end',
    description:
      'Especialização em React e desenvolvimento de interfaces responsivas.',
  },
  {
    year: '2017',
    title: 'Estagiário de Desenvolvimento',
    description:
      'Início da carreira com foco em HTML, CSS e JavaScript básico.',
  },
]

export const navLinks: NavLink[] = [
  { href: '#about', label: 'Sobre' },
  { href: '#widgets', label: 'Widgets' },
  { href: '#timeline', label: 'Trajetória' },
  { href: '#projects', label: 'Projetos' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#contact', label: 'Contato' },
]

export const heroDescription =
  'Desenvolvedor Full-Stack apaixonado por transformar ideias em soluções web inovadoras e impactantes. Combinando criatividade e eficiência, crio experiências digitais que conectam pessoas e impulsionam resultados.'

export const testimonials: Testimonial[] = [
  {
    name: 'Maria Silva',
    position: 'CEO',
    company: 'TechInova',
    testimonial: `O trabalho do ${devName} foi excepcional. Ele entregou nosso projeto antes do prazo e superou todas as nossas expectativas.`,
    avatar: '',
  },
  {
    name: 'João Santos',
    position: 'CTO',
    company: 'DataFuture',
    testimonial: `A expertise técnica e a capacidade de resolver problemas do ${devName} foram fundamentais para o sucesso do nosso produto.`,
    avatar: '',
  },
  {
    name: 'Ana Oliveira',
    position: 'Gerente de Projeto',
    company: 'WebSolutions',
    testimonial: `Trabalhar com o ${devName} foi uma experiência incrível. Sua comunicação clara e habilidades técnicas são impressionantes.`,
    avatar: '',
  },
]
