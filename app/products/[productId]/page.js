import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductInsecure } from '../../../database/products';
import SetQuantityToCartForm from './SetQuantityToCartForm.tsx';

export async function generateMetadata(props) {
  const singleProduct = await getProductInsecure(
    Number(props.params.productId),
  );

  return {
    title: singleProduct?.name,
    description: 'Single Product Page',
  };
}

export default async function SingleProductPage(props) {
  const singleProduct = await getProductInsecure(
    Number(props.params.productId),
  );

  if (!singleProduct) {
    notFound();
  }

  return (
    <div className="pt-10 pb-20">
      <h1 className="text-5xl font-bold text-center mb-10">
        {singleProduct.name}
      </h1>

      <div className="flex justify-center">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <Image
              src={`/${singleProduct.name.toLowerCase()}.webp`}
              alt={singleProduct.name}
              width={500}
              height={500}
              data-test-id="product-image"
            />
          </figure>
          <div className="card-body flex flex-col">
            <h2 className="card-title text-5xl font-bold mb-4">
              Fuse Beads | {singleProduct.name} Earring
            </h2>
            <p>Embrace adorable charm with our {singleProduct.name} Earring.</p>
            <div className="flex justify-between items-center">
              <div className="text-5xl font-bold mr-4">
                <span data-test-id="product-price">{singleProduct.price}</span>
                <span>.00 EUR</span>
              </div>
              <div className="card-actions">
                <SetQuantityToCartForm productId={singleProduct.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
