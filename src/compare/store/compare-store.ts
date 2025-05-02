import { Product } from '@/src/products/types';
import { create } from 'zustand';

interface CompareStore {
  compareItems: Product[];
  isCompareOpen: boolean;
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  toggleCompare: () => void;
  isInCompare: (productId: string) => boolean;
}

export const useCompareStore = create<CompareStore>((set, get) => ({
  compareItems: [],
  isCompareOpen: false,
  addToCompare: (product) => {
    const { compareItems } = get();
    if (compareItems.length < 3 && !compareItems.some((item) => item._id === product._id)) {
      set({ compareItems: [...compareItems, product] });
    }
  },
  removeFromCompare: (productId) => {
    set((state) => ({
      compareItems: state.compareItems.filter((item) => item._id !== productId),
    }));
  },
  toggleCompare: () => set((state) => ({ isCompareOpen: !state.isCompareOpen })),
  isInCompare: (productId) => get().compareItems.some((item) => item._id === productId),
}));
