import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <main>
        <div className={styles.imageContainer}>
          <Image
            src="/bonbon.webp"
            alt="bonbon earring"
            width={300}
            height={225}
          />
          <Image
            src="/chicken.webp"
            alt="chicken earring"
            width={300}
            height={225}
          />
          <Image src="/dino.webp" alt="dino earring" width={300} height={225} />
        </div>

        <div className={styles.moreProductsLink}>
          <Link href="/products">DISCOVER ALL EARRINGS ...</Link>
        </div>
        <div className={styles.community}>
          <h2>Join Our Community</h2>
          <div>
            Stay connected with us on social media for the latest designs,
            exclusive offers, and inspiration. <br /> Share your Iron Pearl
            Creations moments with us using <strong>#IronPearlCreations</strong>
            . Start your journey to elegant accessorizing today with Iron Pearl
            Creations.
          </div>
          <br />
          <div>
            Shop now and experience the beauty and resilience of iron pearls!
          </div>
        </div>
      </main>
    </div>
  );
}
