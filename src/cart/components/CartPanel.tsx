'use client';

import { calculateCartValue } from '@/src/cart/lib/calculateCartValue';
import { useCartStore } from '@/src/cart/store/cart-store';
import type { Product } from '@/src/products/types';
import Button from '@/src/shared/components/Button';
import CircleButton from '@/src/shared/components/CircleButton';
import SquareImage from '@/src/shared/components/SquareImage';
import { Heading } from '@/src/shared/components/typography/Heading';
import { Price } from '@/src/shared/components/typography/Price';
import { Text } from '@/src/shared/components/typography/Text';
import { ShoppingCart, Trash2, X } from 'lucide-react';
import toast from 'react-hot-toast';

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onRemoveFromCart: (productId: string) => void;
}

export default function CartPanel({
  isOpen,
  onClose,
  cartItems,
  onRemoveFromCart,
}: CartPanelProps) {
  const clearCart = useCartStore((state) => state.clearCart);

  const handleCheckout = () => {
    clearCart();
    onClose();
    toast.success('Order placed successfully!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Heading level={2} className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Your Cart ({cartItems.length})
          </Heading>

          <CircleButton onClick={onClose} icon={<X className="h-5 w-5" />} />
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 h-64">
            <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
            <Text variant="body" className="text-gray-500 text-center">
              Your cart is empty
            </Text>

            <Button
              label="Continue Shopping"
              onClick={onClose}
              variant="default"
              className="mt-4"
            />
          </div>
        ) : (
          <>
            <div className="p-4 divide-y">
              {cartItems.map((item) => (
                <div key={item._id} className="py-4 flex gap-4">
                  <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                    <SquareImage
                      altText={item.productName}
                      imageUrl={item.productImage}
                      placeholderImageUrl="/placeholder.svg?height=80&width=80"
                    />
                  </div>
                  <div className="flex-1">
                    <Heading level={3} className="font-medium">
                      {item.productName}
                    </Heading>
                    <Text variant="small">{item.manufacturer}</Text>
                    <Price amount={item.price} size="md" className="mt-1" />
                  </div>
                  <CircleButton
                    onClick={() => onRemoveFromCart(item._id)}
                    icon={<Trash2 className="h-5 w-5" />}
                  />
                </div>
              ))}
            </div>

            <div className="border-t p-4 bg-gray-50">
              <div className="flex justify-between mb-2">
                <Text variant="label">Subtotal</Text>
                <Price amount={`$${calculateCartValue(cartItems).toFixed(2)}`} size="md" />
              </div>
              <div className="flex justify-between mb-4">
                <Text variant="label">Shipping</Text>
                <Text variant="body">Calculated at checkout</Text>
              </div>
              <div className="flex justify-between mb-6">
                <Text variant="body" className="text-lg font-semibold">
                  Total
                </Text>
                <Price amount={`$${calculateCartValue(cartItems).toFixed(2)}`} size="lg" />
              </div>

              <Button
                label="Checkout"
                onClick={handleCheckout}
                variant="primary"
                className="mt-2"
              />
              <Button
                label="Continue Shopping"
                onClick={onClose}
                variant="default"
                className="mt-2"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
