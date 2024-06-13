import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import ShoppingCartForm from './ShoppingCartForm';

export default async function ShoppingCart() {
  const products = await getProductsInsecure();

  const shoppingCartCookies = getCookie('cart');

  const shoppingCart = !shoppingCartCookies
    ? []
    : parseJson(shoppingCartCookies);

  const shoppingCartWithItems = products
    .map((product) => {
      const matchingWithProductFromCookie = shoppingCart.find(
        (cartObject) => product.id === cartObject.id,
      );
      return { ...product, quantity: matchingWithProductFromCookie?.quantity };
    })
    .filter((item) => item.quantity > 0);

  function calculateTotalPrice() {
    let totalPrice = 0;
    shoppingCartWithItems.map((item) => {
      return (totalPrice += item.price * item.quantity);
    });
    return totalPrice.toFixed(2); // auf 2 Dezimalstellen runden
  }

  function calculateTotalPriceOfOneItem(productId) {
    let totalPrice = 0;
    shoppingCartWithItems.forEach((item) => {
      if (item.id === productId) {
        totalPrice = item.price * item.quantity;
      }
    });
    return totalPrice.toFixed(2);
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      {shoppingCartWithItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {shoppingCartWithItems.map((item) => (
              <li key={`item-${item.id}`}>
                <Image
                  src={`/${item.name.toLowerCase()}.webp`}
                  alt={item.name}
                  width={150}
                  height={150}
                />
                {item.name} - {item.price} EUR - Quantity: {item.quantity}
                <ShoppingCartForm productId={item.id} />
              </li>
            ))}
          </ul>
          <h2>Order Summary</h2>
          <ul>
            {shoppingCartWithItems.map((item) => (
              <li key={`item-${item.id}`}>
                {item.name} {item.price} EUR - Quantity: {item.quantity} - Total
                Price of this item: {calculateTotalPriceOfOneItem(item.id)}
              </li>
            ))}
            <li>Total price: {calculateTotalPrice()} EUR</li>
          </ul>
        </div>
      )}
      <Link href="/checkout">Proceed to checkout</Link>
    </div>
  );
}
