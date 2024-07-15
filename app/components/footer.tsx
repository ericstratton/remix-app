import { useLocation } from '@remix-run/react';
import { cn } from '~/lib/utils';
import Typography from './typography';
import { pageConfig } from '~/lib/pageconfig';

function Footer() {
   const location = useLocation();

   const { bgClass } = pageConfig[location.pathname];

   return (
      <footer
         className={cn('p-4 border-x-4 border-t-4 border-bistre', bgClass)}
      >
         <Typography element="p" as="smallText">
            © {new Date().getFullYear()} Eric Stratton
         </Typography>
      </footer>
   );
}

export default Footer;
