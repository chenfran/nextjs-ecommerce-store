import Image from 'next/image';
import Link from 'next/link';
import styles from './navBar.module.scss';
import NavBarForm from './NavBarForm';

export default function NavBar() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.container}>
        <nav className={styles.navContainer}>
          <Link className={styles.navLink} href="/">
            <Image src="/home.svg" alt="/" width={30} height={30} />
            {/* <div className={styles.navLink}>HOME</div> */}
          </Link>
          <Link
            className={styles.navLink}
            href="/products"
            data-test-id="products-link"
          >
            PRODUCTS
          </Link>

          <Link
            className={styles.navLink}
            href="/shopping-cart"
            data-test-id="cart-link"
          >
            <Image src="/cart.svg" alt="/" width={30} height={30} />
            <NavBarForm />
          </Link>
        </nav>
      </div>
    </header>
  );
}
