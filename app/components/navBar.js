import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      Nav-Bar:
      <ul>
        <li>
          <Link href="/">
            <Image src="/home.svg" alt="/" width={30} height={30} />
          </Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/checkout">Checkout</Link>
        </li>
        <li>
          <Link href="/thank-you">Thank you</Link>
        </li>
        <li>
          <Link href="/shopping-cart">
            <Image src="/basket.svg" alt="/" width={30} height={30} />
            <span>{Math.floor(Math.random() * 10)}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}