'use client';

import type { Product } from '@/src/products/types';
import Button from '@/src/shared/components/Button';
import CircleButton from '@/src/shared/components/CircleButton';
import Rating from '@/src/shared/components/Rating';
import SquareImage from '@/src/shared/components/SquareImage';
import { Heading, Price, Text } from '@/src/shared/components/typography';
import { Plus, X } from 'lucide-react';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductDetails({ product, onClose, onAddToCart }: ProductDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <Heading level={2}>{product.productName}</Heading>
          <CircleButton onClick={onClose} icon={<X className="h-6 w-6" />} />
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <SquareImage imageUrl={product.productImage || ''} altText={product.productName} />

          <div>
            <div className="mb-6">
              <Text variant="label">Manufacturer</Text>
              <Text>{product.manufacturer}</Text>
            </div>

            <div className="mb-6">
              <Text variant="label">Price</Text>
              <Price amount={product.price} size="lg" />
            </div>

            <div className="mb-6">
              <Text variant="label">Environmental Performance</Text>
              <Rating rating={product.environmentalPerformance || 0} />
            </div>

            <div className="mb-6">
              <Text variant="label">Dimensions</Text>
              <Text>{product.dimensions}</Text>
            </div>

            <div className="mb-6">
              <Text variant="label">Weight</Text>
              <Text>{product.weight}</Text>
            </div>

            <div className="mb-6">
              <Text variant="label">Description</Text>
              <Text>{product.description}</Text>
            </div>

            <Button
              label="Add to Cart"
              icon={<Plus className="h-5 w-5" />}
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
