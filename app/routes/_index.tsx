import { Typography } from '~/components';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
   return [
      { title: "Eric Stratton's Portfolio Site" },
      { name: 'description', content: 'Just some stuff about me.' },
   ];
};

export default function Index() {
   return (
      <div>
         <Typography className="mb-4" element="p" as="largeText">
            Hello! I am an enthusiastic software developer with three years of
            professional experience, steeped in a four-year-long journey of
            self-driven coding exploration. I bring expertise in JavaScript,
            TypeScript, and React for dynamic front-end experiences with robust
            foundational knowledge in the full-stack, using Node.js and Java.
         </Typography>
         <Typography className="mb-4" element="p" as="largeText">
            Designing beautiful interfaces and seamless user experiences gets me
            excited. I thrive on turning complex challenges into intuitive,
            user-friendly solutions. Whether I&apos;m focusing on the front end
            or diving deep into back-end logic, my commitment to quality and a
            keen eye for detail ensure that I deliver exceptional work every
            time.
         </Typography>
         <Typography className="mb-4" element="p" as="largeText">
            But my interests don&apos;t stop at coding! I&apos;m an avid
            technology enthusiast, always on the lookout for the next big thing
            and how I can integrate new discoveries into my work. Outside of the
            digital realm, I pursue a variety of hobbies that keep my creativity
            flowing and my skills sharp.
         </Typography>
         <Typography className="mb-4" element="p" as="largeText">
            I view challenges as opportunities to excel and grow. I&apos;m
            always excited to collaborate, learn, and grow. So, let&apos;s
            connect and create something extraordinary together!
         </Typography>
      </div>
   );
}
