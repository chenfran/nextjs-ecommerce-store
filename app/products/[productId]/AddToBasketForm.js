'use client';

import { useState } from 'react';
import { createOrUpdateCookie } from './actions';

// export default function AddToBasket(props) {
//   const [cartItem, setCartItem] = useState([]);

//   return (
//     <form>
//       <button
//         value={cartItem}
//         onChange={(event) => setCartItem(event.currentTarget.value)}
// formAction={async () => await createOrUpdateCookie(cartItem)}
//       >
//         Add to Basket
//       </button>
//     </form>
//   );
// }

export default function FruitCommentForm(props) {
  const [comment, setComment] = useState('');

  return (
    <form>
      <textarea
        value={comment}
        onChange={(event) => setComment(event.currentTarget.value)}
      />
      <button
        formAction={async () =>
          await createOrUpdateCookie(props.singleProductId, comment)
        }
      >
        Add comment
      </button>
    </form>
  );
}
