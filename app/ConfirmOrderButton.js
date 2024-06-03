import { useState } from 'react';

export default function ConfirmOrderButton() {
  const [order, setOrder] = useState('');

  return <button onClick="/">Confirm order</button>;
}
