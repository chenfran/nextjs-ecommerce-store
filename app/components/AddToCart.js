// Add an item (product.id) to the cart

import { useState } from 'react';

export default function AddToCartButton() {
  const [cart, setCart] = useState([]);
  console.log(cart);

  return (
    <div>
      <button onChange={(event) => setCart(event.currentTarget.value)}>
        Add To Cart
      </button>
    </div>
  );
}
