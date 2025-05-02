import { Product } from '@/src/products/types';
import { extractPriceFromString } from '@/src/shared/lib/extractPriceFromString';
import { useEffect, useState } from 'react';

export default function usePriceFilter(products: Product[], minPrice: number, maxPrice: number) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    let filtered = products;

    if (minPrice > 0) {
      filtered = filtered.filter((product) => extractPriceFromString(product.price) >= minPrice);
    }

    if (maxPrice > 0) {
      filtered = filtered.filter((product) => extractPriceFromString(product.price) <= maxPrice);
    }

    setFilteredProducts(filtered);
  }, [products, minPrice, maxPrice]);

  return filteredProducts;
}
