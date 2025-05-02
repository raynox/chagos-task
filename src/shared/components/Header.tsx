import CartIcon from '@/src/cart/components/CartIcon';
import { useCartStore } from '@/src/cart/store/cart-store';
import { Heading } from '@/src/shared/components/typography/Heading';

const Header = () => {
  const { cartItems, toggleCart } = useCartStore();

  const handleCartClick = () => {
    toggleCart();
  };

  return (
    <header className="flex justify-between items-center py-4 border-b">
      <Heading level={1} className="text-gray-700">
        Product catalogue
      </Heading>
      <CartIcon count={cartItems.length} onClick={handleCartClick} />
    </header>
  );
};

export default Header;
