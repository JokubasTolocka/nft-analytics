import Cookies from 'js-cookie';
import { useCallback, useEffect, useState } from 'react';

function useCookies<T>(cookieName: string, initialValue: T) {
  const getCookie = () => {
    const tokenJSON = Cookies.get(cookieName);

    if (!tokenJSON) {
      Cookies.set(cookieName, JSON.stringify(initialValue));
    }

    return tokenJSON ? JSON.parse(tokenJSON) : initialValue;
  };

  const [cookieValue, setCookieValue] = useState<T>(getCookie);

  const setCookie = (newValue: T) => {
    Cookies.set(cookieName, JSON.stringify(newValue));
    setCookieValue(newValue);

    window.dispatchEvent(new Event('cookies-changed'));
  };

  useEffect(() => {
    setCookieValue(getCookie);
  }, []);

  const handleCookiesChanged = useCallback(() => setCookieValue(getCookie()), [getCookie]);

  useEffect(() => {
    document.addEventListener('cookies-changed', handleCookiesChanged);

    return () => {
      document.removeEventListener('cookies-changed', handleCookiesChanged);
    };
  });

  return [cookieValue, setCookie];
}

export default useCookies;
