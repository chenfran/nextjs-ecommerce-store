'use client';

import { useEffect, useState } from 'react';

export function AddToCartButton(quantities, singleProduct) {
  // Create a state variable for the shopping cart that is an empty array
  const [shoppingCart, setShoppingCart] = useState([]);

  // Create a function to add products to the shoppingCart
  function addToShoppingCart(product) {
    const quantity = quantities[product.id] || 1;
    const existingProductIndex = shoppingCart.findIndex(
      (item) => item.id === product.id,
    );
    if (existingProductIndex !== -1) {
      // Product already in cart, update quantity
      const updatedCart = shoppingCart.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
      setShoppingCart(updatedCart);
    } else {
      // Product not in cart, add new item
      setShoppingCart([...shoppingCart, { ...product, quantity }]);
    }
  }

  // Create a state variable for the count of items in the shoppingCart
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Update the number of products in the shopping cart when the shopping cart changes
    setCartItemCount(
      shoppingCart.reduce((sum, item) => sum + item.quantity, 0),
    );
  }, [shoppingCart]);

  // Create function that the quantity will only be displayed if there is an item in the shoppingCart
  function displayCartItemCount() {
    if (cartItemCount > 0) {
      return <span>{cartItemCount}</span>;
    } else {
      return null;
    }
  }

  return (
    <button onClick={() => addToShoppingCart(singleProduct)}>
      Add to cart
    </button>
  );
}
