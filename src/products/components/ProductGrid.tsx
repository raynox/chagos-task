'use client';

import type { Product } from '@/src/products/types';
import Rating from '@/src/shared/components/Rating';
import SquareButton from '@/src/shared/components/SquareButton';
import SquareImage from '@/src/shared/components/SquareImage';
import { Heading } from '@/src/shared/components/typography/Heading';
import { Price } from '@/src/shared/components/typography/Price';
import { Text } from '@/src/shared/components/typography/Text';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductGrid({ products, onProductClick, onAddToCart }: ProductGridProps) {
  const handleProductClick = (product: Product) => {
    onProductClick(product);
  };

  if (products.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-500">No products found. Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group"
            onClick={() => handleProductClick(product)}
          >
            <div className="relative aspect-square overflow-hidden">
              <SquareImage
                imageUrl={product.productImage || ''}
                altText={product.productName}
                placeholderImageUrl={'/placeholder.svg?height=300&width=300'}
              />

              <SquareButton
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
              />
            </div>
            <div className="p-4">
              <Text variant="small">{product.manufacturer}</Text>
              <Heading level={3} className="mt-1">
                {product.productName}
              </Heading>

              <Price amount={product.price} size="md" className="mt-2 text-gray-400" />
              <Rating rating={product.environmentalPerformance || 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
