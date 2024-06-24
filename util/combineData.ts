import { getProductsInsecure } from '../database/products';
import { getCookie } from './cookies';
import { parseJson } from './json';

type CartObject = {
  id: number;
  quantity: number;
};

export async function combineData() {
  const products = await getProductsInsecure();

  const shoppingCartCookies = getCookie('cart');

  const shoppingCart = !shoppingCartCookies
    ? []
    : parseJson(shoppingCartCookies);

  const shoppingCartWithItems = products
    .map((product) => {
      const matchingWithProductFromCookie = shoppingCart.find(
        (cartObject: CartObject) => product.id === cartObject.id,
      );
      return { ...product, quantity: matchingWithProductFromCookie?.quantity };
    })
    .filter((item) => item.quantity > 0);

  console.log(shoppingCartWithItems);
}
