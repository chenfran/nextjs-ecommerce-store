'use server';

import { cookies } from 'next/headers';

// export async function createOrUpdateCookie(cartItem) {
// const cartItems = [];
// cartItems.push({ id: '', cartItem: cartItem });
//   await cookies().set('cartItem', JSON.stringify(cartItems));
// }

export async function createOrUpdateCookie(singleProductId, comment) {
  const fruitComments = [];
  fruitComments.push({ id: singleProductId, comment: comment });
  await cookies().set('fruitComments', JSON.stringify(fruitComments));
}
