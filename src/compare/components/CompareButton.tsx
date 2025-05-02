import { useCompareStore } from '@/src/compare/store/compare-store';
import type { Product } from '@/src/products/types';
import SquareButton from '@/src/shared/components/SquareButton';
import { Scale } from 'lucide-react';
import toast from 'react-hot-toast';

interface CompareButtonProps {
  productId: string;
  product: Product;
}

export default function CompareButton({ productId, product }: CompareButtonProps) {
  const { compareItems, addToCompare, removeFromCompare, isInCompare } = useCompareStore();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isInCompare(productId)) {
      removeFromCompare(productId);
      toast.success('Product removed from comparison');
    } else {
      if (compareItems.length >= 3) {
        toast.error('You can compare up to 3 products at a time');
        return;
      }
      addToCompare(product);
      toast.success('Product added to comparison');
    }
  };

  return (
    <SquareButton
      className="absolute left-3 top-3"
      variant={isInCompare(productId) ? 'primary' : 'default'}
      icon={<Scale className="h-5 w-5" />}
      onClick={handleClick}
    />
  );
}
