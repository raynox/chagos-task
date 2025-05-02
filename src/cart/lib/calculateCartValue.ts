import type { Product } from '@/src/products/types';
import { extractPriceFromString } from '@/src/shared/lib/extractPriceFromString';

export const calculateCartValue = (cartItems: Product[]) => {
  return cartItems.reduce((total, item) => {
    return total + extractPriceFromString(item.price);
  }, 0);
};
