import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';

export const metadata = {
  title: 'Products',
};

export default async function Products() {
  const products = await getProductsInsecure();

  return (
    <div className="hero-overlay bg-opacity-60">
      <h1 className="text-5xl font-bold p-4">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          return (
            <div
              className="card w-96 bg-amber-200 shadow-xl mx-4 overflow-hidden"
              key={`product-${product.id}`}
            >
              <Link
                href={`/products/${product.id}`}
                data-test-id="product-product.id"
              >
                <figure>
                  <Image
                    src={`/${product.name.toLowerCase()}.webp`}
                    alt="/"
                    width={400}
                    height={400}
                  />
                </figure>
                <div className="card-body p-4">
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <div className="text-lg mb-2">{product.price} EUR</div>
                  <div className="text-sm text-gray-500">
                    {product.quantities}
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
