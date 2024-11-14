import { Image } from './image.interface';

export interface OtherItems {
  slug: string;
  name: string;
  category: 'earphones' | 'headphones' | 'speakers';
  image: Image;
}
