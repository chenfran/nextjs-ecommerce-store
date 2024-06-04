'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ConfirmOrderButton() {
  const [order, setOrder] = useState('#123fee');

  const router = useRouter();

  return (
    <button
      style={{ backgroundColor: order }}
      onClick={() => {
        setOrder(`#${Math.floor(Math.random() * 16777215).toString(16)}`);

        router.refresh();
      }}
    >
      Confirm
    </button>
  );
}
