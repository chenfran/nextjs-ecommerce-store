'use server';

import { cookies } from 'next/headers';

export async function updateCart(productId, shoppingCart) {
  const shoppingCartCookie = cookies().get('shoppingCart');

  const shoppingCartItems = !shoppingCartCookie
    ? []
    : JSON.parse(shoppingCartCookie.value) || [];

  const existingProductIndex = shoppingCartItems.findIndex(
    (item) => item.id === productId,
  );

  if (existingProductIndex !== -1) {
    // Update existing product quantity
    shoppingCartItems[existingProductIndex].quantity = shoppingCart.find(
      (item) => item.id === productId,
    ).quantity;
  } else {
    // Add new product to the cart
    shoppingCartItems.push(shoppingCart.find((item) => item.id === productId));
  }

  await cookies().set('shoppingCart', JSON.stringify(shoppingCartItems));
}
