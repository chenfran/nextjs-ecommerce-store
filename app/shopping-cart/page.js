import Image from 'next/image';
import styles from './page.module.scss';

export const metadata = {
  title: 'Shopping Cart',
};

export default function ShoppingCart() {
  return (
    <div>
      <div className={styles.cartPage}>
        <h1>Your Shopping Cart</h1>
        <div className={styles.cartContainer}>
          <div className={styles.cartItems}>
            <div className={styles.cartItem}>
              <Image src="/dino.webp" alt="Product 1" width={100} height={75} />
              <div className={styles.itemDetails}>
                <h2>Product Name</h2>
                <p>Price: $50</p>
                <label htmlFor="quantity1">Quantity:</label>
                <input
                  type="number"
                  value="1"
                  id="quantity1"
                  name="quantity1"
                  min="1"
                />
              </div>
              <button className={styles.removeItemButton}>Remove</button>
            </div>
          </div>
          <div className={styles.cartSummary}>
            <h2>Order Summary</h2>
            <ul>
              <li>Subtotal: $100</li>
              <li>Shipping: $10</li>
              <li>Total: $110</li>
            </ul>
            <button className={styles.checkoutButton}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
