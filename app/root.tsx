import {
   json,
   Links,
   Meta,
   Scripts,
   ScrollRestoration,
   useLoaderData,
   useLocation,
   useOutlet,
} from '@remix-run/react';
import './tailwind.css';
import { Footer, Header, NavRail, Toaster } from '~/components';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <head>
            <meta charSet="utf-8" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <Meta />
            <Links />
         </head>
         <body>
            {children}
            <ScrollRestoration />
            <Scripts />
         </body>
      </html>
   );
}

export const loader = () => {
   const siteKey = process.env.RECAPTCHA_SITE_KEY;

   return json({ siteKey });
};

export default function App() {
   const location = useLocation();
   const outlet = useOutlet();
   const { siteKey } = useLoaderData<typeof loader>();

   useEffect(() => {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      document.head.appendChild(script);
      return () => {
         document.head.removeChild(script);
      };
   }, [siteKey]);

   return (
      <div className="mx-auto px-4 w-full max-w-lg sm:max-w-xl md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
         <div className="flex flex-col sm:flex-row justify-center relative xl:-left-20">
            <NavRail />
            <div className="min-h-screen w-full flex flex-col sm:justify-between">
               <Header />
               <main className="p-4 h-full border-x-4 border-bistre">
                  <AnimatePresence mode="wait" initial={false}>
                     <motion.div
                        key={location.pathname}
                        initial={{ x: '2%', opacity: 0 }}
                        animate={{ x: '0', opacity: 1 }}
                        exit={{ x: '-2%', opacity: 0 }}
                     >
                        {outlet}
                     </motion.div>
                  </AnimatePresence>
               </main>
               <Footer />
            </div>
            <Toaster />
         </div>
      </div>
   );
}
