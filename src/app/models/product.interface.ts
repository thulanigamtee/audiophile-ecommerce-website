import { Gallery } from './gallery.interface';
import { Image } from './image.interface';
import { OtherItems } from './otherItems.interface';

export interface Product {
  id: number;
  slug: string;
  name: string;
  nickName: string;
  image: Image;
  category: 'earphones' | 'headphones' | 'speakers';
  categoryImage: Image;
  new: boolean;
  price: number;
  description: string;
  features: string[];
  includedItems: IncludedItems;
  cartImage: string;
  gallery: Gallery;
  otherItems: OtherItems;
}

interface IncludedItems {
  quantity: number;
  item: string;
}
