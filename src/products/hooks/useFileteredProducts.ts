import { Product } from '@/src/products/types';
import { useEffect, useState } from 'react';

export default function useFileteredProducts(
  products: Product[],
  searchTerm: string,
  selectedCategory: string,
  cartItems: Product[]
) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    filtered = filtered.filter(
      (product) => !cartItems.some((cartItem) => cartItem._id === product._id)
    );

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products, cartItems]);

  return { filteredProducts };
}
