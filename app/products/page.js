import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';

export const metadata = {
  title: 'Products',
};

export default async function Products() {
  const products = await getProductsInsecure();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold p-10">FUSE BEADS | all products</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {products.map((product) => {
          return (
            <div
              className="card w-96 bg-base-100 shadow-xl overflow-hidden m-10"
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
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>{product.price} EUR</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline">Buy now</button>
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
