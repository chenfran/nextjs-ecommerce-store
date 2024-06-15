import Link from 'next/link';
import styles from './page.module.scss';

export const metadata = {
  title: 'Thank you for your order',
};

export default function ThankYou() {
  return (
    <div className={styles.container}>
      <div className={styles.thanksContainer}>
        <h1>Thank you for your order!</h1>
        <br />
        <p>
          Your order has been successfully placed. We will send you a
          confirmation email.
        </p>
      </div>
      <div className={styles.linkContainer}>
        <Link className={styles.link} href="/">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
