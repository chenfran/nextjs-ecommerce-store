'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

// Case A: cookie is undefined (not set)
// Case B: cookie set, id doesn't exist yet
// Case C: cookie set, id exists already

export type SetQuantities = {
  id: number;
  quantity: number;
};

export async function createOrUpdateShoppingCart(
  productId: number,
  quantity: number,
) {
  // 1. get current cookie
  const shoppingCartCookies = getCookie('cart');

  // 2. parse the cookie value
  const shoppingCart: SetQuantities[] = !shoppingCartCookies
    ? // Case A: cookie is undefined
      []
    : parseJson(shoppingCartCookies) || [];

  // 3. edit the cookie value
  const cartToUpdate = shoppingCart.find((cookie) => {
    return cookie.id === productId;
  });

  // Case B: cookie set, id doesn't exist yet
  if (!cartToUpdate) {
    shoppingCart.push({
      id: productId,
      quantity: quantity,
    });
  } else {
    // Case C: cookie set, id exists already
    cartToUpdate.quantity += quantity;
  }

  // 4. override the cookie
  await cookies().set('cart', JSON.stringify(shoppingCart));
}
