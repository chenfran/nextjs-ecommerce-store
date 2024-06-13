'use client';

import { useState } from 'react';
import { updateProductInCartForm } from './actions.ts';

type Props = {
  productId: number;
};

export default function SetQuantityToCartForm(props: Props) {
  const [quantities, setQuantities] = useState('');

  // function handleQuantityChange(productId, quantity) {
  //   setQuantities({ ...quantities, [productId]: quantity });
  // }

  return (
    <form>
      <textarea
        value={quantities}
        onChange={(event) => setQuantities(event.currentTarget.value)}
      />
      <button
        formAction={async () =>
          await updateProductInCartForm(props.productId, quantities)
        }
      >
        Add to cart
      </button>
      {/* <input
        type="number"
        min="1"
        max="10"
        value={quantities}
        onChange={(event) => setQuantities(event.currentTarget.value)}
      />
      <button
        formAction={async () =>
          await updateProductInCartForm(props.productId, quantities)
        }
      >
        Add to cart
      </button> */}
    </form>
  );
}
