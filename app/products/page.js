import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';

export const metadata = {
  title: 'Products',
};

export default async function Products() {
  const products = await getProductsInsecure();

  return (
    <div>
      <h1>All Products</h1>
      <div>
        {products.map((product) => {
          return (
            <div key={`product-${product.id}`}>
              <Link
                href={`/products/${product.id}`}
                data-test-id="product-product.id"
              >
                <Image
                  src={`/${product.name.toLowerCase()}.webp`}
                  alt="/"
                  width={250}
                  height={250}
                />
                <h3>{product.name}</h3>

                <div>{product.price} EUR</div>
                <div>{product.quantities}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
