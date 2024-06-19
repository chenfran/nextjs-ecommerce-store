import CheckoutForm from './CheckoutForm';

export const metadata = {
  title: 'Checkout',
};

export default function Checkout() {
  return (
    <>
      <h1 className="text-5xl font-bold text-center mt-8 mb-12">Checkout</h1>
      <CheckoutForm />
    </>
  );
}
