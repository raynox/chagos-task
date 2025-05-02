import { extractPriceFromString } from '@/src/shared/lib/extractPriceFromString';
import { SortOption } from '@/src/shared/types';
import { useEffect, useState } from 'react';
import { Product } from '../types';

export const useHandleSort = (products: Product[]) => {
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products);

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  const handleSort = (sortOption: SortOption) => {
    const sorted = [...products].sort((a, b) => {
      if (sortOption === 'price-asc') {
        return extractPriceFromString(a.price) - extractPriceFromString(b.price);
      } else if (sortOption === 'price-desc') {
        return extractPriceFromString(b.price) - extractPriceFromString(a.price);
      } else if (sortOption === 'name-asc') {
        return a.productName.localeCompare(b.productName);
      } else if (sortOption === 'name-desc') {
        return b.productName.localeCompare(a.productName);
      }

      return 0;
    });

    setSortedProducts(sorted);
  };

  return { sortedProducts, handleSort };
};
