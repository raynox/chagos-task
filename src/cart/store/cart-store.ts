import type { Product } from '@/src/products/types/product';
import { create } from 'zustand';

interface CartStore {
  cartItems: Product[];
  isCartOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  isCartOpen: false,
  addToCart: (product) =>
    set((state) => ({
      cartItems: [...state.cartItems, product],
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item._id !== productId),
    })),
  clearCart: () => set({ cartItems: [] }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));
