'use client';

import { useState } from 'react';

export function HandleQuantity(product) {
  // Create a state variable for the number of products that is an empty object
  const [quantities, setQuantities] = useState({});

  function handleQuantityChange(productId, quantity) {
    setQuantities({ ...quantities, [productId]: quantity });
  }

  return (
    <input
      type="number"
      min="1"
      value={quantities[product.id] || 1}
      onChange={(event) =>
        handleQuantityChange(product.id, parseInt(event.target.value))
      }
    />
  );
}
