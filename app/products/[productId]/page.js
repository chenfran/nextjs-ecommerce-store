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
    <div className={styles.productPage}>
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
          <h4>Iron Pearl {singleProduct.subject} Earring</h4>
          <div>
            Embrace adorable charm with our Iron Pearl Panda Single Earring.
            This whimsical piece features a playful panda design crafted from
            premium iron pearls, exuding both cuteness and elegance. Perfect for
            adding a touch of personality to your look, whether you're heading
            to a casual outing or a fun-filled event. Elevate your style with
            the irresistible charm of our Panda Single Earring.
          </div>
          <br />
          <div className={styles.priceTag}>
            {singleProduct.price}0 {singleProduct.valuta}
          </div>
          <br />
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
