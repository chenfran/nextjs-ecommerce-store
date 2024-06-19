'use client';

import { useRouter } from 'next/navigation';

export default function ProccedToCheckout() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/checkout');
  };

  return (
    <button
      className="btn btn-outline bg-slate-800 text-neutral-100 mt-4"
      onClick={handleClick}
      data-test-id="cart-checkout"
    >
      Proceed to checkout
    </button>
  );
}
