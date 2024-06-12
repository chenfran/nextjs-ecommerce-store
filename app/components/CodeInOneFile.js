'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function CodeInOneFile() {
  // Create array of objects for the products
  const products = [
    {
      id: 1,
      name: 'Bonbon',
      price: 10,
      image: '/bonbon.webp',
    },
    {
      id: 2,
      name: 'Chicken',
      price: 20,
      image: '/chicken.webp',
    },
  ];

  // Create a state variable for the shopping cart that is an empty array
  const [shoppingCart, setShoppingCart] = useState([]);

  // Create a state variable for the number of products that is an empty object
  const [quantities, setQuantities] = useState({});

  // Create a function to allow user to change the number of products
  function handleQuantityChange(productId, quantity) {
    setQuantities({ ...quantities, [productId]: quantity });
  }

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

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div>
      <nav>
        <ul>
          <Link href="#products">
            <li>Home</li>
          </Link>
          <Link href="#shopping_cart">
            <li>Shopping Cart {displayCartItemCount()}</li>
          </Link>
        </ul>
      </nav>

      <main>
        <h1 id="products">Products</h1>
        <hr />
        <ul>
          {products.map((product) => (
            <li key={`product-${product.id}`}>
              <h2>{product.name}</h2>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={225}
              />
              <p>Price: {product.price}</p>
            </li>
          ))}
        </ul>

        <h1>Single Product Information</h1>
        <hr />
        <ul>
          {products.map((product) => (
            <li key={`product${product.id}`}>
              <h2>{product.name}</h2>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={225}
              />
              <p>Price: {product.price}</p>
              <input
                type="number"
                min="1"
                value={quantities[product.id] || 1}
                onChange={(event) =>
                  handleQuantityChange(product.id, parseInt(event.target.value))
                }
              />
              <button onClick={() => addToShoppingCart(product)}>
                Add to cart
              </button>
            </li>
          ))}
        </ul>
        <h1 id="shopping_cart">Shopping Cart</h1>
        <hr />
        {shoppingCart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {shoppingCart.map((item) => (
                <li key={`item-${item.id}`}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={225}
                  />
                  {item.name} - {item.price} EUR - Quantity: {item.quantity}
                  <button onClick={() => removeItemFromCart(item.id)}>
                    Remove item
                  </button>
                </li>
              ))}
            </ul>
            <h2>Order Summary</h2>
            <ul>
              {shoppingCart.map((item) => (
                <li key={`item-${item.id}`}>
                  {item.name} {item.price} EUR
                </li>
              ))}
              <li>Total price: {calculateTotalPrice()} EUR</li>
            </ul>
          </div>
        )}
        <h1>Checkout</h1>
        <hr />
        <form>
          <label htmlFor="First name">First name</label>
          <input
            id="First name"
            name="First name"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
            required
          />
          <label htmlFor="Last name">Last name</label>
          <input
            id="Last name"
            name="Last name"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
            required
          />
          <Link href="#summary">Go to Summary</Link>
        </form>
        <h1 id="summary">Summary</h1>
        <hr />
        <h2>Order Summary</h2>
        <ul>
          {shoppingCart.map((item) => (
            <li key={`item-${item.id}`}>
              {item.name} {item.price} EUR - {item.quantity}
            </li>
          ))}
          <li>Total price: {calculateTotalPrice()} EUR</li>
        </ul>
        <h2>Personal information</h2>
        <span>
          {firstName} {lastName}
        </span>
        <button>Confirm Order</button>
        <h1>Thank you</h1>
        <hr />
        <div>Thank you for your order!</div>
        <Link href="#products">Go back shopping</Link>
      </main>
      <footer>Created by Franziska Chen, Vienna 2024</footer>
    </div>
  );
}
