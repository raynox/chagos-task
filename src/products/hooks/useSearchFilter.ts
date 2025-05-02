import { Product } from '@/src/products/types';
import { useEffect, useState } from 'react';

export default function useSearchFilter(products: Product[], searchTerm: string) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return filteredProducts;
}
