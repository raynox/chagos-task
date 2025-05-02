'use client';

import { Text } from '@/src/shared/components/typography/Text';
import { ShoppingCart } from 'lucide-react';

interface CartIconProps {
  count: number;
  onClick: () => void;
}

export default function CartIcon({ count, onClick }: CartIconProps) {
  return (
    <div className="relative">
      <button className="p-2 rounded-full hover:bg-gray-100" onClick={onClick}>
        <ShoppingCart className="h-6 w-6 text-gray-700" />
        {count > 0 && (
          <div className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
            <Text variant="small" className="font-bold text-white">
              {count}
            </Text>
          </div>
        )}
      </button>
    </div>
  );
}
