import { use, useState } from 'react';

export const metadata = {
  title: 'Shopping Cart',
};

export default function ShoppingCart() {
  // Create a state variable for the shopping cart that is an empty array
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <div>
      <div>
        <h1>Your Shopping Cart</h1>
        <h2>Your products</h2>
        <ul>
          <li>Product 1, price:, quantity:</li>
        </ul>
        <h2>Order summary</h2>
        <ul>
          <li>Product 1, price:, quantity:</li>
        </ul>
        <hr />
        <div>Total price: </div>
      </div>
    </div>
  );
}
