import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <Image src="/home.svg" alt="/" width={30} height={30} />
      </Link>
      <Link href="/shopping-cart">
        <Image src="/basket.svg" alt="/" width={30} height={30} />
        <span>{Math.floor(Math.random() * 10)}</span>
      </Link>
    </nav>
  );
}
