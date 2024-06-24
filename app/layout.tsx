import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';
import CookieBanner from './components/CookieBanner';
import Footer from './components/footer';
import NavBarForm from './components/NavBarForm';

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

export const metadata: Metadata = {
  title: {
    default: 'Home | Iron Pearl Creations',
    template: '%s | Iron Pearl Creations',
  },
  description:
    'Welcome to Iron Pearl Creations! Discover the elegance and uniqueness of our handcrafted iron pearl earrings. At Iron Pearl Creations, we specialize in bringing you exquisite, one-of-a-kind earrings made from premium iron pearls. Each piece in our collection is meticulously crafted to ensure the perfect blend of durability and beauty.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow">
            <header className="navbar bg-neutral-50 text-gray-800 p-5">
              <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                  HOME
                </Link>
              </div>
              <div className="flex-none">
                <Link
                  data-test-id="products-link"
                  href="/products"
                  className="btn btn-ghost text-xl"
                >
                  ALL PRODUCTS
                </Link>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">
                        <NavBarForm />
                      </span>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    role="button"
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">
                        <NavBarForm /> Items
                      </span>
                      <div className="card-actions">
                        <Link
                          data-test-id="cart-link"
                          href="/shopping-cart"
                          className="btn btn-primary btn-block"
                        >
                          View cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {children}
            <Footer />
            <CookieBanner />
          </div>
        </div>
      </body>
    </html>
  );
}
