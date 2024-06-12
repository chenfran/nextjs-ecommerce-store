'use client';

import { useEffect, useState } from 'react';

export function CartItemCount({ shoppingCart = [] }) {
  // Create a state variable for the count of items in the shoppingCart
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Check if shoppingCart is an array before calling reduce
    if (Array.isArray(shoppingCart)) {
      // Update the number of products in the shopping cart when the shopping cart changes
      setCartItemCount(
        shoppingCart.reduce((sum, item) => sum + item.quantity, 0),
      );
    }
  }, [shoppingCart]);

  // Create function that the quantity will only be displayed if there is an item in the shoppingCart
  function displayCartItemCount() {
    if (cartItemCount > 0) {
      return <span>{cartItemCount}</span>;
    } else {
      return null;
    }
  }

  return <>{displayCartItemCount()}</>;
}
