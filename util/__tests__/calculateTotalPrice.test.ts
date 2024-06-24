import { expect, test } from '@jest/globals';
import { calculateTotalPrice } from '../calculateTotalPrice';

test('calculates the total price of items in the shopping cart', () => {
  const shoppingCartWithItems = [
    { price: 10, quantity: 2 },
    { price: 10, quantity: 3 },
    { price: 10, quantity: 1 },
  ];
  expect(calculateTotalPrice(shoppingCartWithItems)).toBe('60.00');
});
