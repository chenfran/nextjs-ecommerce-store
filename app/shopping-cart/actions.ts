'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

// Case A: cookie is undefined (not set)
// Case B: cookie set, id doesn't exist yet
// Case C: cookie set, id exists already

export type NewShoppingCart = {
  id: number;
};

export async function removeItemFromCart(productId: number) {
  // 1. get current cookie
  const shoppingCartCookies = getCookie('cart');
  console.log(shoppingCartCookies);

  // 2. parse the cookie value
  const shoppingCart: NewShoppingCart[] = !shoppingCartCookies
    ? // Case A: cookie is undefined
      []
    : parseJson(shoppingCartCookies) || [];

  // 3. edit the cookie value
  const shoppingCartAfterRemove = shoppingCart.filter((prevCart) => {
    return prevCart.id !== productId;
  });

  // 4. we override the cookie
  await cookies().set('cart', JSON.stringify(shoppingCartAfterRemove));
}
