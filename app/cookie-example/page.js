import { cookies } from 'next/headers';
import SetCookieForm from './SetCookieForm';

export default function SetCookiePage() {
  const testCookieValue = cookies().get('testCookie');
  return (
    <>
      <div>Cookie Value: {testCookieValue.value}</div>
      <SetCookieForm />
    </>
  );
}
