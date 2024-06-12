import { cookies } from 'next/headers';
import AddToCartForm from './AddToCartForm';

export default function AddToCartPage() {
  const cartItems = cookies().get('shoppingCartItem');

  return (
    <>
      <div>CartItem: {cartItems.value}</div>
      <AddToCartForm />
    </>
  );
}
