import { expect, test } from '@jest/globals';
import { add } from '../math';

test('adds two numbers', () => {
  expect(add(1, 2)).toBe(3);
});
