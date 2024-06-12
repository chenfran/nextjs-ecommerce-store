'use client';

import { useEffect, useState } from 'react';

export default function HandleQuantityChange({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  // Create a state variable for the count of items in the shoppingCart
  const [cartItemCount, setCartItemCount] = useState(0);

  function handleQuantityChange(productId, quantity) {
    setQuantities({ ...quantities, [productId]: quantity });
  }

  function addToShoppingCart(product) {
    const quantity = quantities[product.id] || 1;
    const existingProductIndex = shoppingCart.findIndex(
      (item) => item.id === product.id,
    );
    if (existingProductIndex !== -1) {
      const updatedCart = shoppingCart.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
      setShoppingCart(updatedCart);
    } else {
      setShoppingCart([...shoppingCart, { product, quantity }]);
    }
  }

  // Create a function that removes an item from the shoppingCart
  function removeItemFromCart(productId) {
    setShoppingCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId),
    );
  }

  // Create a function to calculate the total price
  function calculateTotalPrice() {
    let totalPrice = 0;
    shoppingCart.map((item) => {
      return (totalPrice += item.price * item.quantity);
    });
    return totalPrice.toFixed(2); // auf 2 Dezimalstellen runden
  }

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
    <>
      <div>Children:</div>
      {children({
        shoppingCart,
        quantities,
        cartItemCount,
        handleQuantityChange,
        addToShoppingCart,
        removeItemFromCart,
        calculateTotalPrice,
        displayCartItemCount,
      })}
    </>
  );
}
