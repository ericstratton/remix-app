import { useCallback, useEffect, useState } from 'react';

declare global {
   interface Window {
      grecaptcha: {
         ready: (callback: () => void) => void;
         execute: (
            siteKey: string,
            options: { action: string }
         ) => Promise<string>;
      };
      ENV: {
         SITE_PUBLIC_KEY: string;
      };
   }
}

const useRecaptcha = () => {
   const [ready, setReady] = useState(false);

   useEffect(() => {
      if (window.grecaptcha && window.grecaptcha.ready) {
         window.grecaptcha.ready(() => {
            setReady(true);
         });
      } else {
         const checkRecaptchaReady = setInterval(() => {
            if (window.grecaptcha && window.grecaptcha.ready) {
               window.grecaptcha.ready(() => {
                  setReady(true);
                  clearInterval(checkRecaptchaReady);
               });
            }
         }, 100);
      }
   }, []);

   const getToken = useCallback(
      async (action = 'submit') => {
         if (!ready) {
            throw new Error('Recaptcha is not ready');
         }

         const siteKey = window.ENV.SITE_PUBLIC_KEY;
         try {
            const token = await window.grecaptcha.execute(siteKey, { action });
            return token;
         } catch (error) {
            console.error('Error executing reCAPTCHA', error);
            throw error;
         }
      },
      [ready]
   );

   return { ready, getToken };
};

export default useRecaptcha;
