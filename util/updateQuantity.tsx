import { useState } from 'react';

export function UpdateQuantity() {
  const [quantity, setQuantity] = useState(1);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.currentTarget.value, 10);
    setQuantity(value);
  }

  return (
    <div>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        aria-label="quantity-input"
      />
    </div>
  );
}
