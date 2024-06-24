import Image from 'next/image';
import { getProductsInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import ProccedToCheckout from './ProceedToCheckoutForm';
import ShoppingCartForm from './ShoppingCartForm';

export default async function ShoppingCart() {
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

  function calculateTotalPriceOfOneItem(productId) {
    let totalPrice = 0;
    shoppingCartWithItems.forEach((item) => {
      if (item.id === productId) {
        totalPrice = item.price * item.quantity;
      }
    });
    return totalPrice.toFixed(2);
  }

  return (
    <div className="pt-10 pb-20">
      <h1 className="text-5xl font-bold text-center mb-12">Shopping Cart</h1>
      {shoppingCartWithItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 ml-20 bg-orange-100 p-8 rounded-lg shadow-xl">
            <ul>
              {shoppingCartWithItems.map((item) => (
                <li
                  className="flex mb-8 items-center justify-start"
                  key={`item-${item.id}`}
                  data-test-id={`cart-product-${item.id}`}
                >
                  <Image
                    className="w-24 h-24 object-cover rounded-md"
                    src={`/${item.name.toLowerCase()}.webp`}
                    alt={item.name}
                    width={150}
                    height={150}
                  />
                  <div className="ml-4">
                    <p className="text-xl font-bold">{item.name}</p>
                    <p>{item.price}.00 EUR</p>
                    <ShoppingCartForm productId={item.id} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 bg-stone-200 p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Order Summary</h2>
            <ul>
              {shoppingCartWithItems.map((item) => (
                <li key={`item-${item.id}`}>
                  <p className="mt-4 mb-4 font-bold">{item.name}</p>
                  <p>Price: {item.price}.00 EUR</p>

                  <span>Quantity: </span>
                  <span data-test-id={`cart-product-quantity-${item.id}`}>
                    {item.quantity}
                  </span>

                  <span>, Product subtotal: </span>
                  <span>{calculateTotalPriceOfOneItem(item.id)}</span>
                  <span> EUR</span>
                </li>
              ))}
              <li className="border-t border-gray-400 pt-4 mt-4">
                <span>Total price: </span>
                <span data-test-id="cart-total">{calculateTotalPrice()}</span>
                <span> EUR</span>
              </li>
            </ul>
            <ProccedToCheckout />
          </div>
        </div>
      )}
    </div>
  );
}
