import './globals.scss';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: {
    default: 'Home | Iron Pearl Creations',
    template: '%s | Iron Pearl Creations',
  },
  description:
    'Welcome to Iron Pearl Creations! Discover the elegance and uniqueness of our handcrafted iron pearl earrings. At Iron Pearl Creations, we specialize in bringing you exquisite, one-of-a-kind earrings made from premium iron pearls. Each piece in our collection is meticulously crafted to ensure the perfect blend of durability and beauty.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav>
          <Link href="/">
            <Image src="/home.svg" alt="/" width={30} height={30} />
          </Link>
          <Link href="/shopping-cart">
            <Image src="/basket.svg" alt="/" width={30} height={30} />{' '}
            {Math.floor(Math.random() * 10)}
          </Link>
        </nav>

        {children}
        <footer>Created by Franziska Chen, Vienna 2024</footer>
      </body>
    </html>
  );
}
