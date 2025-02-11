import type {
  CryptoData,
  DollarQuoteData,
  NavLink,
  NewsItem,
  SkillsData,
  Testimonial,
  TimelineItem,
  WeatherData,
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

export const projects = [1, 2, 3];

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
];

export const navLinks: NavLink[] = [
  { href: '#about', label: 'Sobre' },
  { href: '#widgets', label: 'Widgets' },
  { href: '#timeline', label: 'Trajetória' },
  { href: '#projects', label: 'Projetos' },
  { href: '#testimonials', label: 'Depoimentos' },
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

export const excludedRepos = [''];

export const mockCryptoData: CryptoData[] = [
  { name: 'Bitcoin', symbol: 'BTC', price: 50000, change24h: 2.5 },
  { name: 'Ethereum', symbol: 'ETH', price: 3000, change24h: -1.2 },
  { name: 'Cardano', symbol: 'ADA', price: 1.5, change24h: 0.8 },
];

export const mockDollarData: DollarQuoteData = {
  currency: 'USD',
  quote: 5.03,
  variation: -0.45,
  lastUpdate: '2023-06-15T14:30:00Z',
};

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

export const mockWeatherData: WeatherData = {
  temperature: 22,
  condition: 'sunny',
  location: 'São Paulo, BR',
};
