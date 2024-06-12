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

// 'use server';

// import { cookies } from 'next/headers';

// // Case A: Cookie is undefined
// // Case B: Cookie exists, we need to add a new comment
// // Case C: Cookie exists and with a comment for the specific fruit

// export async function createOrUpdateCookie(fruitId, comment) {
//   // 1. get current cookie
//   const fruitsCommentsCookie = cookies().get('fruitComments');

//   // 2. parse the cookie value
//   const fruitComments = !fruitsCommentsCookie
//     ? // Case A: Cookie is undefined
//       []
//     : JSON.parse(fruitsCommentsCookie.value) || [];

//   // 3. edit the cookie value
//   const fruitToUpdate = fruitComments.find((fruitComment) => {
//     return fruitComment.id === fruitId;
//   });

//   // Case B: Cookie set, id doesn't exist
//   if (!fruitToUpdate) {
//     fruitComments.push({ id: fruitId, comment: comment });
//   } else {
//     // Case C: Cookie set, id exists already
//     fruitToUpdate.comment = comment;
//   }

//   // 4. override the cookie
//   await cookies().set('fruitComments', JSON.stringify(fruitComments));
// }
