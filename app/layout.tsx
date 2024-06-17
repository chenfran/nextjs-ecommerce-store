import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Footer from './components/footer';
import NavBar from './components/navBar';

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
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
