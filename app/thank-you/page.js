import Link from 'next/link';

export const metadata = {
  title: 'Thank you for your order',
};

export default function ThankYou() {
  return (
    <div>
      <title>Thank you for your order</title>
      <div>
        <h1>Thank you for your order!</h1>
        <p>
          Your order has been successfully placed. We will send you a
          confirmation email.
        </p>
      </div>
      <div>
        <Link href="/">Go to Homepage</Link>
      </div>
    </div>
  );
}
