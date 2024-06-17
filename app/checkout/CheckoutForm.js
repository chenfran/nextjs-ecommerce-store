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
    <>
      <h2>Shipping Address</h2>
      <label
        className="input input-bordered flex items-center gap-2 my-2"
        htmlFor="First name"
      >
        First name
        <input
          className="grow"
          placeholder="First name"
          value={firstName}
          onChange={(event) => setFirstName(event.currentTarget.value)}
          data-test-id="checkout-first-name"
          required
        />
      </label>

      <label
        className="input input-bordered flex items-center gap-2 mb-2"
        htmlFor="Last name"
      >
        Last name
        <input
          className="grow"
          placeholder="Last name"
          value={lastName}
          onChange={(event) => setLastName(event.currentTarget.value)}
          data-test-id="checkout-last-name"
          required
        />
      </label>

      <label
        className="input input-bordered flex items-center gap-2 mb-2"
        htmlFor="Email"
      >
        E-Mail
        <input
          className="grow"
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          data-test-id="checkout-email"
          required
        />
      </label>

      <label
        className="input input-bordered flex items-center gap-2 mb-2"
        htmlFor="Address"
      >
        Address
        <input
          className="grow"
          placeholder="Address"
          value={address}
          onChange={(event) => setAddress(event.currentTarget.value)}
          data-test-id="checkout-address"
          required
        />
      </label>

      <label
        className="input input-bordered flex items-center gap-2 mb-2"
        htmlFor="City"
      >
        City
        <input
          className="grow"
          placeholder="City"
          value={city}
          onChange={(event) => setCity(event.currentTarget.value)}
          data-test-id="checkout-city"
          required
        />
      </label>

      <label
        className="input input-bordered flex items-center gap-2 mb-2"
        htmlFor="Postal code"
      >
        Postal code
        <input
          className="grow"
          placeholder="Postal code"
          value={postalCode}
          onChange={(event) => setPostalCode(event.currentTarget.value)}
          data-test-id="checkout-postal-code"
          required
        />
      </label>

      <label
        className="input input-bordered flex items-center gap-2 mb-2"
        htmlFor="Country"
      >
        Country
        <input
          className="grow"
          placeholder="Country"
          value={country}
          onChange={(event) => setCountry(event.currentTarget.value)}
          data-test-id="checkout-country"
          required
        />
      </label>

      <hr />
      <h2>Payment Information</h2>
      <label
        className="input input-bordered flex items-center gap-2 mb-2"
        htmlFor="Credit card"
      >
        Credit Card
        <input
          className="grow"
          placeholder="Credit Card"
          value={creditCard}
          onChange={(event) => setCreditCard(event.currentTarget.value)}
          data-test-id="checkout-credit-card"
          required
        />
      </label>

      <label
        className="input input-bordered flex items-center gap-2 mb-2"
        htmlFor="Expiration date"
      >
        Expiration date
        <input
          className="grow"
          placeholder="MM / YYYY"
          value={expirationDate}
          onChange={(event) => setExpirationDate(event.currentTarget.value)}
          data-test-id="checkout-expiration-date"
          required
        />
      </label>

      <label
        className="input input-bordered flex items-center gap-2 mb-2"
        htmlFor="Security code"
      >
        Security code
        <input
          className="grow"
          placeholder="Security code"
          value={securityCode}
          onChange={(event) => setSecurityCode(event.currentTarget.value)}
          data-test-id="checkout-security-code"
          required
        />
      </label>

      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
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
        data-test-id="checkout-confirm-order"
      >
        Complete Purchase
      </button>
    </>
  );
}
