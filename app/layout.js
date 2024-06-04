import './globals.css';
import localFont from 'next/font/local';
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
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/checkout">Checkout</Link>
          <Link href="/products">Products</Link>
          <Link href="/shopping-cart">Shopping Basket</Link>
          <Link href="/thank-you">Thank you</Link>
        </nav>
        {Math.floor(Math.random() * 10)}

        {children}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section about">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ut libero ac erat placerat fermentum.
              </p>
            </div>
            <div className="footer-section links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section contact">
              <h3>Contact Us</h3>
              <p>Email: contact@example.com</p>
              <p>Phone: +1 234 567 890</p>
              <p>Address: 123 Street Name, City, Country</p>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; 2024 MyWebsite | Designed by YourName
          </div>
        </footer>
      </body>
    </html>
  );
}
