import {
   NavigationMenu,
   NavigationMenuList,
   NavigationMenuItem,
   NavigationMenuLink,
} from './ui/navigation-menu';
import Typography from './typography';
import { useLocation, useNavigate } from '@remix-run/react';
import { cn } from '~/lib/utils';

const navConfig: Record<string, string> = {
   '/about': 'bg-reseda_green-900',
   '/contact': 'bg-blush-900',
   '/': 'bg-khaki-900',
};

const ListItem = ({
   children,
   href,
}: {
   children: React.ReactNode;
   href: string;
}) => {
   const location = useLocation();
   const navigate = useNavigate();

   const isActive = location.pathname === href;

   const handleClick: React.MouseEventHandler<HTMLLIElement> = (event) => {
      event.preventDefault();
      navigate(href);
   };

   return (
      <NavigationMenuItem
         onClick={handleClick}
         className={cn(
            'w-full p-4 hover:bg-zinc-100 cursor-pointer transition-colors duration-200 ease-in-out',
            isActive ? navConfig[location.pathname] : 'bg-transparent'
         )}
      >
         <NavigationMenuLink
            className="pointer-events-none text-gray-700"
            href={href}
         >
            {children}
         </NavigationMenuLink>
      </NavigationMenuItem>
   );
};

const Navbar = () => (
   <NavigationMenu className="sm:pt-20 sm:w-20" orientation="vertical">
      <NavigationMenuList className="sm:flex-col items-start">
         <ListItem href="/">
            <Typography element="p" as="largeText">
               Home
            </Typography>
         </ListItem>
         <ListItem href="/about">
            <Typography element="p" as="largeText">
               About
            </Typography>
         </ListItem>
         <ListItem href="/contact">
            <Typography element="p" as="largeText">
               Contact
            </Typography>
         </ListItem>
      </NavigationMenuList>
   </NavigationMenu>
);

export default function NavRail() {
   return (
      <aside className="h-16 py-1 sm:h-screen sm:pr-2 sm:sticky top-0">
         <Navbar />
      </aside>
   );
}
