'use client';

import { useState } from 'react';

export default function ConfirmOrderButton() {
  const [order, setOrder] = useState('#123fee');

  return (
    <button
      onClick={() => {
        setOrder(`${Math.floor(Math.random() * 16777215).toString(16)}`);
      }}
    >
      Confirm
    </button>
  );
}
