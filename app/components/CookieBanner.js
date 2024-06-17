'use client';

import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../../util/localStorage';

export default function CookieBanner() {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);

  useEffect(() => {
    const localStorageValue = getLocalStorage('cookiePolicy');

    if (localStorageValue) {
      setAreCookiesAccepted(localStorageValue);
    } else {
      setAreCookiesAccepted(false);
    }
  }, []);

  return (
    <div>
      <div>Do you accept the use of Cookies?</div>
      <button
        onClick={() => {
          setAreCookiesAccepted(true);
          setLocalStorage('cookiePolicy', JSON.stringify(true));
        }}
      >
        Accept
      </button>
    </div>
  );
}

{
  /* <div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Cookies!</h2>
    <p>We are using cookies for no reason.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Accept</button>
      <button className="btn btn-ghost">Deny</button>
    </div>
  </div>
</div>; */
}
