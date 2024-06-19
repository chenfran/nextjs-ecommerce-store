'use client';

import { useEffect, useState } from 'react';
import { parseJson } from '../../util/json';
import { getLocalStorage, setLocalStorage } from '../../util/localStorage';

export default function CookieBanner() {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);

  useEffect(() => {
    const localStorageValue = getLocalStorage('cookiePolicy');

    if (localStorageValue) {
      setAreCookiesAccepted(parseJson(localStorageValue));
    } else {
      setAreCookiesAccepted(false);
    }
  }, []);

  return (
    <div
      className={`fixed bottom-0 right-0 m-4 transition-transform duration-300 ${areCookiesAccepted ? 'translate-x-full opacity-0 pointer-events-none' : 'translate-x-0'}`}
    >
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Cookies!</h2>
          <p>Do you accept the use of Cookies?</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                setAreCookiesAccepted(true);
                setLocalStorage('cookiePolicy', JSON.stringify(true));
              }}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
