import ConfirmButton from './ConfirmButton';
import styles from './page.module.scss';

export const metadata = {
  title: 'Checkout',
};

export default function Checkout() {
  return (
    <div className={styles.checkoutBody}>
      <div className={styles.checkoutPage}>
        <h1>Checkout</h1>
        <div className={styles.checkoutContainer}>
          <form className={styles.checkoutForm}>
            <h2>Shipping Address</h2>
            <label htmlFor="First name">First name</label>
            <input
              placeholder="First name"
              name="First name"
              id="First name"
              data-test-id="checkout-first-name"
            />
            <label htmlFor="Last name">Last name</label>
            <input
              placeholder="Last name"
              name="Last name"
              id="Last name"
              data-test-id="checkout-last-name"
            />
            <label htmlFor="Email">E-Mail</label>
            <input
              type="email"
              pattern=".+@example\.com"
              placeholder="E-Mail"
              name="Email"
              id="Email"
              data-test-id="checkout-email"
              required
            />
            <label htmlFor="Address">Address</label>
            <input
              placeholder="Address"
              name="Address"
              id="Address"
              data-test-id="checkout-address"
            />
            <label htmlFor="City">City</label>
            <input
              placeholder="City"
              name="City"
              id="City"
              data-test-id="checkout-city"
            />
            <label htmlFor="Postal code">Postal code</label>
            <input
              placeholder="Postal code"
              name="Postal code"
              id="Postal code"
              data-test-id="checkout-city"
            />
            <label htmlFor="Country">Country</label>
            <input
              placeholder="Country"
              name="Country"
              id="Country"
              data-test-id="checkout-country"
            />

            <h2>Payment Information</h2>
            <label htmlFor="Credit card">Credit Card</label>
            <input
              placeholder="Credit Card"
              name="Credit card"
              id="Credit card"
              data-test-id="checkout-credit-card"
            />
            <label htmlFor="Expiration date">Expiration date</label>
            <input
              type="date"
              name="Expiration date"
              id="Expiration date"
              data-test-id="checkout-expiration-date"
            />
            <label htmlFor="Security code">Security code</label>
            <input
              placeholder="Security code"
              name="Security code"
              id="Security code"
              data-test-id="checkout-security-code"
            />

            <ConfirmButton />
          </form>
        </div>
      </div>
    </div>
  );
}
