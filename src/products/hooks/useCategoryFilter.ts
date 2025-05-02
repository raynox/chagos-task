import { Product } from '@/src/products/types';
import { useEffect, useState } from 'react';

export default function useCategoryFilter(products: Product[], selectedCategory: string) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, products]);

  return filteredProducts;
}
