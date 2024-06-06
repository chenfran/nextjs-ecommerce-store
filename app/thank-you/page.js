import Link from 'next/link';
import styles from './page.module.scss';

export const metadata = {
  title: 'Thank you',
};

export default function ThankYou() {
  return (
    <div className={styles.thankYouPage}>
      <title>Thank You for Your Order</title>
      <div className={styles.thankYouContainer}>
        <h1>Thank you for your order!</h1>
        <p>
          Your order has been successfully placed. We will send you a
          confirmation email.
        </p>
      </div>
      <div>
        <Link className={styles.homeButton} href="/">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
