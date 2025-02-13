import type {
  NavLink,
  NewsItem,
  SkillsData,
  Testimonial,
  TimelineItem,
} from '@/types/index.ts';
import {
  siAmazonwebservices,
  siDocker,
  siGit,
  siJavascript,
  siMysql,
  siNodedotjs,
  siPython,
  siReact,
} from 'simple-icons';

export const devName = 'Marlon Couto';

export const placeholderUrl = 'https://placehold.co';

export const skills: SkillsData[] = [
  { name: 'JavaScript', accentColor: 'hsl(45, 100%, 51%)', icon: siJavascript },
  { name: 'React', accentColor: 'hsl(201, 100%, 50%)', icon: siReact },
  { name: 'Node.js', accentColor: 'hsl(120, 100%, 25%)', icon: siNodedotjs },
  { name: 'Python', accentColor: 'hsl(200, 100%, 50%)', icon: siPython },
  { name: 'SQL', accentColor: 'hsl(210, 100%, 40%)', icon: siMysql },
  { name: 'Git', accentColor: 'hsl(0, 100%, 50%)', icon: siGit },
  { name: 'Docker', accentColor: 'hsl(200, 100%, 50%)', icon: siDocker },
  { name: 'AWS', accentColor: 'hsl(45, 100%, 51%)', icon: siAmazonwebservices },
];

export const timelineData: TimelineItem[] = [
  {
    title: 'Desenvolvedor Web Full-Stack',
    subtitle: 'Freelancer',
    description:
      'Criação e manutenção de sites dinâmicos e responsivos em HTML, CSS e JavaScript, além de integração com APIs e desenvolvimento de soluções personalizadas para clientes diversos',
    date: '08/2023 - atual',
    type: 'work',
    background: 'rgb(33, 150, 243)',
    color: '#fff',
  },
  {
    title: 'Desenvolvedor Front-End',
    subtitle: 'Peak One Dev',
    description:
      'Criação e manutenção de interfaces web usando JavaScript, HTML, CSS e o framework Astro, desenvolvimento e manutenção de sistemas usando Laravel e Node.js',
    date: '11/2024 - 02/2025',
    type: 'work',
    background: 'rgb(33, 150, 243)',
    color: '#fff',
  },
  {
    title: 'Desenvolvedor C# Júnior',
    subtitle: 'TRIEduc - Inteligência Educacional',
    description:
      'Desenvolvimento e manutenção de código fonte dos sistemas e APIs da empresas usando o ecossistema .NET, além de bancos de dados relacionais e não relacionais, cache e filas',
    date: '01/2024 - 08/2024',
    type: 'work',
    background: 'rgb(33, 150, 243)',
    color: '#fff',
  },
  {
    title: 'Summer Student',
    subtitle: 'Trybe',
    description:
      'Responsável por realizar monitorias técnicas individuais e coletivas, revisão de conteúdo de forma síncrona e suporte por Slack para resolução de dúvidas sobre front-end e back-end',
    date: '07/2023 - 11/2023',
    type: 'work',
    background: 'rgb(33, 150, 243)',
    color: '#fff',
  },
];

export const navLinks: NavLink[] = [
  { href: '#about', label: 'Sobre' },
  { href: '#widgets', label: 'Widgets' },
  { href: '#timeline', label: 'Trajetória' },
  // { href: '#projects', label: 'Projetos' },
  // { href: '#testimonials', label: 'Depoimentos' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#contact', label: 'Contato' },
];

export const heroDescription =
  'Desenvolvedor Full-Stack apaixonado por transformar ideias em soluções web inovadoras e impactantes. Combinando criatividade e eficiência, crio experiências digitais que conectam pessoas e impulsionam resultados.';

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
];

export const mockNewsData: NewsItem[] = [
  {
    title: 'Nova IA revoluciona o desenvolvimento de software',
    url: 'https://example.com/news1',
    source: 'Tech Daily',
  },
  {
    title: 'Startup brasileira recebe investimento milionário',
    url: 'https://example.com/news2',
    source: 'Startup News',
  },
  {
    title: '5G chega a mais cidades no Brasil',
    url: 'https://example.com/news3',
    source: 'Telecom Today',
  },
];
