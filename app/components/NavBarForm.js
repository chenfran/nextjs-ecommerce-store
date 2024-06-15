'use server';

import { getProductsInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './navBar.module.scss';

export default async function NavBarForm() {
  const products = await getProductsInsecure();

  const shoppingCartCookies = getCookie('cart');
  const shoppingCart = !shoppingCartCookies
    ? []
    : parseJson(shoppingCartCookies);

  const shoppingCartWithItems = products.map((product) => {
    const matchingWithProductFromCookie = shoppingCart.find(
      (cartObject) => product.id === cartObject.id,
    );
    return { ...product, quantity: matchingWithProductFromCookie?.quantity };
  });

  const cartItemCount = shoppingCartWithItems.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0,
  );

  function displayCartItemCount() {
    if (cartItemCount > 0) {
      return <span>{cartItemCount}</span>;
    } else {
      return null;
    }
  }
  return <span data-test-id="cart-count">{displayCartItemCount()}</span>;
}
