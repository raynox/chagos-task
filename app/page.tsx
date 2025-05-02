'use client';

import CartPanel from '@/src/cart/components/CartPanel';
import { useCartStore } from '@/src/cart/store/cart-store';
import CategoryHeader from '@/src/categories/components/CategoryHeader';
import CategoryTabs from '@/src/categories/components/CategoryTabs';
import { useUniqueCategories } from '@/src/categories/hooks/useUniqueCategories';
import ComparePanel from '@/src/compare/components/ComparePanel';
import { useCompareStore } from '@/src/compare/store/compare-store';
import ProductDetails from '@/src/products/components/ProductDetails';
import ProductGrid from '@/src/products/components/ProductGrid';
import useCategoryFilter from '@/src/products/hooks/useCategoryFilter';
import { useFetchProducts } from '@/src/products/hooks/useFetchProducts';
import { useHandleSort } from '@/src/products/hooks/useHandleSort';
import usePriceFilter from '@/src/products/hooks/usePriceFilter';
import useSearchFilter from '@/src/products/hooks/useSearchFilter';
import { Product } from '@/src/products/types';
import Header from '@/src/shared/components/Header';
import PriceRangeFilter from '@/src/shared/components/PriceRangeFilter';
import TextInput from '@/src/shared/components/TextInput';
import { extractPriceFromString } from '@/src/shared/lib/extractPriceFromString';
import { Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

export default function Home() {
  const { products, loading } = useFetchProducts();
  const { cartItems, addToCart, removeFromCart, isCartOpen, toggleCart } = useCartStore();
  const { compareItems, removeFromCompare, isCompareOpen, toggleCompare } = useCompareStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const { sortedProducts, handleSort } = useHandleSort(products);

  const categoryProducts = useCategoryFilter(sortedProducts, selectedCategory);
  let filteredProducts = useSearchFilter(categoryProducts, searchTerm);
  filteredProducts = usePriceFilter(filteredProducts, minPrice, maxPrice);

  const minProductPrice = useMemo(() => {
    return Math.min(...categoryProducts.map((product) => extractPriceFromString(product.price)));
  }, [categoryProducts]);

  const maxProductPrice = useMemo(() => {
    return Math.max(...categoryProducts.map((product) => extractPriceFromString(product.price)));
  }, [categoryProducts]);

  useEffect(() => {
    setMinPrice(minProductPrice);
  }, [minProductPrice]);

  useEffect(() => {
    setMaxPrice(maxProductPrice);
  }, [maxProductPrice]);

  const { categories } = useUniqueCategories(products, setSelectedCategory);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleMinPriceChange = (value: number) => {
    setMinPrice(value);
  };

  const handleMaxPriceChange = (value: number) => {
    setMaxPrice(value);
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

            <CategoryHeader selectedCategory={selectedCategory} handleSort={handleSort}>
              <TextInput
                placeholder="Search product"
                icon={
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                }
                value={searchTerm}
                onChange={handleSearch}
              />

              <PriceRangeFilter
                minPrice={minPrice}
                maxPrice={maxPrice}
                min={minProductPrice}
                max={maxProductPrice}
                onMinPriceChange={handleMinPriceChange}
                onMaxPriceChange={handleMaxPriceChange}
              />
            </CategoryHeader>

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

            <ComparePanel
              isOpen={isCompareOpen}
              onClose={toggleCompare}
              compareItems={compareItems}
              onRemoveFromCompare={removeFromCompare}
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
