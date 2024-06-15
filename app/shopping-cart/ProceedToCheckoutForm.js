'use client';

import { useRouter } from 'next/navigation';

export default function ProccedToCheckout() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/checkout');
  };

  return (
    <button onClick={handleClick} data-test-id="cart-checkout">
      Proceed to checkout
    </button>
  );
}
