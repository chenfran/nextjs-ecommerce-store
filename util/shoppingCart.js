import { cookies } from 'next/headers';
import { getProductsInsecure } from '../database/products';

export async function UsersShoppingCart() {
  const products = await getProductsInsecure();
  const shoppingCartCookies = cookies().get('shoppingCart');
}
