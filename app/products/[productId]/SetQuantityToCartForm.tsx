'use client';

import { useState } from 'react';
import { createOrUpdateShoppingCart } from './actions';

type Props = {
  productId: number;
};

export default function SetQuantityToCartForm({ productId }: Props) {
  const [quantity, setQuantity] = useState(1);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.currentTarget.value, 10);
    setQuantity(value);
  }

  const handleSubmit = async () => {
    await createOrUpdateShoppingCart(productId, quantity);
  };

  return (
    <form>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleChange}
        data-test-id="product-quantity"
      />
      <button
        className="btn btn-outline btn-secondary"
        formAction={handleSubmit}
        data-test-id="product-add-to-cart"
      >
        Add to cart
      </button>
    </form>
  );
}
