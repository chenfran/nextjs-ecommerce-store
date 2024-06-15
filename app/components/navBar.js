import Image from 'next/image';
import Link from 'next/link';
import NavBarForm from './NavBarForm';

export default function NavBar() {
  return (
    <header>
      <div>
        <nav>
          <Link href="/">
            <Image src="/home.svg" alt="/" width={30} height={30} />
            {/* <div className={styles.navLink}>HOME</div> */}
          </Link>
          <Link href="/products" data-test-id="products-link">
            PRODUCTS
          </Link>

          <Link href="/shopping-cart" data-test-id="cart-link">
            <Image src="/cart.svg" alt="/" width={30} height={30} />
            <NavBarForm />
          </Link>
        </nav>
      </div>
    </header>
  );
}
