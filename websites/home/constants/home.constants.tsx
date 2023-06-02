import animation from '@/assets/svgs/discover/animation.svg';
import audio from '@/assets/svgs/discover/audio.svg';
import business from '@/assets/svgs/discover/business.svg';
import comics from '@/assets/svgs/discover/comics.svg';
import design from '@/assets/svgs/discover/design.svg';
import drawing from '@/assets/svgs/discover/drawing.svg';
import { DiscoverGridProps } from '@/components/shared/discover_grid';
import { StaticImageData } from 'next/image';

export const navigationElements = [
  {
    page: 'Features',
    link: '/features',
  },
  {
    page: 'Pricing',
    link: '/pricing',
  },
  {
    page: 'Blog',
    link: '/blog',
  },
  {
    page: 'University',
    link: '/university',
  },
  {
    page: 'Discover',
    link: '/discover',
  },
];

type BgColor = Pick<DiscoverGridProps, 'bgColor'>;

interface DiscoverGategoriesProps {
  image: StaticImageData | string;
  tags: string[];
  category: string;
  categoryDescription: string;
  bgColor: BgColor['bgColor'];
}

export const discoverCategories: DiscoverGategoriesProps[] = [
  {
    image: animation,
    tags: ['blender', '3d model', 'spark ar'],
    category: '3D',
    categoryDescription:
      'Perfect your craft with same toold used at dreamwirks and Pixar.',
    bgColor: 'darkGreen',
  },
  {
    image: audio,
    tags: ['meditation', 'hypnosis', 'sublimal messages'],
    category: 'Audio',
    categoryDescription:
      'Open your eyes and mind to interviews, meditations and true crime thrillers.',
    bgColor: 'brightRed',
  },
  {
    image: business,
    tags: ['notion template', 'investing', 'instagram'],
    category: 'Business & Money',
    categoryDescription: 'Learn to earn in an increasingly uncertain world.',
    bgColor: 'darkGreen',
  },
  {
    image: comics,
    tags: ['comic', 'manga', 'anime'],
    category: 'Comics & Graphic Novels',
    categoryDescription:
      'Sequental art with loads of heart. Welcome to a paradise of panels.',
    bgColor: 'lightYellow',
  },
  {
    image: design,
    tags: ['textures', 'mockup', 'font'],
    category: 'Design',
    categoryDescription:
      'Code, design, and ship your dream product with these tehchnical resources.',
    bgColor: 'darkYellow',
  },
  {
    image: drawing,
    tags: ['procreate', 'brushes', 'art'],
    category: 'Drawing & Painting',
    categoryDescription:
      'Tutorials, plugins, and brushes from pro concept artists and illustrators.',
    bgColor: 'lightBlue',
  },
];
