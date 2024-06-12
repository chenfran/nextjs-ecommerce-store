// 'use client';

// import { useState } from 'react';
// import { updateCart } from './actions';

// export default function ShoppingCartForm(props) {
//   const [shoppingCart, setShoppingCart] = useState([]);
//   const [quantities, setQuantities] = useState({});

//   function handleQuantityChange(productId, quantity) {
//     setQuantities({ ...quantities, [productId]: quantity });
//   }

//   function addToShoppingCart(product) {
//     const quantity = quantities[product.id] || 1;
//     const existingProductIndex = shoppingCart.findIndex(
//       (item) => item.id === product.id,
//     );
//     if (existingProductIndex !== -1) {
//       // Product already in cart, update quantity
//       const updatedCart = shoppingCart.map((item, index) => {
//         if (index === existingProductIndex) {
//           return { ...item, quantity: item.quantity + quantity };
//         }
//         return item;
//       });
//       setShoppingCart(updatedCart);
//     } else {
//       // Product not in cart, add new item
//       setShoppingCart([...shoppingCart, { ...product, quantity }]);
//     }
//   }

//   async function handleFormAction() {
//     addToShoppingCart(props.product);
//     await updateCart(props.product.id, [
//       ...shoppingCart,
//       { ...props.product, quantity: quantities[props.product.id] || 1 },
//     ]);
//   }

//   return (
//     <form>
//       <input
//         type="number"
//         min="1"
//         value={quantities(props.product.id) || 1}
//         onChange={(event) =>
//           handleQuantityChange(
//             props.product.id,
//             parseInt(event.currentTarget.value, 10),
//           )
//         }
//       />
//       <button onClick={handleFormAction}>Add to cart</button>
//     </form>
//   );
// }

// // 'use client';

// // import { useState } from 'react';
// // import { createOrUpdateCookie } from './actions';

// // export default function FruitCommentForm(props) {
// //   const [comment, setComment] = useState('');

// //   return (
// //     <form>
// //       <textarea
// //         value={comment}
// //         onChange={(event) => setComment(event.currentTarget.value)}
// //       />
// //       <button
// //         formAction={async () =>
// //           await createOrUpdateCookie(props.fruitId, comment)
// //         }
// //       >
// //         Add comment
// //       </button>
// //     </form>
// //   );
// // }
