import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';

export const metadata = {
  title: 'Products',
};

export default function Products() {
  const products = getProducts();

  return (
    <div>
      All earrings
      {products.map((product) => {
        return (
          <div key={`products-${product.id}`}>
            <Link href={`products/${product.id}`}>
              <div>{product.subject}</div>
              <Image
                src={`/${product.subject.toLowerCase()}.webp`}
                alt="/"
                width={600}
                height={450}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
