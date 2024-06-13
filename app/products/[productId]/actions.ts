'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export type SetQuantity = {
  id: number;
  quantities: string;
};

export async function updateProductInCartForm(
  productId: number,
  quantities: string,
) {
  // 1. get current cookie
  const shoppingCartCookies = cookies().get('shoppingCart');
  console.log('shoppingCartCookies', shoppingCartCookies);

  // 2. parse the cookie value
  const shoppingCartCookiesParse: SetQuantity[] = !shoppingCartCookies
    ? []
    : parseJson(shoppingCartCookies) || [];

  // 3. edit the cookie value
  const shoppingCartToUpdate = shoppingCartCookiesParse.find((cookie) => {
    return cookie.id === productId;
  });

  if (!shoppingCartToUpdate) {
    shoppingCartCookiesParse.push({ id: productId, quantities: quantities });
  } else {
    shoppingCartToUpdate.quantities = quantities;
  }

  // 4. override the cookie
  await cookies().set('shoppingCart', JSON.stringify(shoppingCartCookies));
}
