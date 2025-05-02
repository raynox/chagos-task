import { Product } from '@/src/products/types/product';
import { useEffect, useState } from 'react';

export const useUniqueCategories = (
  products: Product[],
  setSelectedCategory: (category: string) => void
) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(products.map((product: Product) => product.category))
    );
    setCategories(uniqueCategories as string[]);

    if (uniqueCategories.length > 0) {
      setSelectedCategory(uniqueCategories[0] as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return { categories };
};
