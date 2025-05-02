import CartIcon from '@/src/cart/components/CartIcon';
import { useCartStore } from '@/src/cart/store/cart-store';
import CompareIcon from '@/src/compare/components/CompareIcon';
import { useCompareStore } from '@/src/compare/store/compare-store';
import { Heading } from '@/src/shared/components/typography/Heading';

const Header = () => {
  const { cartItems, toggleCart } = useCartStore();
  const { compareItems, toggleCompare } = useCompareStore();

  return (
    <header className="flex justify-between items-center py-4 border-b">
      <Heading level={1} className="text-gray-700">
        Product catalogue
      </Heading>
      <div className="flex items-center gap-4">
        <CompareIcon count={compareItems.length} onClick={toggleCompare} />
        <CartIcon count={cartItems.length} onClick={toggleCart} />
      </div>
    </header>
  );
};

export default Header;
