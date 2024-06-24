import { getProductsInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import CheckoutForm from './CheckoutForm';

export const metadata = {
  title: 'Checkout',
};

export default async function Checkout() {
  const products = await getProductsInsecure();

  const shoppingCartCookies = getCookie('cart');

  const shoppingCart = !shoppingCartCookies
    ? []
    : parseJson(shoppingCartCookies);

  const shoppingCartWithItems = products
    .map((product) => {
      const matchingWithProductFromCookie = shoppingCart.find(
        (cartObject) => product.id === cartObject.id,
      );
      return { ...product, quantity: matchingWithProductFromCookie?.quantity };
    })
    .filter((item) => item.quantity > 0);

  function calculateTotalPrice() {
    let totalPrice = 0;
    shoppingCartWithItems.map((item) => {
      return (totalPrice += item.price * item.quantity);
    });
    return totalPrice.toFixed(2); // auf 2 Dezimalstellen runden
  }

  return (
    <>
      <h1 className="text-5xl font-bold text-center mt-8 mb-12">Checkout</h1>
      <div className="ml-10 mr-10 mb-10 text-2xl text-right">
        Total price: {calculateTotalPrice()} EUR
      </div>
      <CheckoutForm />
    </>
  );
}
