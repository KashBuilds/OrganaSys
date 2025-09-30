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
    id: 'neurons-to-processors',
    title: 'Neurons to Processors',
    excerpt: 'The concept of harnessing living neuronal networks as computational units, once confined to the realm of science fiction is rapidly becoming a reality. These living networks have already demonstrated real and tangible tasks such as pathfinding, obstacle avoidance, controlling robots and playing games...',
    author: 'Ewelina Kurtys',
    date: 'August 21, 2025',
    image: '/baseimage.jpg',
    categories: ['Scientific'],
    link: '/articles/neurons-to-processors'
  },
  {
    id: 'real-neurons-lab',
    title: 'Confirming we\'re working with real neurons in our lab',
    excerpt: 'At OrganaSys\' we grow neurospheres that we train to perform computational tasks. From our human eyes, we can\'t really confirm whether it is or not, even with a standard microscope but we just about get the structure. With an electron microscopy, we can observe every detail of their morphology...',
    author: 'Ewelina Kurtys',
    date: 'August 21, 2025',
    image: '/articleimage.jpg',
    categories: ['Scientific'],
    link: '/articles/real-neurons-lab'
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

