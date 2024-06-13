'use client';

import { removeItemFromCart } from './actions';

export const metadata = {
  title: 'Shopping Cart',
};

export default function ShoppingCartForm(props) {
  return (
    <form>
      <button
        formAction={async () => await removeItemFromCart(props.productId)}
      >
        Remove item
      </button>
    </form>
  );
}