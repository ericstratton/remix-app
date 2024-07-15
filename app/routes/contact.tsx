import { useEffect } from 'react';
import { Form, json, useActionData } from '@remix-run/react';
import { ActionFunctionArgs } from '@remix-run/node';
import {
   Typography,
   Button,
   Input,
   useToast,
   Card,
   CardHeader,
   CardContent,
   Email,
} from '~/components';
import { ErrorResponse, Resend } from 'resend';
import { MdSend } from 'react-icons/md';
import { renderToString } from 'react-dom/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export const action = async ({ request }: ActionFunctionArgs) => {
   const formData = await request.formData();
   const name = String(formData.get('name'));
   const email = String(formData.get('email'));

   const html = renderToString(<Email recipient={name} />);

   const { data, error } = await resend.emails.send({
      from: 'contact@ericstratton.info',
      to: [email],
      subject: 'Hello world',
      html,
   });

   if (error) {
      return json({ error }, 500);
   }

   return json({ ...data, sender: name }, 200);
};

type ActionError = { error: ErrorResponse };
type ActionSuccess = { sender: string; id?: string };

function processData(
   data: ActionError | ActionSuccess | undefined
): { title: string; description: string } | undefined {
   if (!data) {
      return;
   }
   if ('error' in data) {
      return {
         title: 'Uh oh! Something went wrong.',
         description: 'Please try again later.',
      };
   }
   if ('sender' in data) {
      return {
         title: 'Success!',
         description: `Thanks for reaching out, ${data.sender}.`,
      };
   }
}

export default function Contact() {
   const data = useActionData<typeof action>();
   const { toast } = useToast();

   useEffect(() => {
      const processed = processData(data);
      if (!processed) {
         return;
      }
      const { dismiss } = toast({
         title: processed.title,
         description: processed.description,
         duration: 5000,
      });
      return () => {
         dismiss();
      };
   }, [data, toast]);

   return (
      <div>
         <div>
            <Typography className="mb-4" element="p" as="largeText">
               Yeah, a contact form is a bit old school, but it&apos;s a fun and
               simple way to showcase my skills and to play with Remix actions.
               If you&apos;re interested in working together, have a question,
               or just want to say hi, feel free to reach out. I&apos;ll do my
               best to get back to you as soon as possible.
            </Typography>
         </div>
         <div>
            <Card className="sm:w-96 bg-zinc-100">
               <CardHeader>
                  <Typography element="p" as="lead">
                     Get in touch
                  </Typography>
               </CardHeader>
               <CardContent>
                  <Form method="post" className="flex flex-col">
                     <Input
                        className="mb-4"
                        type="text"
                        name="name"
                        placeholder="Name"
                     />
                     <Input
                        className="mb-4"
                        type="email"
                        name="email"
                        placeholder="Email"
                     />
                     <Button className="ml-auto" type="submit">
                        <MdSend className="mr-2" />
                        <Typography
                           element="span"
                           as="buttonText"
                           className="mr-1"
                        >
                           Send
                        </Typography>
                     </Button>
                  </Form>
               </CardContent>
            </Card>
         </div>
      </div>
   );
}
