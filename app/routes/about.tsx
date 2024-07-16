import type { MetaFunction } from '@remix-run/node';
import { Typography, Image } from '~/components';

import collatz from '~/images/collatz.jpg';
import climbing from '~/images/climbing.jpg';

export const meta: MetaFunction = () => {
   return [
      { title: "About Me" },
      { name: 'description', content: 'Just some stuff about me.' },
   ];
};

export default function About() {
   return (
      <div>
         <Typography className="mb-4" element="p" as="largeText">
            Welcome to my world! I am a creative with a deep passion for
            technology, art, and the endless wonder of our planet. My
            life&apos;s goal is to explore as much of the world as possible,
            immersing myself in new cultures, enjoy new foods, and explore
            landscapes that enrich my being and inspire my work. Travel fuels my
            creativity, allowing me to infuse a unique blend of insights and
            ideas into everything I do. Curiousity and the desire for
            exploration shape my professional interests, particularly in digital
            art and technology.
         </Typography>
         <Typography className="mb-4" element="p" as="largeText">
            Recently, I&apos;ve been delving into digital art by exploring 2D
            animation using both P5.js and Processing, drawing inspiration from
            Daniel Shiffman’s enlightening tutorials on The Coding Train YouTube
            channel. This journey introduced me to fascinating concepts such as
            Cellular Automata, the Collatz Conjecture, and others. It can be awe
            inspiring to see how defining a system with basic rules can give
            rise to intricate and compelling outcomes, particularly as they
            unfold into unforeseen patterns or transformations over time.
         </Typography>
         <Image
            src={collatz}
            alt="Collatz Conjecture visualization"
            description="Visualization of the Collatz Conjecture"
            className="mb-4"
         />
         <Typography className="mb-4" element="p" as="largeText">
            Away from the screen, I find rejuvenation in the great outdoors,
            indulging in my love for cooking, and getting lost in the pages of
            an engaging novel. Climbing is of particular importance to me and
            has evolved into more than just a hobby; it&apos;s a passion that
            has profoundly shaped my life. My climbing journey began a decade
            ago during my freshman year of university. Fast forward to the
            present, and while I&apos;m still finguring things out, climbing has
            taught me invaluable lessons. It&apos;s a delicate dance of
            combining grit, determination, and passion with composer, focus, and
            patience. This interplay of forces has the power to evoke a spectrum
            of emotions, from the highest highs to the lowest lows, teaching me
            resilience and balance along the way.
         </Typography>
         <Image
            src={climbing}
            alt="Person with climbing gear on the top of a tall rock formation overlooking a vast desert landscape"
            description="Top of Wherever I May Roam, Smith Rock State Park"
            className="mb-4"
         />
      </div>
   );
}
