import { useLocation } from '@remix-run/react';
import Typography from './typography';
import { cn } from '~/lib/utils';
import { pageConfig } from '~/lib/pageconfig';
import { AnimatePresence, motion } from 'framer-motion';

function AnimatedText({ children }: { children: React.ReactNode }) {
   return (
      <AnimatePresence mode="wait" initial={false}>
         <motion.span
            key={children?.toString()}
            initial={{ x: '2%', opacity: 0 }}
            animate={{ x: '0', opacity: 1 }}
            exit={{ x: '-2%', opacity: 0 }}
         >
            {children}
         </motion.span>
      </AnimatePresence>
   );
}

function Header() {
   const location = useLocation();

   const { headerText, bgClass } = pageConfig[location.pathname];

   return (
      <header
         className={cn(
            'w-full p-4 border-x-4 border-y-4 sm:border-y-0 sm:border-b-4 border-bistre',
            bgClass
         )}
      >
         <Typography element="h1" as="h1">
            <AnimatedText>{headerText}</AnimatedText>
         </Typography>
      </header>
   );
}

export default Header;
