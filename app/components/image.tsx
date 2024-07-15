import { useState } from 'react';
import { cn } from '~/lib/utils';

function Image({
   src,
   alt,
   description,
   className = '',
}: {
   src: string;
   alt: string;
   description?: string;
   className?: string;
}) {
   const [error, setError] = useState(false);

   return (
      <div
         className={cn(
            'bg-zinc-100 overflow-hidden p-4 rounded-md',
            className
         )}
      >
         {!error ? (
            <img
               src={src}
               alt={alt}
               className="object-cover aspect-auto mx-auto"
               onError={() => setError(true)}
            />
         ) : (
            <div className="flex justify-center items-center h-full">
               <span className="text-gray-500 text-sm">
                  Image not available
               </span>
            </div>
         )}
         {description && (
            <span className="text-xs text-gray-500 block mt-2 text-right bg-transparent">
               {description}
            </span>
         )}
      </div>
   );
}

export default Image;
