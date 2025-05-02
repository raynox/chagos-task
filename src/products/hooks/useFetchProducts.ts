import { mapProductImage } from '@/src/products/lib/mapProductImage';
import { Product } from '@/src/products/types';
import { useEffect, useState } from 'react';

export const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://chagos-dev.github.io/data.json');
      const data = await response.json();
      const mappedProducts = data.map((product: Product) => ({
        ...product,
        productImage: mapProductImage(product.productImage),
      }));

      setProducts(mappedProducts);
      setLoading(false);
    } catch (error) {
      setError(error as string);
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  return { products, loading, error };
};
