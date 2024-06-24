'use client';

import { removeItemFromCart } from './actions';

export const metadata = {
  title: 'Shopping Cart',
};

export default function ShoppingCartForm(props) {
  return (
    <form>
      <button
        className="btn btn-outline btn-error btn-xs"
        formAction={async () => await removeItemFromCart(props.productId)}
        data-test-id={`cart-product-remove-${props.productId}`}
      >
        Remove item
      </button>
    </form>
  );
}
