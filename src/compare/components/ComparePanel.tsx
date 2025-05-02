import type { Product } from '@/src/products/types';
import Button from '@/src/shared/components/Button';
import CircleButton from '@/src/shared/components/CircleButton';
import Rating from '@/src/shared/components/Rating';
import SquareButton from '@/src/shared/components/SquareButton';
import SquareImage from '@/src/shared/components/SquareImage';
import { Heading } from '@/src/shared/components/typography/Heading';
import { Price } from '@/src/shared/components/typography/Price';
import { Text } from '@/src/shared/components/typography/Text';
import { Scale, Trash2, X } from 'lucide-react';

interface ComparePanelProps {
  isOpen: boolean;
  onClose: () => void;
  compareItems: Product[];
  onRemoveFromCompare: (productId: string) => void;
}

export default function ComparePanel({
  isOpen,
  onClose,
  compareItems,
  onRemoveFromCompare,
}: ComparePanelProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-7xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <Heading level={2}>Compare Products</Heading>
          <CircleButton onClick={onClose} icon={<X className="h-6 w-6" />} />
        </div>

        {compareItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 h-64">
            <Scale className="h-16 w-16 text-gray-300 mb-4" />
            <Text variant="body" className="text-gray-500 text-center">
              No products to compare
            </Text>
            <Text variant="small" className="text-gray-400 text-center mt-2">
              Add products to compare their features and specifications
            </Text>
            <Button
              label="Continue Shopping"
              onClick={onClose}
              variant="default"
              className="mt-4"
            />
          </div>
        ) : (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {compareItems.map((product) => (
                <div key={product._id} className="border rounded-lg p-4 relative">
                  <SquareButton
                    className="absolute top-2 right-2"
                    icon={<Trash2 />}
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveFromCompare(product._id);
                    }}
                  />
                  <div className="aspect-square mb-4">
                    <SquareImage
                      imageUrl={product.productImage || ''}
                      altText={product.productName}
                      placeholderImageUrl={'/placeholder.svg?height=300&width=300'}
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Text variant="label">Name</Text>
                      <Text>{product.productName}</Text>
                    </div>
                    <div>
                      <Text variant="label">Manufacturer</Text>
                      <Text>{product.manufacturer}</Text>
                    </div>
                    <div>
                      <Text variant="label">Price</Text>
                      <Price amount={product.price} size="md" />
                    </div>
                    <div>
                      <Text variant="label">Environmental Performance</Text>
                      <Rating rating={product.environmentalPerformance || 0} />
                    </div>
                    <div>
                      <Text variant="label">Dimensions</Text>
                      <Text>{product.dimensions}</Text>
                    </div>
                    <div>
                      <Text variant="label">Weight</Text>
                      <Text>{product.weight}</Text>
                    </div>
                    <div>
                      <Text variant="label">Description</Text>
                      <Text>{product.description}</Text>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
