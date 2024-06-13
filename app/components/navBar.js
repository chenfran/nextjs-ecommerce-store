import Image from 'next/image';
import Link from 'next/link';
import styles from './navBar.module.scss';
import NavBarForm from './NavBarForm';

export default function NavBar() {
  return (
    <header className={styles.navBar}>
      <div className={styles.globalContainer}>
        <Link className={styles.brand} href="/">
          <Image src="/home.svg" alt="/" width={30} height={30} />
          <div className={styles.navLink}>HOME</div>
        </Link>

        <nav className={styles.navMenu}>
          <Link className={styles.wNavLink} href="/products">
            ALL PRODUCTS
          </Link>

          <Link className={styles.button} href="/shopping-cart">
            <Image src="/cart.svg" alt="/" width={30} height={30} />
            <NavBarForm />
          </Link>
        </nav>
      </div>
    </header>
  );
}
