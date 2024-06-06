import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';
import styles from './page.module.scss';

export function generateMetadata(props) {
  const singleProduct = getProduct(Number(props.params.productId));

  return {
    title: singleProduct?.subject,
    description: 'Single Product Page',
  };
}

export default function ProductPage(props) {
  const singleProduct = getProduct(Number(props.params.productId));

  if (!singleProduct) {
    notFound();
  }

  return (
    <div>
      <h1>{singleProduct.subject}</h1>
      <div className={styles.row}>
        <div className={styles.column}>
          <Image
            src={`/${singleProduct.subject.toLowerCase()}.webp`}
            alt={singleProduct.subject}
            width={600}
            height={450}
          />
        </div>
        <div className={styles.columnRight}>
          Lorem ipsum text and so on {singleProduct.subject}
        </div>
      </div>
    </div>
  );
}
