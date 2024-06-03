export const metadata = {
  title: 'Checkout',
};
export default function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <label htmlFor="First name">First name</label>
        <input
          name="First name"
          id="First name"
          data-test-id="checkout-first-name"
        />
        <label htmlFor="Last name">Last name</label>
        <input
          name="Last name"
          id="Last name"
          data-test-id="checkout-last-name"
        />
        <label htmlFor="Email">E-Mail</label>
        <input name="Email" id="Email" data-test-id="checkout-email" />
        <label htmlFor="Address">Address</label>
        <input name="Address" id="Address" data-test-id="checkout-address" />
        <label htmlFor="City">City</label>
        <input name="City" id="City" data-test-id="checkout-city" />
        <label htmlFor="Postal code">Postal code</label>
        <input
          name="Postal code"
          id="Postal code"
          data-test-id="checkout-city"
        />
        <label htmlFor="Country">Country</label>
        <input name="Country" id="Country" data-test-id="checkout-country" />
        <h3>Payment</h3>
        <label htmlFor="Credit card">Credit Card</label>
        <input
          name="Credit card"
          id="Credit card"
          data-test-id="checkout-credit-card"
        />
        <label htmlFor="Expiration date">Expiration date</label>
        <input
          name="Expiration date"
          id="Expiration date"
          data-test-id="checkout-expiration-date"
        />
        <label htmlFor="Security code">Security code</label>
        <input
          name="Security code"
          id="Security code"
          data-test-id="checkout-security-code"
        />
        <button data-test-id="checkout-confirm-order">Confirm order</button>
      </form>
    </div>
  );
}
