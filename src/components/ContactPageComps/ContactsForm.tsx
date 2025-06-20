"use client";

import { contactSchema } from "@/lib/schema";
import { ContactSchemaType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import HeadingComps from "../HeadingComps";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactsForm = () => {
  const contactForm = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "all",
  });

  const handleSubmit = (fData: ContactSchemaType) => {
    console.log(fData);
  };

  return (
    <div className="space-y-10">
      <HeadingComps className="text-2xl lg:text-4xl">
        We&apos;re Ready, Let&apos;s Talk.
      </HeadingComps>

      <Form {...contactForm}>
        <form className="space-y-3">
          <FormField
            control={contactForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your Full Name"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={contactForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your Email"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={contactForm.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here."
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            onClick={contactForm.handleSubmit(handleSubmit)}
            className="bg-primary-crimson hover:bg-primary-crimson-hover font-noto-sans rounded-4xl px-16">
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactsForm;
