import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductInsecure } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json.ts';
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

  const shoppingCartCookies = getCookie('cart');
  const shoppingCartCookieParse = !shoppingCartCookies
    ? []
    : parseJson(shoppingCartCookies);

  const shoppingCartToDisplay = shoppingCartCookieParse.find((cookie) => {
    return cookie.id === singleProduct.id;
  });

  return (
    <div>
      <h1 className="text-5xl font-bold text-pink-500 m-3">
        {singleProduct.name}
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Image
            src={`/${singleProduct.name.toLowerCase()}.webp`}
            alt={singleProduct.name}
            width={500}
            height={500}
            data-test-id="product-image"
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
          <div data-test-id="product-price">{singleProduct.price}</div>
          <span> EUR</span>
          <SetQuantityToCartForm productId={singleProduct.id} />
          <div>{shoppingCartToDisplay?.quantity}</div>
        </div>
      </div>

      <div className="stats bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-title">Account balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">Add funds</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Current balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm">Withdrawal</button>
            <button className="btn btn-sm">Deposit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
