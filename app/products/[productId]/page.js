import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductInsecure } from '../../../database/products';
import { AddToCartButton } from './AddToCartButton';
import { HandleQuantity } from './HandleQuantityChange.js';

export async function generateMetadata(props) {
  const singleProduct = await getProductInsecure(
    Number(props.params.productId),
  );

  return {
    title: singleProduct?.name,
    description: 'Single Product Page',
  };
}

export default async function ProductPage(props) {
  const singleProduct = await getProductInsecure(
    Number(props.params.productId),
  );

  console.log(singleProduct);

  if (!singleProduct) {
    notFound();
  }

  return (
    <div>
      <h1>{singleProduct.name}</h1>
      <div>
        <div>
          <Image
            src={`/${singleProduct.name.toLowerCase()}.webp`}
            alt={singleProduct.name}
            width={500}
            height={500}
          />
        </div>
        <div>
          <h4>Iron Pearl {singleProduct.name} Earring</h4>
          <div>
            Embrace adorable charm with our Iron Pearl Panda Single Earring.
            This whimsical piece features a playful panda design crafted from
            premium iron pearls, exuding both cuteness and elegance. Perfect for
            adding a touch of personality to your look, whether you're heading
            to a casual outing or a fun-filled event. Elevate your style with
            the irresistible charm of our Panda Single Earring.
          </div>
          <br />
          <div>{singleProduct.price} EUR</div>
          <HandleQuantity />
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
}
