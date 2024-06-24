// A code from ChatGPT - really do not know what it does here but also could not figure out how to test this function

import { expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { UpdateQuantity } from '../updateQuantity';

test('updates the quantity state when input changes', () => {
  render(<UpdateQuantity />);
  const input = screen.getByLabelText('quantity-input');

  fireEvent.change(screen.getByLabelText('quantity-input'), {
    target: { value: '5' },
  });
  expect((input as HTMLInputElement).value).toBe('5');
});
