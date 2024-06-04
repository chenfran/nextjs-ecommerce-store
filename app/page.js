import Image from 'next/image';
import allProducts from '../public/product-overview.webp';
import ConfirmOrderButton from './ConfirmOrderButton';

export default function Home() {
  return (
    <div>
      <ConfirmOrderButton />
      <main>
        <Image src={allProducts} alt="All products" priority />
        <h1>Why Choose Iron Pearl Creations?</h1>
        <ol>
          <li>
            Unique Designs: Our earrings are designed to stand out, offering you
            a blend of classic elegance and contemporary style.
          </li>
          <li>
            Quality Craftsmanship: We take pride in our attention to detail and
            commitment to quality. Each pair of earrings is handcrafted with
            precision and care.
          </li>
          <li>
            Durable and Hypoallergenic: Made from high-quality iron pearls, our
            earrings are built to last and are gentle on sensitive skin.
          </li>
          <li>
            Perfect for Any Occasion: Whether you're dressing up for a special
            event or looking for an everyday accessory, our iron pearl earrings
            add a touch of sophistication to any outfit.
          </li>
        </ol>
        <div>
          Explore our diverse range of styles, from minimalist studs to
          intricate dangles, and find the perfect pair that reflects your unique
          taste. At Iron Pearl Creations, we believe that jewelry should not
          only complement your look but also tell your story.
        </div>
        <h2>Join Our Community</h2>
        <div>
          Stay connected with us on social media for the latest designs,
          exclusive offers, and inspiration. Share your Iron Pearl Creations
          moments with us using #IronPearlCreations. Start your journey to
          elegant accessorizing today with Iron Pearl Creations. Shop now and
          experience the beauty and resilience of iron pearls!
        </div>
      </main>
    </div>
  );
}
