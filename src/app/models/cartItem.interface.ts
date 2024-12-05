import { Product } from './product.interface';

export interface CartItem {
  product: Product;
  quantity: number; // Quantity added to the cart
}
