import Link from 'next/link';

export const metadata = {
  title: 'Thank you for your order',
};

export default function ThankYou() {
  return (
    <div>
      <Link href="/">
        <div>
          <h1 className="text-5xl font-bold text-center mt-8 mb-12">
            Thank you for your order!
          </h1>
          <div className="text-center items-center">
            <p>
              Your order has been successfully placed. We will send you a
              confirmation email.
            </p>
            <button className="btn btn-outline m-8">Go to Homepage</button>
          </div>
        </div>
      </Link>
    </div>
  );
}
