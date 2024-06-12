import { cookies } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductInsecure } from '../../../database/products';
import AddToCartButton from '../../components/AddToCartButton';
import HandleQuantityChange from '../../components/AddToCartComponent';
import FruitCommentForm from './FruitCommentPage';

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

  // Fruit example START
  // const shoppingCartCookie = cookies().get('shoppingCart');
  // // ?.value;
  // console.log('SHOPPINGCARTCOOKIE', shoppingCartCookie);

  // const shoppingCart = JSON.parse(shoppingCartCookie);
  // const shoppingCartItemToDisplay = shoppingCart.find((item) => {
  //   return item.id === singleProduct.id;
  // });
  // Fruit example END

  return (
    <div>
      <h1>{singleProduct.name}</h1>

      {/* Fruit example START */}
      <h2>Fruit Example</h2>
      {/* <div>{shoppingCartItemToDisplay?.comment}</div> */}
      {/* <FruitCommentForm fruitId={singleProduct.id} /> */}
      {/* Fruit example END */}

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
          {/* <HandleQuantityChange product={singleProduct} /> */}
          <AddToCartButton product={singleProduct} />
        </div>
      </div>
    </div>
  );
}
