import Image from 'next/image';
import { getProductsInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import ShoppingCartForm from './ShoppingCartForm';

export default async function ShoppingCart() {
  const products = await getProductsInsecure();

  const shoppingCartCookies = getCookie('shoppingCart');

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
                {item.name} {item.price} EUR
              </li>
            ))}
            <li>Total price: EUR</li>
          </ul>
        </div>
      )}
    </div>
  );
}
