'use client';

import CartPanel from '@/src/cart/components/CartPanel';
import { useCartStore } from '@/src/cart/store/cart-store';
import CategoryHeader from '@/src/categories/components/CategoryHeader';
import CategoryTabs from '@/src/categories/components/CategoryTabs';
import { useUniqueCategories } from '@/src/categories/hooks/useUniqueCategories';
import ProductDetails from '@/src/products/components/ProductDetails';
import ProductGrid from '@/src/products/components/ProductGrid';
import { useFetchProducts } from '@/src/products/hooks/useFetchProducts';
import useFileteredProducts from '@/src/products/hooks/useFileteredProducts';
import { useHandleSort } from '@/src/products/hooks/useHandleSort';
import { Product } from '@/src/products/types';
import Header from '@/src/shared/components/Header';
import { useState } from 'react';

export default function Home() {
  const { products, loading } = useFetchProducts();
  const { cartItems, addToCart, removeFromCart, isCartOpen, toggleCart } = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { sortedProducts, handleSort } = useHandleSort(products);

  const { filteredProducts } = useFileteredProducts(
    sortedProducts,
    searchTerm,
    selectedCategory,
    cartItems
  );

  const { categories } = useUniqueCategories(products, setSelectedCategory);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <Header />

        {loading ? (
          <div className="flex justify-center items-center h-screen">Loading...</div>
        ) : (
          <>
            <CategoryTabs
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <CategoryHeader
              selectedCategory={selectedCategory}
              searchTerm={searchTerm}
              handleSearch={handleSearch}
              handleSort={handleSort}
            />

            <ProductGrid
              products={filteredProducts}
              onAddToCart={addToCart}
              onProductClick={setSelectedProduct}
            />

            <CartPanel
              isOpen={isCartOpen}
              onClose={toggleCart}
              cartItems={cartItems}
              onRemoveFromCart={removeFromCart}
            />

            {selectedProduct && (
              <ProductDetails
                product={selectedProduct}
                onClose={closeProductDetails}
                onAddToCart={addToCart}
              />
            )}
          </>
        )}
      </div>
    </main>
  );
}
