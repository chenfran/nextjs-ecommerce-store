import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';

export const metadata = {
  title: 'Products',
};

export default async function Products() {
  const products = await getProductsInsecure();

  // // Fruit example START
  // const fruitsCommentsCookie = cookies().get('fruitComments');
  // const fruitComments = JSON.parse(fruitsCommentsCookie.value);

  // const fruitsWithComments = products.map((product) => {
  //   const matchingWithFruitFromCookie = fruitComments.find(
  //     (fruitObject) => product.id === fruitObject.id,
  //   );
  //   return { ...product, comment: matchingWithFruitFromCookie?.comment };
  // });
  // console.log(fruitsWithComments);
  // // Fruit example END

  return (
    <div>
      <h1>All Products</h1>
      {products.map((product) => {
        return (
          <div key={`product-${product.id}`}>
            <Link href={`/products/${product.id}`}>
              <h3>{product.name}</h3>
              <Image
                src={`/${product.name.toLowerCase()}.webp`}
                alt="/"
                width={250}
                height={250}
              />
              <div>{product.price} EUR</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
