'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const metadata = {
  title: 'Checkout',
};

export default function CheckoutForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  function clearAllInputFields() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setAddress('');
    setCity('');
    setPostalCode('');
    setCountry('');
    setCreditCard('');
    setExpirationDate('');
    setSecurityCode('');

    router.push('/thank-you');
  }

  return (
    <div>
      <div>
        <h1>Checkout</h1>
        <div>
          <form>
            <h2>Shipping Address</h2>
            <label htmlFor="First name">First name</label>
            <input
              placeholder="First name"
              id="First name"
              value={firstName}
              onChange={(event) => setFirstName(event.currentTarget.value)}
              data-test-id="checkout-first-name"
              required
            />
            <label htmlFor="Last name">Last name</label>
            <input
              placeholder="Last name"
              id="Last name"
              value={lastName}
              onChange={(event) => setLastName(event.currentTarget.value)}
              data-test-id="checkout-last-name"
              required
            />
            <label htmlFor="Email">E-Mail</label>
            <input
              type="email"
              placeholder="E-Mail"
              id="Email"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              data-test-id="checkout-email"
              required
            />
            <label htmlFor="Address">Address</label>
            <input
              placeholder="Address"
              id="Address"
              value={address}
              onChange={(event) => setAddress(event.currentTarget.value)}
              data-test-id="checkout-address"
              required
            />
            <label htmlFor="City">City</label>
            <input
              placeholder="City"
              id="City"
              value={city}
              onChange={(event) => setCity(event.currentTarget.value)}
              data-test-id="checkout-city"
              required
            />
            <label htmlFor="Postal code">Postal code</label>
            <input
              placeholder="Postal code"
              id="Postal code"
              value={postalCode}
              onChange={(event) => setPostalCode(event.currentTarget.value)}
              data-test-id="checkout-city"
              required
            />
            <label htmlFor="Country">Country</label>
            <input
              placeholder="Country"
              id="Country"
              value={country}
              onChange={(event) => setCountry(event.currentTarget.value)}
              data-test-id="checkout-country"
              required
            />
            <hr />
            <h2>Payment Information</h2>
            <label htmlFor="Credit card">Credit Card</label>
            <input
              placeholder="Credit Card"
              id="Credit card"
              value={creditCard}
              onChange={(event) => setCreditCard(event.currentTarget.value)}
              data-test-id="checkout-credit-card"
              required
            />
            <label htmlFor="Expiration date">Expiration date</label>
            <input
              placeholder="MM / YYYY"
              id="Expiration date"
              value={expirationDate}
              onChange={(event) => setExpirationDate(event.currentTarget.value)}
              data-test-id="checkout-expiration-date"
              required
            />
            <label htmlFor="Security code">Security code</label>
            <input
              placeholder="Security code"
              id="Security code"
              value={securityCode}
              onChange={(event) => setSecurityCode(event.currentTarget.value)}
              data-test-id="checkout-security-code"
              required
            />
            <button
              onClick={clearAllInputFields}
              disabled={
                !firstName ||
                !lastName ||
                !email ||
                !address ||
                !city ||
                !postalCode ||
                !country ||
                !creditCard ||
                !expirationDate ||
                !securityCode
              }
            >
              Complete Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
