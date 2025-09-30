export interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  categories: string[];
  link: string;
}

export const articles: Article[] = [
  {
    id: 'neuroplasticity',
    title: 'Neuroplasticity',
    excerpt: 'Neuroplasticity refers to the brain\'s capacity to reorganize its wiring. This process can involve neurogenesis, synaptogenesis, and increasing or decreasing the strength of existing synapses...',
    author: 'Ewelina Kurtys',
    date: 'August 21, 2025',
    image: '/baseimage.jpg',
    categories: ['Scientific', 'Innovation and Discovery'],
    link: '/articles/neuroplasticity'
  },
  {
    id: 'brain-on-chip',
    title: 'Why Brain-on-a-Chip research matters for the future of AI',
    excerpt: 'Wetware Computing—that bold idea of using living neuronal networks to compute—isn\'t sci-fi anymore. A groundbreaking new review, Advanced Brain-on-a-Chip for Wetware Computing: A Review, just landed in Advanced Science and...',
    author: 'Ewelina Kurtys',
    date: 'August 21, 2025',
    image: 'gradient-orange',
    categories: ['Scientific', 'Innovation and Discovery', 'News'],
    link: '#'
  }
];

export const categories = [
  { id: 'scientific', name: 'Scientific', count: 6 },
  { id: 'news', name: 'News', count: 4 },
  { id: 'general-public', name: 'General Public', count: 3 },
  { id: 'innovation-discovery', name: 'Innovation and Discovery', count: 6 },
  { id: 'current-trends', name: 'Current Trends', count: 4 },
  { id: 'everyday-insights', name: 'Everyday Insights', count: 3 }
];

