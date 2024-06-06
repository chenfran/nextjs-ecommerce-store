import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products',
};

export default function Products() {
  const products = getProducts();

  return (
    <div className={styles.productPage}>
      <h1>All earrings</h1>
      <div className={styles.imageContainer}>
        {products.map((product) => {
          return (
            <div key={`products-${product.id}`}>
              <Link
                className={styles.imageLink}
                href={`products/${product.id}`}
              >
                <Image
                  src={`/${product.subject.toLowerCase()}.webp`}
                  alt="/"
                  width={300}
                  height={225}
                />
                <div className={styles.textContainer}>
                  <span className={styles.imageTitle}>{product.subject}</span>
                  <span className={styles.imagePrice}>
                    {product.price} {product.valuta}
                  </span>
                </div>
              </Link>
              <button className={styles.addToCartButton}>Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
